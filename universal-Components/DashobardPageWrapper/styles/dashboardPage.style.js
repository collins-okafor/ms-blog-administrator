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

export const DashboardPagesDiv = styled.div`
  /* margin-left: ${({ reduceSideBar }) =>
    reduceSideBar ? "calc(100% - 94%)" : "calc(100% - 81%)"}; */

  margin-left: calc(100% - 78%);
  padding: 10px 20px;
  transition: all 0.4s;
  /* animation: ${({ reduceSideBar }) => (reduceSideBar ? right : left)} 1s; */

  .pageWrapper {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    margin-left: 0px;
  }
`;
