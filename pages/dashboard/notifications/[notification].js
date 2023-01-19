import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DashBoardServices from "../../../services/dashboardServices";
import { getDynamicPost } from "../../../store/actions/generalAction";
import DashbaordPageWrapper from "../../../universal-Components/DashobardPageWrapper";
import Loader1 from "../../../universal-Components/Loaders/loader1";
import IndividualNotificationPage from "../../../components/Notification/individual-notification";

const IndividualNotification = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const notification = router.query.notification;

  const fetchSingleArticle = async (articleDetails) => {
    setLoading(true);

    if (articleDetails) {
      const constants = await Promise.all([
        DashBoardServices.getOtherUserArticle(articleDetails),
        DashBoardServices.getAllYourSavedPost(),
        DashBoardServices.getAllFollowing(),
      ])
        .then((data) => {
          return data;
        })
        .catch((err) => {
          throw err;
        });

      constants[0]?.data?.map((item) => {
        const findArticle =
          constants[1]?.data.length > 0 &&
          constants[1]?.data?.find((save) => save?.postId === item._id);

        if (findArticle) {
          item["save"] = true;
        }

        const findFollowers = constants[2]?.data?.find(
          (data) => data.followedUserId === item.createdBy
        );

        if (findFollowers) {
          item["followed"] = true;
        }
      });

      dispatch(getDynamicPost(constants[0]?.data));
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleArticle(notification);
  }, [notification]);

  return (
    <DashbaordPageWrapper>
      {!loading ? <IndividualNotificationPage /> : <Loader1 />}
    </DashbaordPageWrapper>
  );
};

export default IndividualNotification;
