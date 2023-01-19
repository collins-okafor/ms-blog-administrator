import Image from "next/image";
import React from "react";
import Profile from "../../assets/Icons/avatar-profile-photo.png";
import { ViewProfileStyle } from "./styles/styles";
import { BsThreeDots } from "react-icons/bs";
import { useSelector } from "react-redux";
import NotFound from "../Notfound";
import { useRouter } from "next/router";

const ViewProfileCard = () => {
  const router = useRouter();
  const allFollowerDetails = useSelector(
    (state) => state.DashboardReducers.allFollowerDetails
  );

  const handleViewProfile = (item) => {
    router.push(`/dashboard/profile/${item.username}`);
  };

  return (
    <ViewProfileStyle>
      {allFollowerDetails === undefined ||
        allFollowerDetails === null ||
        (allFollowerDetails?.length === 0 && (
          <NotFound text={"not following anyone"} />
        ))}

      {allFollowerDetails.length > 0 &&
        allFollowerDetails.map((user, id) => (
          <div className="cardListSearchBody" key={id}>
            <div className="cardListSearchBodyImageWrapper">
              <div className="cardListSearchBodyImageBody">
                <Image
                  src={
                    user.profile_pic &&
                    (user.profile_pic.startsWith("http") ||
                      user.profile_pic.startsWith("/"))
                      ? `${user.profile_pic}`
                      : Profile
                  }
                  alt=""
                  width={100}
                  height={100}
                  className="cardListSearchBodyImage"
                />
              </div>
            </div>
            <div className="cardListSearchBodyUsername">
              <p>{user.username}</p>
            </div>
            <div
              className="cardListLink"
              onClick={() => handleViewProfile(user)}
            >
              <p>view profile</p>
            </div>
          </div>
        ))}
    </ViewProfileStyle>
  );
};

const followers = [
  {
    profileImage: "",
    userName: "John Wick",
    link: "#",
  },
  {
    profileImage: "",
    userName: "Joshua Ejike",
    link: "#",
  },
  {
    profileImage: "",
    userName: "Emeka Praise",
    link: "#",
  },
  {
    profileImage: "",
    userName: "ZealsDev",
    link: "#",
  },
];
export default ViewProfileCard;
