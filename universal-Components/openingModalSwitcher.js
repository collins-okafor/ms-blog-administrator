import React from "react";
import { useSelector } from "react-redux";
import Modal from "./modal";
import MailSignIn from "../components/Signup/signinMail";
import EditProfile from "../components/editprofile";
import DashboardSearch from "../components/Dashboard/DashboardSearch";
const OpeningModalSwitcher = () => {
  const loginPageCounte = useSelector(
    (state) => state.authReducer.loginPageCounter
  );

  switch (loginPageCounte.counter) {
    case 3:
      return (
        <Modal display={true}>
          <MailSignIn />
        </Modal>
      );

    case 5:
      return <EditProfile />;
    case 6:
      return (
        <Modal display={true}>
          <DashboardSearch />
        </Modal>
      );
    default:
      return "";
  }
};

export default OpeningModalSwitcher;
