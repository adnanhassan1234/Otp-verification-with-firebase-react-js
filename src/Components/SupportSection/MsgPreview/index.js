import React from 'react'
import user1 from "Images/profile4.svg";
import userlogo from "Images/unsplash.png";
import { Form } from 'react-bootstrap';
import classes from "./index.module.scss";
import more from '../../../Images/home/more (1).png'

const MsgPreview = () => {
  return (
    <div className={classes.msgPreview}>
    <div className={classes.chat_header}>
      <div className={classes.userInfo}>
      <div className={classes.userImg}>
            <img src={user1} alt="username" />
          </div>
        <div className={classes.description}>
        
          <h6>Marcus Curtis</h6>
          <div className={classes.text}>adnanhassan@gmail.com</div>
        </div>
      </div>


{/* ticket */}
      {/* <div className={classes.userInfo}>
        <div className={classes.description}>
          <h6>1235CA2B2</h6>
          <div className={classes.text}>Ticket No.</div>
        </div>
      </div> */}

      <div className="d-flex align-items-center">
         
        <input type="checkbox" name="" id="" />&nbsp; &nbsp; Mark as complete &nbsp; &nbsp;
                <i className="fa fa-ellipsis-v " aria-hidden="true"></i>
        </div>
    </div>
    <div className={classes.mesgs}>
      <div className={classes.msg_history}>
        <div className={classes.incoming}>
          <div className={classes.userImg}>
            <img src={userlogo} alt="username" />
          </div>
          <div className={classes.description}>
            <div className={classes.text}>
              Test which is a new approach to have all solutions
              <div className={classes.time}> 11:01 AM</div>
            </div>
          </div>
          <div className={classes.description}>
            <div className={classes.text}>
              Test which is a new approach to have all solutions. Test
              which is a new approach to have all solutions
              <div className={classes.time}> 11:01 AM</div>
            </div>
          </div>
          <div className={classes.description}>
            <div className={classes.text}>
              Test which is a new approach to have all solutions. Test
              which is a new approach to
              <div className={classes.time}> 11:01 AM</div>
            </div>
          </div>
        </div>
        <div className={classes.outgoing}>
          <div className={classes.userImg}>
          <img src={user1} alt="username" />
          </div>
          <div className={classes.description}>
            <div className={classes.text}>
              Test which is a new approach to have all solutions
              <div className={classes.time}> 11:01 AM</div>
            </div>
          </div>
          <div className={classes.description}>
            <div className={classes.text}>
              Test which is a new approach to have all solutions. Test
              which is a new approach to have all solutions
              <div className={classes.time}> 11:01 AM</div>
            </div>
          </div>
          <div className={classes.description}>
            <div className={classes.text}>
              Test which is a new approach to have all solutions. Test
              which is a new approach to
              <div className={classes.time}> 11:01 AM</div>
            </div>
          </div>
        </div>
        <div className={classes.incoming}>
          <div className={classes.userImg}>
          <img src={userlogo} alt="username" />
          </div>
          <div className={classes.description}>
            <div className={classes.text}>
              Test which is a new approach to have all solutions
              <div className={classes.time}> 11:01 AM</div>
            </div>
          </div>
          <div className={classes.description}>
            <div className={classes.text}>
              Test which is a new approach to have all solutions. Test
              which is a new approach to have all solutions
              <div className={classes.time}> 11:01 AM</div>
            </div>
          </div>
          <div className={classes.description}>
            <div className={classes.text}>
              Test which is a new approach to have all solutions. Test
              which is a new approach to
              <div className={classes.time}> 11:01 AM</div>
            </div>
          </div>
        </div>
        <div className={classes.outgoing}>
          <div className={classes.userImg}>
          <img src={user1} alt="username" />
          </div>
          <div  className={classes.description}>
            <div  className={classes.text}>
              Test which is a new approach to have all solutions
              <div  className={classes.time}> 11:01 AM</div>
            </div>
          </div>
          <div  className={classes.description}>
            <div  className={classes.text}>
              Test which is a new approach to have all solutions. Test
              which is a new approach to have all solutions
              <div  className={classes.time}> 11:01 AM</div>
            </div>
          </div>
          <div  className={classes.description}>
            <div  className={classes.text}>
              Test which is a new approach to have all solutions. Test
              which is a new approach to
              <div  className={classes.time}> 11:01 AM</div>
            </div>
          </div>
        </div>
        <div  className={classes.incoming}>
          <div className={classes.userImg}>
          <img src={userlogo} alt="username" />
          </div>
          <div  className={classes.description}>
            <div  className={classes.text}>
              Test which is a new approach to have all solutions
              <div  className={classes.time}> 11:01 AM</div>
            </div>
          </div>
          <div  className={classes.description}>
            <div  className={classes.text}>
              Test which is a new approach to have all solutions. Test
              which is a new approach to have all solutions
              <div  className={classes.time}> 11:01 AM</div>
            </div>
          </div>
          <div  className={classes.description}>
            <div  className={classes.text}>
              Test which is a new approach to have all solutions. Test
              which is a new approach to
              <div  className={classes.time}> 11:01 AM</div>
            </div>
          </div>
        </div>
        <div className={classes.outgoing}>
          <div className={classes.userImg}>
          <img src={user1} alt="username" />
          </div>
          <div  className={classes.description}>
            <div  className={classes.text}>
              Test which is a new approach to have all solutions
              <div  className={classes.time}> 11:01 AM</div>
            </div>
          </div>
          <div  className={classes.description}>
            <div  className={classes.text}>
              Test which is a new approach to have all solutions. Test
              which is a new approach to have all solutions
              <div  className={classes.time}> 11:01 AM</div>
            </div>
          </div>
          <div  className={classes.description}>
            <div  className={classes.text}>
              Test which is a new approach to have all solutions. Test
              which is a new approach to
              <div  className={classes.time}> 11:01 AM</div>
            </div>
          </div>
        </div>
        <div  className={classes.incoming}>
          <div className={classes.userImg}>
          <img src={userlogo} alt="username" />
          </div>
          <div  className={classes.description}>
            <div  className={classes.text}>
              Test which is a new approach to have all solutions
              <div  className={classes.time}> 11:01 AM</div>
            </div>
          </div>
          <div  className={classes.description}>
            <div  className={classes.text}>
              Test which is a new approach to have all solutions. Test
              which is a new approach to have all solutions
              <div  className={classes.time}> 11:01 AM</div>
            </div>
          </div>
          <div  className={classes.description}>
            <div  className={classes.text}>
              Test which is a new approach to have all solutions. Test
              which is a new approach to
              <div  className={classes.time}> 11:01 AM</div>
            </div>
          </div>
        </div>
        <div className={classes.outgoing}>
          <div className={classes.userImg}>
          <img src={user1} alt="username" />
          </div>
          <div  className={classes.description}>
            <div  className={classes.text}>
              Test which is a new approach to have all solutions
              <div  className={classes.time}> 11:01 AM</div>
            </div>
          </div>
          <div  className={classes.description}>
            <div  className={classes.text}>
              Test which is a new approach to have all solutions. Test
              which is a new approach to have all solutions
              <div  className={classes.time}> 11:01 AM</div>
            </div>
          </div>
          <div  className={classes.description}>
            <div  className={classes.text}>
              Test which is a new approach to have all solutions. Test
              which is a new approach to
              <div  className={classes.time}> 11:01 AM</div>
            </div>
          </div>
        </div>
        <div  className={classes.incoming}>
          <div className={classes.userImg}>
          <img src={userlogo} alt="username" />
          </div>
          <div  className={classes.description}>
            <div  className={classes.text}>
              Test which is a new approach to have all solutions
              <div  className={classes.time}> 11:01 AM</div>
            </div>
          </div>
          <div  className={classes.description}>
            <div  className={classes.text}>
              Test which is a new approach to have all solutions. Test
              which is a new approach to have all solutions
              <div  className={classes.time}> 11:01 AM</div>
            </div>
          </div>
          <div  className={classes.description}>
            <div  className={classes.text}>
              Test which is a new approach to have all solutions. Test
              which is a new approach to
              <div  className={classes.time}> 11:01 AM</div>
            </div>
          </div>
        </div>
        <div className={classes.outgoing}>
          <div className={classes.userImg}>
            <img src={user1} alt="username" />
          </div>
          <div  className={classes.description}>
            <div  className={classes.text}>
              Test which is a new approach to have all solutions
              <div  className={classes.time}> 11:01 AM</div>
            </div>
          </div>
          <div  className={classes.description}>
            <div  className={classes.text}>
              Test which is a new approach to have all solutions. Test
              which is a new approach to have all solutions
              <div  className={classes.time}> 11:01 AM</div>
            </div>
          </div>
          <div  className={classes.description}>
            <div  className={classes.text}>
              Test which is a new approach to have all solutions. Test
              which is a new approach to
              <div  className={classes.time}> 11:01 AM</div>
            </div>
          </div>
        </div>
      </div>
      <div  className={classes.type_msg}>
        <div className={classes.btn_group}>
          <button type="button" className={classes.btn}>
            <i className="fal fa-paperclip"></i>{" "}
          </button>
          <button type="button" className={classes.btn}>
            <i className="fal fa-image"></i>
          </button>
        </div>
        <button className={`${classes.btn} ${classes.btnSend}`} type="button">
          <i className="fas fa-paper-plane"></i>
        </button>
        <input
          type="text"
          width="100%"
          className={classes.form_control}
          placeholder="Type a message" />
       
      </div>
    </div>
  </div>
  )
}

export default MsgPreview