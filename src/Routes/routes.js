import NotFound from "Pages/NotFound/loadable";
import MainLayout from "Layout/MainLayout";
import Support from "Pages/Support";
import Home from "Pages/Home";
import SignIn from "Layout/AuthLayout/SignIn";


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
