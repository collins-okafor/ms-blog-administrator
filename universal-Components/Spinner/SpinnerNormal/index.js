import React from "react";
import { withTheme } from "styled-components";
import { SpinnerDiv } from "./spinner.style";

const SpinnerNormal = ({ theme: { color } }) => {
  return (
    <SpinnerDiv color={color}>
      <div className={"spinnerbody"}>
        <div className={"loading-spinner"}></div>
      </div>
    </SpinnerDiv>
  );
};

export default withTheme(SpinnerNormal);
