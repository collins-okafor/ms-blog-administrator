import React, { useEffect } from "react";
import DashbaordPageWrapper from "../../universal-Components/DashobardPageWrapper";
import CreateAdmin from "../../components/createAdmin";
import createAdminService from "../../services/createAdmin";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAdmin,
  getAllAdminLoader,
} from "../../store/actions/createAdmin";
import { AdminWrapper } from "../../components/createAdmin/styles/admin.styles";
import { useRouter } from "next/router";

const Create_admin = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const myUserDetails = useSelector(
    (state) => state.DashboardReducers.userStore
  );

  const fetchData = () => {
    if (myUserDetails?.admin === "normal") {
      router.back();
    }

    dispatch(getAllAdminLoader(true));
    createAdminService
      .getAllAdmin()
      .then((data) => {
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
      <AdminWrapper>
        <h2>Create Admin</h2>
      </AdminWrapper>
      <CreateAdmin />
    </DashbaordPageWrapper>
  );
};

export default Create_admin;
