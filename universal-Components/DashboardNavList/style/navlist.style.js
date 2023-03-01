import styled from "styled-components";

export const NavListDiv = styled.div`
  display: flex;
  align-items: center;
  overflow-x: ${({ showDropDown }) => (showDropDown ? "unset" : "scroll")};
  border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
  background-color: ${({ theme }) => theme.primaryColor};
  position: sticky;
  top: 0;
  z-index: 5;
  transition: all 1.5s;
  white-space: nowrap;
  width: 100%;
  margin-right: 2rem;

  .selected {
    border: 1px solid ${({ theme }) => theme.secondaryColor};
    border-bottom: unset;
  }

  .subAdded {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
  }

  .NavListWrapper {
    margin: 0px 2px;
    padding: 10px 12px;
    cursor: pointer;

    .must_wrap {
      display: flex;
      align-items: center;
      gap: 10px;

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

      .searchIconBody {
        display: flex;
        align-items: center;
        justify-content: center;
        .searchIcon {
          color: ${({ theme }) => theme.textColor};
          font-size: 18px;
        }
      }
    }

    .showDropDownWrapper {
      position: absolute;
      left: -1.3rem;
      top: 1.8rem;
      background-color: ${({ theme }) => theme.primaryColor};
      box-shadow: 0px 2px 8px 0px ${({ theme }) => theme.boxShaw};
      border-radius: 8px;
      transition: all 1.5s;
      padding: 5px 0px;
      z-index: 2000;

      margin-top: 12px;

      .dropdown_wrapper {
        padding: 3px 2px;

        p {
          padding: 10px 25px;
          /* font-family: "Public Sans", sans-serif; */
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          font-weight: 500;
          font-style: normal;
          color: ${({ theme }) => theme.textColor};
          transition: all 1.5s;
          cursor: pointer;
          text-transform: capitalize;
          border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};

          &:hover {
            color: ${({ theme }) => theme.majorColor};
          }
        }
      }
    }
  }

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
`;
