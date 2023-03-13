import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OtherUsers from "../../../components/Profile/OtherUsers";
import DashBoardServices from "../../../services/dashboardServices";
import { getOtherUserDetails } from "../../../store/actions/dashboardAction";
import DashbaordPageWrapper from "../../../universal-Components/DashobardPageWrapper";
import Loader1 from "../../../universal-Components/Loaders/loader1";

const OtherUsersPage = () => {
  const router = useRouter();

  const otherUsers = router.query.otherUsers;

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const userStore = useSelector((state) => state.DashboardReducers.userStore);

  const fetchAllArticle = async (user) => {
    setLoading(true);

    if (user) {
      const constants = await Promise.all([
        DashBoardServices.getOthersUserDetails(user),
        DashBoardServices.getAllFollowing(),
      ])
        .then((data) => {
          return data;
        })
        .catch((err) => {
          throw err;
        });

      if (userStore) {
        if (constants[0]?._id === userStore?._id) {
          router.push(`/dashboard/profile`);
        }
      }

      await DashBoardServices.getOtherUserSavePostCount(constants[0]?._id)
        .then((data) => {
          if (data?.data) {
            constants[0]["save_count"] = data?.data;
          } else {
            constants[0]["save_count"] = 0;
          }
        })
        .catch((err) => {
          throw err;
        });

      await DashBoardServices.getOtherUserFollowerCount(constants[0]?._id)
        .then((data) => {
          if (data?.data) {
            constants[0]["follower_count"] = data?.data;
          } else {
            constants[0]["follower_count"] = 0;
          }
        })
        .catch((err) => {
          throw err;
        });

      await DashBoardServices.getMyOtherUserFollowerCount(constants[0]?._id)
        .then((data) => {
          if (data?.data) {
            constants[0]["my_follower_count"] = data?.data;
          } else {
            constants[0]["my_follower_count"] = 0;
          }
        })
        .catch((err) => {
          throw err;
        });

      const checkIfFollowed = constants[1]?.data?.find(
        (item) => item?.followedUserId === constants[0]?._id
      );

      if (checkIfFollowed) {
        constants[0]["followed"] = true;
      } else {
        constants[0]["followed"] = false;
      }

      dispatch(getOtherUserDetails(constants[0]));
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllArticle(otherUsers);
  }, [otherUsers, userStore]);

  return (
    <DashbaordPageWrapper>
      {!loading ? <OtherUsers /> : <Loader1 />}
    </DashbaordPageWrapper>
  );
};

export default OtherUsersPage;
