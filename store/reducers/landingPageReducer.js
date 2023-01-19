import { SYSTEM_MODE, SHOW_HIDE_SIDEBAR, GET_ALL_ARTICLE } from "../type";

const initialState = {
  system_mode: false,
  showHideSidebar: false,
  getAllarticle: {},
};

const landingPageReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SYSTEM_MODE: {
      return {
        ...state,
        system_mode: payload,
      };
    }

    case SHOW_HIDE_SIDEBAR: {
      return {
        ...state,
        showHideSidebar: payload,
      };
    }

    case GET_ALL_ARTICLE: {
      return {
        ...state,
        getAllarticle: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default landingPageReducer;
