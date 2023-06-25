import {React} from "react";
import classes from "./index.module.scss";
import {Link} from "react-router-dom";
import { Button } from "react-bootstrap";
// import logoImg from "../../Images/logo.svg"


const Logo = (props) =>{
    return(
        <div className={classes.logo}>
            {/* <Link to={"/"}> */}
             <Button>English</Button>
            {/* </Link> */}
        </div>   
    )
}

export default Logo;