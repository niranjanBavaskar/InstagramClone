import React, { useState } from "react";
import styles from "./home.module.css";
import { MdHomeFilled } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FaInstagram, FaThreads } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";
import { Newsfeed } from "../../components/newsFeed/Newsfeed";
import { Search } from "../../components/search/Search";
import { Explore } from "../../components/explore/Explore";
import { Reels } from "../../components/reels/Reels";
import { Messages } from "../../components/messages/Messages";
import { Notification } from "../../components/notification/Notification";
import { CreatePost } from "../../components/createPost/CreatePost";
import { Profilesettingsmodel } from "../../components/profileSettingsModel/Profilesettingsmodel";
import { More } from "../../components/more/More";
import { IoIosSettings } from "react-icons/io";
import { BsActivity } from "react-icons/bs";
import { MdSaveAlt } from "react-icons/md";
import { GoReport } from "react-icons/go";

export const Home = () => {
  const [isProfileTabActive, setIsProfileTabActive] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isNotificationClicked, setIsNotificationClicked] = useState(false);

  const handleClick = (index) => {
    if (index === 1 || index === 4) {
      setIsSearchClicked(true);
      setSelectedTab(index);
    } else if (index === 5) {
      setIsNotificationClicked(true);
    } else {
      setIsSearchClicked(false);
      setIsNotificationClicked(false);
      setSelectedTab(index);
    }
  };

  return (
    <div className={styles.main}>
      {isSearchClicked || isNotificationClicked ? (
        <div className={styles.left} style={{ width: "5%" }}>
          <div className={styles.appLogo}>
            <FaInstagram className={styles.sidebarIcon} />
          </div>
          <div
            className={styles.tabList}
            style={{ width: "100%", alignItems: "center" }}
          >
            <div className={styles.home} onClick={() => handleClick(0)}>
              <MdHomeFilled className={styles.sidebarIcon} />
            </div>
            <div className={styles.search} onClick={() => handleClick(1)}>
              <CiSearch className={styles.sidebarIcon} />
            </div>
            <div className={styles.explore} onClick={() => handleClick(2)}>
              <MdOutlineExplore className={styles.sidebarIcon} />
            </div>
            <div className={styles.reels} onClick={() => handleClick(3)}>
              <RiVideoLine className={styles.sidebarIcon} />
            </div>
            <div className={styles.messages} onClick={() => handleClick(4)}>
              <IoChatbubbleEllipsesOutline className={styles.sidebarIcon} />
            </div>
            <div
              className={styles.notifications}
              onClick={() => handleClick(5)}
            >
              <CiHeart className={styles.sidebarIcon} />
              {isNotificationClicked && (
                <div className={styles.notificationsModal}></div>
              )}
            </div>
            <div className={styles.create} onClick={() => handleClick(6)}>
              <MdOutlineCreateNewFolder className={styles.sidebarIcon} />
            </div>
            <div className={styles.profile} onClick={() => handleClick(7)}>
              <img
                src=".\images\profile.jpg"
                alt=""
                className={
                  isProfileTabActive
                    ? styles.profileImgActive
                    : styles.profileImg
                }
              />
            </div>
          </div>

          <div
            className={styles.components2}
            style={{ width: "100%", alignItems: "center" }}
          >
            <div className={styles.threads}>
              <FaThreads className={styles.sidebarIcon} />
            </div>
            <div className={styles.more} onClick={() => handleClick(8)}>
              <IoIosMore className={styles.sidebarIcon} />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.left}>
          <div className={styles.appLogo}>
            <img src=".\images\instagram.png" alt="" />
          </div>
          <div className={styles.tabList}>
            <div className={styles.home} onClick={() => handleClick(0)}>
              <MdHomeFilled className={styles.sidebarIcon} />
              Home
            </div>
            <div className={styles.search} onClick={() => handleClick(1)}>
              <CiSearch className={styles.sidebarIcon} />
              Search
            </div>
            <div className={styles.explore} onClick={() => handleClick(2)}>
              <MdOutlineExplore className={styles.sidebarIcon} />
              Explore
            </div>
            <div className={styles.reels} onClick={() => handleClick(3)}>
              <RiVideoLine className={styles.sidebarIcon} />
              Reels
            </div>
            <div className={styles.messages} onClick={() => handleClick(4)}>
              <IoChatbubbleEllipsesOutline className={styles.sidebarIcon} />
              Messages
            </div>
            <div
              className={styles.notifications}
              onClick={() => handleClick(5)}
            >
              <CiHeart className={styles.sidebarIcon} />
              Notifications
            </div>
            <div className={styles.create} onClick={() => handleClick(6)}>
              <MdOutlineCreateNewFolder className={styles.sidebarIcon} />
              Create
            </div>
            <div className={styles.profile} onClick={() => handleClick(7)}>
              <img
                src=".\images\profile.jpg"
                alt=""
                className={
                  isProfileTabActive
                    ? styles.profileImgActive
                    : styles.profileImg
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
            <div className={styles.threads} style={{ cursor: "pointer" }}>
              <FaThreads className={styles.sidebarIcon} />
              Threads
            </div>
            <div
              className={styles.more}
              onClick={() => handleClick(8)}
              style={{ cursor: "pointer" }}
            >
              <IoIosMore className={styles.sidebarIcon} />
              More
              <div className={styles.moreModal}>
                <div className={styles.top}>
                  <div className={styles.settings}>
                    <IoIosSettings style={{ fontSize: "25px" }} />
                    <p>Settings</p>
                  </div>
                  <div className={styles.activity}>
                    <BsActivity style={{ fontSize: "25px" }} />
                    <p>Your activity</p>
                  </div>
                  <div className={styles.save}>
                    <MdSaveAlt style={{ fontSize: "25px" }} />
                    <p>Saved</p>
                  </div>
                  <div className={styles.switch}>
                    <p>Switch appearence</p>
                  </div>
                  <div className={styles.report}>
                    <GoReport style={{ fontSize: "25px" }} />
                    <p> Report a problem</p>
                  </div>
                </div>
                <div className={styles.bottom}>
                  <p style={{ paddingLeft: "25px" }}>Switch accounts</p>
                  <hr
                    style={{ width: "100%", margin: "auto", opacity: "0.8" }}
                  />

                  <p style={{ paddingLeft: "25px" }}>Log out</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className={isSearchClicked ? styles.searchClickedRight : styles.right}
      >
        {selectedTab === 0 && <Newsfeed />}
        {selectedTab === 1 && <Search />}
        {selectedTab === 2 && <Explore />}
        {selectedTab === 3 && <Reels />}
        {selectedTab === 4 && <Messages />}
        {selectedTab === 5 && <Notification />}
        {selectedTab === 6 && <CreatePost />}
        {selectedTab === 7 && <Profilesettingsmodel />}
        {selectedTab === 8 && <More />}
      </div>
    </div>
  );
};
