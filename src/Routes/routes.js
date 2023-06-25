import NotFound from "Pages/NotFound/loadable";
import MainLayout from "Layout/MainLayout";
import Support from "Pages/Support";
// import Login from "Layout/AuthLayout/login";
import Home from "Pages/Home";
import Splash from "Layout/AuthLayout/SignIn";
// import AuthLayout from "Layout/AuthLayout";
import SignIn from "Layout/AuthLayout/SignIn";
import OtpVerify from "Layout/AuthLayout/Otp";
// import AuthLayout from "Layout/AuthLayout/Splash";

const routes = [
  // {
  //   path: "/",
  //   layout: AuthLayout,
  //   component: Splash
  // },
  {
    path: "/",
    layout: SignIn,
    component: SignIn
  },
  {
    path: "/otpVerify",
    layout: OtpVerify,
    component: OtpVerify
  },

  {
    path: "/home",
    layout: MainLayout,
    component: Home
  },
  
  {
    path: "/support",
    layout: MainLayout,
    component: Support
  },

  { path: "*", component: NotFound, layout: MainLayout },
];
export default routes;
