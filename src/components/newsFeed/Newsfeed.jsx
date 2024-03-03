import React from "react";
import styles from "./newsFeed.module.css";
import { Post } from "../post/Post";

export const Newsfeed = () => {
  return (
    <div className={styles.main}>
      <div className={styles.right}>
        <div className={styles.leftContainer}>
          <div className={styles.userStories}>
            <div className={styles.userStory}>
              <div className={styles.profilePic}>
                <img src="./images/profile.jpg" alt="" />
              </div>
              <div className={styles.profileName}>
                <p>John Doe</p>
              </div>
            </div>
          </div>
          <div className={styles.posts}>
            <Post />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.userProfile}>
            <div className={styles.profileRight}>
              <div className={styles.userProfilePic}>
                <img src="./images/profile.jpg" alt="" />
              </div>
              <div className={styles.userProfileName}>
                <p>ProfileName</p>
                <p>UserName</p>
              </div>
            </div>
            <div className={styles.profileLeft}>
              <p>Switch</p>
            </div>
          </div>
          <div className={styles.suggestedFrd}>
            <div className={styles.header}>
              <p>Suggested Friends</p>
              <p>See all</p>
            </div>
            <div className={styles.friends}>
              <div className={styles.profileRight}>
                <div className={styles.userProfilePic}>
                  <img src="./images/profile.jpg" alt="" />
                </div>
                <div className={styles.userProfileName}>
                  <p>ProfileName</p>
                  <p>UserName</p>
                </div>
              </div>
              <div className={styles.profileLeft}>
                <p>Follow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
