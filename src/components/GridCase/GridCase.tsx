import React from "react";

import styles from "./GridCase.module.scss";

const GridCase = () => {
  const cells = [];
  for (let i = 1; i < 26; ++i) {
    cells.push(i);
  }

  return (
    <div className={styles.Wrapper}>
      <div className={styles.GridContainer}>
        {cells.map((cell) => (
          <div> {cell} </div>
        ))}
      </div>
    </div>
  );
};

export default GridCase;
