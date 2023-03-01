import React from "react";
import CardOverview from "../../components/overview/overviewcards";
import DashbaordPageWrapper from "../../universal-Components/DashobardPageWrapper";
const Overview = () => {
  return (
    <DashbaordPageWrapper>
      <h1>Overview</h1>
      <CardOverview />
    </DashbaordPageWrapper>
  );
};

export default Overview;
