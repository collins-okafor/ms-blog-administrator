import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Following from "../../components/following";
import DashBoardServices from "../../services/dashboardServices";
import {
  getAllFollowingDetails,
  getMyFollowers,
  getSavedPost,
} from "../../store/actions/dashboardAction";
import DashbaordPageWrapper from "../../universal-Components/DashobardPageWrapper";
import Loader1 from "../../universal-Components/Loaders/loader1";

const Followings = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const userStore = useSelector((state) => state.DashboardReducers.userStore);

  const fetchAllArticle = async () => {
    setLoading(true);

    const constants = await Promise.all([
      DashBoardServices.getAllYourSavedPost(),
      DashBoardServices.getAllFollowing(),
      DashBoardServices.getAllFollowers(),
    ])
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw err;
      });

    constants[0]?.data?.map((item) => {
      const findFollowers = constants[1]?.data?.find(
        (data) => data.followedUserId === item.createdBy
      );

      if (findFollowers) {
        item["followed"] = true;
      }

      if (userStore) {
        if (userStore?._id === item.createdBy) {
          item["followed"] = "my";
        }
      }
    });

    dispatch(getSavedPost(constants[0]?.data));
    dispatch(getAllFollowingDetails(constants[1]?.data));
    dispatch(getMyFollowers(constants[2]?.data));
    setLoading(false);
  };

  useEffect(() => {
    fetchAllArticle();
  }, [userStore]);

  return (
    <DashbaordPageWrapper>
      {loading && <Loader1 />}

      {!loading && <Following />}
    </DashbaordPageWrapper>
  );
};

Followings.auth = true;

export default Followings;
