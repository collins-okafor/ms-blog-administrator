import React, { useMemo, useRef, useState } from "react";
import photoOne from "../../assets/Images/63936.jpg";
import photoTwo from "../../assets/Icons/avatar-profile-photo.png";
import Image from "next/image";
import { PostDiv } from "./styles/post.styles";
import { MdOutlineBookmarkAdd, MdOutlineBookmarkRemove } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import HTMLReactParser from "html-react-parser";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { useRouter } from "next/router";
import PostDropdown from "../postDropdown";
import { getDynamicPost } from "../../store/actions/generalAction";
import DashBoardServices from "../../services/dashboardServices";
import { toast } from "react-toastify";
import { PostVerifyDiv } from "./styles/postVerify.style";
import { getPending, getPublish } from "../../store/actions/dashboardAction";

const PostVerify = () => {
  const ref = useRef();

  const [change, setChange] = useState(false);
  const [post, setPost] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const [dropdown, setDropdown] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const dynamicPost = useSelector((state) => state.generalReducer.dynamicPost);

  const pending = useSelector((state) => state.DashboardReducers.pending);

  const publish = useSelector((state) => state.DashboardReducers.publish);

  useMemo(() => dynamicPost, [dynamicPost]);
  const Truncate = (word, count = 60) => {
    const Word_length = count;
    if (word.length > Word_length) {
      return word.slice(0, Word_length) + "...";
    } else {
      return word;
    }
  };

  const HandleSinglePost = (item) => {
    router.push(`/dashboard/${item._id}`);
  };

  const HandleDropdown = (item) => {
    if (!showDropdown) {
      setDropdown(item._id);
      setShowDropdown(true);
    } else {
      setDropdown("");
      setShowDropdown(false);
    }
  };

  const handleChangePublish = (e, item) => {
    const { checked } = e.target;

    dynamicPost?.map((data) => {
      if (data._id === item._id) {
        if (checked === true) {
          data.publish = "publish";
        } else {
          data.publish = "pending";
        }
      }
    });

    dispatch(getDynamicPost(dynamicPost));

    DashBoardServices.EditArticle(item._id, item)
      .then((data) => {
        // console.log(data);
        if (checked) {
          dispatch(getPublish(publish + 1));
          dispatch(getPending(pending - 1));
        } else {
          dispatch(getPending(pending + 1));
          dispatch(getPublish(publish - 1));
        }

        toast("Successfully Edit the Article");
      })
      .catch((err) => {
        console.log(err);
      });

    setChange(!change);
  };

  const HandleSavePost = async (item) => {
    dynamicPost?.map((data) => {
      if (data._id === item._id) {
        data["save"] = true;
      }
    });

    dispatch(getDynamicPost(dynamicPost));

    const payload = { ...item };

    delete payload._id;

    await DashBoardServices.SavePost(item._id, payload)
      .then((data) => {
        console.log(data, "system");
        toast("saved successfully");
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });

    setChange(!change);
  };

  const HandleDeleteFromSave = async (item) => {
    dynamicPost?.map((data) => {
      if (data._id === item._id) {
        delete data.save;
      }
    });

    setPost(dynamicPost);
    dispatch(getDynamicPost(dynamicPost));

    await DashBoardServices.deleteSavedPost(item._id)
      .then((data) => {
        console.log(data, "delete");
        toast("savedpost successfully deleted");
      })
      .catch((err) => {
        throw err;
      });

    setChange(!change);
  };

  useOnClickOutside(ref, () => setDropdown(""));

  return (
    <PostVerifyDiv>
      {dynamicPost?.map((item, key) => (
        <div key={key} className={"flex"}>
          <div className="userDetails">
            <div className="photoContainer">
              <Image
                src={
                  item.cover_pic &&
                  (item.cover_pic.startsWith("http") ||
                    item.cover_pic.startsWith("/"))
                    ? `${item.cover_pic}`
                    : photoOne
                }
                alt="system"
                priority
                objectFit={"cover"}
                // layout={"responsive"}
                width={100}
                height={100}
                className="photoContainerImage"
              />
            </div>
          </div>

          <div className="mainPostContainer">
            <div
              className="mainPostContainerHeaderWrapper"
              // onClick={() => HandleSinglePost(item)}
            >
              <div className="mainPostContainerHeaderWrapperSystem">
                <div
                  className="mainPostContainerHeaderWrapperSystemBody"
                  onClick={() => HandleSinglePost(item)}
                >
                  <div className="profileImage">
                    <Image
                      src={
                        item.profile_pic &&
                        (item.profile_pic.startsWith("http") ||
                          item.profile_pic.startsWith("/"))
                          ? `${item.profile_pic}`
                          : photoTwo
                      }
                      width={100}
                      height={100}
                      alt=""
                      className="profileImageState"
                    />
                  </div>

                  <div className="userName">
                    <h4>{item.username}</h4>
                  </div>
                </div>

                <div className="verify">
                  <label class="switch">
                    <input
                      type="checkbox"
                      checked={item.publish === "publish" ? true : false}
                      onChange={(e) => handleChangePublish(e, item)}
                    />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>

              <div className="mainPostContainerHeaderWrapperContent">
                <h1>{item.title}</h1>
                <p className="textContent">
                  {HTMLReactParser(HTMLReactParser(item.article))}
                </p>
              </div>
            </div>

            <div className="postWrapper">
              <div className="postContainer">
                <p>{`${moment(item.date).format("MMM DD, YYYY hh:mm")}`}</p>
                <button>{item?.tag}</button>
              </div>
              <div className="postWrapperContent">
                {!item?.save ||
                item?.save === null ||
                item?.save === undefined ? (
                  <div
                    className="postWrapperContentSaveIconBody"
                    onClick={() => HandleSavePost(item)}
                  >
                    <MdOutlineBookmarkAdd className="postWrapperContentSaveIcon" />
                  </div>
                ) : (
                  <div
                    className="postWrapperContentSaveIconBody"
                    onClick={() => HandleDeleteFromSave(item)}
                  >
                    <MdOutlineBookmarkRemove className="postWrapperContentSaveIcon" />
                  </div>
                )}

                <div className="postWrapperContentFollowersState">
                  <div
                    className="postWrapperContentFollowers"
                    onClick={() => HandleDropdown(item)}
                  >
                    <FiMoreHorizontal className="postWrapperContentFollowersIcon" />
                  </div>

                  {dropdown === item._id && (
                    <PostDropdown
                      ref={ref}
                      details={item}
                      fullDetails={dynamicPost}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </PostVerifyDiv>
  );
};

export default PostVerify;
