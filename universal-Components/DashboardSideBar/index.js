import Image from "next/image";
import { useRouter } from "next/router";
import React, { memo } from "react";
import { BsBell, BsSignpost2Fill } from "react-icons/bs";
import {
  FaClipboard,
  FaClipboardCheck,
  FaClipboardList,
  FaStackExchange,
} from "react-icons/fa";
import { FiEdit, FiHome } from "react-icons/fi";
import { DashbardSideBarDiv } from "./styles/dashbaordSidebar.style";
import { GrOverview } from "react-icons/gr";
import WhiteLogo from "../../assets/Icons/Mariam_Blog_White.png";
import Logo from "../../assets/Icons/Mariam_Blog.png";
import Profile from "../../assets/Icons/avatar-profile-photo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  MdDashboard,
  MdNewLabel,
  MdOutlineArticle,
  MdOutlineClose,
  MdPublishedWithChanges,
} from "react-icons/md";
import { REDUCE_SIDEBAR } from "../../store/type";
import { RiAdminFill } from "react-icons/ri";
import { CiNoWaitingSign } from "react-icons/ci";
import useWindowDimensions from "../../hooks/useWindowDimension";

const DashboardSidebar = () => {
  const width = useWindowDimensions();
  const router = useRouter();
  const dispatch = useDispatch();
  const reduceSideBar = useSelector(
    (state) => state.DashboardConditionReducers.reduceSideBar
  );

  const myUserDetails = useSelector(
    (state) => state.DashboardReducers.userStore
  );

  const RouteToPage = (link) => {
    router.push(`${link}`);
  };

  const ReturnSideBar = () => {
    dispatch({ type: REDUCE_SIDEBAR, payload: false });
  };

  return (
    <DashbardSideBarDiv reduceSideBar={reduceSideBar}>
      <div className="firstSection">
        <Image
          src={WhiteLogo}
          width={160}
          className="firstSection__image"
          alt="logo"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="firstSection__upperSectionState" onClick={ReturnSideBar}>
        <MdOutlineClose className="sidebar__UpperLayerCancelIcon" />
      </div>

      <div className="secondSection">
        {sideBarLink?.map((item, key) => (
          <>
            {item?.title === "Create Admin" ? (
              <>
                {myUserDetails?.admin !== "normal" && (
                  <div
                    key={key}
                    className={`secondSection_dashboard ${
                      router.asPath === item.link && "selected"
                    }`}
                    onClick={() => {
                      RouteToPage(item.link);

                      if (typeof window !== "undefined") {
                        if (width?.width <= 1024) {
                          dispatch({ type: REDUCE_SIDEBAR, payload: false });
                        }
                      }
                    }}
                  >
                    <div className="secondSection_dashboardIconBody">
                      <item.logo className="secondSection_dashboardIcon" />
                    </div>
                    <p>{item.title}</p>
                  </div>
                )}
              </>
            ) : (
              <div
                key={key}
                className={`secondSection_dashboard ${
                  router.asPath === item.link && "selected"
                }`}
                onClick={() => {
                  RouteToPage(item.link);

                  if (typeof window !== "undefined") {
                    if (width?.width <= 1024) {
                      dispatch({ type: REDUCE_SIDEBAR, payload: false });
                    }
                  }
                }}
              >
                <div className="secondSection_dashboardIconBody">
                  <item.logo className="secondSection_dashboardIcon" />
                </div>
                <p>{item.title}</p>
              </div>
            )}
          </>
        ))}
      </div>
    </DashbardSideBarDiv>
  );
};

const sideBarLink = [
  { logo: MdDashboard, title: "OverView", link: "/dashboard" },
  { logo: FiHome, title: "Dashboard", link: "/dashboard/overview" },
  { logo: BsBell, title: "Notifications", link: "/dashboard/notifications" },
  { logo: FaStackExchange, title: "Following", link: "/dashboard/followings" },
  { logo: FaClipboardList, title: "Resent", link: "/dashboard/resent" },
  { logo: FaClipboard, title: "Rejected", link: "/dashboard/rejected" },
  { logo: FaClipboardCheck, title: "Stroies", link: "/dashboard/stories" },
  { logo: FiEdit, title: "Write", link: "/dashboard/write" },

  { logo: CiNoWaitingSign, title: "Pending", link: "/dashboard/pending" },
  {
    logo: MdPublishedWithChanges,
    title: "Published Post",
    link: "/dashboard/published",
  },
  {
    logo: MdNewLabel,
    title: "New Post",
    link: "/dashboard/new",
  },

  { logo: MdOutlineArticle, title: "All post", link: "/dashboard/allPosts" },
  {
    logo: BsSignpost2Fill,
    title: "Post Media",
    link: "/dashboard/create_subtitle",
  },
  { logo: RiAdminFill, title: "Create Admin", link: "/dashboard/create_admin" },
];

export default memo(DashboardSidebar);
