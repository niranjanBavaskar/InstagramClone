import React from "react";
import styles from "./messages.module.css";
import { IoChevronDownSharp } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

export const Messages = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.top}>
          <div className={styles.userName}>
            <p style={{cursor: "pointer"}}>
              saketgokhale <IoChevronDownSharp />
            </p>
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQMKJPJ3rSuqmoRkeG6ymsvHEol4QTavaMXf5lEc1HrDGtaZRM6"
              alt=""
            />
          </div>
          <div className={styles.messageButtons}>
            <p style={{ color: "black", fontWeight: "600", cursor: "pointer"}}>Primary</p>
            <p style={{ color: "grey", fontWeight: "600", cursor: "pointer" }}>General</p>
            <p style={{ color: "dodgerblue", fontWeight: "600", cursor: "pointer" }}>Requests</p>
          </div>
        </div>
        <hr style={{ width: "100%", margin: "auto", opacity: "0.8" }} />
        
        <div className={styles.bottom}>
          <div className={styles.friendsMessages}>
            <div className={styles.profilePic}>
              <img src=".\images\profile.jpg" alt="" />
            </div>
            <div className={styles.profileName}>
              <p style={{ fontWeight: "600" }}>Akshay</p>
              <p style={{ fontSize: "small", fontWeight: "600" }}>
                Akshay sent an attachment . 1m
              </p>
            </div>
          </div>
          <div className={styles.friendsMessages}>
            <div className={styles.profilePic}>
              <img src=".\images\profile.jpg" alt="" />
            </div>
            <div className={styles.profileName}>
              <p style={{ fontWeight: "600" }}>Yuvraj</p>
              <p style={{ fontSize: "small", fontWeight: "600" }}>
                Yuvraj sent an attachment . 5h
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.messageContainer}>
          <div className={styles.circle}>
            <IoChatbubbleEllipsesOutline className={styles.icon} />
          </div>

          <p style={{ fontSize: "x-large" }}>Your messages</p>
          <p style={{ color: "grey" }}>
            Send private photos and messages to a friend or group
          </p>
          <button>Send message</button>
        </div>
      </div>
    </div>
  );
};
