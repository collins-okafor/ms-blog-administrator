export const toastFunc = () => (next) => (action) => {
  if (navigator.onLine) {
    return next(action);
  } else {
    // window.location.href = "/404";
    // // console.log("There is no internet connection");
    // // alert("There is no internet connection");
    toast("No internet connection", {
      toastId: "network error",
      //theme: "colored",
    });
  }
};
