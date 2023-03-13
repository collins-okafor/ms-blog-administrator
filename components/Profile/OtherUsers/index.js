import React from "react";
import { useDispatch } from "react-redux";
import Ads from "../../../universal-Components/postAdsStructure/ads";
import { ProfileDiv } from "../styles/profile.style";
import OtherUserFollowers from "./otherUserFollowers";
import OtherUserFollowings from "./otherUserFollowings";
import OtherUserHeader from "./otherUserHeader";
import OtherUserList from "./otherUserList";

const OtherUsers = () => {
  return (
    <ProfileDiv>
      <div className="profileDetials">
        <div className="profileDetials__Header">
          <OtherUserHeader />
        </div>
        <div className="profileDetials__follower">
          <OtherUserFollowings />
        </div>

        <div className="profileDetials__follower">
          <OtherUserFollowers />
        </div>

        <div className="profileDetials__list">
          <OtherUserList />
        </div>
      </div>
      <div className="profileAds">
        <Ads />
      </div>
    </ProfileDiv>
  );
};

export default OtherUsers;
