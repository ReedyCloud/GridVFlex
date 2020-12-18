import React from "react";

import styles from "./FlexCase1.module.scss";

const FlexCase1 = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.FlexContainer}>
        <div className={styles.Header}>header</div>
        <div className={styles.Content}>content</div>
        <div className={styles.Foo}>foo</div>
        <div className={styles.Footer}>footer</div>
      </div>
    </div>
  );
};

export default FlexCase1;
