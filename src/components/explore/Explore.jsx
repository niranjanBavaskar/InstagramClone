import React from "react";
import styles from "./explore.module.css";

export const Explore = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.containerTop}>
          <div className={styles.suggestedPostsRight}>
            <div className={styles.top}>
              <div className={styles.topRight}>
                <img
                  src="https://i.pinimg.com/736x/c5/43/22/c543228cc17f098eab449fede5e14caf.jpg"
                  alt=""
                />
              </div>
              <div className={styles.topLeft}>
                <img
                  src="https://i.pinimg.com/736x/c5/43/22/c543228cc17f098eab449fede5e14caf.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottomRight}>
                <img
                  src="https://i.pinimg.com/736x/c5/43/22/c543228cc17f098eab449fede5e14caf.jpg"
                  alt=""
                />
              </div>
              <div className={styles.bottomLeft}>
                <img
                  src="https://i.pinimg.com/736x/c5/43/22/c543228cc17f098eab449fede5e14caf.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={styles.suggestedPostsLeft}>
           <video src=".\videos\reel.mp4" height="100%" width="100%" controls loop></video>
          </div>
        </div>
        <div className={styles.containerBottom}>
          <div className={styles.suggestedPostsLeft}>
          <video src=".\videos\reel.mp4" height="100%" width="100%" controls loop></video>
          </div>
          <div className={styles.suggestedPostsRight}>
            <div className={styles.top}>
              <div className={styles.topRight}>
                <img
                  src="https://i.pinimg.com/736x/c5/43/22/c543228cc17f098eab449fede5e14caf.jpg"
                  alt=""
                />
              </div>
              <div className={styles.topLeft}>
                <img
                  src="https://i.pinimg.com/736x/c5/43/22/c543228cc17f098eab449fede5e14caf.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottomRight}>
                <img
                  src="https://i.pinimg.com/736x/c5/43/22/c543228cc17f098eab449fede5e14caf.jpg"
                  alt=""
                />
              </div>
              <div className={styles.bottomLeft}>
                <img
                  src="https://i.pinimg.com/736x/c5/43/22/c543228cc17f098eab449fede5e14caf.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
