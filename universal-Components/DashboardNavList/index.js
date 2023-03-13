import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashBoardServices from "../../services/dashboardServices";
import {
  getDashboardAllArticle,
  getDashboardLoader,
  getSubTagDetails,
  getSubtitleSelectedTag,
  getTotalArticle,
} from "../../store/actions/dashboardAction";
import { NavListDiv } from "./style/navlist.style";
import { getDynamicPost } from "../../store/actions/generalAction";
import { Skeleton } from "@mui/material";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { useRef } from "react";

const DashboardNavList = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const [list, setList] = useState(0);

  const [increament, setIncreament] = useState(0);
  const [pagination, setPagination] = useState(10);
  const [totalArticle, setTotalArticle] = useState(0);

  const [showDropDown, setShowDropDown] = useState({});

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
      setTotalArticle(constants[0]?.count);
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
      dispatch(getTotalArticle(constants[0]?.count));
      dispatch(getDashboardAllArticle(constants[0]));
      dispatch(getDashboardLoader(false));
    }
  };

  const handleSubTags = async (tag, details) => {
    dispatch(getDashboardLoader(true));

    const constants = await Promise.all([
      DashBoardServices.SubTagsArticle(
        pagination,
        tag?.title,
        details?.subcontent
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

    dispatch(getSubtitleSelectedTag(tag?.title));
    dispatch(getSubTagDetails(details?.subcontent));
    dispatch(getDynamicPost(constants[0]?.data));
    dispatch(getTotalArticle(constants[0]?.count));
    setTotalArticle(constants[0]?.count);
    dispatch(getDashboardAllArticle(constants[0]));
    dispatch(getDashboardLoader(false));
  };

  const HandleShowADropdown = (data) => {
    if (!data?.sub) {
      setShowDropDown({});
    } else {
      if (showDropDown?.id === data?._id) {
        setShowDropDown({ ...showDropDown, checker: !showDropDown?.checker });
      } else {
        setShowDropDown({ id: data?._id, checker: true });
      }
    }
  };

  useOnClickOutside(ref, () => {
    setShowDropDown({ ...showDropDown, checker: false });
    dispatch(getSubTagDetails(""));
  });

  return (
    <NavListDiv showDropDown={showDropDown}>
      {subtitleLoaderConfiguration ? (
        <Skeleton animation="wave" height={50} width={180} />
      ) : (
        <>
          {dashboard_Subtitle?.map((item, key) => (
            <div
              key={key}
              className={`NavListWrapper ${
                subtitleSelectedTag === item.title && "selected"
              } ${item?.sub?.length > 0 && "subAdded"}`}
              onClick={() => {
                if (item?.sub?.length > 0) {
                } else {
                  dispatch(getSubTagDetails(""));
                  handleTags(item);
                }
              }}
            >
              <div
                className="must_wrap"
                onClick={() => {
                  HandleShowADropdown(item);

                  if (item?.sub?.length > 0) {
                    if (item?._id !== showDropDown?.id) {
                      dispatch(getSubTagDetails(""));
                      handleTags(item);
                    }
                  }
                }}
              >
                <p className="NavListData">{item.title}</p>

                {item?.sub?.length > 0 && (
                  <div>
                    {showDropDown?.id === item?._id &&
                    showDropDown?.checker === true ? (
                      <div className="searchIconBody">
                        <IoIosArrowUp className="searchIcon" />
                      </div>
                    ) : (
                      <div className="searchIconBody">
                        <IoIosArrowDown className="searchIcon" />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {showDropDown?.id === item?._id &&
                item?.sub?.length > 0 &&
                showDropDown?.checker && (
                  <div className="showDropDownWrapper" ref={ref}>
                    <div className="dropdown_wrapper">
                      <p
                        key={key}
                        onClick={() => {
                          HandleShowADropdown(item);

                          if (item?.sub?.length > 0) {
                            dispatch(getSubTagDetails(""));
                            handleTags(item);
                          }
                        }}
                      >
                        all
                      </p>
                      {item?.sub?.map((data, key) => (
                        <p
                          key={key}
                          onClick={() => {
                            HandleShowADropdown(item);

                            handleSubTags(item, data);
                          }}
                        >
                          {data?.subcontent}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          ))}
        </>
      )}
    </NavListDiv>
  );
};

export default DashboardNavList;
