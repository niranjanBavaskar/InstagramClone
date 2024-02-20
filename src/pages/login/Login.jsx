import React from "react";
import styles from "./login.module.css";
import { FaSquareFacebook } from "react-icons/fa6";

export const Login = () => {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.left}>Mobile gif</div>
        <div className={styles.right}>
          <div className={styles.signInBox}>
            <div className={styles.appLogo}>
              <img src=".\images\instagram.png" alt="" />
            </div>

            <div className={styles.loginForm}>
              <input type="text" placeholder="phone no" />
              <input type="text" placeholder="password" style={{marginTop:"6px"}}/>
              <button>Login</button>
            </div>
            <div className={styles.divider}>
              <div className={styles.line}></div>
              <p>OR</p>
            </div>
            <div className={styles.socialLogin}>
              <FaSquareFacebook />
              <p>Login with Facebook</p>
            </div>
            <div className={styles.forgotPassword}>Forgot Password ?</div>
          </div>
          <div className={styles.signUpBox}>Sign up box</div>
          <div className={styles.getAppBox}>Get the app</div>
        </div>
      </div>
      <div className={styles.bottom}>Meta info</div>
    </div>
  );
};
