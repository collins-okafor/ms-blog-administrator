import React from "react";
import { useSelector } from "react-redux";
import Ads from "./ads";
import MyStoriesPost from "./myStoriesPost";
import Post from "./post";
import { PostAdsStructureDiv } from "./styles/PostStructure.style";

const MyStoriesPostAdsStructure = () => {
  return (
    <PostAdsStructureDiv>
      <div className="post">
        <MyStoriesPost />
      </div>

      {/* <div className="ads">
        <Ads />
      </div> */}
    </PostAdsStructureDiv>
  );
};

export default MyStoriesPostAdsStructure;
