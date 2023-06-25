import React from 'react'
import user1 from "Images/profile1.svg";
import user2 from "Images/profile2.svg";
import user3 from "Images/profile3.svg";
import user4 from "Images/profile4.svg";
import classes from "./index.module.scss";
import { Link } from 'react-router-dom';

const SupportSideBar = () => {
  return (
    <div className={classes.messageListSidebar}>
        <h5 className="mx-3 mt-4">Messages</h5>
      <input type="search" className="form-control" placeholder='search for message...'  />
      <h4 className='mt-3 mx-3' style={{color:'#1A1A1A'}}>Active</h4>
      <ul>
        <li className={classes.active}>
       
          <div className={classes.userImg}>
            <img src={user1} alt="username" />
          </div>
          <div className={classes.description}>
            <h6>John Kristen</h6>
            <p>Hellow, how are you?</p>
           
          </div>
          <div className={classes.description_online}>
          <span>5 mins ago</span>
            <div className={classes.notification}>1</div>
          </div>
        </li>

        <li>
          <div className={classes.userImg}>
            <img src={user2} alt="username" />
          </div>
          <div className={classes.description}>
            <h6>Rayan Artecona</h6>
            <p>what time was our meeti...</p>

          </div>
          <div className={classes.description_online}>
          <span>2 mins ago</span>
            <div className={classes.notification}>2</div>
          </div>
        </li>
        <li>
          <div className={classes.userImg}>
            <img src={user3} alt="username" />
          </div>
          <div className={classes.description}>
            <h6>Mark Chen</h6>
            <p>The truth is I haven’t much...</p>
          </div>
          <div className={classes.description_online}>
          <span>52 mins ago</span>
            <div className={classes.notification}>10</div>
          </div>
        </li>
        <li>
          <div className={classes.userImg}>
            <img src={user4} alt="username" />
          </div>
          <div className={classes.description}>
            <h6>Bryan Jacobs</h6>
            <p>I am trying to create an...</p>
          </div>
          <div className={classes.description_online}>
          <span>10 mins ago</span>
            <div className={classes.notification}>4</div>
          </div>
        </li>
        <Link to='' className= {classes.btn_more} type="button">
      <i class="fal fa-plus"></i>
        </Link>
      </ul>
     
    </div>
  )
}

export default SupportSideBar