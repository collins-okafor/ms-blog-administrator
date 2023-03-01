import { useRouter } from "next/router";
import React, { forwardRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import DashBoardServices from "../../services/dashboardServices";
import { getDashboardSinglePost } from "../../store/actions/dashboardAction";
import SubLoaderBob from "../Loaders/subLoaderBob";
import { PostDropdownDiv } from "./styles/postDropdown.styles";

// eslint-disable-next-line react/display-name
const PDropdown = forwardRef(({ details }, ref) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [change, setChange] = useState(false);
  const [loading, setLoading] = useState(false);

  const userStore = useSelector((state) => state.DashboardReducers.userStore);

  const createFollowers = async () => {
    setLoading(true);
    details["followed"] = true;

    const payload = {
      email: details.email,
      username: details.username,
      followedUserId: details.createdBy,
    };

    dispatch(getDashboardSinglePost(details));

    await DashBoardServices.createFollowers(payload)
      .then((data) => {
        console.log(data);
        toast("followed successfully");
        setLoading(false);
      })
      .catch((err) => {
        throw err;
      });

    setChange(!change);
  };

  const deleteFollowers = () => {
    setLoading(true);
    delete details.followed;

    dispatch(getDashboardSinglePost(details));

    DashBoardServices.deleteFollowing(details.createdBy)
      .then((data) => {
        toast("successfully unfollowed");
        setLoading(false);
      })
      .catch((err) => {
        throw err;
      });

    setChange(!change);
  };

  const ViewProfile = () => {
    if (userStore?.username === details?.username) {
      router.push(`/dashboard/profile`);
    } else {
      router.push(`/dashboard/profile/${details.username}`);
    }
  };

  return (
    <PostDropdownDiv ref={ref}>
      {details?.followed === "my" ? (
        <div className="postDropdownItem">
          <p>My Post</p>
        </div>
      ) : !details?.followed ? (
        <>
          {!loading ? (
            <div className="postDropdownItem" onClick={createFollowers}>
              <p>Follow</p>
            </div>
          ) : (
            <div>
              <SubLoaderBob />
            </div>
          )}
        </>
      ) : (
        <>
          {!loading ? (
            <div className="postDropdownItem" onClick={deleteFollowers}>
              <p>unFollow</p>
            </div>
          ) : (
            <SubLoaderBob />
          )}
        </>
      )}
      <div className="postDropdownItem" onClick={ViewProfile}>
        <p>view Profile</p>
      </div>
    </PostDropdownDiv>
  );
});

export default PDropdown;
