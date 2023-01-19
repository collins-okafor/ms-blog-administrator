import React, { useEffect } from "react";
import DashbaordPageWrapper from "../../universal-Components/DashobardPageWrapper";
import CreateAdmin from "../../components/createAdmin";
import createAdminService from "../../services/createAdmin";
import { useDispatch } from "react-redux";
import {
  getAllAdmin,
  getAllAdminLoader,
} from "../../store/actions/createAdmin";

const Create_admin = () => {
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(getAllAdminLoader(true));
    createAdminService
      .getAllAdmin()
      .then((data) => {
        console.log(data, "male");
        dispatch(getAllAdmin(data?.data));
        dispatch(getAllAdminLoader(false));
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <DashbaordPageWrapper>
      <CreateAdmin />
    </DashbaordPageWrapper>
  );
};

export default Create_admin;
