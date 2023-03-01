import React from "react";
import { AdsDiv } from "./styles/ads.style";

const Ads = () => {
  return (
    <AdsDiv>
      {ads?.map((item, key) => (
        <div key={key} className="landingBodySectionAdsItem">
          Ads
        </div>
      ))}
    </AdsDiv>
  );
};

const ads = [{}, {}, {}];

export default Ads;
