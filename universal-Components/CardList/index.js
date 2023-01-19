import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Profile from "../../assets/Icons/avatar-profile-photo.png";
import { CardListDiv } from "./styles/cardList.style";

const CardList = () => {
  const router = useRouter();

  const notificationState = useSelector(
    (state) => state.DashboardReducers.notificationState
  );

  const RouteToHisArticle = (item) => {
    router.push(`/dashboard/notifications/${item.followedUserId}`);
  };

  return (
    <CardListDiv>
      {notificationState?.map((item, key) => (
        <div
          key={key}
          className="cardListSearchBody"
          onClick={() => RouteToHisArticle(item)}
        >
          <div className="cardListSearchBodyImageWrapper">
            <div className="cardListSearchBodyImageBody">
              <Image
                src={
                  item.profile_pic &&
                  (item.profile_pic.startsWith("http") ||
                    item.profile_pic.startsWith("/"))
                    ? `${item.profile_pic}`
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
            <p>{item.username}</p>
          </div>
          <div className="cardListSearchBodyNotificationList">
            <div className="cardListSearchBodyNotificationListSystem">
              {item.followers_article_count}
            </div>
          </div>
        </div>
      ))}
    </CardListDiv>
  );
};

export default CardList;
