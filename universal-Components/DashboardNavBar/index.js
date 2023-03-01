import React, { memo, useRef } from "react";
import { DashboardNavDiv } from "./styles/dashboardNav.style";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import SystemMode from "../../components/SystemMode";
import { BsBell } from "react-icons/bs";
import Image from "next/image";
import Profile from "../../assets/Icons/avatar-profile-photo.png";
import { useDispatch, useSelector } from "react-redux";
// import { REDUCE_SIDEBAR } from "../../store.js/type";
import { getLoginPageCounter } from "../../store/actions/authAction";
import { DASHBOARD_NAV_DROPDOWN, REDUCE_SIDEBAR } from "../../store/type";
import DashboarNavDropDown from "./dashboarNavDropDown";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import Skeleton from "@mui/material/Skeleton";

const DashboardNavBar = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const reduceSideBar = useSelector(
    (state) => state.DashboardConditionReducers.reduceSideBar
  );

  const dashbaordNavDropdown = useSelector(
    (state) => state.DashboardConditionReducers.dashbaordNavDropdown
  );

  const myUserDetails = useSelector(
    (state) => state.DashboardReducers.userStore
  );

  const HandleReduceSideBar = () => {
    dispatch({ type: REDUCE_SIDEBAR, payload: !reduceSideBar });
  };
  const handleSearch = () => {
    dispatch(getLoginPageCounter({ counter: 6 }));
  };

  useOnClickOutside(ref, () =>
    dispatch({
      type: DASHBOARD_NAV_DROPDOWN,
      payload: false,
    })
  );

  return (
    <DashboardNavDiv reduceSideBar={reduceSideBar}>
      <div className="firstSection">
        <div className="firstSection__Switch" onClick={HandleReduceSideBar}>
          <HiOutlineMenuAlt2 className="firstSection__SwitchIcon" />
        </div>
        <div className="firstSection__Search">
          <BiSearch
            className="firstSection__SearchIcon"
            onClick={handleSearch}
          />
        </div>
      </div>
      <div className="secondSection">
        <div className="secondSection__SystemSwitch">
          <SystemMode />
        </div>
        <div className="secondSection__notification">
          <BsBell className="secondSection__notificationIcon" />
        </div>
        <div className="secondSection__Profile">
          <div
            className="secondSection__ProfileWrapper"
            onClick={() => {
              dispatch({
                type: DASHBOARD_NAV_DROPDOWN,
                payload: !dashbaordNavDropdown,
              });
            }}
          >
            {(myUserDetails && Object.keys(myUserDetails).length === 0) ||
            !myUserDetails ||
            myUserDetails === null ||
            myUserDetails === undefined ? (
              <div>
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              </div>
            ) : (
              <Image
                src={
                  myUserDetails?.profile_pic &&
                  (myUserDetails.profile_pic.startsWith("http") ||
                    myUserDetails.profile_pic.startsWith("/"))
                    ? `${myUserDetails?.profile_pic}`
                    : Profile
                }
                width={100}
                height={100}
                alt={"profile"}
                className="secondSection__ProfileWrapperImage"
              />
            )}
          </div>
          <DashboarNavDropDown ref={ref} />
        </div>
      </div>
    </DashboardNavDiv>
  );
};

export default memo(DashboardNavBar);
