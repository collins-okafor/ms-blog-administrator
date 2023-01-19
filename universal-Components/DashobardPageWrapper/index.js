import React, { memo } from "react";
import { useSelector } from "react-redux";
import { DashboardPagesDiv } from "./styles/dashboardPage.style";

const DashbaordPageWrapper = ({ children }) => {
  const reduceSideBar = useSelector(
    (state) => state.DashboardConditionReducers.reduceSideBar
  );

  return (
    <DashboardPagesDiv reduceSideBar={reduceSideBar}>
      <div className="pageWrapper">{children}</div>
    </DashboardPagesDiv>
  );
};

export default memo(DashbaordPageWrapper);
