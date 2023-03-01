import Image from "next/image";
import React from "react";
import photoFive from "../../assets/Images/notfound.svg";
import { NotFoundDiv } from "./styles/notfound.styles";

const NotFound = ({ text }) => {
  return (
    <NotFoundDiv>
      <div className="notfound_image">
        <Image src={photoFive} alt={""} className="notfound_image_obj" />
      </div>
      <p>{text}</p>
    </NotFoundDiv>
  );
};

export default NotFound;
