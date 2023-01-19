import styled from "styled-components";

export const MailBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const MailContainer = styled.div`
  width: 35%;
  background: ${({ theme }) => theme.primaryColor};
  margin: auto;
  height: 80vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  h3 {
    margin-bottom: 2rem;
    font-size: 28px !important;
  }
  color: ${({ theme }) => theme.textColor};
  @media (max-width: 1050px) {
    width: 50%;
  }
  @media (max-width: 900px) {
    width: 85%;
  }
  @media (max-width: 700px) {
    width: 100%;
    height: 100vh;
  }
  p {
    /* font-family: "Public Sans", sans-serif; */
    font-family: "Nunito", sans-serif;
    /* font-family: "Poppins", sans-serif; */
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
  }

  .errors {
    p {
      text-transform: capitalize;
      /* font-family: "Public Sans", sans-serif; */
      font-family: "Nunito", sans-serif;
      font-size: 14px;
      font-weight: 500;
      font-style: normal;
      color: red;
    }
  }

  .signOptions {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.majorColor};
    margin-top: 0.5rem;
    cursor: pointer;
    text-transform: uppercase;
    font-family: "Public Sans", sans-serif;
    /* font-family: "Nunito", sans-serif; */
    font-size: 14px;
    font-weight: 600;
    font-style: normal;
  }
  .cancelButton {
    position: absolute;
    top: 1px;
    right: 1px;
    padding: 5px 10px;
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    color: ${({ theme }) => theme.secondaryColor};
  }
  .signUpButton {
    border: 1px solid gray;
    border-radius: 20px;
    color: ${({ theme }) => theme.textColorReverse};
    background-color: ${({ theme }) => theme.textColor};
    padding: 10px;
    width: 32%;
    /* background-color: transparent; */
    margin: 0.7rem 0;
    font-family: "Public Sans", sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    @media (max-width: 900px) {
      /* width: 60%;  */
      margin-bottom: 2rem;
    }
    @media (max-width: 700px) {
      width: 60%;
      margin-bottom: 2rem;
    }
  }
  h3 {
    text-transform: uppercase;
    font-family: "Public Sans", sans-serif;
    /* font-family: "Nunito", sans-serif; */
    font-size: 16px;
    font-weight: 700;
    font-style: normal;
  }
  p {
    margin-bottom: 3rem;
  }
  .inputContainer {
    display: flex;
    flex-direction: column;
    width: 80%;
    text-align: center;
    margin: 1rem 0;
    @media (max-width: 900px) {
      width: 80%;
      margin: 2rem 0;
    }
    @media (max-width: 700px) {
      width: 90%;
      margin: 2rem 0;
    }
    label {
      margin-bottom: 0.2rem;
    }
    input {
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.textColor};
      color: ${({ theme }) => theme.textColor};
      background-color: ${({ theme }) => theme.primaryColor};
      outline: none;
      font-size: 15px;
      width: 60%;
      margin: 0 auto;
      padding: 10px;
      text-align: center;
      @media (max-width: 900px) {
        width: 85%;
      }
      @media (max-width: 700px) {
        width: 100%;
      }
    }
  }
`;
