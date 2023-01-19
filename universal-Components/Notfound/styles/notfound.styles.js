import styled from "styled-components";

export const NotFoundDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-family: "Public Sans", sans-serif;
    /* font-family: "Nunito", sans-serif; */
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    color: ${({ theme }) => theme.textColor};
    line-height: 16px;
    transition: all 1.5s;
  }
`;
