import React from "react";
import styles from "./profileSettingsModel.module.css";

export const Profilesettingsmodel = () => {
  return (
    <div className={styles.main}>
      <div className={styles.profileFrame}>
        <div className={styles.top}>
          <div className={styles.profilePic}>
            <img
              src="https://i.pinimg.com/736x/c5/43/22/c543228cc17f098eab449fede5e14caf.jpg"
              alt=""
            />
          </div>
          <div className={styles.profileData}>
            <h2>saketgokhale</h2>
            <div className={styles.profileInfo}>
              <p>50 posts</p>
              <p>50 followers</p>
              <p>50 following</p>
            </div>
          </div>
        </div>
        <hr style={{ width: "90%", margin: "auto", opacity: "0.8" }} />
        <div className={styles.bottom}>
          <div className={styles.gallary}>
            <img
              src="https://i.pinimg.com/736x/c5/43/22/c543228cc17f098eab449fede5e14caf.jpg"
              alt=""
            />
            <img
              src="https://i.pinimg.com/736x/c5/43/22/c543228cc17f098eab449fede5e14caf.jpg"
              alt=""
            />
            <img
              src="https://i.pinimg.com/736x/c5/43/22/c543228cc17f098eab449fede5e14caf.jpg"
              alt=""
            />
            <img
              src="https://i.pinimg.com/736x/c5/43/22/c543228cc17f098eab449fede5e14caf.jpg"
              alt=""
            />
            <img
              src="https://i.pinimg.com/736x/c5/43/22/c543228cc17f098eab449fede5e14caf.jpg"
              alt=""
            />
            <img
              src="https://i.pinimg.com/736x/c5/43/22/c543228cc17f098eab449fede5e14caf.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
