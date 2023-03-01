import React, { useRef, useState } from "react";
import Ads from "../postAdsStructure/ads";
import { ArticleDisplayDiv } from "./styles/articleDisplay.style";
import image1 from "../../assets/Icons/avatar-profile-photo.png";
import Image from "next/image";
import { MdOutlineBookmarkAdd, MdOutlineBookmarkRemove } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import {
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill,
} from "react-icons/bs";
import photoSix from "../../assets/Images/63936.webp";
import {
  FaCommentDots,
  FaFacebook,
  FaLinkedin,
  FaShareAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import HTMLReactParser from "html-react-parser";
import { useRouter } from "next/router";
import { getLoginPageCounter } from "../../store/actions/authAction";
import {
  getDashboardSinglePost,
  getSinglePostComment,
  getSinglePostDisLike,
  getSinglePostLike,
} from "../../store/actions/dashboardAction";
import DashBoardServices from "../../services/dashboardServices";
import LoaderBob from "../Loaders/loaderBob";
import { toast } from "react-toastify";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import PDropdown from "../postDropdown/dropdown";
import Link from "next/link";

const DashboardArticleDisplay = () => {
  const ref = useRef();
  const refSub = useRef();
  const refSocial = useRef();
  const refSocialSub = useRef();
  const router = useRouter();
  const dispatch = useDispatch();
  const [change, setChange] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [commentState, setCommentState] = useState({});
  const [submitComment, setSubmitComment] = useState(false);
  const [showAndClose, setShowAndClose] = useState(false);
  const [closeDropdown, setCloseDropdown] = useState(false);

  const [showAndCloseSub, setShowAndCloseSub] = useState(false);
  const [closeDropdownSub, setCloseDropdownSub] = useState(false);

  const [dropdownSocial, setDropdownSocial] = useState("");
  const [showDropdownSocial, setShowDropdownSocial] = useState(false);

  const [dropdownSocialSub, setDropdownSocialSub] = useState("");
  const [showDropdownSocialSub, setShowDropdownSocialSub] = useState(false);

  const HandleChangeComment = (e) => {
    const { name, value } = e.target;
    setCommentState({ ...commentState, [name]: value });
  };

  const getSingleArticle = useSelector(
    (state) => state.DashboardReducers.dashboardSinglePost
  );

  const singlePostComment = useSelector(
    (state) => state.DashboardReducers.singlePostComment
  );

  const singlePostLike = useSelector(
    (state) => state.DashboardReducers.singlePostLike
  );

  const singlePostDisLike = useSelector(
    (state) => state.DashboardReducers.singlePostDisLike
  );

  const userDetails = useSelector(
    (state) => state.DashboardReducers.userDetails
  );

  let auth =
    typeof window !== "undefined" && window.localStorage.getItem("token");

  const HandleLike = () => {
    if (!auth) {
      router.push("/");
      dispatch(getLoginPageCounter({ counter: 0 }));
    } else {
      const payload = { username: userDetails?.username };

      dispatch(
        getSinglePostLike({ ...singlePostLike, data: singlePostLike?.data + 1 })
      );

      DashBoardServices.PostLike(getSingleArticle._id, payload)
        .then((data) => {
          // console.log(data);
        })
        .catch((err) => {
          throw err;
        });
    }
  };

  const HandleDisLike = () => {
    if (!auth) {
      router.push("/");
      dispatch(getLoginPageCounter({ counter: 0 }));
    } else {
      const payload = { username: userDetails?.username };

      dispatch(
        getSinglePostDisLike({
          ...singlePostDisLike,
          data: singlePostDisLike?.data + 1,
        })
      );

      DashBoardServices.PostDisLike(getSingleArticle._id, payload)
        .then((data) => {
          // console.log(data);
        })
        .catch((err) => {
          throw err;
        });
    }
  };

  const HandleShowComment = () => {
    if (auth) {
      setShowComment(!showComment);
      setCommentState({});
    } else {
      router.push("/");
      dispatch(getLoginPageCounter({ counter: 0 }));
    }
  };

  const HandleComment = (e) => {
    e.preventDefault();

    if (commentState.comment) {
      setSubmitComment(true);
      commentState.date = moment().format();
      commentState.username = userDetails?.username;
      commentState.image = userDetails?.profile_pic
        ? userDetails?.profile_pic
        : "";

      singlePostComment?.data?.unshift(commentState);

      dispatch(
        getSinglePostComment({
          ...singlePostComment,
          count: singlePostComment?.data?.length,
        })
      );

      DashBoardServices.PostComment(getSingleArticle._id, commentState)
        .then((data) => {
          setCommentState({});
          toast("successful");
          setSubmitComment(false);
        })
        .catch((err) => {
          throw err;
        });
    } else {
      toast("comment field can not be empty");
    }
  };

  const HandleSavePost = async () => {
    const payload = { ...getSingleArticle };

    getSingleArticle["save"] = true;

    dispatch(getDashboardSinglePost(getSingleArticle));

    delete payload._id;

    await DashBoardServices.SavePost(getSingleArticle._id, payload)
      .then((data) => {
        toast("saved successfully");
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });

    setChange(!change);
  };

  const HandleDeleteFromSave = async () => {
    delete getSingleArticle.save;

    dispatch(getDashboardSinglePost(getSingleArticle));

    await DashBoardServices.deleteSavedPost(getSingleArticle._id)
      .then((data) => {
        toast("savedpost successfully deleted");
      })
      .catch((err) => {
        throw err;
      });

    setChange(!change);
  };

  const HandleDropdown = () => {
    if (!closeDropdown) {
      setShowAndClose(true);
      setCloseDropdown(true);
    } else {
      setShowAndClose(false);
      setCloseDropdown(false);
    }
  };

  const HandleDropdownSubBody = () => {
    if (!closeDropdownSub) {
      setShowAndCloseSub(true);
      setCloseDropdownSub(true);
    } else {
      setShowAndCloseSub(false);
      setCloseDropdownSub(false);
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

  const HandleDropdownSocialSub = (item) => {
    if (!showDropdownSocialSub) {
      setDropdownSocialSub(item._id);
      setShowDropdownSocialSub(true);
    } else {
      setDropdownSocialSub("");
      setShowDropdownSocialSub(false);
    }
  };

  useOnClickOutside(ref, () => setShowAndClose(false));

  useOnClickOutside(refSub, () => setShowAndCloseSub(false));

  useOnClickOutside(refSocial, () => setDropdownSocial(""));

  useOnClickOutside(refSocialSub, () => setDropdownSocial(""));

  return (
    <ArticleDisplayDiv>
      <div className={"articleWrapper"}>
        <div className={"articleWrapper__header"}>
          <div className={"articleWrapper__headerProfile"}>
            <div className={"articleWrapper__headerProfilePics"}>
              <Image
                src={
                  getSingleArticle.profile_pic &&
                  (getSingleArticle.profile_pic.startsWith("http") ||
                    getSingleArticle.profile_pic.startsWith("/"))
                    ? `${getSingleArticle.profile_pic}`
                    : image1
                }
                alt="state"
                width={100}
                height={100}
                className={"articleWrapper__headerProfilePicsItem"}
              />
            </div>
            <div className={"articleWrapper__headerProfileDetails"}>
              <p className={"articleWrapper__headerProfileDetailsHeader"}>
                {getSingleArticle?.username}
              </p>
              <p className={"articleWrapper__headerProfileDetailsParagraph"}>
                {moment(getSingleArticle?.createdAt).format(
                  "MMM DD, YYYY hh:mm"
                )}
              </p>
            </div>
          </div>
          <div className={"articleWrapper__headerProfileSectionState"}>
            <div className="sharing_wrapper">
              <div
                className="sharingbody"
                onClick={() => HandleDropdownSocial(getSingleArticle)}
              >
                <FaShareAlt className="sharingicon" />
              </div>

              {dropdownSocial === getSingleArticle?._id && (
                <div className="SocialWrapper" ref={refSocial}>
                  <div className="SocialBody">
                    <Link
                      href={`https://www.facebook.com/sharer.php?u=https://www.mirianpost.com/${getSingleArticle?._id}`}
                      target={"blank"}
                    >
                      <div className="SocialContent">
                        <FaFacebook className="SocialIcon" />
                      </div>
                    </Link>
                  </div>

                  <div className="SocialBody">
                    <Link
                      href={`https://api.whatsapp.com/send?text=${getSingleArticle?.title} https://www.mirianpost.com/${getSingleArticle?._id}`}
                      target={"blank"}
                    >
                      <div className="SocialContent">
                        <FaWhatsapp className="SocialIcon" />
                      </div>
                    </Link>
                  </div>

                  <div className="SocialBody">
                    <Link
                      href={`https://www.linkedin.com/shareArticle?url=ttps://www.mirianpost.com/${getSingleArticle?._id}&title=${getSingleArticle?.title}`}
                      target={"blank"}
                    >
                      <div className="SocialContent">
                        <FaLinkedin className="SocialIcon" />
                      </div>
                    </Link>
                  </div>

                  <div className="SocialBody">
                    <Link
                      href={`https://twitter.com/share?url=https://www.mirianpost.com/${getSingleArticle?._id}&text=${getSingleArticle?.title}`}
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

            {!getSingleArticle?.save ||
            getSingleArticle?.save === null ||
            getSingleArticle?.save === undefined ? (
              <div
                className={"articleWrapper__headerProfileSectionStateSave"}
                onClick={HandleSavePost}
              >
                <MdOutlineBookmarkAdd
                  className={
                    "articleWrapper__headerProfileSectionStateSaveItem"
                  }
                />
              </div>
            ) : (
              <div
                className={"articleWrapper__headerProfileSectionStateSave"}
                onClick={HandleDeleteFromSave}
              >
                <MdOutlineBookmarkRemove
                  className={
                    "articleWrapper__headerProfileSectionStateSaveItem"
                  }
                />
              </div>
            )}
            <div
              className={"articleWrapper__headerProfileSectionStateFollowState"}
            >
              <div
                onClick={HandleDropdown}
                className={"articleWrapper__headerProfileSectionStateFollow"}
              >
                <FiMoreHorizontal
                  className={
                    "articleWrapper__headerProfileSectionStateFollowItem"
                  }
                />
              </div>

              {showAndClose && (
                <PDropdown ref={ref} details={getSingleArticle} />
              )}
            </div>
          </div>
        </div>
        <div className={"articleWrapper__title"}>
          <div className={"articleWrapper__titleDetails"}>
            <p
              className={"articleWrapper__titleDetailsItem"}
              onSelectStart={(e) => {
                e.preventDefault();
                return false;
              }}
              onPaste={(e) => {
                e.preventDefault();
                return false;
              }}
              onCopy={(e) => {
                e.preventDefault();
                return false;
              }}
            >
              {/* {HTMLReactParser(
                getSingleArticle?.article && getSingleArticle?.article
              )} */}
              {getSingleArticle?.title}
            </p>
          </div>

          <div className={"articleWrapper__titleImageWrapper"}>
            <Image
              src={
                getSingleArticle?.cover_pic &&
                (getSingleArticle.cover_pic.startsWith("http") ||
                  getSingleArticle.cover_pic.startsWith("/"))
                  ? `${getSingleArticle?.cover_pic}`
                  : photoSix
              }
              alt={""}
              width={100}
              height={100}
              priority
              // placeholder={"blur"}
              // blurDataURL
              objectFit={"cover"}
              layout={"responsive"}
              className={"articleWrapper__titleImageWrapperItem"}
            />
          </div>
        </div>

        <div className={"articleWrapper__articleDetails"}>
          <p
            className={"articleWrapper__articleDetailsItem"}
            onSelectStart={(e) => {
              e.preventDefault();
              return false;
            }}
            onPaste={(e) => {
              e.preventDefault();
              return false;
            }}
            onCopy={(e) => {
              e.preventDefault();
              return false;
            }}
            // onCut="return false"
            // onDrag="return false"
            // onDrop="return false"
          >
            {HTMLReactParser(HTMLReactParser(getSingleArticle?.article))}
          </p>
        </div>

        <div className={"articleWrapper__SocialMedai"}>
          <div className={"articleWrapper__SocialMedaiDetails"}>
            <div
              className={"articleWrapper__SocialMedaiDetailsLike"}
              onClick={HandleLike}
            >
              <div className={"articleWrapper__SocialMedaiDetailsLikeIconBody"}>
                <BsFillHandThumbsUpFill
                  className={"articleWrapper__SocialMedaiDetailsLikeIcon"}
                />
              </div>
              <div className={"articleWrapper__SocialMedaiDetailsLikeContent"}>
                <p>{singlePostLike?.data ? singlePostLike?.data : 0}</p>
              </div>
            </div>
            <div
              className={"articleWrapper__SocialMedaiDetailsLike"}
              onClick={HandleDisLike}
            >
              <div className={"articleWrapper__SocialMedaiDetailsLikeIconBody"}>
                <BsFillHandThumbsDownFill
                  className={"articleWrapper__SocialMedaiDetailsLikeIcon"}
                />
              </div>
              <div className={"articleWrapper__SocialMedaiDetailsLikeContent"}>
                <p>{singlePostDisLike?.data ? singlePostDisLike?.data : 0}</p>
              </div>
            </div>
            <div
              className={"articleWrapper__SocialMedaiDetailsLike"}
              onClick={HandleShowComment}
            >
              <div className={"articleWrapper__SocialMedaiDetailsLikeIconBody"}>
                <FaCommentDots
                  className={"articleWrapper__SocialMedaiDetailsLikeIcon"}
                />
              </div>
              <div className={"articleWrapper__SocialMedaiDetailsLikeContent"}>
                <p>{singlePostComment?.count ? singlePostComment?.count : 0}</p>
              </div>
            </div>
          </div>
          <div className={"articleWrapper__SocialMedaiStatus"}>
            <div className="sharing_wrapper">
              <div
                className="sharingbody"
                onClick={() => HandleDropdownSocialSub(getSingleArticle)}
              >
                <FaShareAlt className="sharingicon" />
              </div>

              {dropdownSocialSub === getSingleArticle?._id && (
                <div className="SocialWrapper" ref={refSocialSub}>
                  <div className="SocialBody">
                    <Link
                      href={`https://www.facebook.com/sharer.php?u=https://www.mirianpost.com/${getSingleArticle?._id}`}
                      target={"blank"}
                    >
                      <div className="SocialContent">
                        <FaFacebook className="SocialIcon" />
                      </div>
                    </Link>
                  </div>

                  <div className="SocialBody">
                    <Link
                      href={`https://api.whatsapp.com/send?text=${getSingleArticle?.title} https://www.mirianpost.com/${getSingleArticle?._id}`}
                      target={"blank"}
                    >
                      <div className="SocialContent">
                        <FaWhatsapp className="SocialIcon" />
                      </div>
                    </Link>
                  </div>

                  <div className="SocialBody">
                    <Link
                      href={`https://www.linkedin.com/shareArticle?url=ttps://www.mirianpost.com/${getSingleArticle?._id}&title=${getSingleArticle?.title}`}
                      target={"blank"}
                    >
                      <div className="SocialContent">
                        <FaLinkedin className="SocialIcon" />
                      </div>
                    </Link>
                  </div>

                  <div className="SocialBody">
                    <Link
                      href={`https://twitter.com/share?url=https://www.mirianpost.com/${getSingleArticle?._id}&text=${getSingleArticle?.title}`}
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

            {!getSingleArticle?.save ||
            getSingleArticle?.save === null ||
            getSingleArticle?.save === undefined ? (
              <div
                className={"articleWrapper__SocialMedaiStatusSaveIconBody"}
                onClick={HandleSavePost}
              >
                <MdOutlineBookmarkAdd
                  className={"articleWrapper__SocialMedaiStatusSaveIcon"}
                />
              </div>
            ) : (
              <div
                className={"articleWrapper__SocialMedaiStatusSaveIconBody"}
                onClick={HandleDeleteFromSave}
              >
                <MdOutlineBookmarkRemove
                  className={"articleWrapper__SocialMedaiStatusSaveIcon"}
                />
              </div>
            )}
            <div className="articleWrapper__SocialMedaiStatusFollowIconBodyStae">
              <div
                className={"articleWrapper__SocialMedaiStatusFollowIconBody"}
                onClick={HandleDropdownSubBody}
              >
                <FiMoreHorizontal
                  className={"articleWrapper__SocialMedaiStatusFollowIcon"}
                />
              </div>

              {showAndCloseSub && (
                <PDropdown ref={ref} details={getSingleArticle} />
              )}
            </div>
          </div>
        </div>

        {showComment && (
          <div className="articleWrapper__comment">
            <div className="articleWrapper__commentSection">
              <div className="articleWrapper__commentSectionImageWrapper">
                <Image
                  src={userDetails ? `${userDetails?.profile_pic}` : image1}
                  alt="state"
                  width={50}
                  height={50}
                  className="articleWrapper__commentSectionImage"
                />
              </div>
              {console.log(userDetails, "stated")}
              <div className="articleWrapper__commentSectionStage">
                <div className="articleWrapper__commentSectionStageTitle">
                  <p>{userDetails?.username}</p>
                </div>
                <textarea
                  value={commentState.comment || ""}
                  onChange={HandleChangeComment}
                  name="comment"
                  placeholder="Comment..."
                  className="articleWrapper__commentSectionStageTextarea"
                />
                <div className="articleWrapper__commentSectionStageButton">
                  <button onClick={HandleComment}>
                    {submitComment ? <LoaderBob /> : <>Comment</>}
                  </button>
                </div>
              </div>
            </div>
            <div className="articleWrapper__commentTextSectionWrapper">
              {singlePostComment?.data?.map((item, key) => (
                <div key={key} className="articleWrapper__commentTextSection">
                  <div className="articleWrapper__commentTextSectionWImageWrapper">
                    <Image
                      src={item ? `${item?.image}` : image1}
                      alt="state"
                      width={30}
                      height={30}
                      className="articleWrapper__commentTextSectionWImage"
                    />
                  </div>
                  <div className="articleWrapper__commentTextSectionText">
                    <div className="articleWrapper__commentTextSectionTextTitle">
                      <p>
                        {`${item?.username} `}
                        <span className="articleWrapper__commentTextSectionTextTitleSpan">
                          {`on ${moment(item?.date).format(
                            "MMM DD, YYYY hh:mm"
                          )}`}
                        </span>
                      </p>
                    </div>
                    <div className="articleWrapper__commentTextSectionTextBody">
                      <p>{item?.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* <div className={"articleWrapperAds"}>
        <Ads />
      </div> */}
    </ArticleDisplayDiv>
  );
};

export default DashboardArticleDisplay;
