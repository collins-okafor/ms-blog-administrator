import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { ListDiv } from "../styles/list.style";

const OtherUserList = () => {
  const router = useRouter();

  const otherUserDetails = useSelector(
    (state) => state.DashboardReducers.otherUserDetails
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
          <p className="listBodyOneCount">{otherUserDetails?.save_count}</p>
        </div>
        {/* <div className="listBodyTwo">
          <p className="listBodyTwoList">link to view Saved view</p>
          <p className="listBodyTwoView" onClick={HandleShowSaveList}>
            view saved list
          </p>
        </div> */}
      </div>
    </ListDiv>
  );
};

export default OtherUserList;
