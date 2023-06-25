import React, { useState } from "react";
import { Form, InputGroup, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./index.module.scss";
import notification from "../../Images/navbar/Group 48095580.png";
import message from "../../Images/navbar/Chat.png";
import search from "../../Images/navbar/Search.png";
import profile from "../../Images/navbar/Ellipse 34.png";

const Header = (props) => {

  return (
    <div className={classes.pageTitle}>
      <header id={classes.header}>
    
        <div className={classes.headerRight}>
          <h5>Hi Ali!!</h5>
        </div>
        <div className={classes.headerRight}>
          <div className="d-flex">
            <div className={classes.headerIcon}>
              <img
                src={profile}
                id="dropdown-basic"
                className={classes.avator}
                width="100"
                alt=""
              />
            </div>
            <div className="ms-4">
              <img
                src={notification}
                className={classes.notification}
                width="100"
                alt=""
              />
            </div>
            <div>
              <img
                src={message}
                className={classes.message}
                width="100"
                alt=""
              />
            </div>
            <div>
              <img
                src={search}
                className={classes.message}
                width="100"
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
