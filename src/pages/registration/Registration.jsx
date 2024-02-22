import React from "react";
import styles from "./registration.module.css";
import { FaSquareFacebook } from "react-icons/fa6";

export const Registration = () => {
  return (
    <div className={styles.main}>
      <div className={styles.signUpFormContainer}>
        <div className={styles.top}>
          <div className={styles.appLogo}>
            <img src=".\images\instagram.png" alt="" />
          </div>
          <p>
            Sign up to see photos and videos <br />
            form your friends.
          </p>

          <div className={styles.socialLogin}>
            <button>
              <FaSquareFacebook />
              Log in with Facebook
            </button>
          </div>
          <div className={styles.divider}>
            <div className={styles.line1}></div>
            <div className={styles.or}>OR</div>
            <div className={styles.line2}></div>
          </div>
        </div>
        <div className={styles.mid}>
          <div className={styles.loginForm}>
            <input type="text" placeholder="Mobile Number or Email" />
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
          </div>
        </div>
        <div className={styles.bottom}>
          <p>
            people who use our service may have uploaded
            <br />
            your contact information to instagram. Learn <br /> More
          </p>
          <p>
            By signing up, you agree to our Terms, Privacy Policy <br /> and
            Cookies Policy . 
          </p>

          <button>Sign up</button>
        </div>
      </div>

      <div className={styles.signInCTA}>
        <p>Have an account?</p>&nbsp;
        <div className={styles.logIn}>Log in</div>
      </div>
    </div>
  );
};
