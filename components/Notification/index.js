import React from "react";
import { useSelector } from "react-redux";
import CardList from "../../universal-Components/CardList";
import NotFound from "../../universal-Components/Notfound";
import Ads from "../../universal-Components/postAdsStructure/ads";
import { NotificationDiv } from "./styles/notification.style";

const NotificationPage = () => {
  const notificationState = useSelector(
    (state) => state.DashboardReducers.notificationState
  );

  return (
    <NotificationDiv>
      <div className="notificationHeader">
        <h3>Notifications</h3>
      </div>
      <div className="notificationContainer">
        <div className="notificationContainerCard">
          {notificationState?.length > 0 && <CardList />}

          {(notificationState === null ||
            notificationState === undefined ||
            notificationState?.length === 0) && (
            <NotFound text={"not following anyone"} />
          )}
        </div>
        <div className="notificationContainerAds">
          <Ads />
        </div>
      </div>
    </NotificationDiv>
  );
};

export default NotificationPage;
