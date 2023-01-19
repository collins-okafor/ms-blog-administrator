import Image from "next/image";
import { useRouter } from "next/router";
import React, { memo } from "react";
import { BsBell } from "react-icons/bs";
import { FaClipboardList, FaStackExchange } from "react-icons/fa";
import { FiEdit, FiHome } from "react-icons/fi";
import { DashbardSideBarDiv } from "./styles/dashbaordSidebar.style";
import { GrOverview } from "react-icons/gr";
import Logo from "../../assets/Icons/Blogger-logo-01.webp";
import Profile from "../../assets/Icons/avatar-profile-photo.png";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { REDUCE_SIDEBAR } from "../../store/type";

const DashboardSidebar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const reduceSideBar = useSelector(
    (state) => state.DashboardConditionReducers.reduceSideBar
  );

  const RouteToPage = (link) => {
    router.push(`${link}`);
  };

  const ReturnSideBar = () => {
    dispatch({ type: REDUCE_SIDEBAR, payload: true });
  };

  return (
    <DashbardSideBarDiv reduceSideBar={reduceSideBar}>
      <div className="firstSection">
        <Image src={Logo} className="firstSection__image" alt="logo" />
      </div>
      <div className="firstSection__upperSectionState" onClick={ReturnSideBar}>
        <MdOutlineClose className="sidebar__UpperLayerCancelIcon" />
      </div>

      <div className="secondSection">
        {sideBarLink?.map((item, key) => (
          <div
            key={key}
            className={`secondSection_dashboard ${
              router.asPath === item.link && "selected"
            }`}
            onClick={() => RouteToPage(item.link)}
          >
            <div className="secondSection_dashboardIconBody">
              <item.logo className="secondSection_dashboardIcon" />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div className="thirdSection">
        <div className="thirdSection__ImageDetails">
          <div className="thirdSection__ImageDetailsWrapper">
            <Image
              src={Profile}
              alt={"profile"}
              className="thirdSection__ImageDetailsImage"
            />
          </div>
        </div>
        <div className="thirdSection__infoDetials">
          <p className="thirdSection__infoDetialsUsername">Godfirst</p>
          <p className="thirdSection__infoDetialsEmail">
            joshuaejike4221@gmail.com
          </p>
        </div>
      </div>
    </DashbardSideBarDiv>
  );
};

const sideBarLink = [
  { logo: GrOverview, title: "Dashboard", link: "/dashboard" },
  { logo: FiHome, title: "Dashboard", link: "/dashboard" },
  { logo: BsBell, title: "Notifications", link: "/dashboard/notifications" },
  { logo: FaStackExchange, title: "Following", link: "/dashboard/followings" },
  { logo: FaClipboardList, title: "Stroies", link: "/dashboard/stories" },
  { logo: FiEdit, title: "Write", link: "/dashboard/write" },
];

export default memo(DashboardSidebar);
