import React, { useState } from "react";
import { useSelector } from "react-redux";
import SignUp from "../components/Signup";
import Login from "../components/Signup/login";
import MailSignUp from "../components/Signup/signupMail";
import Modal from "../universal-Components/modal";
const Testing = () => {
  const loginPageCounter = useSelector(
    (state) => state.authReducer.loginPageCounter
  );
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    display === false ? setDisplay(true) : setDisplay(false);
  };
  return (
    <div>
      <h1>Testing</h1>
      <button onClick={handleDisplay}>hey</button>
      {/* {Object.keys(loginPageCounter).length === 0 && (
        <Modal display={display} content={<SignUp click={handleDisplay} />} />
      )} */}

      <Modal>
        <Login />
      </Modal>

      {loginPageCounter.count === 0 && (
        <Modal
          display={display}
          content={<MailSignUp click={handleDisplay} />}
        />
      )}
    </div>
  );
};

export default Testing;
