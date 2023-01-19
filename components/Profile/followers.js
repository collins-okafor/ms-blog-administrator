import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { FollowersDiv } from "./styles/follower.style";
import Skeleton from "@mui/material/Skeleton";

const Followers = () => {
  const router = useRouter();

  const myUserDetails = useSelector(
    (state) => state.DashboardReducers.myUserDetails
  );

  const HandleShowFollowers = () => {
    router.push(`/dashboard/followings`);
  };

  return (
    <FollowersDiv>
      <div className="followersHeader">
        <p>Followers</p>
      </div>
      <div className="followersBody">
        <div className="followersBodyOne">
          <p className="followersBodynum">numbers of followers</p>
          {!myUserDetails ? (
            <div>
              <Skeleton animation="wave" height={50} width={180} />
            </div>
          ) : (
            <p className="followersBodycount">
              {myUserDetails?.follower_count}
            </p>
          )}
        </div>
        <div className="followersBodyTwo">
          <p className="followersBodyTwoList">link to view followers</p>
          <p className="followersBodyTwoView" onClick={HandleShowFollowers}>
            view followers
          </p>
        </div>
      </div>
    </FollowersDiv>
  );
};

export default Followers;
