import React from "react";
import styles from "./newsFeed.module.css";

export const Newsfeed = () => {
  return (
    <div className={styles.main}>
      <div className={styles.right}>
        <div className={styles.leftContainer}>
          <div className={styles.userStories}>User stories</div>
          <div className={styles.posts}>Posts</div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.userProfile}>User profile</div>
          <div className={styles.suggestedFrd}>Suggested friends</div>
        </div>
      </div>
    </div>
  );
};
