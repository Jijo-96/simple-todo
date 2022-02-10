import React from "react";
import cx from "classnames";

import styles from "./CurrentDate.module.css";

const CurrentDate = () => {
  const date = new Date();
  const month = date.getMonth();
  const currentYear = date.getFullYear();
  const currentDate = date.getDate();
  const ordinalNumberFunction = (number) => {
    let selector;
    if (number <= 0) {
      selector = 4;
    } else if ((number > 3 && number < 21) || number % 10 > 3) {
      selector = 0;
    } else {
      selector = number % 10;
    }
    return ['th', 'st', 'nd', 'rd', ''][selector];
  };
  const ordinalNumber = ordinalNumberFunction(date);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = monthNames[month];
  return (
    <div className={styles.current__date}>
      <div className={cx(styles.date__container, styles.date__container_1)}>
        <h1 className={styles.date}>{ currentDate }</h1>
        <p className={styles.ordinal__numbers}>{ ordinalNumber }</p>
      </div>
      <div className={styles.date__container}>
        <p className={styles.month}>{ currentMonth },</p>
        <p className="year">{ currentYear }</p>
      </div>
    </div>
  );
};

export default CurrentDate;
