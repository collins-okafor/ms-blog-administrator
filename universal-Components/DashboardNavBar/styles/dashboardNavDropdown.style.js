import styled from "styled-components";

export const DashboardNavDropdownDiv = styled.div`
  position: absolute;
  left: -5rem;
  top: 2.8rem;
  background-color: ${({ theme }) => theme.primaryColor};
  box-shadow: 0px 2px 8px 0px ${({ theme }) => theme.boxShaw};
  border-radius: 8px;
  transition: all 1.5s;
  padding: 5px 0px;
  z-index: 9;
  display: ${({ dashbaordNavDropdown }) =>
    !dashbaordNavDropdown ? "none" : "block"};

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
      border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};

      &:hover {
        color: ${({ theme }) => theme.majorColor};
      }
    }
  }
`;
