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

export const DashbardSideBarDiv = styled.div`
  background-color: ${({ theme }) => theme.BaseColor};
  width: 19%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  display: ${({ reduceSideBar }) => (reduceSideBar ? "none" : "block")};
  animation: ${({ reduceSideBar }) => (reduceSideBar ? right : left)} 0.4s;
  transition: all 2s ease;

  .firstSection {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0px;
    padding: 15px 0px;
  }

  .firstSection__upperSectionState {
    position: absolute;
    top: 0;
    right: 0;
    display: none;
    align-items: center;
    justify-content: center;

    .sidebar__UpperLayerCancelIcon {
      font-size: 30px;
      color: ${({ theme }) => theme.mainColor};
      margin: 4px;
    }

    @media screen and (max-width: 1024px) {
      display: flex;
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
        margin-right: 30px;

        .secondSection_dashboardIcon {
          font-size: 20px;
          color: ${({ theme }) => theme.mainColor};
        }
      }

      p {
        font-family: "Poppins", sans-serif;
        font-size: 18px;
        font-weight: 500;
        font-style: normal;
        color: ${({ theme }) => theme.mainColor};
        transition: all 1.5s;
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
    margin: 20px 8px;
    cursor: pointer;

    .thirdSection__ImageDetails {
      /* width: 30%; */
      margin-right: 10px;

      .thirdSection__ImageDetailsWrapper {
        /* width: 100%;
        height: 100%; */
        border-radius: 50%;

        .thirdSection__ImageDetailsImage {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
        }
      }
    }

    .thirdSection__infoDetials {
      .thirdSection__infoDetialsEmail {
        font-family: "Public Sans", sans-serif;
        font-size: 12px;
        font-weight: 400;
        font-style: normal;
        color: ${({ theme }) => theme.mainColor};
        transition: all 1.5s ease;
      }

      .thirdSection__infoDetialsUsername {
        font-family: "Public Sans", sans-serif;
        font-size: 12px;
        font-weight: 400;
        font-style: normal;
        color: ${({ theme }) => theme.mainColor};
        transition: all 1.5s;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    width: 30%;
    display: ${({ reduceSideBar }) => (reduceSideBar ? "block" : "none")};
  }

  @media screen and (max-width: 741px) {
    width: 35%;
  }

  @media screen and (max-width: 628px) {
    width: 40%;
  }

  @media screen and (max-width: 550px) {
    width: 60%;
  }

  @media screen and (max-width: 380px) {
    width: 80%;
  }
`;
