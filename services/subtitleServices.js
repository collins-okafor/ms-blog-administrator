import APIs from "./api";

const SubServices = {
  createSubtitle: async (payload) => {
    return APIs.post(`/api/subtitle/create`, payload)
      .then((data) => {
        console.log(data);
        if (data?.data?.data?.message === "success") {
          return data?.data?.data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  getSubtitle: async (payload) => {
    return APIs.get(`/api/subtitle/total`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  editSubtitle: async (id, payload) => {
    return APIs.patch(`/api/subtitle/${id}`, payload)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },

  deleteSubtitle: async (id) => {
    return APIs.delete(`/api/subtitle/${id}`)
      .then((data) => {
        if (data?.data?.message === "success") {
          return data?.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  },
};

export default SubServices;
