import Link from "next/link";
import styled from "styled-components";

export const CardListDiv = styled.div`
  width: 100%;
  .cardListSearchBody {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: ${({ theme }) => theme.primaryColor};
    box-shadow: 0px 2px 8px 0px ${({ theme }) => theme.boxShaw};
    border-radius: 8px;
    cursor: pointer;
    transition: all 1.5s;
    margin: 0px 0px 30px 0px;

    .cardListSearchBodyImageWrapper {
      width: 100px;
      height: 100px;

      .cardListSearchBodyImageBody {
        width: 100px;
        height: 100px;

        .cardListSearchBodyImage {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
      }
    }
  }

  .cardListSearchBodyUsername {
    p {
      /* font-family: "Public Sans", sans-serif; */
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      font-weight: 500;
      font-style: normal;
      color: ${({ theme }) => theme.textColor};
      transition: all 1.5s;
    }
  }

  .cardListSearchBodyNotificationList {
    display: flex;
    align-items: center;
    justify-content: center;

    .cardListSearchBodyNotificationListSystem {
      text-align: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      padding: 5px;
      font-size: 16px;
      font-weight: 600;
      font-style: normal;
      transition: all 1.5s;
      background-color: ${({ theme }) => theme.secondaryColor};
      color: ${({ theme }) => theme.primaryColor};
    }
  }
`;
