import React from "react";

import styles from "./FlexCase.module.scss";

const FlexCase = () => {
  const cells = [];
  for (let i = 1; i < 26; ++i) {
    cells.push(i);
  }

  return (
    <div className={styles.Wrapper}>
      <div className={styles.FlexContainer}>
        {cells.map((cell) => (
          <div> {cell} </div>
        ))}
      </div>
    </div>
  );
};

export default FlexCase;
