import React from "react";
import styles from "./styles/loader.module.css";

const LoaderBob = () => {
  return (
    <div className={styles.lds_ellipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoaderBob;
