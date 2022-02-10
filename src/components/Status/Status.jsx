import React from "react";
import styles from "./Status.module.css";

const Status = () => {
  return (
    <div className={styles.status}>
      <h4 className={styles.status__title}>Status</h4>
      <div className={styles.status__info}>
        <p className={styles.status__name}>Total Tasks: </p>
        <p className={styles.status__count}>12</p>
      </div>
      <div className={styles.status__info}>
        <p className={styles.status__name}>Completed Tasks: </p>
        <p className={styles.status__count}>5</p>
      </div>
      <div className={styles.status__info}>
        <p className={styles.status__name}>Pending Tasks: </p>
        <p className={styles.status__count}>7</p>
      </div>
    </div>
  );
};

export default Status;
