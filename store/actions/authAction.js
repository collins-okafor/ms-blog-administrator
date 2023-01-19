import { LOGIN, lOGINPAGECOUNTER, ALLOWED_ACCESS } from "../type";

export const getLoginPageCounter = (param) => (dispatch) => {
  dispatch({ type: lOGINPAGECOUNTER, payload: param });
};

export const loginAction = (param) => (dispatch) => {
  dispatch({ type: LOGIN, payload: param });
};

export const allowAccess = (param) => (dispatch) => {
  dispatch({ type: ALLOWED_ACCESS, payload: param });
};
