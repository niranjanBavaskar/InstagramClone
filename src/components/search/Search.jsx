import React from "react";
import styles from "./search.module.css";
import { RxCrossCircled } from "react-icons/rx";

export const Search = () => {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <h1>Search</h1>

        <div className={styles.searchBar}>
          <input type="text" placeholder="Search" />

          <RxCrossCircled style={{ cursor: "pointer" }} />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.recent}>
          <p>Recent</p>
          <p style={{ color: "dodgerblue", cursor: "pointer" }}>Clear all</p>
        </div>
        <div className={styles.recentSearch}></div>
      </div>
    </div>
  );
};
