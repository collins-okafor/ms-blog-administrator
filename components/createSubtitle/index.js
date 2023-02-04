import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import SubServices from "../../services/subtitleServices";
import { getFormValue, getEditOption } from "../../store/actions/subtitle";
import Loader1 from "../../universal-Components/Loaders/loader1";
import LoaderBob from "../../universal-Components/Loaders/loaderBob";
import Ads from "../../universal-Components/postAdsStructure/ads";
import SubListView from "../../universal-Components/subtitleListView";
import { SubTitleDiv } from "./style/createSub.style";

const CreateSubtitlePage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [change, setChange] = useState(false);

  const subtitle = useSelector((state) => state.SubtitleReducers.subtitle);

  const loader = useSelector((state) => state.SubtitleReducers.loader);

  const formValue = useSelector((state) => state.SubtitleReducers.formValue);

  const editOption = useSelector((state) => state.SubtitleReducers.editOption);

  const HandleChange = (e) => {
    const { name, value } = e.target;

    dispatch(getFormValue({ ...formValue, [name]: value }));
  };

  const CreateSubtitle = () => {
    setLoading(true);
    SubServices.createSubtitle(formValue)
      .then((data) => {
        subtitle.unshift(formValue);
        dispatch(getFormValue({}));
        toast("successfully created");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });

    setChange(!change);
  };

  const EditSubtitle = () => {
    setLoading(true);

    subtitle.map((item) => {
      if (item._id === formValue._id) {
        item.title = formValue.title;
      }
    });

    SubServices.editSubtitle(formValue._id, { title: formValue.title })
      .then((data) => {
        dispatch(getEditOption(false));
        dispatch(getFormValue({}));
        setLoading(false);
        setChange(!change);
        toast("Successfully Edited");
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  return (
    <SubTitleDiv>
      <div className="create_subtitle_wrapper">
        <div className="create_subtitle">
          <div className="create_subtitle_input_body">
            <input
              type={"text"}
              value={formValue?.title || ""}
              name="title"
              onChange={HandleChange}
              className="create_subtitle_input"
            />
          </div>
          <div className="create_subtitle_button">
            {editOption ? (
              <button
                disabled={loading || !formValue?.title ? true : false}
                onClick={EditSubtitle}
              >
                {loading ? <LoaderBob /> : <>Edit</>}
              </button>
            ) : (
              <button
                disabled={loading || !formValue?.title ? true : false}
                onClick={CreateSubtitle}
              >
                {loading ? <LoaderBob /> : <>Create</>}
              </button>
            )}
          </div>
        </div>

        {loader && (
          <div style={{ width: "100%", margin: "30px 0px" }}>
            <Loader1 />
          </div>
        )}

        {!loader && (
          <div className="subtitle_display">
            <SubListView />
          </div>
        )}
      </div>
      {/* <div className="ads">
        <Ads />
      </div> */}
    </SubTitleDiv>
  );
};

export default CreateSubtitlePage;
