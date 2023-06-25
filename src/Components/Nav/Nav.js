import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
import "./nav.scss";

const navMenu = [
  { to: "/home", iconClass: "icon icon-dashboard", label: "Dashboard" },
  { to: "/profile", iconClass: "icon fa fa-user", label: "Profile" },
  { to: "/inventory", iconClass: "icon fa fa-mars-double", label: "Inventory" },
  {
    to: "/purchase",
    iconClass: "icon fa fa-shopping-cart",
    label: "Purchase Requests",
  },
  { to: "/item", iconClass: "icon fa fa-retweet", label: "Item Requests" },
  { to: "/meetings", iconClass: "icon fa fa-user-plus", label: "Meetings" },
  { to: "/support", iconClass: "icon fa fa-commenting", label: "Messages" },
  { to: "/user", iconClass: "icon fa fa-user", label: "Users" },
  { to: "/setting", iconClass: "icon fa fa-cog", label: "Settings" },
];

const Nav = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("/home");

  const changeActiveLink = (to) => {
    setActiveLink(to);
  };

  const logout = () => {
    navigate("/");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem("token");

    // If token is not present or expired
    if (!token) {
      // Redirect the user to the login page
      navigate("/");
    }
  }, []);

  return (
    <nav>
      <ul className="mt-2 p-3">
        {navMenu?.map(({ to, iconClass, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={activeLink === to ? "active" : ""}
              onClick={() => changeActiveLink(to)}
            >
              <i className={iconClass} aria-hidden="true"></i> {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="logout" style={{ marginTop: "72px" }}>
        <Button onClick={logout}>Logout</Button>
      </div>
    </nav>
  );
};

export default Nav;
