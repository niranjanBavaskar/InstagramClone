import React from "react";
import styles from "./reels.module.css";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdSaveAlt } from "react-icons/md";
import { IoIosMore } from "react-icons/io";

export const Reels = () => {
  return (
    <div className={styles.main}>
      <div className={styles.reelsContainer}>
        <div className={styles.reel}>
          <div className={styles.left}>
          <video src=".\videos\reel.mp4" height="100%" width="100%" controls loop></video>
          </div>
          <div className={styles.right}>
            <div className={styles.icons}>
              <CiHeart style={{ fontSize: "30px" }} />
              <FaRegComment />
              <IoShareSocialOutline />
              <MdSaveAlt />
              <IoIosMore />
              <div className={styles.square}>
                <img src=".\images\profile.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.reel}>
          <div className={styles.left}>
          <video src=".\videos\reel.mp4" height="100%" width="100%" controls loop></video>
          </div>
          <div className={styles.right}>
            <div className={styles.icons}>
              <CiHeart style={{ fontSize: "30px" }} />
              <FaRegComment />
              <IoShareSocialOutline />
              <MdSaveAlt />
              <IoIosMore />
              <div className={styles.square}>
                <img src=".\images\profile.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.reel}>
          <div className={styles.left}>
          <video src=".\videos\reel.mp4" height="100%" width="100%" controls loop></video>
          </div>
          <div className={styles.right}>
            <div className={styles.icons}>
              <CiHeart style={{ fontSize: "30px" }} />
              
              <FaRegComment />
              
              <IoShareSocialOutline />
              <MdSaveAlt />
              <IoIosMore />
              <div className={styles.square}>
                <img src=".\images\profile.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
