import React, { memo, useRef, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import DropdownItem from "./DropdownItem";
import { DropdownWrapperDiv } from "./styles/dropdown.styles";

const Dropdown = ({ list, select, HandleClickCoin }) => {
  const ref = useRef();
  const [showDropDownConditional, setShowDropDownConditional] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const HandleShowDropDown = () => {
    if (showDropDownConditional === false) {
      setShowDropDown(true);
      setShowDropDownConditional(true);
      return;
    }

    setShowDropDown(false);
    setShowDropDownConditional(false);
  };

  const HandleShowDropDownReturn = () => {
    setShowDropDown(false);
  };

  useOnClickOutside(ref, () => setShowDropDown(false));

  return (
    <DropdownWrapperDiv>
      <div className="checkBoxBody" onClick={HandleShowDropDown}>
        <div className="checkboxHeader">
          <p>{select}</p>
        </div>

        <div>
          {showDropDown ? (
            <div className="searchIconBody">
              <IoIosArrowUp className="searchIcon" />
            </div>
          ) : (
            <div className="searchIconBody">
              <IoIosArrowDown className="searchIcon" />
            </div>
          )}
        </div>
      </div>

      <div style={{ width: "100%" }}>
        <DropdownItem
          ref={ref}
          list={list}
          showDropDown={showDropDown}
          HandleClickCoin={HandleClickCoin}
          HandleShowDropDownReturn={HandleShowDropDownReturn}
          select={select}
        />
      </div>
    </DropdownWrapperDiv>
  );
};

export default memo(Dropdown);
