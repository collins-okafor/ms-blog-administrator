import React, { useEffect, useMemo, useRef, useState } from "react";
import photoOne from "../../assets/Icons/avatar-profile-photo.png";
import phoneTwo from "../../assets/Images/63936.webp";
import Image from "next/image";
import { PostDiv } from "./styles/post.styles";
import { MdOutlineBookmarkAdd, MdOutlineBookmarkRemove } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import HTMLReactParser from "html-react-parser";
import { useRouter } from "next/router";
import DashBoardServices from "../../services/dashboardServices";
import { toast } from "react-toastify";
import { getDynamicPost } from "../../store/actions/generalAction";
import moment from "moment";
import NotFound from "../Notfound";
import PostDropdown from "../postDropdown";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import MyStoriesDropdown from "../postDropdown/myStoriesdropdown";
import {
  FaFacebook,
  FaLinkedin,
  FaShareAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

const MyStoriesPost = () => {
  const ref = useRef();
  const refSocial = useRef();
  const [change, setChange] = useState(false);
  const [post, setPost] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const dynamicPost = useSelector((state) => state.generalReducer.dynamicPost);
  const [dropdown, setDropdown] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const [dropdownSocial, setDropdownSocial] = useState("");
  const [showDropdownSocial, setShowDropdownSocial] = useState(false);

  // useEffect(() => {
  //   setPost(dynamicPost);
  // }, [dynamicPost]);

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
        toast("saved successfully");
      })
      .catch((err) => {
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

  const HandleDropdownSocial = (item) => {
    if (!showDropdownSocial) {
      setDropdownSocial(item._id);
      setShowDropdownSocial(true);
    } else {
      setDropdownSocial("");
      setShowDropdownSocial(false);
    }
  };

  useOnClickOutside(ref, () => setDropdown(""));

  useOnClickOutside(refSocial, () => setDropdownSocial(""));

  return (
    <PostDiv>
      {dynamicPost === undefined ||
        dynamicPost === null ||
        (dynamicPost?.length === 0 && <NotFound text={"no post found"} />)}

      {dynamicPost?.length > 0 &&
        dynamicPost?.map((item, key) => (
          <>
            <div key={key} className={"flex"}>
              <div className="userDetails">
                <div className="photoContainer">
                  <Image
                    src={
                      item.cover_pic &&
                      (item.cover_pic.startsWith("http") ||
                        item.cover_pic.startsWith("/"))
                        ? `${item.cover_pic}`
                        : phoneTwo
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
                    <div className="sharing_wrapper">
                      <div
                        className="sharingbody"
                        onClick={() => HandleDropdownSocial(item)}
                      >
                        <FaShareAlt className="sharingicon" />
                      </div>

                      {dropdownSocial === item._id && (
                        <div className="SocialWrapper" ref={refSocial}>
                          <div className="SocialBody">
                            <Link
                              href={`https://www.facebook.com/sharer.php?u=https://www.mirianpost.com/${item._id}`}
                              target={"blank"}
                            >
                              <div className="SocialContent">
                                <FaFacebook className="SocialIcon" />
                              </div>
                            </Link>
                          </div>

                          <div className="SocialBody">
                            <Link
                              href={`https://api.whatsapp.com/send?text=${item?.title} https://www.mirianpost.com/${item._id}`}
                              target={"blank"}
                            >
                              <div className="SocialContent">
                                <FaWhatsapp className="SocialIcon" />
                              </div>
                            </Link>
                          </div>

                          <div className="SocialBody">
                            <Link
                              href={`https://www.linkedin.com/shareArticle?url=ttps://www.mirianpost.com/${item._id}&title=${item?.title}`}
                              target={"blank"}
                            >
                              <div className="SocialContent">
                                <FaLinkedin className="SocialIcon" />
                              </div>
                            </Link>
                          </div>

                          <div className="SocialBody">
                            <Link
                              href={`https://twitter.com/share?url=https://www.mirianpost.com/${item._id}&text=${item?.title}`}
                              target={"blank"}
                            >
                              <div className="SocialContent">
                                <FaTwitter className="SocialIcon" />
                              </div>
                            </Link>
                          </div>

                          {/* <div className="SocialBody">
                          <div className="SocialContent">
                            <FaInstagram className="SocialIcon" />
                          </div>
                        </div> */}
                        </div>
                      )}
                    </div>

                    {!item?.save ||
                    item?.save === null ||
                    item?.save === undefined ? (
                      <div
                        className="postWrapperContentSaveIconBody"
                        style={{
                          cursor: `${
                            router?.pathname !== "/dashboard/stories" &&
                            "not-allowed"
                          }`,
                        }}
                        onClick={() => {
                          if (router?.pathname === "/dashboard/stories") {
                            HandleSavePost(item);
                          }
                        }}
                      >
                        <MdOutlineBookmarkAdd className="postWrapperContentSaveIcon" />
                      </div>
                    ) : (
                      <div
                        className="postWrapperContentSaveIconBody"
                        style={{
                          cursor: `${
                            router?.pathname !== "/dashboard/stories" &&
                            "not-allowed"
                          }`,
                        }}
                        onClick={() => {
                          if (router?.pathname === "/dashboard/stories") {
                            HandleDeleteFromSave(item);
                          }
                        }}
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
                        <MyStoriesDropdown
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
          </>
        ))}
    </PostDiv>
  );
};

export default MyStoriesPost;
