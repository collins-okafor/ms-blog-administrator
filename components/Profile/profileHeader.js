import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../../assets/Icons/avatar-profile-photo.png";
import { getLoginPageCounter } from "../../store/actions/authAction";
import { ProfileHeaderDiv } from "./styles/profileHeader.style";
import Skeleton from "@mui/material/Skeleton";

const ProfileHeader = () => {
  const dispatch = useDispatch();

  const myUserDetails = useSelector(
    (state) => state.DashboardReducers.myUserDetails
  );

  const handleEdit = () => {
    dispatch(getLoginPageCounter({ counter: 5 }));
  };

  return (
    <ProfileHeaderDiv>
      <div className="profileHeadeWrapper">
        {!myUserDetails ? (
          <div>
            <Skeleton
              animation="wave"
              variant="circular"
              width={150}
              height={150}
            />
          </div>
        ) : (
          <Image
            src={
              myUserDetails.profile_pic &&
              (myUserDetails.profile_pic.startsWith("http") ||
                myUserDetails.profile_pic.startsWith("/"))
                ? `${myUserDetails.profile_pic}`
                : Profile
            }
            alt=""
            width={150}
            height={150}
            className="profileHeadeWrapper__profile"
          />
        )}
      </div>
      <div className="profileHeadeWrapper_profileText">
        <div className="profileHeadeWrapper_profileTextDetails">
          {!myUserDetails ? (
            <div>
              <Skeleton animation="wave" height={50} width={180} />
            </div>
          ) : (
            <h3>{myUserDetails?.username}</h3>
          )}

          {!myUserDetails ? (
            <div>
              <Skeleton animation="wave" height={50} width={180} />
            </div>
          ) : (
            <p>{myUserDetails?.bio}</p>
          )}
        </div>
        <div className="profileHeadeWrapper_profileTextEdit">
          {!myUserDetails ? (
            <div>
              <Skeleton animation="wave" height={50} width={180} />
            </div>
          ) : (
            <p onClick={handleEdit}>Edit Profile</p>
          )}
        </div>
      </div>
    </ProfileHeaderDiv>
  );
};

export default ProfileHeader;
