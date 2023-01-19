import React, { useState } from "react";
import { StyledModal } from "./styles/modal.styles";
import userDefaultImage from "../../assets/Icons/avatar-profile-photo.png";
import { useDispatch, useSelector } from "react-redux";
import { getLoginPageCounter } from "../../store/actions/authAction";
import {
  getMyUserDetails,
  getRefreshUserDetails,
  getUserStore,
} from "../../store/actions/dashboardAction";
import DashBoardServices from "../../services/dashboardServices";
import LoaderBob from "../../universal-Components/Loaders/loaderBob";
import Image from "next/image";
import SpinnerMain from "../../universal-Components/Spinner/Spinner";
import { DASHBOARD_PROFILE_IMAGE_CHANGES } from "../../store/type";
import GeneralServices from "../../services/generalService";
import { toast } from "react-toastify";

const EditProfile = () => {
  // const [displayImage, setDisplayImage] = useState();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [changeImage, setChangeImage] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);

  const myUserDetails = useSelector(
    (state) => state.DashboardReducers.myUserDetails
  );

  const displayImage = useSelector(
    (state) => state.DashboardReducers.dashboardProfileImageChanges
  );

  const RefreshUserDetails = useSelector(
    (state) => state.DashboardReducers.RefreshUserDetails
  );

  const userStore = useSelector((state) => state.DashboardReducers.userStore);

  function getbase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = reject;

      reader.readAsDataURL(file);
    });
  }

  const handleChange = async (e) => {
    let image = e.target.files[0];

    if (image) {
      setLoadingImage(true);
      let promise = getbase64(image);

      promise.then((data) => {
        DashBoardServices.uploadImage({ file: data })
          .then((data) => {
            dispatch({
              type: DASHBOARD_PROFILE_IMAGE_CHANGES,
              payload: {
                profile_pic: data?.data?.url,
                cloudinary_id: data?.data?.public_id,
              },
            });

            dispatch(
              getRefreshUserDetails({
                ...RefreshUserDetails,
                profile_pic: data?.data?.url,
                cloudinary_id: data?.data?.public_id,
              })
            );

            setLoadingImage(false);
          })
          .catch((err) => {
            throw err;
          });
        // return data;
      });
    }
  };

  const handleCancel = () => {
    dispatch(getRefreshUserDetails(myUserDetails));

    dispatch(getLoginPageCounter({}));

    if (displayImage) {
      if (Object?.keys(displayImage).length > 0) {
        let id = displayImage?.cloudinary_id;

        DashBoardServices.deleteCloudImage({ cloudinary_id: id }).then(
          (data) => {
            dispatch({
              type: DASHBOARD_PROFILE_IMAGE_CHANGES,
              payload: {},
            });

            toast("deleted the image because it was not edited");
          }
        );
      }
    }
  };

  const CancelDetails = async () => {
    dispatch(getRefreshUserDetails(myUserDetails));
    dispatch(getLoginPageCounter({}));

    if (displayImage) {
      if (Object.keys(displayImage).length > 0) {
        let id = displayImage?.cloudinary_id;

        await DashBoardServices.deleteCloudImage({ cloudinary_id: id }).then(
          (data) => {
            dispatch({
              type: DASHBOARD_PROFILE_IMAGE_CHANGES,
              payload: {},
            });

            toast("deleted the image because it was not edited");
          }
        );
      }
    }
  };

  const HandleInput = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      dispatch(getRefreshUserDetails({ ...RefreshUserDetails, [name]: value }));
    }

    if (name === "bio") {
      dispatch(getRefreshUserDetails({ ...RefreshUserDetails, [name]: value }));
    }
  };

  const HandleEditDetails = async (e) => {
    e.preventDefault();
    setLoading(true);

    dispatch(
      getMyUserDetails({
        ...myUserDetails,
        profile_pic: displayImage?.profile_pic,
        cloudinary_id: displayImage?.cloudinary_id,
      })
    );

    dispatch(
      getRefreshUserDetails({
        ...RefreshUserDetails,
        profile_pic: displayImage?.profile_pic,
        cloudinary_id: displayImage?.cloudinary_id,
      })
    );

    dispatch(
      getUserStore({
        ...myUserDetails,
        profile_pic: displayImage?.profile_pic,
        cloudinary_id: displayImage?.cloudinary_id,
      })
    );

    await DashBoardServices.editUserDetails(RefreshUserDetails)
      .then((data) => {
        dispatch(getMyUserDetails({ ...myUserDetails, ...data }));
        dispatch(getRefreshUserDetails({ ...RefreshUserDetails, ...data }));
        dispatch(getUserStore({ ...userStore, ...data }));
        dispatch({
          type: DASHBOARD_PROFILE_IMAGE_CHANGES,
          payload: {},
        });
        setLoading(false);
      })
      .catch((err) => {});
  };

  return (
    <StyledModal>
      <div className="formDiv">
        <div className="header">
          <h2>Profile information</h2>
          <button onClick={handleCancel}>X</button>
        </div>
        <div className="profilePhoto">
          <div className="image">
            <p>photo</p>
            <label for="imageUpload">
              <Image
                src={
                  RefreshUserDetails.profile_pic &&
                  (RefreshUserDetails.profile_pic.startsWith("http") ||
                    RefreshUserDetails.profile_pic.startsWith("/"))
                    ? `${RefreshUserDetails.profile_pic}`
                    : userDefaultImage
                }
                width={100}
                height={100}
                alt="this"
              />

              {loadingImage && (
                <div className="loadingImage">
                  <SpinnerMain />
                </div>
              )}
            </label>
            <input
              type="file"
              id="imageUpload"
              //   accept=".png, .jpg, .jpeg"
              accept="image/*"
              hidden="true"
              onChange={handleChange}
            />
          </div>
          <div className="update">
            <button className="updateBtn">update</button>
            <button className="removeBtn">remove</button>
            <p>Recommended: Square JPG, PNG, or GIF.</p>
          </div>
        </div>
        <div className="formInput">
          <div className="inputContainer">
            <label>Name*</label>
            <input
              type="text"
              onChange={HandleInput}
              name="username"
              value={
                (RefreshUserDetails?.username &&
                  RefreshUserDetails?.username) ||
                ""
              }
            />
            <div className="inputText">
              {/* <p>
                Appears on your Profile page, as your byline, and in your
                responses.
              </p>
              </p> */}
              {/* <p>15/50</p> */}
            </div>
          </div>
          <div className="inputContainer">
            <label>Bio</label>
            <input
              type="text"
              onChange={HandleInput}
              name="bio"
              value={(RefreshUserDetails?.bio && RefreshUserDetails?.bio) || ""}
            />
            <div className="inputText">
              <p>Appears on your Profile and next to your stories.</p>
              {/* <p>Appears on your Profile and next to your stories.</p> */}
              {/* <p>28/160</p> */}
            </div>
          </div>
        </div>

        <div className="bottomBtn">
          <button className="cancelBtn" onClick={CancelDetails}>
            cancel
          </button>
          {loading ? (
            <button disabled={loadingImage ? true : false} className="saveBtn">
              <LoaderBob />
            </button>
          ) : (
            <button
              disabled={loadingImage ? true : false}
              className="saveBtn"
              onClick={HandleEditDetails}
            >
              save
            </button>
          )}
        </div>
      </div>
    </StyledModal>
  );
};

export default EditProfile;
