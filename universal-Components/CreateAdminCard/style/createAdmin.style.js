import styled from "styled-components";

export const CreateDiv = styled.div`
  width: 100%;
  margin: 50px 0px;

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
    }
  }
`;
