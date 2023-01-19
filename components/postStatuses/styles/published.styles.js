import styled from "styled-components";

export const StyledPublishedPost = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .left {
    width: 65%;
    @media (max-width: 700px) {
      width: 95%;
    }
  }
  .right {
    width: 25%;
    @media (max-width: 700px) {
      width: 95%;
    }
  }
`;
