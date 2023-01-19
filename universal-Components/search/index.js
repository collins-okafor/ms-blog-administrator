import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getLoginPageCounter } from "../../store/actions/authAction";
// import { SearchStyle } from "./styles/search.style";
import photoTwo from "../../assets/Images/indesignSeven.jpg";
import { SearchStyle } from "./styles/style";

const SearchComp = ({ searchArry }) => {
  const dispatch = useDispatch();
  const [searchItem, setSearchItem] = useState([]);
  const [searchNotFound, setsearchNotFound] = useState("");
  const handleClose = () => {
    dispatch(getLoginPageCounter({}));
  };
  const handleSearch = (e) => {
    console.log(e.target.value);

    const ss = searchArry.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (ss.length === 0) {
      setsearchNotFound("search not found");
    } else {
      setsearchNotFound("");
    }
    if (e.target.value) {
      setSearchItem(ss);
    } else {
      setSearchItem([]);
    }
    // console.log(item.title);
  };
  console.log(searchItem);
  return (
    <SearchStyle searchItem={searchItem}>
      <button onClick={handleClose}>X</button>
      <input type="text" onChange={handleSearch} placeholder="Search..." />
      <div className="searchContainer">
        {searchItem.map((item, i) => (
          <div key={i} className="searchDisplay">
            <div className="imageContainer">
              <img src={item.image} alt="" />
            </div>
            <div className="searchWord">
              <h3>{item.title}</h3>
              <p>{item.date}</p>
            </div>
          </div>
        ))}

        <div>
          <p>{searchNotFound}</p>
        </div>
      </div>
    </SearchStyle>
  );
};

export default SearchComp;
