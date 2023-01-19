import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import NotFound from "../Notfound";
import { SubViewDiv } from "./style/subview.style";
import { getEditOption, getFormValue } from "../../store/actions/subtitle";
import { toast } from "react-toastify";
import SubServices from "../../services/subtitleServices";

const SubListView = () => {
  const dispatch = useDispatch();
  const [change, setChange] = useState(false);
  const subtitle = useSelector((state) => state.SubtitleReducers.subtitle);

  const formValue = useSelector((state) => state.SubtitleReducers.formValue);

  const HandleEdit = (item) => {
    dispatch(getFormValue({ ...formValue, title: item.title, _id: item._id }));
    dispatch(getEditOption(true));
  };

  const HandleDelete = (item) => {
    SubServices.deleteSubtitle(item._id)
      .then((data) => {
        const findSpecial = subtitle.findIndex((data) => data._id === item._id);

        subtitle.splice(findSpecial, 1);

        toast("successfully deleted");

        setChange(!change);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  return (
    <SubViewDiv>
      {(subtitle === null ||
        subtitle === undefined ||
        subtitle?.length === 0) && <NotFound text={"no admin yet"} />}

      {subtitle?.map((item, key) => (
        <div key={key} className="wrapper">
          <div className="title">
            <p>{item?.title}</p>
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
    </SubViewDiv>
  );
};

export default SubListView;
