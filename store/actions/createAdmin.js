import { GET_ADMIN, GET_ADMIN_FORMVALUE, GET_ADMIN_LOADER } from "../type";

export const getAllAdmin = (param) => (dispatch) => {
  dispatch({ type: GET_ADMIN, payload: param });
};

export const getAllAdminLoader = (param) => (dispatch) => {
  dispatch({ type: GET_ADMIN_LOADER, payload: param });
};

export const getAllAdminFormValue = (param) => (dispatch) => {
  dispatch({ type: GET_ADMIN_FORMVALUE, payload: param });
};
