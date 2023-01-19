import APIs from "./api";

const WriteService = {
  postArticle: async (param) => {
    console.log(param, "take my state");
    return APIs.post(`/api/write/article`, param)
      .then((data) => {
        console.log(data, "resent work");
        return data?.data?.data;
      })
      .catch((err) => {
        throw new Error(err);
      });
  },
};

export default WriteService;
