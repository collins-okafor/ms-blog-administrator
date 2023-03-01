import React, { forwardRef, memo } from "react";
import { BsCheckLg } from "react-icons/bs";

// eslint-disable-next-line react/display-name
const SubDropdownItem = forwardRef(
  (
    { showDropDown, list, select, HandleClickCoin, HandleShowDropDownReturn },
    ref
  ) => {
    return (
      <>
        {showDropDown && (
          <div className="dropDownBody" ref={ref}>
            {list?.map((item, key) => (
              <div
                key={key}
                className={`dropDownContainer ${
                  select === item.subcontent && "containerColor"
                }`}
                onClick={() => {
                  HandleClickCoin(item);
                  HandleShowDropDownReturn();
                }}
              >
                <div className="dropDownHeader">
                  <p>{item.subcontent}</p>
                </div>

                {item.subcontent === select && (
                  <div className="dropDownIconBody">
                    <BsCheckLg className="dropDownIcon" />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </>
    );
  }
);

export default memo(SubDropdownItem);
