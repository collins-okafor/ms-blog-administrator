import React, { useRef, useState } from "react";
import Ads from "../postAdsStructure/ads";
import { ArticleDisplayDiv } from "./styles/articleDisplay.style";
import image1 from "../../assets/Images/Avatar.png";
import Image from "next/image";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import {
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill,
} from "react-icons/bs";
import photoSix from "../../assets/Icons/avatar-profile-photo.png";
import {
  FaCommentDots,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import HTMLReactParser from "html-react-parser";
import { useRouter } from "next/router";
import { getLoginPageCounter } from "../../store/actions/authAction";
import Link from "next/link";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const ArticleDisplay = () => {
  const router = useRouter();
  const refSocial = useRef();
  const dispatch = useDispatch();
  const [showComment, setShowComment] = useState(false);

  const [dropdownSocial, setDropdownSocial] = useState("");
  const [showDropdownSocial, setShowDropdownSocial] = useState(false);

  let auth =
    typeof window !== "undefined" && window.localStorage.getItem("token");

  const getSingleArticle = useSelector(
    (state) => state.generalReducer.getSingleArticle
  );

  const getOfflineComment = useSelector(
    (state) => state.landingPageReducer.offline_comment
  );

  const getOfflineLike = useSelector(
    (state) => state.landingPageReducer.offline_like
  );

  const getOfflineDislike = useSelector(
    (state) => state.landingPageReducer.offline_dislike
  );

  console.log(getSingleArticle, "make");

  const HandleLike = () => {
    if (!auth) {
      router.push("/");
      dispatch(getLoginPageCounter({ counter: 0 }));
    }
  };

  const HandleDisLike = () => {
    if (!auth) {
      router.push("/");
      dispatch(getLoginPageCounter({ counter: 0 }));
    }
  };

  const HandleShowComment = () => {
    if (auth) {
      setShowComment(!showComment);
    } else {
      router.push("/");
      dispatch(getLoginPageCounter({ counter: 0 }));
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

  useOnClickOutside(refSocial, () => setDropdownSocial(""));

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

            <div
              className={"articleWrapper__headerProfileSectionStateSave"}
              onClick={HandleShowComment}
            >
              <MdOutlineBookmarkAdd
                className={"articleWrapper__headerProfileSectionStateSaveItem"}
              />
            </div>
            <div
              className={"articleWrapper__headerProfileSectionStateFollow"}
              onClick={HandleShowComment}
            >
              <FiMoreHorizontal
                className={
                  "articleWrapper__headerProfileSectionStateFollowItem"
                }
              />
            </div>
          </div>
        </div>
        <div className={"articleWrapper__title"}>
          <div className={"articleWrapper__titleDetails"}>
            <p className={"articleWrapper__titleDetailsItem"}>
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
          <p className={"articleWrapper__articleDetailsItem"}>
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
                <p>{getOfflineLike ? getOfflineLike : 0}</p>
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
                <p>{getOfflineDislike ? getOfflineDislike : 0}</p>
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
                <p>{getOfflineComment ? getOfflineComment : 0}</p>
              </div>
            </div>
          </div>

          <div className={"articleWrapper__SocialMedaiStatus"}>
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

            <div
              className={"articleWrapper__SocialMedaiStatusSaveIconBody"}
              onClick={HandleShowComment}
            >
              <MdOutlineBookmarkAdd
                className={"articleWrapper__SocialMedaiStatusSaveIcon"}
              />
            </div>
            <div
              className={"articleWrapper__SocialMedaiStatusFollowIconBody"}
              onClick={HandleShowComment}
            >
              <FiMoreHorizontal
                className={"articleWrapper__SocialMedaiStatusFollowIcon"}
              />
            </div>
          </div>
        </div>

        {showComment && (
          <div className="articleWrapper__comment">
            <div className="articleWrapper__commentSection">
              <div className="articleWrapper__commentSectionImageWrapper">
                <Image
                  src={image1}
                  alt="state"
                  width={50}
                  height={50}
                  className="articleWrapper__commentSectionImage"
                />
              </div>
              <div className="articleWrapper__commentSectionStage">
                <div className="articleWrapper__commentSectionStageTitle">
                  <p>joshua ejike</p>
                </div>
                <textarea className="articleWrapper__commentSectionStageTextarea" />
                <div className="articleWrapper__commentSectionStageButton">
                  <button>Comment</button>
                </div>
              </div>
            </div>
            <div className="articleWrapper__commentTextSectionWrapper">
              {ArrayList?.map((item, key) => (
                <div key={key} className="articleWrapper__commentTextSection">
                  <div className="articleWrapper__commentTextSectionWImageWrapper">
                    <Image
                      src={image1}
                      alt="state"
                      width={30}
                      height={30}
                      className="articleWrapper__commentTextSectionWImage"
                    />
                  </div>
                  <div className="articleWrapper__commentTextSectionText">
                    <div className="articleWrapper__commentTextSectionTextTitle">
                      <p>
                        Sam Doe{" "}
                        <span className="articleWrapper__commentTextSectionTextTitleSpan">
                          on Aug 17, 2021 5:34 am
                        </span>
                      </p>
                    </div>
                    <div className="articleWrapper__commentTextSectionTextBody">
                      <p>
                        That far ground rat pure from newt far panther crane
                        lorikeet overlay alas cobra across much gosh less
                        goldfinch ruthlessly alas examined and that more and the
                        ouch jeez.
                      </p>
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

export default ArticleDisplay;
