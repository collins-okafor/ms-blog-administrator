import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useDispatch, useSelector } from "react-redux";
import DashboardPage from "../../components/Dashboard";
import DashBoardServices from "../../services/dashboardServices";
import {
  getDashboardAllArticle,
  getDashboardLoader,
  getDashboardSubtitle,
  getSubtitleSelectedTag,
  getTotalArticle,
  getUserStore,
} from "../../store/actions/dashboardAction";
import { getDynamicPost } from "../../store/actions/generalAction";
import DashbaordPageWrapper from "../../universal-Components/DashobardPageWrapper";
import SpinnerMain from "../../universal-Components/Spinner/Spinner";

const index = () => {
  const dispatch = useDispatch();

  const [increament, setIncreament] = useState(0);
  const [pagination, setPagination] = useState(10);

  const userStore = useSelector((state) => state.DashboardReducers.userStore);
  const dynamicPost = useSelector((state) => state.generalReducer.dynamicPost);

  const totalArticle = useSelector(
    (state) => state.DashboardReducers.totalArticle
  );

  const subtitleSelectedTag = useSelector(
    (state) => state.DashboardReducers.subtitleSelectedTag
  );

  const subtitleSelectedSubTag = useSelector(
    (state) => state.DashboardReducers.subtitleSelectedSubTag
  );

  const dashboard_Subtitle = useSelector(
    (state) => state.DashboardReducers.dashboard_Subtitle
  );

  const fetchAllArticle = async () => {
    dispatch(getDashboardLoader(true));
    const constants = await Promise.all([
      DashBoardServices.GetAllDashArticle(pagination),
      DashBoardServices.getAllYourSavedPost(),
      DashBoardServices.getAllFollowing(),
      // DashBoardServices.getTags(),
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

    dispatch(getDynamicPost(constants[0]?.data));
    dispatch(getTotalArticle(constants[0]?.count));
    dispatch(getDashboardAllArticle(constants[0]));
    // dispatch(getSubtitleSelectedTag(constants[3][0]?.title));
    // dispatch(getDashboardSubtitle(constants[3]));
    dispatch(getDashboardLoader(false));
  };

  useEffect(() => {
    dispatch(
      getSubtitleSelectedTag(
        dashboard_Subtitle[0] && dashboard_Subtitle[0]?.title
      )
    );
    fetchAllArticle();
  }, []);

  return (
    <DashbaordPageWrapper>
      {subtitleSelectedTag && subtitleSelectedSubTag ? (
        <InfiniteScroll
          pageStart={increament}
          loadMore={async () => {
            if (totalArticle > dynamicPost?.length) {
              const total = pagination * 2;
              const constants = await Promise.all([
                DashBoardServices.SubTagsArticle(
                  pagination,
                  subtitleSelectedTag,
                  subtitleSelectedSubTag
                ),
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

              dispatch(getDynamicPost(constants[0]?.data));
              dispatch(getDashboardAllArticle(constants[0]));
              dispatch(getTotalArticle(constants[0]?.count));
              setIncreament((prev) => prev + 1);
              setPagination((prev) => prev * 2);
            }
          }}
          hasMore={true || false}
          loader={
            <div>
              {totalArticle > dynamicPost?.length && (
                <div className="loader" key={0}>
                  <SpinnerMain />
                </div>
              )}
            </div>
          }
        >
          <DashboardPage />
        </InfiniteScroll>
      ) : subtitleSelectedTag === dashboard_Subtitle[0]?.title ? (
        <InfiniteScroll
          pageStart={increament}
          loadMore={async () => {
            if (totalArticle > dynamicPost?.length) {
              const total = pagination * 2;
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

              dispatch(getDynamicPost(constants[0]?.data));
              dispatch(getDashboardAllArticle(constants[0]));
              dispatch(getTotalArticle(constants[0]?.count));
              setIncreament((prev) => prev + 1);
              setPagination((prev) => prev * 2);
            }
          }}
          hasMore={true || false}
          loader={
            <div>
              {totalArticle > dynamicPost?.length && (
                <div className="loader" key={0}>
                  <SpinnerMain />
                </div>
              )}
            </div>
          }
        >
          <DashboardPage />
        </InfiniteScroll>
      ) : (
        <InfiniteScroll
          pageStart={increament}
          loadMore={async () => {
            if (totalArticle > dynamicPost?.length) {
              const total = pagination * 2;
              const constants = await Promise.all([
                DashBoardServices.TabArticle(pagination, subtitleSelectedTag),
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

              dispatch(getDynamicPost(constants[0]?.data));
              dispatch(getDashboardAllArticle(constants[0]));
              dispatch(getTotalArticle(constants[0]?.count));
              setIncreament((prev) => prev + 1);
              setPagination((prev) => prev * 2);
            }
          }}
          hasMore={true || false}
          loader={
            <div>
              {totalArticle > dynamicPost?.length && (
                <div className="loader" key={0}>
                  <SpinnerMain />
                </div>
              )}
            </div>
          }
        >
          <DashboardPage />
        </InfiniteScroll>
      )}
    </DashbaordPageWrapper>
  );
};

export default index;
