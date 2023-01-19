import React, { memo, useContext } from "react";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import { ThemeContext } from "../../pages/_app";
import { ModeDiv } from "./Styles/mode.style";
import { useSelector } from "react-redux";

const SystemMode = () => {
  const { HandleThemeProvider } = useContext(ThemeContext);
  const system_mode = useSelector(
    (state) => state.landingPageReducer.system_mode
  );
  return (
    <ModeDiv>
      {system_mode ? (
        <div onClick={HandleThemeProvider} className={"modeSytemIconBody"}>
          <ImSun className={"modeSytemIcon"} />
        </div>
      ) : (
        <div onClick={HandleThemeProvider} className={"modeSytemIconBody"}>
          <BsFillMoonFill className={"modeSytemIcon"} />
        </div>
      )}
    </ModeDiv>
  );
};

export default memo(SystemMode);
