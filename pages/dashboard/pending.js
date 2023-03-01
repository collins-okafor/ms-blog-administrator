import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useDispatch, useSelector } from "react-redux";
import CardOverview from "../../components/overview/overviewcards";
import PublishedComp from "../../components/postStatuses/published";
import DashBoardServices from "../../services/dashboardServices";
import {
  getDashboardAllArticle,
  getDashboardLoader,
  getPending,
  getPublish,
  getTotal,
} from "../../store/actions/dashboardAction";
import { getDynamicPost } from "../../store/actions/generalAction";
import DashbaordPageWrapper from "../../universal-Components/DashobardPageWrapper";
import Loader1 from "../../universal-Components/Loaders/loader1";
``;
const PublishedPosts = () => {
  const dispatch = useDispatch();

  const [increament, setIncreament] = useState(0);
  const [pagination, setPagination] = useState(10);
  const [totalArticle, setTotalArticle] = useState(0);

  const loading = useSelector(
    (state) => state.DashboardReducers.DashboardLoader
  );
  const userStore = useSelector((state) => state.DashboardReducers.userStore);
  const dynamicPost = useSelector((state) => state.generalReducer.dynamicPost);

  console.log(dynamicPost, "make we see");

  const fetchAllArticle = async () => {
    dispatch(getDashboardLoader(true));
    const constants = await Promise.all([
      DashBoardServices.PendingArticlePost(pagination),
      DashBoardServices.getAllYourSavedPost(),
      DashBoardServices.getAllFollowing(),
      // DashBoardServices.PendingArticle(),
      // DashBoardServices.PublishArticle(),
      // DashBoardServices.TotalArticle(),
    ])
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw err;
      });

    console.log(constants, "System");
    if (constants) {
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
      // setTotalArticle(constants[0]?.count);
      dispatch(getDashboardAllArticle(constants[0]));
      // dispatch(getPending(constants[3]?.data));
      // dispatch(getPublish(constants[4]?.data));
      // dispatch(getTotal(constants[5]?.data));
      dispatch(getDashboardLoader(false));
    }
  };

  useEffect(() => {
    fetchAllArticle();
  }, []);

  return (
    <DashbaordPageWrapper>
      <h1>Pending Post</h1>

      {loading && (
        <div style={{ width: "100%", margin: "30px 0px" }}>
          <Loader1 />
        </div>
      )}

      {!loading && (
        <InfiniteScroll
          pageStart={increament}
          loadMore={async () => {
            if (totalArticle > dynamicPost?.length) {
              const total = pagination * 2;
              const constants = await Promise.all([
                DashBoardServices.PendingArticlePost(pagination),
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
              setTotalArticle(constants[0]?.count);
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
          <PublishedComp />
        </InfiniteScroll>
      )}
    </DashbaordPageWrapper>
  );
};

export default PublishedPosts;
