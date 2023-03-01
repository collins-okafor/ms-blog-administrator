import { DYNAMIC_POST, GET_SINGLE_ARTICLE } from "../type";

const initialState = {
  dynamicPost: [],
  getSingleArticle: {},
};

const generalReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_SINGLE_ARTICLE: {
      return {
        ...state,
        getSingleArticle: payload,
      };
    }

    case DYNAMIC_POST: {
      return {
        ...state,
        dynamicPost: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default generalReducer;
