import { useRouter } from "next/router";
import React, { forwardRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import DashBoardServices from "../../services/dashboardServices";
import { getDynamicPost } from "../../store/actions/generalAction";
import SubLoaderBob from "../Loaders/subLoaderBob";
import { PostDropdownDiv } from "./styles/postDropdown.styles";

// eslint-disable-next-line react/display-name
const PostDropdown = forwardRef(({ details, fullDetails }, ref) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [change, setChange] = useState(false);
  const [loading, setLoading] = useState(false);

  const userStore = useSelector((state) => state.DashboardReducers.userStore);

  const createFollowers = async () => {
    setLoading(true);
    fullDetails.map((item) => {
      if (item.createdBy === details.createdBy) {
        item["followed"] = true;
      }
    });

    const payload = {
      email: details.email,
      username: details.username,
      followedUserId: details.createdBy,
    };

    dispatch(getDynamicPost(fullDetails));

    await DashBoardServices.createFollowers(payload)
      .then((data) => {
        toast("followed successfully");
        setLoading(false);
      })
      .catch((err) => {
        throw err;
      });

    setChange(!change);
  };

  const deleteFollowers = async () => {
    setLoading(true);
    fullDetails.map((item) => {
      if (item.createdBy === details.createdBy) {
        delete item.followed;
      }
    });

    dispatch(getDynamicPost(fullDetails));

    await DashBoardServices.deleteFollowing(details.createdBy)
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
            <SubLoaderBob />
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
        <p>view profile</p>
      </div>
    </PostDropdownDiv>
  );
});

export default PostDropdown;
