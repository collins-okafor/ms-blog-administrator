import React, { useState } from "react";
import { CreateDiv } from "./style/createAdmin.style";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import NotFound from "../Notfound";
import { toast } from "react-toastify";
import {
  getAllAdminFormValue,
  getEditAdmin,
} from "../../store/actions/createAdmin";
import createAdminService from "../../services/createAdmin";

const AdminCard = () => {
  const dispatch = useDispatch();
  const [change, setChange] = useState(false);
  const getAdmin = useSelector((state) => state.createAdmin.getAdmin);

  const myUserDetails = useSelector(
    (state) => state.DashboardReducers.userStore
  );

  const HandleEdit = (item) => {
    dispatch(getAllAdminFormValue({ ...item }));
    dispatch(getEditAdmin(true));
  };

  const HandleBack = () => {
    dispatch(getEditAdmin(false));
  };

  const HandleDelete = (item) => {
    if (myUserDetails?.admin === "root") {
      createAdminService
        .DeletAdmin({ ...item })
        .then((data) => {
          const findSpecial = getAdmin.findIndex(
            (data) => data._id === item._id
          );

          getAdmin.splice(findSpecial, 1);

          toast("successfully deleted");

          setChange(!change);
        })
        .catch((err) => {
          console.log(err);
          throw err;
        });
    }
  };

  return (
    <CreateDiv>
      <div className="Switch">
        <button onClick={HandleBack}>Switch to Create</button>
      </div>

      {(getAdmin === null ||
        getAdmin === undefined ||
        getAdmin?.length === 0) && <NotFound text={"no admin yet"} />}

      {getAdmin?.map((item, key) => (
        <div key={key} className="wrapper">
          <div className="title">
            <p>{item.username}</p>
          </div>
          <div className="action">
            <div className="edit" onClick={() => HandleEdit(item)}>
              <FiEdit className="edit_icon" />
            </div>
            <div className="delete" onClick={() => HandleDelete(item)}>
              <MdDelete className="delete_icon" />
            </div>
          </div>
        </div>
      ))}
    </CreateDiv>
  );
};

export default AdminCard;
