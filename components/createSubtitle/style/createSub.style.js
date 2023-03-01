import styled from "styled-components";

export const SubTitleSystem = styled.div`
  h2 {
    font-family: "Inter", sans-serif;
    font-size: 42px;
    font-weight: 800;
    font-style: normal;
    color: ${({ theme }) => theme.textColor};
    transition: all 1.5s;
    margin: 7px 0px;

    @media screen and (max-width: 500) {
      font-size: 22px;
    }
  }
`;

export const SubTitleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 40px 0px 100px 0px;

  .create_subtitle_wrapper {
    width: 90%;

    .create_subtitle {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .create_subtitle_input_body {
        width: 70%;

        .create_subtitle_input {
          width: 100%;
          border-radius: 8px;
          padding: 10px;
          color: ${({ theme }) => theme.textColor};
          background-color: transparent;
          border: 1px solid #d0d5dd;
          font-family: "Poppins", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1rem;
          line-height: 24px;
          outline: none;
        }

        @media screen and (max-width: 500px) {
          width: 100%;
        }
      }

      .create_subtitle_button {
        width: 25%;

        button {
          width: 100%;
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          font-weight: 500;
          font-style: normal;
          color: ${({ theme }) => theme.primaryColor};
          line-height: 16px;
          transition: all 1.5s;
          border: none;
          outline: none;
          background-color: ${({ theme }) => theme.secondaryColor};
          padding: 15px 20px;
          border-radius: 8px;
          cursor: pointer;

          &:hover {
            opacity: 0.8;
          }

          &:disabled {
            cursor: not-allowed;
            background-color: grey;
          }
        }

        @media screen and (max-width: 500px) {
          width: 50%;
          margin: 20px 0px;
        }
      }

      @media screen and (max-width: 500px) {
        align-items: flex-start;
        flex-direction: column;
      }
    }

    .subtitle_display {
      width: 100%;
    }

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }

  .ads {
    width: 25%;

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;
