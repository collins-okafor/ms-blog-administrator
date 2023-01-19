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

export const DashboardNavDiv = styled.div`
  /* margin-left: ${({ reduceSideBar }) =>
    reduceSideBar ? "calc(100% - 94%)" : "calc(100% - 81%)"}; */

  margin-left: calc(100% - 94%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.BaseColor};
  padding: 10px 20px;
  transition: all 0.4s;
  z-index: 8;
  /* animation: ${({ reduceSideBar }) => (reduceSideBar ? right : left)} 1s; */

  .firstSection {
    display: flex;
    align-items: center;

    .firstSection__Switch {
      display: none;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      cursor: pointer;

      .firstSection__SwitchIcon {
        font-size: 24px;
        color: ${({ theme }) => theme.mainColor};
        margin: 4px;
      }

      @media screen and (max-width: 1024px) {
        display: flex;
      }
    }

    .firstSection__Search {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      .firstSection__SearchIcon {
        font-size: 24px;
        color: ${({ theme }) => theme.mainColor};
        margin: 4px;
      }
    }
  }

  .secondSection {
    display: flex;
    align-items: center;

    .secondSection__SystemSwitch {
      margin-right: 20px;
    }

    .secondSection__notification {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-right: 20px;

      .secondSection__notificationIcon {
        font-size: 24px;
        color: ${({ theme }) => theme.mainColor};
        margin: 4px;
      }
    }

    .secondSection__Profile {
      position: relative;

      .secondSection__ProfileWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        cursor: pointer;

        .secondSection__ProfileWrapperImage {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    margin-left: 0px;
  }
`;
