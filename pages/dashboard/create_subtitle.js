import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CreateSubtitlePage from "../../components/createSubtitle";
import { SubTitleSystem } from "../../components/createSubtitle/style/createSub.style";
import SubServices from "../../services/subtitleServices";
import { getLoader, getTotalSubtitle } from "../../store/actions/subtitle";
import DashbaordPageWrapper from "../../universal-Components/DashobardPageWrapper";

const Create_subtitle = () => {
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(getLoader(true));

    SubServices.getSubtitle()
      .then((data) => {
        dispatch(getTotalSubtitle(data));
        dispatch(getLoader(false));
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DashbaordPageWrapper>
      <SubTitleSystem>
        <h2>Create SubTitle</h2>
      </SubTitleSystem>
      <CreateSubtitlePage />
    </DashbaordPageWrapper>
  );
};

export default Create_subtitle;
