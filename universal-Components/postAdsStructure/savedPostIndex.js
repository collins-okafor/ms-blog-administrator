import React from "react";
import { useSelector } from "react-redux";
import Ads from "./ads";
import SavedPostStructure from "./savedPostStructure";
import { PostAdsStructureDiv } from "./styles/PostStructure.style";

const SavedPostIndex = () => {
  return (
    <PostAdsStructureDiv>
      <div className="post">
        <SavedPostStructure />
      </div>
      <div className="ads">
        <Ads />
      </div>
    </PostAdsStructureDiv>
  );
};

export default SavedPostIndex;
