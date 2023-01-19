import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { ListDiv } from "./styles/list.style";
import Skeleton from "@mui/material/Skeleton";

const List = () => {
  const router = useRouter();

  const myUserDetails = useSelector(
    (state) => state.DashboardReducers.myUserDetails
  );

  const HandleShowSaveList = () => {
    router.push(`/dashboard/followings`);
  };

  return (
    <ListDiv>
      <div className="listHeader">
        <p>Saved List</p>
      </div>
      <div className="listBody">
        <div className="listBodyOne">
          <p className="listBodyOneNum">Number of Saved article</p>
          {!myUserDetails ? (
            <div>
              <Skeleton animation="wave" height={50} width={180} />
            </div>
          ) : (
            <p className="listBodyOneCount">{myUserDetails?.save_count}</p>
          )}
        </div>
        <div className="listBodyTwo">
          <p className="listBodyTwoList">link to view Saved view</p>
          <p className="listBodyTwoView" onClick={HandleShowSaveList}>
            view saved list
          </p>
        </div>
      </div>
    </ListDiv>
  );
};

export default List;
