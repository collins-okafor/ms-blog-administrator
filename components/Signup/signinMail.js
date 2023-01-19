import Link from "next/link";
import React, { useState } from "react";
import { Container } from "./styles/signup.styles";
import { FcGoogle } from "react-icons/fc";
import { GoMail } from "react-icons/go";
import { MailBody, MailContainer } from "./styles/mailSignup";
import { useDispatch, useSelector } from "react-redux";
import { getLoginPageCounter } from "../../store/actions/authAction";
import AuthService from "../../services/auth";
import LoaderBob from "../../universal-Components/Loaders/loaderBob";
import { AUTHLOADER, LOGINERROR } from "../../store/type";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const MailSignIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({});
  const [loading, setLoading] = useState(false);

  const loginError = useSelector((state) => state.authReducer.LoginError);

  const AuthLoader = useSelector((state) => state.authReducer.AuthLoader);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({ ...formValue, [name]: value });
  };

  const HandleLogin = (e) => {
    e.preventDefault();
    dispatch({ type: AUTHLOADER, payload: true });

    if (formValue?.email || formValue?.password) {
      if (formValue?.password.length >= 6) {
        AuthService.login(formValue).then((data) => {
          if (data?.message === "success") {
            toast.success(" Login successfully!", {
              position: toast.POSITION.TOP_RIGHT,
            });

            dispatch({ type: LOGINERROR, payload: "" });
            router.push("/dashboard");
            dispatch(getLoginPageCounter({}));
            dispatch({ type: AUTHLOADER, payload: false });
          }
        });
      } else {
        toast.error("password length must be greater than or equal 6 !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        dispatch({ type: AUTHLOADER, payload: false });
      }
    } else {
      toast.error("user must provide email and password !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch({ type: AUTHLOADER, payload: false });
    }
  };

  return (
    <MailBody>
      <MailContainer>
        <h3>Admin Login</h3>

        {loginError && (
          <div className="errors">
            <p style={{ color: "" }}>{loginError}</p>
          </div>
        )}

        <div className="inputContainer">
          <label>Your email</label>
          <input
            type="email"
            name="email"
            value={formValue?.email}
            onChange={handleChange}
            autoComplete={"off"}
          />
        </div>
        <div className="inputContainer">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formValue?.password}
            onChange={handleChange}
            autoComplete={"off"}
          />
        </div>
        <button
          disabled={
            !formValue?.email || !formValue?.password || AuthLoader
              ? true
              : false
          }
          className="signUpButton"
          onClick={HandleLogin}
        >
          {AuthLoader ? <LoaderBob /> : <>Login</>}
        </button>
      </MailContainer>
    </MailBody>
  );
};

export default MailSignIn;
