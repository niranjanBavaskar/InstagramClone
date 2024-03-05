import React, { useState } from "react";
import styles from "./post.module.css";

export const Post = () => {
  const [isMore, setIsMore] = useState(false);

  const handleMoreContent = () => {
    setIsMore((prevIsMore) => !prevIsMore);
  };

  return (
    <div className={styles.main}>
      <div className={styles.postContainer}>
        <div className={styles.profileInfo}>Profile Info</div>
        <div className={styles.post}>Post</div>
        <div className={styles.engagementButtons}>Like share etc</div>
        <div className={styles.likesInfo}>700 likes</div>
        <div className={styles.postTitle}>
          <p> https:etc</p>
          {!isMore && (
            <>
              <p>...</p>
              <div onClick={handleMoreContent} style={{ cursor: "pointer" }}>
                more
              </div>
            </>
          )}
        </div>
        {isMore && (
          <div className={styles.viewPostContent}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ipsa
            animi vel cum quod laudantium labore assumenda inventore suscipit
            totam!
          </div>
        )}
        <div className={styles.viewComments}>View comments</div>
        <div className={styles.addComments}>Add comment</div>
      </div>
    </div>
  );
};