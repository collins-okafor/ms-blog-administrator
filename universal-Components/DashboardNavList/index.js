import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashBoardServices from "../../services/dashboardServices";
import {
  getDashboardAllArticle,
  getDashboardLoader,
  getSubtitleSelectedTag,
  getTotalArticle,
} from "../../store/actions/dashboardAction";
import { NavListDiv } from "./style/navlist.style";
import { getDynamicPost } from "../../store/actions/generalAction";
import { Skeleton } from "@mui/material";

const DashboardNavList = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState(0);

  const [increament, setIncreament] = useState(0);
  const [pagination, setPagination] = useState(10);
  const [totalArticle, setTotalArticle] = useState(0);

  const userStore = useSelector((state) => state.DashboardReducers.userStore);

  const subtitleLoaderConfiguration = useSelector(
    (state) => state.DashboardReducers.subtitleLoaderConfiguration
  );

  const dashboard_Subtitle = useSelector(
    (state) => state.DashboardReducers.dashboard_Subtitle
  );

  const subtitleSelectedTag = useSelector(
    (state) => state.DashboardReducers.subtitleSelectedTag
  );

  const handleTags = async (details) => {
    dispatch(getDashboardLoader(true));

    if (details.title === dashboard_Subtitle[0].title) {
      const constants = await Promise.all([
        DashBoardServices.GetAllDashArticle(pagination),
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

        if (userStore?._id === item.createdBy) {
          item["followed"] = "my";
        }
      });

      dispatch(getSubtitleSelectedTag(details?.title));
      dispatch(getDynamicPost(constants[0]?.data));
      dispatch(getTotalArticle(constants[0]?.count));
      dispatch(getDashboardAllArticle(constants[0]));
      dispatch(getDashboardLoader(false));
    } else {
      const constants = await Promise.all([
        DashBoardServices.TabArticle(pagination, details?.title),
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

        if (userStore?._id === item.createdBy) {
          item["followed"] = "my";
        }
      });

      dispatch(getSubtitleSelectedTag(details?.title));
      dispatch(getDynamicPost(constants[0]?.data));
      setTotalArticle(constants[0]?.count);
      dispatch(getDashboardAllArticle(constants[0]));
      dispatch(getDashboardLoader(false));
    }
  };

  return (
    <NavListDiv>
      {subtitleLoaderConfiguration ? (
        <Skeleton animation="wave" height={50} width={180} />
      ) : (
        <>
          {dashboard_Subtitle?.map((item, key) => (
            <div
              key={key}
              className={`NavListWrapper ${
                subtitleSelectedTag === item.title && "selected"
              }`}
              onClick={() => handleTags(item)}
            >
              <p className="NavListData">{item.title}</p>
            </div>
          ))}
        </>
      )}
    </NavListDiv>
  );
};

export default DashboardNavList;
