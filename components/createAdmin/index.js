import React, { useState } from "react";
import { FiPrinter } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import createAdminService from "../../services/createAdmin";
import { getAllAdminFormValue } from "../../store/actions/createAdmin";
import AdminCard from "../../universal-Components/CreateAdminCard";
import Loader1 from "../../universal-Components/Loaders/loader1";
import LoaderBob from "../../universal-Components/Loaders/loaderBob";
import Ads from "../../universal-Components/postAdsStructure/ads";
import { AdminDiv } from "./styles/admin.styles";

const CreateAdmin = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [change, setChange] = useState(false);

  const loader = useSelector((state) => state.createAdmin.loader);

  const getAdmin = useSelector((state) => state.createAdmin.getAdmin);

  const formValue = useSelector((state) => state.createAdmin.formValue);

  const myUserDetails = useSelector(
    (state) => state.DashboardReducers.userStore
  );

  const HandleChange = (e) => {
    const { name, value } = e.target;

    dispatch(getAllAdminFormValue({ ...formValue, [name]: value }));
  };

  const CreateAdmin = () => {
    console.log(formValue, "state");
    setLoading(true);

    if (
      formValue?.username ||
      formValue?.email ||
      formValue?.password ||
      formValue?.confirm_password ||
      formValue?.admin
    ) {
      if (formValue?.password === formValue?.confirm_password) {
        if (formValue?.admin === "super" || formValue?.admin === "normal") {
          if (
            myUserDetails &&
            myUserDetails?.admin &&
            (myUserDetails?.admin === "root" ||
              myUserDetails?.admin === "super")
          ) {
            createAdminService
              .CreateAdmin(formValue)
              .then((data) => {
                console.log(data, "make wee wee");
                getAdmin.unshift(formValue);
                dispatch(getAllAdminFormValue({}));
                setLoading(false);
                setChange(!change);
                toast("successfully created");
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            setLoading(true);
            toast("you must be a super or root admin to create admin");
          }
        } else {
          setLoading(true);
          toast("can only create super or normal admin");
        }
      } else {
        setLoading(true);
        toast("password is not equal to confirm_password");
      }
    } else {
      setLoading(true);
      toast("all field must be filled");
    }
  };

  return (
    <AdminDiv>
      <div className="create_admin_wrapper">
        <div className="admin_create_container">
          <div className="admin_create_input">
            <div className="admin_input">
              <label>username</label>
              <input
                type={"text"}
                name={"username"}
                value={formValue?.username}
                onChange={HandleChange}
              />
            </div>
            <div className="admin_input">
              <label>email</label>
              <input
                type={"email"}
                name={"email"}
                value={formValue?.email}
                onChange={HandleChange}
              />
            </div>
            <div className="admin_input">
              <label>password</label>
              <input
                type={"password"}
                name={"password"}
                value={formValue?.password}
                onChange={HandleChange}
              />
            </div>

            <div className="admin_input">
              <label>confirm password</label>
              <input
                type={"password"}
                name={"confirm_password"}
                value={formValue?.confirm_password}
                onChange={HandleChange}
              />
            </div>

            <div className="admin_input">
              <label>admin Status</label>
              <input
                type={"text"}
                name={"admin"}
                value={formValue?.admin}
                onChange={HandleChange}
              />
            </div>
          </div>
          <div className="admin_button_wrapper">
            <div className="admin_button_container">
              <button
                disabled={
                  !formValue?.username ||
                  !formValue?.email ||
                  !formValue?.password ||
                  !formValue?.confirm_password ||
                  !formValue?.admin ||
                  loading
                    ? true
                    : false
                }
                onClick={CreateAdmin}
              >
                {loading ? <LoaderBob /> : <>Create</>}
              </button>
            </div>
          </div>
        </div>

        {loader && (
          <div style={{ width: "100%", margin: "30px 0px" }}>
            <Loader1 />
          </div>
        )}

        {!loader && (
          <div>
            <AdminCard />
          </div>
        )}
      </div>
      <div className="ads">
        <Ads />
      </div>
    </AdminDiv>
  );
};

export default CreateAdmin;
