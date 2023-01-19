import styled from "styled-components";

export const WriteDiv = styled.div`
  width: 100%;
  padding: 60px 0px;

  .wirteWrappperHeader {
    p {
      font-family: "Inter", sans-serif;
      /* font-family: "Public Sans", sans-serif; */
      /* font-family: "Public Sans", sans-serif; */
      /* font-family: "Nunito", sans-serif; */
      /* font-family: "Poppins", sans-serif; */
      font-size: 42px;
      font-weight: 800;
      font-style: normal;
      color: ${({ theme }) => theme.textColor};
      line-height: 32px;
      transition: all 1.5s;

      @media screen and (max-width: 414px) {
        font-size: 32px;
      }
    }
  }

  .wirteWrappperBody {
    width: 100%;
    margin: 15px 0px;
    padding: 30px 0px;

    .wirteWrappperBodyFirstLine {
      display: flex;
      flex-wrap: wrap;
      /* align-items: center; */
      justify-content: space-between;
      width: 100%;

      .wirteWrappperBodyFirstLineTitle {
        width: 48%;

        p {
          /* font-family: "Inter", sans-serif; */
          /* font-family: "Public Sans", sans-serif; */
          /* font-family: "Public Sans", sans-serif; */
          /* font-family: "Nunito", sans-serif; */
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          font-weight: 500;
          font-style: normal;
          color: ${({ theme }) => theme.textColor};
          line-height: 16px;
          transition: all 1.5s;
        }

        textarea {
          resize: none;
          width: 100%;
          height: 120px;
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
          margin: 10px 0px 0px 0px;
        }

        @media screen and (max-width: 500px) {
          width: 100%;
        }
      }

      .wirteWrappperBodyFirstLineTag {
        width: 48%;

        .wirteWrappperBodyFirstLineTagText {
          p {
            font-family: "Poppins", sans-serif;
            font-size: 16px;
            font-weight: 500;
            font-style: normal;
            color: ${({ theme }) => theme.textColor};
            line-height: 16px;
            transition: all 1.5s;
          }
        }

        .wirteWrappperBodyFirstLineDropdown {
          margin: 10px 0px 0px 0px;
        }

        @media screen and (max-width: 500px) {
          width: 100%;
          margin: 30px 0px 0px 0px;
        }
      }
    }

    .wirteWrappperBodySecondLine {
      margin: 40px 0px 10px 0px;

      .wirteWrappperBodySecondLineText {
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        font-weight: 500;
        font-style: normal;
        color: ${({ theme }) => theme.textColor};
        line-height: 16px;
        transition: all 1.5s;
      }

      .wirteWrappperBodySecondLineFile {
        margin: 20px 0px 0px 0px;
        position: relative;
        width: 30%;
        cursor: pointer;

        .wirteWrappperBodySecondLineFileView {
          display: flex;
          align-items: center;

          .wirteWrappperBodySecondLineFileViewIcon {
            margin-right: 10px;
            .wirteWrappperBodySecondLineFileViewIconBody {
              display: flex;
              align-items: center;
              justify-content: center;

              .wirteWrappperBodySecondLineFileViewIconItem {
                font-size: 34px;
                color: ${({ theme }) => theme.textColor};
              }
            }
          }

          .wirteWrappperBodySecondLineFileViewText {
            p {
              font-family: "Poppins", sans-serif;
              font-size: 14px;
              font-weight: 500;
              font-style: normal;
              color: ${({ theme }) => theme.textColor};
              line-height: 16px;
              transition: all 1.5s;
            }
          }
        }

        .wirteWrappperBodySecondLineFileInput {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }

        @media screen and (max-width: 500px) {
          width: 100%;
        }
      }
    }
  }

  .wirteWrappperBodyEditor {
    .wirteWrappperBodyEditorTitle {
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      font-weight: 500;
      font-style: normal;
      color: ${({ theme }) => theme.textColor};
      line-height: 16px;
      transition: all 1.5s;
      margin: 5px;
    }

    .ck.ck-content:not(.ck-comment__input *) {
      background-color: ${({ theme }) => theme.primaryColor};
    }

    .ck-content {
      color: ${({ theme }) => theme.textColor};
    }
  }

  .wirteWrappperBodyButton {
    width: 100%;
    text-align: right;
    margin: 30px 0px 0px 0px;
    button {
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
      padding: 10px 20px;
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
  }
`;
