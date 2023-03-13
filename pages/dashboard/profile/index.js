import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProfilePage from "../../../components/Profile";
import DashBoardServices from "../../../services/dashboardServices";
import {
  getMyUserDetails,
  getRefreshUserDetails,
} from "../../../store/actions/dashboardAction";
import DashbaordPageWrapper from "../../../universal-Components/DashobardPageWrapper";
import Loader1 from "../../../universal-Components/Loaders/loader1";

const Profile = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchAllArticle = async () => {
    setLoading(true);

    const constants = await Promise.all([
      DashBoardServices.getUserDetails(),
      DashBoardServices.getSavePostCount(),
      DashBoardServices.getFollowerCount(),
      DashBoardServices.getMyFollowerCount(),
    ])
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw err;
      });

    if (constants[0]) {
      if (constants[1].data) {
        constants[0]["save_count"] = constants[1]?.data;
      } else {
        constants[0]["save_count"] = 0;
      }

      if (constants[2]?.data) {
        constants[0]["follower_count"] = constants[2]?.data;
      } else {
        constants[0]["follower_count"] = 0;
      }
      console.log(constants[3]?.data, "restart");
      if (constants[3]?.data) {
        constants[0]["my_follower_count"] = constants[3]?.data;
      } else {
        constants[0]["my_follower_count"] = 0;
      }
    }

    dispatch(getMyUserDetails(constants[0]));
    dispatch(getRefreshUserDetails(constants[0]));
    setLoading(false);
  };

  useEffect(() => {
    fetchAllArticle();
  }, []);

  return (
    <DashbaordPageWrapper>
      {!loading ? <ProfilePage /> : <Loader1 />}
    </DashbaordPageWrapper>
  );
};

Profile.auth = true;

export default Profile;
