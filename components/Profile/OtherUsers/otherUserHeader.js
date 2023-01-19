import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Profile from "../../../assets/Icons/avatar-profile-photo.png";
import DashBoardServices from "../../../services/dashboardServices";
import { getOtherUserDetails } from "../../../store/actions/dashboardAction";
import LoaderBob from "../../../universal-Components/Loaders/loaderBob";
import { ProfileHeaderDiv } from "../styles/profileHeader.style";
import Skeleton from "@mui/material/Skeleton";

const OtherUserHeader = () => {
  const dispatch = useDispatch();

  const [change, setChange] = useState(false);

  const [loading, setLoading] = useState(false);

  const otherUserDetails = useSelector(
    (state) => state.DashboardReducers.otherUserDetails
  );

  const FollowThisUser = async () => {
    setLoading(true);

    const payload = {
      email: otherUserDetails?.email,
      username: otherUserDetails?.username,
      followedUserId: otherUserDetails?._id,
    };

    const newData = { ...otherUserDetails, followed: true };

    dispatch(getOtherUserDetails(newData));

    await DashBoardServices.createFollowers(payload)
      .then((data) => {
        toast("followed successfully");
        setLoading(false);
      })
      .catch((err) => {
        throw err;
      });

    setChange(!change);
  };

  const UnFollowThisUser = async () => {
    setLoading(true);

    const newData = { ...otherUserDetails, followed: false };

    dispatch(getOtherUserDetails(newData));

    await DashBoardServices.deleteFollowing(otherUserDetails?._id)
      .then((data) => {
        toast("successfully unfollowed");
        setLoading(false);
      })
      .catch((err) => {
        throw err;
      });

    setChange(!change);
  };

  return (
    <ProfileHeaderDiv>
      <div className="profileHeadeWrapper">
        <Image src={Profile} alt="" className="profileHeadeWrapper__profile" />
      </div>
      <div className="profileHeadeWrapper_profileText">
        <div className="profileHeadeWrapper_profileTextDetails">
          <h3>{otherUserDetails?.username}</h3>
          <p>{otherUserDetails?.bio}</p>
        </div>
        {!otherUserDetails?.followed ? (
          <>
            {loading ? (
              <div className="profileHeadeWrapper_profileTextEdit">
                <div className="profileHeadeWrapper_profileTextEditState">
                  <LoaderBob />
                </div>
              </div>
            ) : (
              <div
                className="profileHeadeWrapper_profileTextEdit"
                onClick={FollowThisUser}
              >
                <p>follow</p>
              </div>
            )}
          </>
        ) : (
          <>
            {loading ? (
              <div className="profileHeadeWrapper_profileTextEdit">
                <div className="profileHeadeWrapper_profileTextEditState">
                  <LoaderBob />
                </div>
              </div>
            ) : (
              <div
                className="profileHeadeWrapper_profileTextEdit"
                onClick={UnFollowThisUser}
              >
                <p>unFollow</p>
              </div>
            )}
          </>
        )}
      </div>
    </ProfileHeaderDiv>
  );
};

export default OtherUserHeader;
