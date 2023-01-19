import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import photoTwo from "../../assets/Images/indesignSeven.jpg";
import SearchComp from "../../universal-Components/search";
import { useRouter } from "next/router";
import { getLoginPageCounter } from "../../store/actions/authAction";

const DashboardSearch = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const dashboardAllArticle = useSelector(
    (state) => state?.DashboardReducers?.dashboardAllArticle
  );

  const HandleClick = (item) => {
    router.push(`/dashboard/${item._id}`);
    dispatch(getLoginPageCounter({}));
  };
  return (
    <SearchComp
      searchArry={dashboardAllArticle?.data}
      handleOpenSearch={HandleClick}
    />
  );
};

export default DashboardSearch;
