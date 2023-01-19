import { SHOW_HIDE_SIDEBAR, SYSTEM_MODE, GET_ALL_ARTICLE } from "../type";

export const getSystemMode = (param) => (dispatch) => {
  dispatch({ type: SYSTEM_MODE, payload: param });
};

export const getShowHideSidebar = (param) => (dispatch) => {
  dispatch({ type: SHOW_HIDE_SIDEBAR, payload: param });
};

export const getAllArticle = (param) => (dispatch) => {
  dispatch({ type: GET_ALL_ARTICLE, payload: param });
};
