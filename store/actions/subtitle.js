import {
  SUBTITLES,
  SUBTITLE_FORMVALUE,
  SUBTITLE_LOADER,
  SUBTITLE_EDIT_OPTION,
} from "../type";

export const getTotalSubtitle = (param) => (dispatch) => {
  dispatch({ type: SUBTITLES, payload: param });
};

export const getLoader = (param) => (dispatch) => {
  dispatch({ type: SUBTITLE_LOADER, payload: param });
};
SUBTITLE_FORMVALUE;

export const getFormValue = (param) => (dispatch) => {
  dispatch({ type: SUBTITLE_FORMVALUE, payload: param });
};

export const getEditOption = (param) => (dispatch) => {
  dispatch({ type: SUBTITLE_EDIT_OPTION, payload: param });
};
