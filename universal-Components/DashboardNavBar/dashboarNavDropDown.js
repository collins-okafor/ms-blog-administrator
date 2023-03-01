import { useRouter } from "next/router";
import React, { forwardRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DASHBOARD_NAV_DROPDOWN } from "../../store/type";
import { DashboardNavDropdownDiv } from "./styles/dashboardNavDropdown.style";

// eslint-disable-next-line react/display-name
const DashboarNavDropDown = forwardRef(({}, ref) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const dashbaordNavDropdown = useSelector(
    (state) => state.DashboardConditionReducers.dashbaordNavDropdown
  );

  const handleClick = (item) => {
    if (item.text !== "Logout") {
      dispatch({
        type: DASHBOARD_NAV_DROPDOWN,
        payload: false,
      });
      router.push(`${item.link}`);
    } else {
      localStorage.clear();
      router.push("/");
    }
  };

  return (
    <DashboardNavDropdownDiv
      dashbaordNavDropdown={dashbaordNavDropdown}
      ref={ref}
    >
      <div className="dropdown_wrapper">
        {dropdownList.map((item, key) => (
          <p key={key} onClick={() => handleClick(item)}>
            {item.text}
          </p>
        ))}
      </div>
    </DashboardNavDropdownDiv>
  );
});

const dropdownList = [
  { text: "Profile", link: "/dashboard/profile" },
  // { text: "Settings", link: "/dashboard/settings" },
  { text: "Logout" },
];

export default DashboarNavDropDown;
