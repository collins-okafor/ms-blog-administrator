import React from "react";
import { CreateDiv } from "./style/createAdmin.style";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import NotFound from "../Notfound";
import { toast } from "react-toastify";

const AdminCard = () => {
  const getAdmin = useSelector((state) => state.createAdmin.getAdmin);
  console.log(getAdmin, "today");
  return (
    <CreateDiv>
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
