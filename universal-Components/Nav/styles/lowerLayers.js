import styled from "styled-components";

export const LowerLayers = styled.div`
  background-color: ${({ theme }) => theme.BaseColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 80px;

  .LowerNavLinks {
    display: flex;
    align-items: center;
    width: 70%;
    overflow-x: auto;
    white-space: nowrap;

    &::-webkit-scrollbar-track {
      border-radius: 5px;
    }

    &::-webkit-scrollbar {
      width: 5px;
      height: 3px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #e89b2d;
    }

    .LowerNavLinksData {
      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-size: 16px;
      line-height: 16px;
      cursor: pointer;
      padding: 10px 12px;
      margin-right: 8px;
      font-weight: 800;
      margin: 2px 0px;

      &:hover {
        border-radius: 8px;
        background-color: ${({ theme }) => theme.majorColor};
      }
    }
  }

  .LowerNavDetails {
    display: flex;
    align-items: center;

    .LowerNavDetailsModeSection {
      margin: 0px 5px;
    }

    .LowerNavDetailsSearchIconBody {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0px 10px;

      .LowerNavDetailsSearchIcon {
        color: ${({ theme }) => theme.mainColor};
        font-size: 19px;
        cursor: pointer;
        transition: all 1s;

        &:hover {
          color: ${({ theme }) => theme.majorColor};
        }
      }
    }
  }
`;
