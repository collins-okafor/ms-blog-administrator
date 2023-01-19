import React from "react";
import StoriesPage from "../../components/Stories";
import DashbaordPageWrapper from "../../universal-Components/DashobardPageWrapper";

const Stories = () => {
  return (
    <DashbaordPageWrapper>
      <StoriesPage />
    </DashbaordPageWrapper>
  );
};

Stories.auth = true;

export default Stories;
