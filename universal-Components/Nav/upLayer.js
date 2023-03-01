import Image from "next/image";
import React, { memo } from "react";
import Logo from "../../assets/Icons/Mariam_Blog_White.png";
import { NavUpLayer } from "./styles/navUpLayer";
import { withTheme } from "styled-components";
import SystemMode from "../../components/SystemMode";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { getShowHideSidebar } from "../../store/actions/landingPageAction";
import { getLoginPageCounter } from "../../store/actions/authAction";

const UpLayerNav = () => {
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(getShowHideSidebar(true));
  };

  const showSignUp = () => {
    dispatch(getLoginPageCounter({ counter: 0 }));
  };

  const showSignIn = () => {
    dispatch(getLoginPageCounter({ counter: 2 }));
  };

  const handleSearch = () => {
    dispatch(getLoginPageCounter({ counter: 4 }));
  };
  return (
    <NavUpLayer>
      <div className="menu" onClick={handleSidebar}>
        <FiMenu className="menuIcon" />
      </div>
      <div className="navUpLayerLogo">
        <Image src={Logo} alt={"logo"} />
      </div>
      <div className="navUpLayerLogoAuth">
        <div className="LowerNavDetails">
          <div className="LowerNavDetailsModeSection">
            <SystemMode />
          </div>
          <div className="LowerNavDetailsSearchIconBody">
            <FaSearch
              className="LowerNavDetailsSearchIcon"
              onClick={handleSearch}
            />
          </div>
        </div>

        <div className="navUpLayerLogoAuthSystem">
          <button className="navUpLayerLogoAuthSignIn" onClick={showSignIn}>
            Sign In
          </button>
          <button className="navUpLayerLogoAuthGetStarted" onClick={showSignUp}>
            Get Started
          </button>
        </div>
      </div>
    </NavUpLayer>
  );
};

export default memo(UpLayerNav);
