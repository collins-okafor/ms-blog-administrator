import { DYNAMIC_POST, GET_SINGLE_ARTICLE } from "../type";

export const getDynamicPost = (param) => (dispatch) => {
  dispatch({ type: DYNAMIC_POST, payload: param });
};

export const getSingleArticleDetails = (param) => (dispatch) => {
  dispatch({ type: GET_SINGLE_ARTICLE, payload: param });
};
