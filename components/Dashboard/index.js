import React from "react";
import { useSelector } from "react-redux";
import DashboardNavList from "../../universal-Components/DashboardNavList";
import Loader1 from "../../universal-Components/Loaders/loader1";
import PostAdsStructure from "../../universal-Components/postAdsStructure";

const DashboardPage = () => {
  const DashboardLoader = useSelector(
    (state) => state.DashboardReducers.DashboardLoader
  );

  return (
    <div style={{ width: "100%", margin: "30px 0px" }}>
      <DashboardNavList />

      {DashboardLoader && <Loader1 />}
      {!DashboardLoader && <PostAdsStructure />}
    </div>
  );
};

export default DashboardPage;
