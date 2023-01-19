import axios from "axios";
import store from "../store";
import { AUTHLOADER, LOGINERROR } from "../store/type";

if (typeof window !== "undefined") {
}
const APIs = axios.create({
  baseURL: "https://ms-blog-backend.onrender.com",

  headers: {
    Accept: "application/json",

    "Access-Control-Allow-Origin": "*",

    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",

    "Access-Control-Allow-Credentials": "true",

    "content-Type": "application/json",

    Authorization:
      typeof window !== "undefined" &&
      `Bearer ${localStorage.getItem("token") ?? ""}`,
  },
});

// Checks for internet connection
// APIs.interceptors.request.use(function (config) {
//   if (navigator.onLine) {
//     return config;
//   } else {
//     window.location.href = "/404";
//     // console.log("There is no internet connection");
//     // alert("There is no internet connection");
//   }
// });

APIs.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err?.response?.status === 401) {
      if (err?.response?.data?.message === "user not exiting") {
        store.dispatch({
          type: LOGINERROR,
          payload: err?.response?.data?.message,
        });
        store.dispatch({ type: AUTHLOADER, payload: false });
      }

      if (err?.response?.data?.message === "user already exits") {
        store.dispatch({
          type: LOGINERROR,
          payload: err?.response?.data?.message,
        });
        store.dispatch({ type: AUTHLOADER, payload: false });
      }

      if (err?.response?.data?.message === "wrong passwrod") {
        store.dispatch({
          type: LOGINERROR,
          payload: err?.response?.data?.message,
        });
        store.dispatch({ type: AUTHLOADER, payload: false });
      }
    }

    if (err?.response?.status === 501) {
    }

    if (err?.response?.status === 400) {
      if (
        err?.response?.data?.message === "please provide email and password"
      ) {
        store.dispatch({
          type: LOGINERROR,
          payload: err?.response?.data?.message,
        });
        store.dispatch({ type: AUTHLOADER, payload: false });
      }
      console.log(err?.response, "let see");
    }
  }
);

export default APIs;
