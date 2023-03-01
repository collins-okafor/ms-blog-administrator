import React, { useState } from "react";
import FollowersProfileCard from "../../universal-Components/FollowersProfileCard";
import Ads from "../../universal-Components/postAdsStructure/ads";
import SavedPostIndex from "../../universal-Components/postAdsStructure/savedPostIndex";
import ViewProfileCard from "../../universal-Components/viewProfileCard";
import { StyledTabDisplay } from "./styles/style.tabDisplay";

const TabDisplay = () => {
  const [display, setDisplay] = useState("following");

  const handleTabOne = () => {
    setDisplay("following");
  };

  const handleTabTwo = () => {
    setDisplay("savedpost");
  };

  const handleTabThree = () => {
    setDisplay("followers");
  };

  return (
    <StyledTabDisplay display={display}>
      <div className="buttonContainer">
        <button onClick={handleTabOne} className="tabOneBtn">
          Following
        </button>

        <button onClick={handleTabThree} className="tabThreeBtn">
          Followers
        </button>

        <button onClick={handleTabTwo} className="tabTwoBtn">
          Saved Posts
        </button>
      </div>

      <div className="tabOneDisplay">
        <h1 className="header-text">Following</h1>
        <div className="tabContainer">
          <div className="leftContent">
            <ViewProfileCard />
          </div>
          {/* <div className="rightContent">
            <Ads />
          </div> */}
        </div>
      </div>

      <div className="tabThreeDisplay">
        <h1 className="header-text">Followers</h1>
        <div className="tabContainer">
          <div className="leftContent">
            <FollowersProfileCard />
          </div>
          {/* <div className="rightContent">
            <Ads />
          </div> */}
        </div>
      </div>

      <div className="tabTwoDisplay">
        <h1 className="header-text">Saved</h1>
        <div className="tabContainer">
          <SavedPostIndex />
        </div>
      </div>
    </StyledTabDisplay>
  );
};

export default TabDisplay;
