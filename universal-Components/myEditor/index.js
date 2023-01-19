import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import DashBoardServices from "../../services/dashboardServices";
import { getDocsLoader } from "../../store/actions/dashboardAction";

// import Context from "@ckeditor/ckeditor5-core/src/context";
// import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
// import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
// import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
// import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";

const MyEditor = ({ handleEditor, data, setImageState, imageState }) => {
  const dispatch = useDispatch();
  // const [data, setData] = useState("");
  // const baseURL = useSelector((state) => state.authReducer.baseURL);

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

  const uploadAdapter = (loader) => {
    dispatch(getDocsLoader(true));
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("uploadImg", file);
            // fetch()
            let promise = getbase64(file);

            promise.then((data) => {
              return DashBoardServices.uploadImage({ file: data })
                .then((data) => {
                  setImageState((imageState) => [
                    ...imageState,
                    {
                      url: data?.data?.secure_url,
                      cloudinary_id: data?.data?.public_id,
                    },
                  ]);
                  return data?.data?.secure_url;
                })
                .then((res) => {
                  dispatch(getDocsLoader(false));
                  resolve({ default: res });
                })
                .catch((err) => {
                  reject(err);
                });
            });
          });
        });
      },
    };
  };

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <div>
      <CKEditor
        style={{ height: "100%" }}
        config={{
          extraPlugins: [uploadPlugin],

          image: {
            resizeOptions: [
              {
                name: "resizeImage:original",
                value: null,
                label: "Original",
              },
              {
                name: "resizeImage:40",
                value: "40",
                label: "40%",
              },
              {
                name: "resizeImage:60",
                value: "60",
                label: "60%",
              },
            ],
            toolbar: [
              "imageStyle:inline",
              "imageStyle:block",
              "imageStyle:side",
              "|",
              "ImageResize",
              "|",
              "toggleImageCaption",
              "imageTextAlternative",
              "|",
              "linkImage",
            ],
          },
        }}
        editor={ClassicEditor}
        // config={{
        //   plugins: [Paragraph, Bold, Italic, Essentials],
        //   toolbar: ["bold", "italic"],
        // }}
        data={data}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          // console.log("Editor is ready to use!", editor);
          if (editor.model.schema.isRegistered("image")) {
            editor.model.schema.extend("image", {
              allowAttributes: "blockIndent",
            });
          }
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          // setData(data);
          handleEditor(data);
          // console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          // console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          // console.log("Focus.", editor);
        }}
      />
    </div>
  );
};

export default MyEditor;
