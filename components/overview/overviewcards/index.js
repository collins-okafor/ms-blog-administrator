import React, { useEffect, useState } from "react";
import { StyledOverView } from "./styles/styles";
import { CiNoWaitingSign } from "react-icons/ci";
import { MdPublishedWithChanges, MdOutlineArticle } from "react-icons/md";
import Ads from "../../../universal-Components/postAdsStructure/ads";
import Post from "../../../universal-Components/postAdsStructure/post";
import PostVerify from "../../../universal-Components/postAdsStructure/postVerify";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import DashBoardServices from "../../../services/dashboardServices";
import {
  getDashboardAllArticle,
  getDashboardLoader,
  getPending,
  getPublish,
  getTotal,
} from "../../../store/actions/dashboardAction";
import { getDynamicPost } from "../../../store/actions/generalAction";
import MainLoader from "../../../universal-Components/Spinner/MainLoader";
import Loader1 from "../../../universal-Components/Loaders/loader1";
// { logo: CiNoWaitingSign, title: "Pending", link: "#" },
// { logo: MdPublishedWithChanges, title: "Published Post", link: "#" },
// { logo: MdOutlineArticle, title: "All post", link: "#" },

const CardOverview = () => {
  const dispatch = useDispatch();

  // const [loading, setLoading] = useState(false);
  const loading = useSelector(
    (state) => state.DashboardReducers.DashboardLoader
  );

  const userStore = useSelector((state) => state.DashboardReducers.userStore);

  // const dynamicPost = useSelector((state) => state.generalReducer.dynamicPost);
  // const dashboardAllArticle = useSelector(
  //   (state) => state.DashboardReducers.dashboardAllArticle
  // );

  const pending = useSelector((state) => state.DashboardReducers.pending);

  const publish = useSelector((state) => state.DashboardReducers.publish);

  const total = useSelector((state) => state.DashboardReducers.total);

  const fetchAllArticle = async () => {
    dispatch(getDashboardLoader(true));
    const constants = await Promise.all([
      DashBoardServices.GetTotalPost(10),
      DashBoardServices.getAllYourSavedPost(),
      DashBoardServices.getAllFollowing(),
      DashBoardServices.PendingArticle(),
      DashBoardServices.PublishArticle(),
      DashBoardServices.TotalArticle(),
    ])
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw err;
      });

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
      dispatch(getPending(constants[3]?.data));
      dispatch(getPublish(constants[4]?.data));
      dispatch(getTotal(constants[5]?.data));
      dispatch(getDashboardLoader(false));
    }
  };

  useEffect(() => {
    fetchAllArticle();
  }, []);

  return (
    <StyledOverView>
      {loading && (
        <div style={{ width: "100%", margin: "30px 0px" }}>
          <Loader1 />
        </div>
      )}

      {!loading && (
        <>
          <div className="left">
            <div className="cardContainer">
              <Link href="/dashboard/allPosts" className="card">
                <div className="text">
                  <h5>All posts</h5>
                  <h3>{total}</h3>
                  <p>Total post in the system</p>
                </div>
                <div className="iconNum">
                  <MdOutlineArticle
                    className="icon"
                    style={{ color: "#E89B2D" }}
                  />
                </div>
              </Link>
              <Link href="/dashboard/pending" className="card">
                <div className="text">
                  <h5>Pending posts</h5>
                  <h3>{pending || 0}</h3>
                  <p>pending post in the system</p>
                </div>
                <div className="iconNum">
                  <CiNoWaitingSign className="icon" style={{ color: "red" }} />
                </div>
              </Link>
              <Link href="/dashboard/published" className="card">
                <div className="text">
                  <h5>Published posts</h5>
                  <h3>{publish || 0}</h3>
                  <p>Publish post in the system</p>
                </div>
                <div className="iconNum">
                  <MdPublishedWithChanges
                    className="icon"
                    style={{ color: "green" }}
                  />
                </div>
              </Link>
            </div>
            <PostVerify />
          </div>
          <div className="adsDisplay">
            <Ads />
          </div>
        </>
      )}
    </StyledOverView>
  );
};

export default CardOverview;
