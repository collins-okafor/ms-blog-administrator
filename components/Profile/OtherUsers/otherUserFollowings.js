import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { FollowersDiv } from "../styles/follower.style";

const OtherUserFollowings = () => {
  const router = useRouter();

  const otherUserDetails = useSelector(
    (state) => state.DashboardReducers.otherUserDetails
  );

  const HandleShowFollowers = () => {
    router.push(`/dashboard/followings`);
  };

  return (
    <FollowersDiv>
      <div className="followersHeader">
        <p>Followings</p>
      </div>
      <div className="followersBody">
        <div className="followersBodyOne">
          <p className="followersBodynum">numbers of followings</p>
          <p className="followersBodycount">
            {otherUserDetails?.follower_count}
          </p>
        </div>
        {/* <div className="followersBodyTwo">
          <p className="followersBodyTwoList">link to view followers</p>
          <p className="followersBodyTwoView" onClick={HandleShowFollowers}>
            view followers
          </p>
        </div> */}
      </div>
    </FollowersDiv>
  );
};

export default OtherUserFollowings;
