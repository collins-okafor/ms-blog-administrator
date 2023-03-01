import APIs from "./api";

const createAdminService = {
  getAllAdmin: async () => {
    return APIs.get(`/api/user/all_admin`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  CreateAdmin: async (param) => {
    return APIs.post(`/api/auth/register`, param)
      .then((data) => {
        return data?.data?.data;
      })
      .catch((err) => {
        throw new Error(err);
      });
  },

  EditAdmin: async (id, param) => {
    return APIs.patch(`/api/user/edit`, param)
      .then((data) => {
        return data?.data?.data;
      })
      .catch((err) => {
        throw new Error(err);
      });
  },

  DeletAdmin: async (param) => {
    return APIs.post(`/api/user/delete`, param)
      .then((data) => {
        return data?.data?.data;
      })
      .catch((err) => {
        throw new Error(err);
      });
  },
};

export default createAdminService;
