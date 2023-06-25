import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./signIn.scss";
// import "./otp.scss";
import login from "../../Images/navbar/login.png";
import { CgSpinner } from "react-icons/cg";
import ReactInputVerificationCode from "react-input-verification-code";
import { auth } from "../../Firebase/firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const SignIn = ({ children }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let countdownTimer;
    if (timer > 0 && showOTP) {
      countdownTimer = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(countdownTimer);
    }

    return () => {
      clearInterval(countdownTimer);
    };
  }, [timer, showOTP]);

  const validatePhoneNumber = () => {
    // Validate phone number format here, e.g., using regular expressions
    const phoneNumberRegex = /^[+]?[0-9]{8,15}$/;
    if (!phoneNumberRegex.test(ph)) {
      toast.error("Please enter a valid phone number.");
      return false;
    }
    return true;
  };

  const validateOTP = () => {
    if (otp.length !== 6) {
      toast.error("Please enter a valid OTP.");
      return false;
    }
    return true;
  };

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    if (!validatePhoneNumber()) {
      return;
    }

    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("confirmationResult:", confirmationResult);
        setLoading(false);
        setShowOTP(true);
        setTimer(30); // Reset the timer when OTP is sent
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        const errorCode = error.code;
        if (errorCode === "auth/invalid-phone-number") {
          toast.error("Invalid phone number. Please enter a valid number.");
        } else {
          toast.error(`Firebase Error: ${error.message}`);
        }
      });
  }

  function onOTPVerify() {
    if (!validateOTP()) {
      return;
    }

    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log("resOtp", res);
        navigate("/home");
        setUser(res.user);
        setLoading(false);
        // Save the token in localStorage
        localStorage.setItem("token", res.user.accessToken);
        toast.success("OTP verification successful!");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error("Invalid OTP. Please try again.");
      });
  }

  return (
    <>
      <div className="SignIn_section otp_section my-5">
        <div className="mx-5">
          <Toaster toastOptions={{ duration: 4000 }} />
          <div id="recaptcha-container"></div>
          <div className="row">
            <div className="col-lg-7 col-12">
              <div className="box">
                <img src={login} alt="" />
              </div>
            </div>
            {!showOTP ? (
              <div className="col-lg-5 col-12">
                <div className="contact_number">
                  <h5>Enter your phone number</h5>
                  <div className="common mt-4">
                    <PhoneInput country={"pk"} value={ph} onChange={setPh} />

                    <div className="button mt-4 ">
                      <Button onClick={onSignup}>
                        {loading && (
                          <CgSpinner size={20} className=" animate-spin" />
                        )}
                        Sign In
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-lg-5 col-12">
                <div className="contact_number" style={{marginTop:'-50px'}}>
                  <h5>We just texted you!</h5>
                  <p>
                    Please enter the code we just sent you at <br />
                    <span>{ph}</span>
                  </p>
                  <div className="common mt-5 ms-1">
                    <ReactInputVerificationCode
                      value={otp}
                      onChange={setOtp}
                      length={6}
                    />
                  </div>
                  <div className="button mt-4">
                    <Button type="submit" onClick={onOTPVerify}>
                      {loading && (
                        <CgSpinner size={20} className=" animate-spin" />
                      )}
                      Verify
                    </Button>
                  </div>
                  <div className="otp_resend mt-4">
                    <p>
                      Did not receive OTP? &nbsp;
                      {timer === 0 ? (
                        <span onClick={onSignup} style={{cursor:'pointer'}}>Resend</span>
                      ) : (
                        <span>Resend in {timer}s</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
