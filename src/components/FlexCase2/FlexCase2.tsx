import React from "react";

import styles from "./FlexCase2.module.scss";

const FlexCase2 = () => {
  const cells = [];
  for (let i = 1; i < 10; ++i) {
    cells.push(i);
  }
  return (
    <div className={styles.Wrapper}>
      <div className={styles.FlexContainer}>
        {cells.map((cell) => {
          const styleClass = `Cell--${cell}`;
          return <div className={styles[styleClass]}> {cell} </div>;
        })}
      </div>
    </div>
  );
};

export default FlexCase2;
