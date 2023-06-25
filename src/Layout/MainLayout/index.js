import React from "react";
import classes from "./index.module.scss";
import Sidebar from "../../Components/sidebar";


const MainLayout = ({ children }) => {
  return (
    <div className={classes.wrapper}>
      <main className={classes.mainBox}>
          <Sidebar />
          <div className={classes.mainContainer}>
              {children}
          </div>
      </main>
    </div>
  );
};

export default MainLayout;
