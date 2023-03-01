import styled from "styled-components";

export const ProfileHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .profileHeadeWrapper {
    width: 170px;
    height: 170px;
    box-shadow: ${({ theme }) => theme.boxShaw};

    .profileHeadeWrapper__profile {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .profileHeadeWrapper_profileText {
    width: 75%;
    display: flex;
    justify-content: space-between;

    .profileHeadeWrapper_profileTextDetails {
      h3 {
        /* font-family: "Public Sans", sans-serif; */
        /* font-family: "Nunito", sans-serif; */
        /* font-family: "Inter", sans-serif; */
        font-family: "Poppins", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 38px;
        color: ${({ theme }) => theme.textColor};
        transition: all 1.5s;
      }

      p {
        font-family: "Public Sans", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: ${({ theme }) => theme.textColor};
        transition: all 1.5s;
        opacity: 0.6;
      }
    }

    .profileHeadeWrapper_profileTextEdit {
      .profileHeadeWrapper_profileTextEditState {
        font-family: "Public Sans", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: ${({ theme }) => theme.primaryColor};
        transition: all 1.5s;
        background-color: ${({ theme }) => theme.secondaryColor};
        padding: 5px 12px;
        border-radius: 8px;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }

      p {
        font-family: "Public Sans", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: ${({ theme }) => theme.primaryColor};
        transition: all 1.5s;
        background-color: ${({ theme }) => theme.secondaryColor};
        padding: 5px 12px;
        border-radius: 8px;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;
