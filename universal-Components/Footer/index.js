import React, { memo } from "react";
import { FooterDiv } from "./style/footer.styles";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterDiv>
      <div className="socialMedia">
        {socialMediaHandles?.map((item, key) => (
          <Link key={key} href={item.link}>
            <div className="socialMedia__item">
              <item.linkIcon className="socialMedia__icon" />
            </div>
          </Link>
        ))}
      </div>
      <div className="textLinks">
        {LinksURL?.map((item, key) => (
          <Link key={key} href={item.link}>
            <div className="textLinksItem">
              <p>{item.linkText}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="footerText">
        <p>© 2022 ThemeSphere. Designed by ThemeSphere.</p>
      </div>
    </FooterDiv>
  );
};

const socialMediaHandles = [
  { link: "", linkIcon: FaFacebook },
  { link: "", linkIcon: FaTwitter },
  { link: "", linkIcon: FaInstagram },
  { link: "", linkIcon: FaPinterestP },
];

const LinksURL = [
  { link: "", linkText: "Home" },
  { link: "", linkText: "Privacy" },
  { link: "", linkText: "Get in Touch" },
];

export default memo(Footer);
