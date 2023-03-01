import styled from "styled-components";

export const SubViewDiv = styled.div`
  width: 100%;
  margin: 50px 0px 100px 0px;

  .Switch {
    margin-bottom: 30px;

    button {
      width: 120px;
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
  }

  .wrapperState {
    width: 100%;
    position: relative;

    .wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      background-color: ${({ theme }) => theme.primaryColor};
      box-shadow: 0px 2px 8px 0px ${({ theme }) => theme.boxShaw};
      border-radius: 8px;
      /* cursor: pointer; */
      transition: all 1.5s;
      margin: 0px 0px 30px 0px;

      .title {
        p {
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          font-weight: 500;
          font-style: normal;
          color: ${({ theme }) => theme.textColor};
          transition: all 1.5s;
        }
      }

      .action {
        display: flex;
        align-items: center;

        .edit {
          cursor: pointer;
          margin: 0px 15px;
          display: flex;
          align-items: center;
          justify-content: center;

          .edit_icon {
            font-size: 20px;
            font-weight: 500;
            font-style: normal;
            color: ${({ theme }) => theme.textColor};
            transition: all 1.5s;
          }
        }

        .delete {
          cursor: pointer;
          margin: 0px 15px;
          display: flex;
          align-items: center;
          justify-content: center;

          .delete_icon {
            font-size: 20px;
            font-weight: 500;
            font-style: normal;
            color: ${({ theme }) => theme.textColor};
            transition: all 1.5s;
          }
        }

        .searchIconBody {
          display: flex;
          align-items: center;
          justify-content: center;
          .searchIcon {
            color: ${({ theme }) => theme.textColor};
            font-size: 18px;
          }
        }
      }
    }

    .showDropdownWrapper {
      position: absolute;
      top: 3rem;
      z-index: 4;

      width: 100%;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.secondaryColor};
      box-shadow: 0px 2px 8px 0px ${({ theme }) => theme.boxShaw};

      padding: 20px;
      height: 300px;
      overflow-y: auto;
      margin-bottom: 30px;

      &::-webkit-scrollbar-track {
        border-radius: 5px;
      }

      &::-webkit-scrollbar {
        width: 5px;
        height: 3px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #e89b2d;
      }

      .showDropdownHeader {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .showDropdownHeader_Input {
          width: 70%;

          input {
            width: 100%;
            border-radius: 8px;
            padding: 5px;
            color: ${({ theme }) => theme.primaryColor};
            background-color: transparent;
            border: 1px solid #d0d5dd;
            font-family: "Poppins", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 0.8rem;
            line-height: 24px;
            outline: none;
          }

          @media screen and (max-width: 500px) {
            width: 100%;
          }
        }

        .showDropdownHeader_Button {
          width: 25%;

          button {
            width: 100%;
            font-family: "Poppins", sans-serif;
            font-size: 14px;
            font-weight: 500;
            font-style: normal;
            color: ${({ theme }) => theme.secondaryColor};
            line-height: 16px;
            transition: all 1.5s;
            border: none;
            outline: none;
            background-color: ${({ theme }) => theme.primaryColor};
            padding: 10px 18px;
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

      .SwitchStatus {
        margin: 30px 0px;

        button {
          width: 220px;
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          font-weight: 500;
          font-style: normal;
          color: ${({ theme }) => theme.secondaryColor};
          line-height: 16px;
          transition: all 1.5s;
          border: none;
          outline: none;
          background-color: ${({ theme }) => theme.primaryColor};
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

      .wrapperlist {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        background-color: ${({ theme }) => theme.primaryColor};
        box-shadow: 0px 2px 8px 0px ${({ theme }) => theme.boxShaw};
        border-radius: 8px;
        /* cursor: pointer; */
        transition: all 1.5s;
        margin: 0px 0px 30px 0px;

        .title {
          p {
            font-family: "Poppins", sans-serif;
            font-size: 16px;
            font-weight: 500;
            font-style: normal;
            color: ${({ theme }) => theme.textColor};
            transition: all 1.5s;
          }
        }

        .action {
          display: flex;
          align-items: center;

          .edit {
            cursor: pointer;
            margin: 0px 15px;
            display: flex;
            align-items: center;
            justify-content: center;

            .edit_icon {
              font-size: 20px;
              font-weight: 500;
              font-style: normal;
              color: ${({ theme }) => theme.textColor};
              transition: all 1.5s;
            }
          }

          .delete {
            cursor: pointer;
            margin: 0px 15px;
            display: flex;
            align-items: center;
            justify-content: center;

            .delete_icon {
              font-size: 20px;
              font-weight: 500;
              font-style: normal;
              color: ${({ theme }) => theme.textColor};
              transition: all 1.5s;
            }
          }
        }
      }
    }
  }
`;
