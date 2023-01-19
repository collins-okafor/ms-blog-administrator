import React from "react";
import Ads from "../../universal-Components/postAdsStructure/ads";
import PostVerify from "../../universal-Components/postAdsStructure/postVerify";
import { StyledPublishedPost } from "./styles/published.styles";

const PublishedComp = () => {
  return (
    <StyledPublishedPost>
      <div className="left">
        <PostVerify />
      </div>
      <div className="right">
        <Ads />
      </div>
    </StyledPublishedPost>
  );
};

export default PublishedComp;
