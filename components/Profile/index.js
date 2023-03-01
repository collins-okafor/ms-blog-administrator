import React from "react";
import { useDispatch } from "react-redux";
import Ads from "../../universal-Components/postAdsStructure/ads";
import Followers from "./followers";
import List from "./list";
import ProfileHeader from "./profileHeader";
import { ProfileDiv } from "./styles/profile.style";

const ProfilePage = () => {
  return (
    <ProfileDiv>
      <div className="profileDetials">
        <div className="profileDetials__Header">
          <ProfileHeader />
        </div>
        <div className="profileDetials__follower">
          <Followers />
        </div>
        <div className="profileDetials__list">
          <List />
        </div>
      </div>
      <div className="profileAds">
        <Ads />
      </div>
    </ProfileDiv>
  );
};

export default ProfilePage;
