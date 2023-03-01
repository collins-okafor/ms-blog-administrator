import APIs from "./api";

const Stories = {
  getMyStories: async (arg) => {
    return APIs.get(`/api/write/my_article`, {
      headers: {
        limit: arg,
      },
    })
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  },
};

export default Stories;
