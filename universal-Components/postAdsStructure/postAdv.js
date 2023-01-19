import React from "react";
import photoOne from "../../assets/Images/about-us.jpg";
import photoTwo from "../../assets/Images/indesignSeven.jpg";
import photoThree from "../../assets/Images/programmer-working-on-laptop-computer-technology.jpg";
import photoFour from "../../assets/Images/indesignFive.jpg";
import photoFive from "../../assets/Images/paris.jpg";
import photoSix from "../../assets/Images/about-us.jpg";
import Image from "next/image";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { PostAdvDiv } from "./styles/postAdv.style";

const PostAdv = () => {
  const Truncate = (word, count = 60) => {
    const Word_length = count;
    if (word.length > Word_length) {
      return word.slice(0, Word_length) + "...";
    } else {
      return word;
    }
  };

  return (
    <PostAdvDiv>
      {posts.map((item, key) => (
        <div key={key} className={"flex"}>
          <div className="userDetails">
            <div className="photoContainer">
              <Image src={item.photo} alt="" className="photoContainerImage" />
            </div>
          </div>

          <div className="mainPostContainer">
            <div className="mainPostContainerHeaderWrapper">
              <div className="mainPostContainerHeaderWrapperSystem">
                <div className="profileImage">
                  <Image
                    src={item.profilePics}
                    alt=""
                    className="profileImageState"
                  />
                </div>
                <div className="userName">
                  <h4>{item.author}</h4>
                </div>
              </div>
              <div className="mainPostContainerHeaderWrapperContent">
                <h1>{item.title}</h1>
                <p className="textContent">{item.content}</p>
              </div>
            </div>
            <div className="postContainer">
              <p>{`${item.date}11 min read`}</p>
              <button>Java programming</button>
            </div>
          </div>
        </div>
      ))}
    </PostAdvDiv>
  );
};

const posts = [
  {
    profilePics: photoOne,
    photo: photoOne,
    title:
      "How to build a blog Sungkyunkwan University (SKKU) is a world-class institution ",
    author: "Emeka",
    date: "Jan 20",
    content:
      "Sungkyunkwan University (SKKU) is a world-class institution of higher education that has existed for more than six centuries. Since its founding as a royal Confucian academy in 1398 at the dawn of the Joseon Dynasty (1392-1910), SKKU has demonstrated strong academic leadership. Cont…",
  },
  {
    profilePics: photoOne,
    photo: photoTwo,
    title: "My First Electricity Connection",
    author: "Joshua Ejike",
    date: "August 19",
    content:
      "Sungkyunkwan University (SKKU) is a world-class institution of higher education that has existed for more than six centuries. Since its founding as a royal Confucian academy in 1398 at the dawn of the Joseon Dynasty (1392-1910), SKKU has demonstrated strong academic leadership. Cont…",
  },
  {
    profilePics: photoOne,
    photo: photoThree,
    title: "How to become a better Programmer",
    author: "Emeka",
    date: "1 day ago",
    content:
      "Sungkyunkwan University (SKKU) is a world-class institution of higher education that has existed for more than six centuries. Since its founding as a royal Confucian academy in 1398 at the dawn of the Joseon Dynasty (1392-1910), SKKU has demonstrated strong academic leadership. Cont…",
  },
  {
    profilePics: photoOne,
    photo: photoFour,
    title: "Step by step guide in Making good interior design",
    author: "Emeka",
    date: "May 24",
    content:
      "Sungkyunkwan University (SKKU) is a world-class institution of higher education that has existed for more than six centuries. Since its founding as a royal Confucian academy in 1398 at the dawn of the Joseon Dynasty (1392-1910), SKKU has demonstrated strong academic leadership. Cont…",
  },
  {
    profilePics: photoOne,
    photo: photoFive,
    title: "A visit to paris",
    author: "Emeka",
    date: "June 23",
    content:
      "Sungkyunkwan University (SKKU) is a world-class institution of higher education that has existed for more than six centuries. Since its founding as a royal Confucian academy in 1398 at the dawn of the Joseon Dynasty (1392-1910), SKKU has demonstrated strong academic leadership. Cont…",
  },
];

export default PostAdv;
