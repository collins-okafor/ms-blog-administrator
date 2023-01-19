import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/CircleLoader";
import { withTheme } from "styled-components";
import { MainDiv } from "./main.style";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#E89B2D",
};

const MainLoader = ({ theme: { color }, sending }) => {
  //   let [loading, setLoading] = useState(true);
  //   let [color, setColor] = useState("#ffffff");

  return (
    <MainDiv color={color}>
      <div className={"spinnerbody"}>
        <ClipLoader
          //   color={"#E89B2D"}
          className={"spinner"}
          loading={sending}
          cssOverride={override}
          size={100}
        />
      </div>
    </MainDiv>
  );
};

export default withTheme(MainLoader);
