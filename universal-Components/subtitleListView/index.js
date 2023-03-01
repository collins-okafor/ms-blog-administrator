import React, { useRef, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import NotFound from "../Notfound";
import { SubViewDiv } from "./style/subview.style";
import {
  getEditOption,
  getFormValue,
  getTotalSubtitle,
} from "../../store/actions/subtitle";
import { toast } from "react-toastify";
import SubServices from "../../services/subtitleServices";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import LoaderBob from "../Loaders/loaderBob";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { getDashboardSubtitle } from "../../store/actions/dashboardAction";

const SubListView = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const [change, setChange] = useState(false);
  const subtitle = useSelector((state) => state.SubtitleReducers.subtitle);

  const [showDropDown, setShowDropDown] = useState("");

  const [showmust, setShowMust] = useState(false);

  const [subValue, setSubValue] = useState({});

  const [loadingsubState, setLoadingSubState] = useState(false);

  const [changeSubState, setChangeSubState] = useState(false);

  const [tryEdit, setTryEdit] = useState(false);

  const [holdEditSubContent, setHoldEditSubContent] = useState({});

  const formValue = useSelector((state) => state.SubtitleReducers.formValue);

  const HandleEdit = (item) => {
    dispatch(getFormValue({ ...formValue, title: item.title, _id: item._id }));
    dispatch(getEditOption(true));
  };

  const myUserDetails = useSelector(
    (state) => state.DashboardReducers.userStore
  );

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

  const HandleBack = () => {
    dispatch(getEditOption(false));
  };

  const HandleShowADropdown = (item) => {
    if (showmust) {
      setShowDropDown("");
      setShowMust(false);
    } else {
      setShowDropDown(item);
      setShowMust(true);
    }
  };

  const HandleChangeSub = (e) => {
    const { name, value } = e.target;

    setSubValue({ ...subValue, [name]: value });
  };

  const CreateSubItem = (sub) => {
    setLoadingSubState(true);

    if (sub?.sub) {
      sub.sub.push({
        subcontent: subValue?.subcontent,
        username: myUserDetails.username,
        email: myUserDetails?.email,
        createdBy: myUserDetails?._id,
      });

      SubServices?.CreateEditSubtitle(sub?._id, sub)
        .then((data) => {
          dispatch(getTotalSubtitle(subtitle));
          dispatch(getDashboardSubtitle(subtitle));
          setLoadingSubState(false);
          setSubValue({});
          toast("successfully created");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const arr = [];

      arr.push({
        subcontent: subValue?.subcontent,
        username: myUserDetails.username,
        email: myUserDetails?.email,
        createdBy: myUserDetails?._id,
      });

      sub["sub"] = arr;

      SubServices?.CreateEditSubtitle(sub?._id, sub)
        .then((data) => {
          dispatch(getTotalSubtitle(subtitle));
          dispatch(getDashboardSubtitle(subtitle));
          setLoadingSubState(false);
          setSubValue({});
          toast("successfully created");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const DeletSub = (sub, subContent) => {
    setChangeSubState(!changeSubState);
    const findSubDetails = sub.sub?.findIndex(
      (item) => item?.subcontent === subContent?.subcontent
    );

    sub?.sub?.splice(findSubDetails, 1);

    SubServices?.CreateEditSubtitle(sub?._id, sub)
      .then((data) => {
        dispatch(getTotalSubtitle(subtitle));

        dispatch(getDashboardSubtitle(subtitle));

        setChangeSubState(!changeSubState);

        toast("successfully Deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const EditSub = (sub) => {
    setLoadingSubState(true);
    setChangeSubState(!changeSubState);

    const findSubDetails = sub.sub?.findIndex(
      (item) => item?.subcontent === holdEditSubContent?.subcontent
    );

    sub?.sub?.splice(findSubDetails, 1, {
      subcontent: subValue?.subcontent,
      username: myUserDetails.username,
      email: myUserDetails?.email,
      createdBy: myUserDetails?._id,
    });

    SubServices?.CreateEditSubtitle(sub?._id, sub)
      .then((data) => {
        console.log(subtitle, "settins");

        dispatch(getTotalSubtitle(subtitle));

        dispatch(getDashboardSubtitle(subtitle));

        setChangeSubState(!changeSubState);

        setTryEdit(false);
        setSubValue({});
        setHoldEditSubContent({});
        setLoadingSubState(false);

        toast("successfully Edited");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useOnClickOutside(ref, () => setShowDropDown(""));

  return (
    <SubViewDiv>
      <div className="Switch">
        <button onClick={HandleBack}>Switch to Create</button>
      </div>

      {(subtitle === null ||
        subtitle === undefined ||
        subtitle?.length === 0) && <NotFound text={"no admin yet"} />}

      {subtitle?.map((item, key) => (
        <div key={key} className="wrapperState">
          <div className="wrapper">
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

              <div>
                {showDropDown === item?._id ? (
                  <div
                    className="searchIconBody"
                    onClick={() => {
                      HandleShowADropdown(item?._id);
                      setTryEdit(false);
                    }}
                  >
                    <IoIosArrowUp className="searchIcon" />
                  </div>
                ) : (
                  <div
                    className="searchIconBody"
                    onClick={() => {
                      HandleShowADropdown(item?._id);
                      setTryEdit(false);
                    }}
                  >
                    <IoIosArrowDown className="searchIcon" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {item?._id === showDropDown && (
            <div className="showDropdownWrapper" ref={ref}>
              <div className="showDropdownHeader">
                <div className="showDropdownHeader_Input">
                  <input
                    type={"text"}
                    value={subValue?.subcontent || ""}
                    name="subcontent"
                    onChange={HandleChangeSub}
                    autocomplete="off"
                  />
                </div>

                <div className="showDropdownHeader_Button">
                  {tryEdit ? (
                    <button
                      disabled={
                        loadingsubState || !subValue?.subcontent ? true : false
                      }
                      onClick={() => EditSub(item)}
                    >
                      {loadingsubState ? <LoaderBob /> : <>Edit</>}
                    </button>
                  ) : (
                    <button
                      disabled={
                        loadingsubState || !subValue?.subcontent ? true : false
                      }
                      onClick={() => CreateSubItem(item)}
                    >
                      {loadingsubState ? <LoaderBob /> : <>Create</>}
                    </button>
                  )}
                </div>
              </div>

              <div className="SwitchStatus">
                <button onClick={() => setTryEdit(false)}>
                  Switch to Create
                </button>
              </div>

              {item?.sub?.map((data, key) => (
                <div key={key} className="wrapperlist">
                  <div className="title">
                    <p>{data?.subcontent}</p>
                  </div>

                  <div className="action">
                    <div
                      className="edit"
                      onClick={() => {
                        setTryEdit(!tryEdit);
                        setHoldEditSubContent(data);
                      }}
                    >
                      <FiEdit className="edit_icon" />
                    </div>
                    <div
                      className="delete"
                      onClick={() => DeletSub(item, data)}
                    >
                      <MdDelete className="delete_icon" />
                    </div>
                  </div>
                </div>
              ))}

              {(item?.sub === null ||
                item?.sub === undefined ||
                item?.sub?.length === 0) && <NotFound text={"no admin yet"} />}
            </div>
          )}
        </div>
      ))}
    </SubViewDiv>
  );
};

export default SubListView;
