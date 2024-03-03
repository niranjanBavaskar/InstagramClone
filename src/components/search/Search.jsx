import React from "react";
import styles from "./search.module.css";

export const Search = () => {
  return (
    <div className={styles.main}>
      <div className={styles.searchModalContainer}>
        <div className={styles.header}>
          <h1>Search</h1>
        </div>
        <div className={styles.searchBar}>
          searchbar
        </div>
        <div className={styles.recent}>
          recent
        </div>
        <div className={styles.suggestedSearch}>
          suggestedSearch
        </div>
      </div>
    </div>
  );
};
