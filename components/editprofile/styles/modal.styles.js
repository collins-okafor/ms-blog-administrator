import styled from "styled-components";

export const StyledModal = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.548);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ show }) => (show === false ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  overflow: auto;
  z-index: 9;
  .formDiv {
    /* background-color: white; */
    background: ${({ theme }) => theme.primaryColor};
    box-shadow: 0px 4px 8px 2px ${({ theme }) => theme.boxShaw};
    width: 35%;
    padding: 30px;
    color: ${({ theme }) => theme.textColor};
    @media (max-width: 1213px) {
      width: 40%;
      height: 80vh;
    }
    @media (max-width: 1060px) {
      width: 70%;
      height: 80vh;
    }
    @media (max-width: 900px) {
      height: 90vh;
    }
    @media (width: 820px) {
      height: 60vh;
    }

    @media (max-width: 700px) {
      width: 100%;
      height: 100vh;
    }
    .header {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      h2 {
        font-size: 18px;
        font-weight: 600;
        /* font-family: "Public Sans", sans-serif; */
        font-family: "Inter", sans-serif;
      }
      button {
        background-color: transparent;
        border: none;
        font-size: 20px;
        color: ${({ theme }) => theme.textColor};
      }
    }
    .profilePhoto {
      padding: 20px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .image {
        width: 80px;
        @media (max-width: 700px) {
          width: 40%;
          margin: 0 auto;
        }
        p {
          margin-bottom: 1rem;
          text-transform: capitalize;
          font-size: bold;
          /* margin-left: 2rem; */
          @media (max-width: 700px) {
            text-align: center;
          }
        }

        label {
          position: relative;
          /* width: 10%; */
          height: 80px;
          @media (max-width: 700px) {
            height: 120px;
          }
          img {
            width: 100%;
            height: inherit;
            border-radius: 50%;
          }

          .loadingImage {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
          }
        }
      }
      .update {
        padding: 0 20px;
        margin-left: 1rem;
        width: 70%;
        @media (max-width: 700px) {
          width: 100%;
          margin-left: 0;
          margin-top: 1rem;
        }
        button {
          margin-bottom: 1rem;
          margin-right: 1rem;
          background-color: transparent;
          border: none;
          text-align: right;
          font-size: 15px;
          text-transform: capitalize;
          cursor: pointer;
        }
        .updateBtn {
          color: green;
        }
        .removeBtn {
          color: red;
        }
        p {
          font-size: 15px;
          font-family: "Public Sans", sans-serif;
        }
      }
    }
    .formInput {
      .inputContainer {
        display: flex;
        flex-direction: column;
        margin: 2rem 0;
        input {
          padding: 5px 0;
          border: none;
          border-bottom: 1px solid black;
          outline: none;
        }
        .inputText {
          display: flex;
          justify-content: space-between;
          p {
            font-size: 13px;
            font-family: "Public Sans", sans-serif;
            font-weight: 400;
            font-style: normal;
          }
        }
      }
    }
    .bottomBtn {
      display: flex;
      justify-content: right;
      button {
        background-color: transparent;
        margin-left: 1rem;
        padding: 10px;
        width: 18%;
        border-radius: 20px;
        cursor: pointer;
      }
      .cancelBtn {
        text-align: center;
        border: 1px solid green;
        color: green;
      }
      .saveBtn {
        text-align: center;
        background-color: green;
        border: none;
        color: white;

        &:disabled {
          cursor: not-allowed;
          background-color: grey;
        }
      }
    }
  }
`;
