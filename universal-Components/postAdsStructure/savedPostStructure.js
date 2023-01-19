import React, { useRef, useState } from "react";
import photoOne from "../../assets/Images/about-us.jpg";
import Image from "next/image";
import { PostDiv } from "./styles/post.styles";
import { MdOutlineBookmarkRemove } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import HTMLReactParser from "html-react-parser";
import { useRouter } from "next/router";
import DashBoardServices from "../../services/dashboardServices";
import { toast } from "react-toastify";
import { getSavedPost } from "../../store/actions/dashboardAction";
import NotFound from "../Notfound";
import moment from "moment";
import PostDropdown from "../postDropdown";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const SavedPostStructure = () => {
  const ref = useRef();
  const [change, setChange] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const savedPost = useSelector((state) => state.DashboardReducers.savedPost);
  const [dropdown, setDropdown] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const Truncate = (word, count = 60) => {
    const Word_length = count;
    if (word.length > Word_length) {
      return word.slice(0, Word_length) + "...";
    } else {
      return word;
    }
  };

  const HandleSinglePost = (item) => {
    router.push(`/dashboard/${item._postId}`);
  };

  const HandleDeleteFromSave = async (item) => {
    const postIndex = savedPost.findIndex(
      (data) => data?.postId === item.postId
    );

    savedPost.splice(postIndex, postIndex + 1);

    dispatch(getSavedPost(savedPost));

    await DashBoardServices.deleteSavedPost(item.postId)
      .then((data) => {
        console.log(data, "delete");
        toast("savedpost successfully deleted");
      })
      .catch((err) => {
        throw err;
      });

    setChange(!change);
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

  useOnClickOutside(ref, () => setDropdown(""));

  return (
    <PostDiv>
      {savedPost === undefined ||
        savedPost === null ||
        (savedPost?.length === 0 && <NotFound text={"no post found"} />)}

      {savedPost?.length > 0 &&
        savedPost?.map((item, key) => (
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
                  alt=""
                  width={100}
                  height={100}
                  className="photoContainerImage"
                />
              </div>
            </div>

            <div className="mainPostContainer">
              <div
                className="mainPostContainerHeaderWrapper"
                onClick={() => HandleSinglePost(item)}
              >
                <div className="mainPostContainerHeaderWrapperSystem">
                  <div className="profileImage">
                    <Image
                      src={
                        item.profile_pic &&
                        (item.profile_pic.startsWith("http") ||
                          item.profile_pic.startsWith("/"))
                          ? `${item.profile_pic}`
                          : photoOne
                      }
                      alt=""
                      width={100}
                      height={100}
                      className="profileImageState"
                    />
                  </div>
                  <div className="userName">
                    <h4>{item.username}</h4>
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
                  <div
                    className="postWrapperContentSaveIconBody"
                    onClick={() => HandleDeleteFromSave(item)}
                  >
                    <MdOutlineBookmarkRemove className="postWrapperContentSaveIcon" />
                  </div>

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
                        fullDetails={savedPost}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </PostDiv>
  );
};

export default SavedPostStructure;
