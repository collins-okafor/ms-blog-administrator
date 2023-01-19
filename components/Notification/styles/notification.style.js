import styled from "styled-components";

export const NotificationDiv = styled.div`
  width: 100%;

  .notificationHeader {
    h3 {
      /* font-family: "Public Sans", sans-serif; */
      /* font-family: "Poppins", sans-serif; */
      /* font-family: "Nunito", sans-serif; */
      font-family: "Inter", sans-serif;
      font-size: 42px;
      font-weight: 800;
      font-style: normal;
      color: ${({ theme }) => theme.textColor};
      transition: all 1.5s;
      margin: 7px 0px;
    }
  }

  .notificationContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 40px 0px;

    .notificationContainerCard {
      width: 70%;

      @media screen and (max-width: 500px) {
        width: 100%;
      }
    }

    .notificationContainerAds {
      width: 25%;

      @media screen and (max-width: 500px) {
        width: 100%;
      }
    }

    @media screen and (max-width: 500px) {
      flex-direction: column-reverse;
    }
  }
`;
