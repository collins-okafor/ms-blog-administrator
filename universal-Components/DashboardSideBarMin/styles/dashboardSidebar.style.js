import styled, { keyframes } from "styled-components";

const left = keyframes`
  from{
    left:-100px; 
    opacity:0.5
  } 
  to{
    left:0; 
    opacity:1
  }
`;

const leftRevers = keyframes`
  from{
    left:0; 
    opacity:1
  } 

  to{
    left:-100px; 
    opacity:0.5
  }
`;

const right = keyframes`
  from{
    right:-50px; 
    opacity:0
  } 
  to{
    right:0; 
    opacity:1
  }
`;

const fade = keyframes`
  0%{
    opacity:0
  }
  100%{
    opacity:1
  }
`;

export const DashboardMinDiv = styled.div`
  background-color: ${({ theme }) => theme.BaseColor};
  width: 6%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 2s;
  animation: ${right} 1s;
  /* display: ${({ reduceSideBar }) => (reduceSideBar ? "block" : "none")}; */

  .firstSection {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0px;
    padding: 15px 0px;

    .icon {
      display: none;
      font-size: 30px;
      color: ${({ theme }) => theme.mainColor};
      margin: 4px;

      @media screen and (max-width: 1024px) {
        display: block;
      }
    }
  }

  .secondSection {
    margin: 10px 0px;

    .selected {
      background-color: ${({ theme }) => theme.stableColor};
    }

    .secondSection_dashboard {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px 12px;
      cursor: pointer;
      margin: 20px 0px;
      border-radius: 8px;

      &:hover {
        background-color: ${({ theme }) => theme.stableColor};
      }

      .secondSection_dashboardIconBody {
        display: flex;
        align-items: center;
        justify-content: center;

        .secondSection_dashboardIcon {
          font-size: 20px;
          color: ${({ theme }) => theme.mainColor};
        }
      }
    }
  }

  .thirdSection {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0px;
    cursor: pointer;

    .thirdSection__ImageDetails {
      display: flex;
      align-items: center;
      justify-content: center;

      .thirdSection__ImageDetailsWrapper {
        width: 40px;
        height: 40%;
        display: flex;
        align-items: center;
        justify-content: center;

        .thirdSection__ImageDetailsImage {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    /* display: none; */
    display: ${({ reduceSideBar }) => (reduceSideBar ? "block" : "none")};
    z-index: 19;
  }

  @media screen and (max-width: 920px) {
    width: 10%;
  }

  @media screen and (max-width: 720px) {
    width: 15%;
  }

  @media screen and (max-width: 500px) {
    width: 20%;
  }
`;
