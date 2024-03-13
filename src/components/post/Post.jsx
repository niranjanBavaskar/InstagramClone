import React, { useState } from "react";
import styles from "./post.module.css";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdSaveAlt } from "react-icons/md";

export const Post = () => {
  const [isMore, setIsMore] = useState(false);

  const handleMoreContent = () => {
    setIsMore((prevIsMore) => !prevIsMore);
  };

  return (
    <div className={styles.main}>
      <div className={styles.postContainer}>
        <div className={styles.profileInfo}>
          <img src="./images/profile.jpg" alt="" />
          <p style={{ paddingLeft: "10px", fontWeight: "600" }}>saketgokhale</p>
          <p style={{ color: "grey"}}>. 4h</p>
        </div>
        <div className={styles.post}>
          <img
            src="https://i.pinimg.com/736x/c5/43/22/c543228cc17f098eab449fede5e14caf.jpg"
            alt=""
          />
        </div>
        <div className={styles.engagementButtons}>
          <div className={styles.engagementButtonsLeft}>
            <CiHeart style={{ fontSize: "30px" }} />
            <FaRegComment />
            <IoShareSocialOutline />
          </div>
          <div className={styles.engagementButtonsRight}>
            <MdSaveAlt style={{cursor: "pointer"}}/>
          </div>
        </div>
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
        <div className={styles.viewComments}>View all comments</div>
        <div className={styles.addComments}>
        
          <input type="text" placeholder="Add a comment..."/>
         
        </div>
      </div>
    </div>
  );
};
