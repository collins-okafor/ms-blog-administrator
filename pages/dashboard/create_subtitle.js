import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CreateSubtitlePage from "../../components/createSubtitle";
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
      <CreateSubtitlePage />
    </DashbaordPageWrapper>
  );
};

export default Create_subtitle;
