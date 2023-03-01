import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  z-index: 200;

  .loader {
    border: 16px solid #c5c1d1;
    border-radius: 50%;
    border-top: 16px solid ${({ theme }) => theme.secondaryColor};
    border-left: 16px solid ${({ theme }) => theme.secondaryColor};
    border-right: 16px solid ${({ theme }) => theme.secondaryColor};

    width: 100px;
    height: 100px;
    -webkit-animation: ${spin} 2s linear infinite; /* Safari */
    animation: ${spin} 2s linear infinite;

    @media screen and (max-width: 600px) {
      border: 5px solid #c5c1d1;
      border-radius: 50%;
      border-top: 5px solid #8d7eb7;
      border-left: 5px solid #8d7eb7;
      border-right: 5px solid #8d7eb7;

      width: 22px;
      height: 22px;
    }
  }
`;
