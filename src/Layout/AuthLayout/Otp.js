import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import "./otp.scss";
import login from "../../Images/navbar/login.png";
import ReactInputVerificationCode from "react-input-verification-code";
// import { CgSpinner } from "@react-icons/all-files/cg";
import { CgSpinner } from 'react-icons/cg';

const OtpVerify = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  const signinToLogin = () => navigate("/login");

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform verification logic with the entered OTP
  };

  return (
    <>
      <div className="otp_section my-5">
        <div className="mx-5">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="box">
                <img src={login} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="contact_number">
                <h5>We just texted you!</h5>
                <p>
                  Please enter the code we just sent you at <br />
                  <span>+966987654321</span>
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="common mt-4 ms-3">
                    <ReactInputVerificationCode length={4} />
                  </div>
                  <div className="button mt-4">
                    <Button type="submit">  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )} Verify</Button>
                  </div>
                </form>
                <div className="otp_resend mt-4">
                  <p>
                    Did not receive OTP? &nbsp;
                    <span>
                      {timer === 0 ? "Resend" : `Resend in ${timer}s`}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpVerify;
