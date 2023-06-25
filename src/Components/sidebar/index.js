import React from "react";
import classes from "./index.module.scss";
import Nav from "Components/Nav/Nav";
import Logo from "Components/Logo";

const Sidebar = () => {
    return (
        <>
            <aside className={classes.sidebar}>
                <Logo />
                <Nav />
            </aside>
        </>
    )
}

export default Sidebar;