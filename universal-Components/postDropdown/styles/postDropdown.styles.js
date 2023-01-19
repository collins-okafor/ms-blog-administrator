import styled from "styled-components";

export const PostDropdownDiv = styled.div`
  position: absolute;
  left: -5.5rem;
  /* border: 1px solid red; */
  background-color: ${({ theme }) => theme.primaryColor};
  box-shadow: 0px 2px 8px 0px ${({ theme }) => theme.boxShaw};
  border-radius: 8px;
  transition: all 1.5s;
  padding: 5px 8px;
  z-index: 9;
  margin-top: 5px;

  .postDropdownItem {
    padding: 2px 0px;
    p {
      padding: 5px 3px;
      /* font-family: "Public Sans", sans-serif; */
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      font-weight: 500;
      font-style: normal;
      color: ${({ theme }) => theme.textColor};
      transition: all 1.5s;
      cursor: pointer;
      border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
      white-space: nowrap;

      &:hover {
        color: ${({ theme }) => theme.majorColor};
      }
    }
  }
`;
