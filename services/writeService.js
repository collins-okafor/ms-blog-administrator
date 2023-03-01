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

  getEditArticle: (id, payload) => {
    console.log(id, "Ser");
    return APIs.patch(`/api/write/${id}`, payload)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getEditArticle: (id, payload) => {
    return APIs.patch(`/api/write/${id}`, payload)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  ViewArticle: (id) => {
    return APIs.patch(`/api/write/views/${id}`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },
};

export default WriteService;
