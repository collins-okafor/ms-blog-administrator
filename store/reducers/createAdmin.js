import { GET_ADMIN, GET_ADMIN_LOADER, GET_ADMIN_FORMVALUE } from "../type";

const initialState = { getAdmin: [], loader: false, formValue: {} };

const createAdmin = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ADMIN: {
      return {
        ...state,
        getAdmin: payload,
      };
    }

    case GET_ADMIN_LOADER: {
      return {
        ...state,
        loader: payload,
      };
    }

    case GET_ADMIN_FORMVALUE: {
      return {
        ...state,
        formValue: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default createAdmin;
