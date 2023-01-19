import React from "react";
import WriteComponent from "../../components/writeComponent";
import DashbaordPageWrapper from "../../universal-Components/DashobardPageWrapper";

const Write = () => {
  return (
    <DashbaordPageWrapper>
      <WriteComponent />
    </DashbaordPageWrapper>
  );
};

Write.auth = true;

export default Write;
