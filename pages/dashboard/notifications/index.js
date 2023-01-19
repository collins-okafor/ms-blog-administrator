import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import NotificationPage from "../../../components/Notification";
import DashBoardServices from "../../../services/dashboardServices";
import { getNotificationState } from "../../../store/actions/dashboardAction";
import DashbaordPageWrapper from "../../../universal-Components/DashobardPageWrapper";
import Loader1 from "../../../universal-Components/Loaders/loader1";

const Notifications = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchSingleArticle = async () => {
    setLoading(true);
    await DashBoardServices.getNotificationOfFollowers()
      .then((data) => {
        dispatch(getNotificationState(data?.data));
        setLoading(false);
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    fetchSingleArticle();
  }, []);

  return (
    <DashbaordPageWrapper>
      {!loading ? <NotificationPage /> : <Loader1 />}
    </DashbaordPageWrapper>
  );
};

export default Notifications;
