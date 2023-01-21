import styled from "styled-components";

export const AdminWrapper = styled.div`
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

export const AdminDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 40px 0px;

  .create_admin_wrapper {
    width: 70%;

    .admin_create_container {
      width: 100%;

      .admin_create_input {
        width: 100%;
        display: flex;
        /* align-items: center; */
        justify-content: space-between;
        flex-wrap: wrap;

        .admin_input {
          width: 45%;
          display: flex;
          flex-direction: column;
          margin: 10px 0px;

          label {
            font-family: "Poppins", sans-serif;
            font-size: 16px;
            font-weight: 500;
            font-style: normal;
            color: ${({ theme }) => theme.textColor};
            line-height: 16px;
            transition: all 1.5s;
            margin: 6px 0px;
          }

          input {
            width: 100%;
            border-radius: 8px;
            padding: 7px;
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
      }

      .admin_button_wrapper {
        width: 100%;
        margin: 25px 0px;

        .admin_button_container {
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
      }
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
