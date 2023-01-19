import React from "react";
import { LoaderDiv } from "./styles/loader.style";
import styles from "./styles/loader1.module.css";

const Loader1 = ({ style }) => {
  return (
    <LoaderDiv>
      <div className={"loader"} />
    </LoaderDiv>
  );
};

export default Loader1;
{
  /* <div className={styles.loader__container} style={{ ...style }}>
      <div className={styles.loader} />
    </div> */
}
