import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getLoginPageCounter } from "../../store/actions/authAction";
import phoneTwo from "../../assets/Images/63936.jpg";
import { SearchStyle } from "./styles/style";
import landingpageService from "../../services/landingpageServices";
import Image from "next/image";
import DashBoardServices from "../../services/dashboardServices";
import SpinnerMain from "../Spinner/Spinner";

const SearchComp = ({ handleOpenSearch }) => {
  const timeOut = useRef;
  const dispatch = useDispatch();
  const [searchItem, setSearchItem] = useState([]);
  const [searchNotFound, setsearchNotFound] = useState("");
  const [loader, setLoader] = useState(false);

  const handleClose = () => {
    dispatch(getLoginPageCounter({}));
  };

  const handleSearch = (e) => {
    setLoader(true);
    const { value } = e.target;

    clearTimeout(timeOut.current);

    if (value?.length > 0) {
      timeOut.current = setTimeout(() => {
        DashBoardServices.SearchArticle(5, value).then((data) => {
          if (data?.message === "success") {
            if (data?.data?.length > 0) {
              setLoader(false);
              setSearchItem(data?.data);
            } else {
              setLoader(false);
              setSearchItem([]);
              setsearchNotFound("Article not found");
            }
          } else {
            setLoader(false);
            setSearchItem([]);
            setsearchNotFound("Article not found");
          }
        });
      }, 300);
    } else {
      setLoader(false);
      setSearchItem([]);
      setsearchNotFound("");
    }
  };

  return (
    <SearchStyle searchItem={searchItem}>
      <button onClick={handleClose}>X</button>
      <input type="text" onChange={handleSearch} placeholder="Search..." />

      {loader ? (
        <SpinnerMain />
      ) : (
        <div className="searchContainer">
          {searchItem?.map((item, i) => (
            <div
              key={i}
              className="searchDisplay"
              onClick={() => handleOpenSearch(item)}
            >
              <div className="imageContainer">
                <Image
                  src={
                    item.cover_pic &&
                    (item.cover_pic.startsWith("http") ||
                      item.cover_pic.startsWith("/"))
                      ? `${item.cover_pic}`
                      : phoneTwo
                  }
                  alt="system"
                  priority
                  objectFit={"cover"}
                  // layout={"responsive"}
                  width={100}
                  height={100}
                />
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
      )}
    </SearchStyle>
  );
};

export default SearchComp;
