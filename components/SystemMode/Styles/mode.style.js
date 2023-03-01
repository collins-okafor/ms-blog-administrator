import styled from "styled-components";

export const ModeDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .modeSytemIconBody {
    display: flex;
    align-items: center;
    justify-content: center;

    .modeSytemIcon {
      font-size: 19px;
      color: ${({ theme }) => theme.mainColor};
      cursor: pointer;
      transition: all 1s;

      &:hover {
        color: ${({ theme }) => theme.majorColor};
      }
    }
  }
`;
