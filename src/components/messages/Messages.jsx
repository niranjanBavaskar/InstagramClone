import React from "react";
import styles from "./messages.module.css";

export const Messages = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>Chat history</div>
      <div className={styles.right}>chat</div>
    </div>
  );
};
