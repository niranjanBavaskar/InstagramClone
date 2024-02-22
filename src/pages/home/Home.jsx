import React from "react";
import styles from "./home.module.css";

export const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>Menu </div>
      <div className={styles.center}>
        <div className={styles.userStories}>User stories</div>
        <div className={styles.posts}>
          Posts
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.userProfile}>User profile</div>
        <div className={styles.suggestedFrd}>Suggested friends</div>
      </div>
    </div>
  );
};
