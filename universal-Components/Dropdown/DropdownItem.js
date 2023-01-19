import React, { forwardRef, memo } from "react";
import { BsCheckLg } from "react-icons/bs";

// eslint-disable-next-line react/display-name
const DropdownItem = forwardRef(
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
                  select === item.title && "containerColor"
                }`}
                onClick={() => {
                  HandleClickCoin(item);
                  HandleShowDropDownReturn();
                }}
              >
                <div className="dropDownHeader">
                  <p>{item.title}</p>
                </div>

                {item.title === select && (
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

export default memo(DropdownItem);
