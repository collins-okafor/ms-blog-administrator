import React, { useEffect, useState } from "react";
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
import SubDropdown from "../../universal-Components/SubDropdown";
import {
  getMyStoriesDetails,
  getMyStoriesLoader,
} from "../../store/actions/dashboardAction";
import HTMLReactParser from "html-react-parser";
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

  const [dropItem, setDropItem] = useState({ title: "Select Tag" });

  const [subDopItem, setSubDropItem] = useState({ title: "Select Sub_Tag" });

  const myStoriesDetails = useSelector(
    (state) => state.DashboardReducers.myStoriesDetails
  );

  const myStoriesLoader = useSelector(
    (state) => state.DashboardReducers.myStoriesLoader
  );

  useEffect(() => {
    if (Object.keys(myStoriesDetails).length > 0) {
      setForm(myStoriesDetails);
      setImageFile({ name: myStoriesDetails?.cover_pic });
      setDropItem({ title: myStoriesDetails?.tag });
      setSubDropItem({
        title: myStoriesDetails?.subtag
          ? myStoriesDetails?.subtag
          : "Select Sub_Tag",
      });
      setData(`${HTMLReactParser(myStoriesDetails?.article)}`);
    } else {
      dispatch(getMyStoriesDetails({}));

      setForm({});
      setImageFile();
      setDropItem({ title: "Select Tags" });
      setSubDropItem({ title: "Select Sub_Tag" });
      setData(``);

      dispatch(getMyStoriesLoader(false));
    }
  }, []);

  const HandleClickDropDown = (item, key) => {
    setDropItem({ title: item.title, index: key });
    setSubDropItem({ title: "Select Sub_Tag" });
  };

  const HandleClickSubDropDown = (item) => {
    setSubDropItem({ title: item?.subcontent });
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

    if (
      data &&
      form.title &&
      form.cover_pic &&
      dropItem?.title !== "Select Tag"
    ) {
      const payload = {
        tag: dropItem?.title,
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

  const HandleEditArticle = (e) => {
    e.preventDefault();

    dispatch({ type: AUTHLOADER, payload: true });

    if (
      data &&
      form.title &&
      form.cover_pic &&
      dropItem?.title !== "Select Tag"
    ) {
      const payload = {
        tag: dropItem?.title,
        subtag: subDopItem?.title,
        title: form?.title,
        cover_pic: form.cover_pic,
        cover_pic_id: form.cover_pic_id,
        article_Image_cloud: imageState,
        article: data,
      };

      WriteService.getEditArticle(myStoriesDetails?._id, payload)
        .then((data) => {
          toast("Edited successfully");
          dispatch({ type: AUTHLOADER, payload: false });

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
        {Object.keys(myStoriesDetails).length > 0 && (
          <div className="clearEditArticle">
            <button
              onClick={() => {
                dispatch(getMyStoriesDetails({}));

                setForm({});
                setImageFile();
                setDropItem({ title: "Select Tags" });
                setSubDropItem({ title: "Select Sub_Tag" });
                setData(``);

                dispatch(getMyStoriesLoader(false));
              }}
            >
              Create and Article
            </button>
          </div>
        )}

        <div className="wirteWrappperBodyFirstLine">
          <div className="wirteWrappperBodyFirstLineTitle">
            <p>Title</p>
            <textarea
              value={form?.title || ""}
              onChange={handleTextChange}
              name="title"
            ></textarea>
          </div>
          <div className="wirteWrappperBodyFirstLineTag">
            <div className="wirteWrappperBodyFirstLineTagText">
              <p>Tag</p>
            </div>
            <div className="wirteWrappperBodyFirstLineDropdown">
              <Dropdown
                list={dashboard_Subtitle}
                select={dropItem?.title}
                HandleClickCoin={HandleClickDropDown}
              />
            </div>
          </div>
        </div>

        <div className="writeWrapperBodySecondLineWrapperSection">
          <div className="wirteWrappperBodySecondLine">
            <p className="wirteWrappperBodySecondLineText">
              Add a cover Picture
            </p>
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

          {dropItem?.title !== "Select Tag" &&
            dashboard_Subtitle[dropItem?.index]?.sub?.length > 0 &&
            dashboard_Subtitle[dropItem?.index]?.sub !== undefined &&
            dashboard_Subtitle[dropItem?.index]?.sub !== null && (
              <div className="sub_wirteWrappperBodyFirstLineTag">
                <div className="sub_wirteWrappperBodyFirstLineTagText">
                  <p>SubTag</p>
                </div>
                <div className="sb_wirteWrappperBodyFirstLineDropdown">
                  <SubDropdown
                    list={dashboard_Subtitle[dropItem?.index]?.sub}
                    select={subDopItem?.title}
                    HandleClickCoin={HandleClickSubDropDown}
                  />
                </div>
              </div>
            )}
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

        {myStoriesLoader ? (
          <>
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
                  dropItem?.title === "Select Tag"
                    ? true
                    : false
                }
                onClick={HandleEditArticle}
              >
                Edit Article
              </button>
            )}
          </>
        ) : (
          <>
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
                  dropItem?.title === "Select Tag"
                    ? true
                    : false
                }
                onClick={HandleSubmit}
              >
                Publish
              </button>
            )}
          </>
        )}
      </div>
    </WriteDiv>
  );
};

export default WriteComponent;
