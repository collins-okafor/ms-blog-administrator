import APIs from "./api";

const landingpageService = {
  getAllArticle: () => {
    return APIs.get("/api/main/all_article")
      .then((data) => {
        if (data?.data?.message === "success") {
          return {
            allArticle: data?.data?.data,
            count: data?.data?.count,
          };
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getSingleArticle: (id) => {
    return APIs.get(`/api/main/${id}`)
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

export default landingpageService;
