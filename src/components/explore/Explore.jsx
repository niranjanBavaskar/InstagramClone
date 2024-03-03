import React from "react";
import styles from "./explore.module.css";

export const Explore = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.containerTop}>
          <div className={styles.suggestedPostsRight}>
            <div className={styles.top}>
              <div className={styles.topRight}>box1</div>
              <div className={styles.topLeft}>box2</div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottomRight}>box3</div>
              <div className={styles.bottomLeft}>box4</div>
            </div>
          </div>
          <div className={styles.suggestedPostsLeft}>reel</div>
        </div>
        <div className={styles.containerBottom}>
          <div className={styles.suggestedPostsLeft}>reel</div>
          <div className={styles.suggestedPostsRight}>
            <div className={styles.top}>
              <div className={styles.topRight}>box1</div>
              <div className={styles.topLeft}>box2</div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottomRight}>box3</div>
              <div className={styles.bottomLeft}>box4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
