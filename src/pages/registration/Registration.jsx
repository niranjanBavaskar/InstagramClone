import React from "react";
import styles from "./registration.module.css";
import { FaSquareFacebook } from "react-icons/fa6";

export const Registration = () => {
  return (
    <div className={styles.main}>
      <div className={styles.signUpFormContainer}>
        <div className={styles.signUpForm}>
          <div className={styles.appLogo}>
            <img src=".\images\instagram.png" alt="" />
          </div>
          <p>Sign up to see photos and videos from your friends.</p>

          <button>
            <FaSquareFacebook />
            Login with facebook
          </button>
          <div className={styles.divider}>
            <div className={styles.line1}></div>
            <div className={styles.or}>OR</div>
            <div className={styles.line2}></div>
          </div>
          <div className={styles.loginForm}>
            <input type="text" placeholder="Mobile number or email" />
            <input type="text" placeholder="Fullname" />
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button>Sign up</button>
            <p>
              People who use our service may have uploded your contact
              information to instagram.Learn more
            </p>
          <p>By signing up, you agree to our terms, Privacy Policy  and Cookies Policy.</p>
          </div>
        </div>
        <div className={styles.signInCTA}>Log in</div>
      </div>
    </div>
  );
};
