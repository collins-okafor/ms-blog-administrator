import React, { useState } from "react";
import { NavListDiv } from "./style/navlist.style";

const DashboardNavList = () => {
  const [list, setList] = useState(0);

  return (
    <NavListDiv>
      {LinksDetails?.map((item, key) => (
        <div
          key={key}
          onClick={() => setList(key)}
          className={`NavListWrapper ${list === key && "selected"}`}
        >
          <p className="NavListData">{item.text}</p>
        </div>
      ))}
    </NavListDiv>
  );
};

const LinksDetails = [
  { text: "Directory", link: "" },
  { text: "Blog", link: "" },
  { text: "Add Your Biz", link: "" },
  { text: "Subscribe", link: "" },
  { text: "Conversation", link: "" },
  { text: "Popular", link: "" },
  { text: "Contact Us", link: "" },
];

export default DashboardNavList;
