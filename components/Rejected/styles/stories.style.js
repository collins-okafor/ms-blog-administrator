import styled from "styled-components";

export const StoriesDiv = styled.div`
  width: 100%;

  .storiesWrapper {
    h3 {
      /* font-family: "Public Sans", sans-serif; */
      /* font-family: "Poppins", sans-serif; */
      /* font-family: "Nunito", sans-serif; */
      font-family: "Inter", sans-serif;
      font-size: 42px;
      font-weight: 800;
      font-style: normal;
      color: ${({ theme }) => theme.textColor};
      transition: all 1.5s;
      margin: 7px 0px;
    }
  }
`;
