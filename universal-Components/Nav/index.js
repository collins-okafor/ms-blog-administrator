import React, { memo, useEffect, useState } from "react";
import LowerLayer from "./LowerLayer";
import { NavDiv } from "./styles/navStyles";
import UpLayerNav from "./upLayer";

const Nav = () => {
  return (
    <NavDiv>
      <div className="UpperSection">
        <UpLayerNav />
      </div>

      <div className="LowerSection">
        <LowerLayer />
      </div>
    </NavDiv>
  );
};

export default memo(Nav);
