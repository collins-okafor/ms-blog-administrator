import APIs from "./api";
import store from "../store";
import { loginAction, allowAccess } from "../store/actions/authAction";

const AuthService = {
  register: async (param) => {
    return APIs.post(`/api/auth/register`, param)
      .then((data) => {
        return data?.data?.data;
      })
      .catch((err) => {
        throw new Error(err);
      });
  },

  login: async (param) => {
    return APIs.post(`/api/auth/login`, param)
      .then((data) => {
        console.log(data, "see");
        if (
          data?.data?.data?.message === "success" &&
          data?.data?.data?.admin
        ) {
          setHeaders(data?.data?.data);
          return data?.data?.data;
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  },
};

const setHeaders = async (param) => {
  APIs.defaults.headers["Authorization"] = `Bearer ${param.token}`;
  await store.dispatch(loginAction(param.token));
  await localStorage.setItem("token", param.token);
  await localStorage.setItem("isLoggedIn", true);
  await store.dispatch(allowAccess(true));
};

export default AuthService;
