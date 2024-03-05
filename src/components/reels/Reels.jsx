import React from 'react'
import styles from './reels.module.css'

export const Reels = () => {
  return (
    <div className={styles.main}>
      <div className={styles.reelsContainer}>
        <div className={styles.reel}>
          <div className={styles.left}></div>
          <div className={styles.right}>
         
          </div>
        </div>
        <div className={styles.reel}>
          <div className={styles.left}></div>
          <div className={styles.right}>Icons</div>
        </div>
        <div className={styles.reel}>
          <div className={styles.left}></div>
          <div className={styles.right}>Icons</div>
        </div>
      </div>
    </div>
  )
}
