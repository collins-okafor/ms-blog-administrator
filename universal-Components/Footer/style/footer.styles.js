import styled from "styled-components";

export const FooterDiv = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.FooterColor};
  padding: 20px 0px;

  .socialMedia {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0px;

    .socialMedia__item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px;
      border-radius: 50%;
      margin: 0px 10px;
      cursor: pointer;
      background-color: ${({ theme }) => theme.FooterGrey};

      .socialMedia__icon {
        font-size: 24px;
        color: ${({ theme }) => theme.mainColor};
      }
    }
  }

  .textLinks {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0px;

    .textLinksItem {
      margin: 0px 10px;

      p {
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 800;
        color: ${({ theme }) => theme.mainColor};
      }
    }
  }

  .footerText {
    text-align: center;
    padding: 15px 0px;
    width: 100%;

    p {
      color: ${({ theme }) => theme.mainColor};
      font-size: 14px;
      font-weight: 400;
    }
  }
`;
