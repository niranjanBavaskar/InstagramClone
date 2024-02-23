import React, { useState } from "react";
import styles from "./home.module.css";
import { MdHomeFilled } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FaThreads } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";
import { Newsfeed } from "../../components/newsFeed/Newsfeed";

export const Home = () => {
  const [isProfileTabActive, setIsProfileTabActive] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.appLogo}>
          <img src=".\images\instagram.png" alt="" />
        </div>
        <div className={styles.components1}>
          <div className={styles.home}>
            <MdHomeFilled className={styles.sidebarIcon} />
            Home
          </div>
          <div className={styles.search}>
            <CiSearch className={styles.sidebarIcon} />
            Search
          </div>
          <div className={styles.explore}>
            <MdOutlineExplore className={styles.sidebarIcon} />
            Explore
          </div>
          <div className={styles.reels}>
            <RiVideoLine className={styles.sidebarIcon} />
            Reels
          </div>
          <div className={styles.messages}>
            <IoChatbubbleEllipsesOutline className={styles.sidebarIcon} />
            Messages
          </div>
          <div className={styles.notifications}>
            <CiHeart className={styles.sidebarIcon} />
            Notifications
          </div>
          <div className={styles.create}>
            <MdOutlineCreateNewFolder className={styles.sidebarIcon} />
            Create
          </div>
          <div className={styles.profile}>
            <img
              src=".\images\profile.jpg"
              alt=""
              className={
                isProfileTabActive ? styles.profileImgActive : styles.profileImg
              }
            />
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                setIsProfileTabActive(true);
              }}
            >
              Profile
            </span>
          </div>
        </div>
        <div className={styles.components2}>
          <div className={styles.threads}>
            <FaThreads className={styles.sidebarIcon} />
            Threads
          </div>
          <div className={styles.more}>
            <IoIosMore className={styles.sidebarIcon} />
            More
          </div>
        </div>
      </div>
      <div className={styles.right}>
       {/* <Newsfeed/> */}
       hellow world
      </div>
    </div>
  );
};
