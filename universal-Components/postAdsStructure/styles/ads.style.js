import styled from "styled-components";

export const AdsDiv = styled.div`
  width: 100%;

  .landingBodySectionAdsItem {
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.primaryColor};
    margin-bottom: 20px;

    @media screen and (max-width: 500px) {
      width: 30%;
    }
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: scroll;
  }
`;
