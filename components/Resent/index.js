import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useDispatch, useSelector } from "react-redux";
import DashBoardServices from "../../services/dashboardServices";
import Stories from "../../services/stories";
import { getDynamicPost } from "../../store/actions/generalAction";
import Loader1 from "../../universal-Components/Loaders/loader1";
import { StoriesDiv } from "./styles/stories.style";
import SpinnerMain from "../../universal-Components/Spinner/Spinner";
import MyStoriesPostAdsStructure from "../../universal-Components/postAdsStructure/myStoriesIndex";

const ResentPage = () => {
  const dispatch = useDispatch();
  const [stories, setStories] = useState(true);

  const [increament, setIncreament] = useState(0);
  const [pagination, setPagination] = useState(10);
  const [totalArticle, setTotalArticle] = useState(0);

  const dynamicPost = useSelector((state) => state.generalReducer.dynamicPost);

  const readMyStories = async () => {
    setStories(true);
    const constants = await Promise.all([
      Stories?.getMyNewStories(pagination),
      DashBoardServices.getAllYourSavedPost(),
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
        constants[1]?.data?.find((save) => save?.postId === item?._id);

      if (findArticle) {
        item["save"] = true;
      }

      item["followed"] = "my";
    });

    console.log(constants[0], "nexted so");
    dispatch(getDynamicPost(constants[0]?.data));
    setTotalArticle(constants[0]?.count);
    setStories(false);
  };

  useEffect(() => {
    readMyStories();
  }, []);

  return (
    <div>
      {stories && (
        <div>
          <Loader1 />
        </div>
      )}
      {!stories && (
        <InfiniteScroll
          pageStart={increament}
          loadMore={async () => {
            if (totalArticle > dynamicPost?.length) {
              const total = pagination * 2;
              const constants = await Promise.all([
                Stories?.getMyNewStories(),
                DashBoardServices.getAllYourSavedPost(),
              ])
                .then((data) => {
                  return data;
                })
                .catch((err) => {
                  throw err;
                });

              constants[0]?.map((item) => {
                const findArticle =
                  constants[1]?.data.length > 0 &&
                  constants[1]?.data?.find(
                    (save) => save?.postId === item?._id
                  );

                if (findArticle) {
                  item["save"] = true;
                }

                item["followed"] = "my";
              });

              dispatch(getDynamicPost(constants[0]?.data));
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
          <StoriesDiv>
            <div className="storiesWrapper">
              <h3>Your Resent Stories</h3>
            </div>
            <div>
              <MyStoriesPostAdsStructure />
            </div>
          </StoriesDiv>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default ResentPage;
