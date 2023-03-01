import APIs from "./api";

const GeneralServices = {
  deleteCloudImage: (cloudinary_id) => {
    console.log(cloudinary_id, "section");
    return APIs.delete(`/api/upload/image`, cloudinary_id)
      .then((data) => {
        console.log(data, "set to look for this");
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },
};

export default GeneralServices;
