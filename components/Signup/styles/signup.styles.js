import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  background: ${({ theme }) => theme.primaryColor};
  margin: auto;
  height: 90vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  position: relative;
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

  .cancelButton {
    position: absolute;
    top: 1px;
    right: 1px;
    padding: 5px 15px;
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    color: ${({ theme }) => theme.secondaryColor};
  }
  h3 {
    margin-bottom: 5rem;
    text-transform: uppercase;
    font-family: "Public Sans", sans-serif;
    font-size: 16px;
    font-weight: 700;
    /* font-style: normal; */
  }
  .signupButton {
    border: 1px solid gray;
    border-radius: 20px;
    color: ${({ theme }) => theme.textColor};
    padding: 10px;
    width: 40%;
    background-color: transparent;
    margin: 0.7rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Public Sans", sans-serif;
    /* font-family: "Nunito", sans-serif; */
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    @media (max-width: 800px) {
      width: 60%;
    }
    .icon {
      font-size: 20px;
      margin-right: 0.5rem;
    }
    :hover {
      cursor: pointer;
    }
  }
  .account {
    display: flex;
    margin-top: 2rem;
    margin-bottom: 5rem;
    p {
      font-family: "Public Sans", sans-serif;
      /* font-family: "Nunito", sans-serif; */
      font-size: 14px;
      font-weight: 500;
      font-style: normal;
    }
    button {
      color: ${({ theme }) => theme.majorColor};
      margin-left: 0.7rem;
      background-color: transparent;
      border: none;
      font-size: 15px;
      text-transform: capitalize;
      font-family: "Public Sans", sans-serif;
      /* font-family: "Nunito", sans-serif; */
      font-size: 16px;
      font-weight: 600;
      font-style: normal;
      cursor: pointer;
    }
  }
  .termsAndServices {
    width: 80%;
    margin: 0 auto;
    p {
      font-size: 12px;
    }
    p a {
      color: ${({ theme }) => theme.majorColor};
      background-color: transparent;
      font-weight: 500;
    }
  }
`;
