import React from "react";
import Ads from "./ads";
import Post from "./post";
import { PostAdsStructureDiv } from "./styles/PostStructure.style";

const PostAdsStructure = () => {
  return (
    <PostAdsStructureDiv>
      <div className="post">
        <Post />
      </div>
      <div className="ads">
        <Ads />
      </div>
    </PostAdsStructureDiv>
  );
};

export default PostAdsStructure;
