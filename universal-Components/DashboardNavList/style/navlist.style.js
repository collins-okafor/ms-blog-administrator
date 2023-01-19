import styled from "styled-components";

export const NavListDiv = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
  background-color: ${({ theme }) => theme.primaryColor};
  position: sticky;
  top: 0;
  z-index: 5;
  transition: all 1.5s;

  .selected {
    border: 1px solid ${({ theme }) => theme.secondaryColor};
    border-bottom: unset;
  }

  .NavListWrapper {
    margin: 0px 2px;
    padding: 10px 12px;
    cursor: pointer;

    .NavListData {
      /* font-family: "Public Sans", sans-serif; */
      font-family: "Poppins", sans-serif;
      font-size: 14px;
      font-weight: 500;
      font-style: normal;
      color: ${({ theme }) => theme.textColor};
      line-height: 16px;
      transition: all 1.5s;
    }
  }
`;
