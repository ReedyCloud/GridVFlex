import React from "react";

import styles from "./GridCase1.module.scss";

const GridCase1 = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.GridContainer}>
        <div className={styles.Header}>header</div>
        <div className={styles.Content}>content</div>
        <div className={styles.Foo}>foo</div>
        <div className={styles.Footer}>footer</div>
      </div>
    </div>
  );
};

export default GridCase1;
