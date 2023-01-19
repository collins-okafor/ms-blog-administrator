import React, { memo } from "react";
import { DashboardMinDiv } from "./styles/dashboardSidebar.style";
import { BsBell, BsSignpost2Fill } from "react-icons/bs";
import { FaClipboardList, FaStackExchange } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { GrUserAdmin } from "react-icons/gr";
import { FiEdit, FiHome } from "react-icons/fi";
import { CiNoWaitingSign } from "react-icons/ci";
import {
  MdPublishedWithChanges,
  MdDashboard,
  MdOutlineArticle,
  MdOutlineClose,
} from "react-icons/md";
import Logo from "../../assets/Icons/Blogger-logo-01.webp";
import Profile from "../../assets/Icons/avatar-profile-photo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { REDUCE_SIDEBAR } from "../../store/type";
import useWindowDimensions from "../../hooks/useWindowDimension";

const DashboardSideBarMin = () => {
  const router = useRouter();

  const width = useWindowDimensions();

  const dispatch = useDispatch();
  const reduceSideBar = useSelector(
    (state) => state.DashboardConditionReducers.reduceSideBar
  );

  const RouteToPage = (link) => {
    router.push(`${link}`);
  };

  const ReturnSideBar = () => {
    dispatch({ type: REDUCE_SIDEBAR, payload: false });
  };

  return (
    <DashboardMinDiv reduceSideBar={reduceSideBar}>
      <div className="firstSection">
        {/* <Image src={Logo} className="firstSection__image" alt="logo" /> */}
        <MdOutlineClose className="icon" onClick={ReturnSideBar} />
      </div>
      <div className="secondSection">
        {sideBarLink?.map((item, key) => (
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
          </div>
        ))}
      </div>
      {/* <div className="thirdSection">
        <div className="thirdSection__ImageDetails">
          <div className="thirdSection__ImageDetailsWrapper">
            <Image
              src={Profile}
              alt={"profile"}
              className="thirdSection__ImageDetailsImage"
            />
          </div>
        </div>
      </div> */}
    </DashboardMinDiv>
  );
};

const sideBarLink = [
  { logo: MdDashboard, title: "Overview", link: "/dashboard" },
  { logo: FiHome, title: "Dashboard", link: "/dashboard/overview" },
  { logo: BsBell, title: "Notifications", link: "/dashboard/notifications" },
  { logo: FaStackExchange, title: "Following", link: "/dashboard/followings" },
  { logo: FaClipboardList, title: "Stroies", link: "/dashboard/stories" },
  { logo: FiEdit, title: "Write", link: "/dashboard/write" },
  { logo: CiNoWaitingSign, title: "Pending", link: "/dashboard/pending" },
  {
    logo: MdPublishedWithChanges,
    title: "Published Post",
    link: "/dashboard/published",
  },
  { logo: MdOutlineArticle, title: "All post", link: "/dashboard/allPosts" },
  {
    logo: BsSignpost2Fill,
    title: "Post Media",
    link: "/dashboard/create_subtitle",
  },
  { logo: RiAdminFill, title: "Create Admin", link: "/dashboard/create_admin" },
];

export default memo(DashboardSideBarMin);
