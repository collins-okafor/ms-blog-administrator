import styled from "styled-components";

export const StyledTabDisplay = styled.div`
  .buttonContainer {
    border-bottom: 1px solid ${({ theme }) => theme.textColor};
    button {
      color: ${({ theme }) => theme.textColor};
    }
  }
  .tabOneBtn {
    background-color: transparent;
    border: none;
    /* width: 10%; */
    padding: 12px;
    font-weight: ${({ display }) => (display === true ? "bolder" : "normal")};
    border-bottom: ${({ display, theme }) =>
      display === true ? `1px solid ${theme.majorColor}` : "none"};
    cursor: pointer;
  }
  .tabTwoBtn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    /* width: 10%; */
    margin-left: 2rem;
    font-weight: ${({ display }) => (display === false ? "bolder" : "normal")};
    padding: 12px;
    border-bottom: ${({ display, theme }) =>
      !display ? `2px solid ${theme.majorColor}` : "none"};
  }
  .tabContainer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: auto;
    flex-wrap: wrap-reverse;
    .leftContent {
      width: 90%;
      color: ${({ theme }) => theme.textColor};
      @media (max-width: 700px) {
        width: 95%;
        margin: 0 auto;
      }
    }
    .rightContent {
      width: 25%;
      @media (max-width: 700px) {
        width: 95%;
        margin: 0 auto;
      }
    }
  }
  .tabOneDisplay {
    display: ${({ display }) => (display === true ? "block" : "none")};
    .header-text {
      margin: 2rem 0;
      color: ${({ theme }) => theme.textColor};
    }
  }
  .tabTwoDisplay {
    display: ${({ display }) => (display === false ? "block" : "none")};
    .header-text {
      margin-top: 2rem;
      color: ${({ theme }) => theme.textColor};
    }
  }
`;
