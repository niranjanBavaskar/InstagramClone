import React from "react";
import styles from "./login.module.css";

export const Login = () => {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.left}>Mobile gif</div>
        <div className={styles.right}>
          Login box
          <div className={styles.rightBottom}>
          <div className={styles.facebookLogin}>Login with facebook</div>
          <div className={styles.signUp}>Sign Up</div>
          <div className={styles.getApp}>Get the app</div>
        </div>
        </div>
      </div>
      <div className={styles.bottom}>Meta info</div>
    </div>
  );
};
