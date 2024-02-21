import React from "react";
import styles from "./login.module.css";
import { FaSquareFacebook } from "react-icons/fa6";

export const Login = () => {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.left}>
          <img src=".\images\giphy.gif" alt="" />
        </div>
        <div className={styles.right}>
          <div className={styles.signInBox}>
            <div className={styles.appLogo}>
              <img src=".\images\instagram.png" alt="" />
            </div>

            <div className={styles.loginForm}>
              <input type="text" placeholder="Phone number, username, or email" />
              <input
                type="text"
                placeholder="Password"
                style={{ marginTop: "6px" }}
              />
              <button>Log in</button>
            </div>
            <div className={styles.divider}>
              <div className={styles.line1}></div>
              <div className={styles.or}>OR</div>
              <div className={styles.line2}></div>
            </div>
            <div className={styles.socialLogin}>
              <FaSquareFacebook />
              <p>Log in with Facebook</p>
            </div>
            <div className={styles.forgotPassword}>Forgot Password ?</div>
          </div>
          <div className={styles.signUpBox}>
            <p>Don't have an account?</p>&nbsp;
            <div className={styles.signUp}>Sign up</div>
          </div>
          <div className={styles.getAppBox}>
            <p>Get the app.</p>
            <div className={styles.getApp}>
              <div className={styles.googleBtn}>
                <img src=".\images\GoogleBtn.png" alt="" />
              </div>
              <div className={styles.microsoftBtn}>
                <img src=".\images\MicrosoftBtn.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>Meta info</div>
    </div>
  );
};
