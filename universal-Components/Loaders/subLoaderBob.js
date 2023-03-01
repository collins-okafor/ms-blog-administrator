import React from "react";
import styles from "./styles/subloader.module.css";

const SubLoaderBob = () => {
  return (
    <div className={styles.lds_ellipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SubLoaderBob;
