import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import Dropdown from "../../universal-Components/Dropdown";
import { HiPhotograph } from "react-icons/hi";
import { WriteDiv } from "./styles/write.style";
import LoaderBob from "../../universal-Components/Loaders/loaderBob";
import { AUTHLOADER } from "../../store/type";
import WriteService from "../../services/writeService";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import DashBoardServices from "../../services/dashboardServices";
import SpinnerNormal from "../../universal-Components/Spinner/SpinnerNormal";
import SpinnerMain from "../../universal-Components/Spinner/Spinner";
// import MyEditor from "../../universal-Components/myEditor";

const MyEditor = dynamic(() => import("../../universal-Components/myEditor"), {
  ssr: false,
});

const WriteComponent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [data, setData] = useState("");
  const [form, setForm] = useState({});
  const [imageFile, setImageFile] = useState();
  const [loading, setLoading] = useState(false);
  const [imageState, setImageState] = useState([]);

  const AuthLoader = useSelector((state) => state.authReducer.AuthLoader);

  const docsLoader = useSelector((state) => state.DashboardReducers.docsLoader);

  const dashboard_Subtitle = useSelector(
    (state) => state.DashboardReducers.dashboard_Subtitle
  );

  const [dropItem, setDropItem] = useState("Select Details");

  const HandleClickDropDown = (item) => {
    setDropItem(item.title);
  };

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

  const handleTextChange = async (e) => {
    const { name } = e.target;

    if (name === "cover_pic") {
      setLoading(true);
      const file = e.target.files[0];

      let promise = getbase64(file);

      promise.then((data) => {
        DashBoardServices.uploadImage({ file: data })
          .then((data) => {
            setForm({
              ...form,
              [name]: data?.data?.secure_url,
              cover_pic_id: data?.data?.public_id,
            });

            setImageFile(e.target.files[0]);
            setLoading(false);
          })
          .catch((err) => {
            throw err;
          });
      });
    }

    if (name === "title") {
      setForm({ ...form, [name]: e.target.value });
    }
  };

  const handleEditor = (data) => {
    setData(data);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: AUTHLOADER, payload: true });

    if (data && form.title && form.cover_pic && dropItem) {
      const payload = {
        tag: dropItem,
        title: form?.title,
        cover_pic: form.cover_pic,
        cover_pic_id: form.cover_pic_id,
        article_Image_cloud: imageState,
        article: data,
      };

      WriteService.postArticle(payload)
        .then((data) => {
          toast("posted successfully");
          dispatch({ type: AUTHLOADER, payload: false });
          console.log(data);
          router.push("/dashboard/stories");
        })
        .catch((err) => {
          throw err;
        });
    } else {
      toast.error("all filed my be filled !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch({ type: AUTHLOADER, payload: false });
    }
  };

  return (
    <WriteDiv>
      <div className="wirteWrappperHeader">
        <p>Write An Article</p>
      </div>
      <div className="wirteWrappperBody">
        <div className="wirteWrappperBodyFirstLine">
          <div className="wirteWrappperBodyFirstLineTitle">
            <p>Title</p>
            <textarea onChange={handleTextChange} name="title"></textarea>
          </div>
          <div className="wirteWrappperBodyFirstLineTag">
            <div className="wirteWrappperBodyFirstLineTagText">
              <p>Tag</p>
            </div>
            <div className="wirteWrappperBodyFirstLineDropdown">
              <Dropdown
                list={dashboard_Subtitle}
                select={dropItem}
                HandleClickCoin={HandleClickDropDown}
              />
            </div>
          </div>
        </div>
        <div className="wirteWrappperBodySecondLine">
          <p className="wirteWrappperBodySecondLineText">Add a cover Picture</p>
          <div className="wirteWrappperBodySecondLineFile">
            <div className="wirteWrappperBodySecondLineFileView">
              <div className="wirteWrappperBodySecondLineFileViewIcon">
                <div className="wirteWrappperBodySecondLineFileViewIconBody">
                  <HiPhotograph className="wirteWrappperBodySecondLineFileViewIconItem" />
                </div>
              </div>

              <div className="wirteWrappperBodySecondLineFileViewText">
                <p>
                  {loading ? (
                    <SpinnerMain />
                  ) : imageFile?.name ? (
                    imageFile?.name
                  ) : (
                    "photo"
                  )}
                </p>
              </div>
            </div>
            <input
              type={"file"}
              name="cover_pic"
              className="wirteWrappperBodySecondLineFileInput"
              onChange={handleTextChange}
            />
          </div>
        </div>
      </div>
      <div className="wirteWrappperBodyEditor">
        <p className="wirteWrappperBodyEditorTitle">Article Body</p>
        {MyEditor && (
          <MyEditor
            handleEditor={handleEditor}
            data={data}
            setImageState={setImageState}
            imageState={imageState}
          />
        )}
      </div>

      <div className="wirteWrappperBodyButton">
        {docsLoader && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <SpinnerMain />
          </div>
        )}

        {AuthLoader ? (
          <button>
            <LoaderBob />
          </button>
        ) : (
          <button
            disabled={
              AuthLoader ||
              docsLoader ||
              loading ||
              !data ||
              !form.title ||
              !form.cover_pic ||
              !dropItem
                ? true
                : false
            }
            onClick={HandleSubmit}
          >
            Publish
          </button>
        )}
      </div>
    </WriteDiv>
  );
};

export default WriteComponent;
