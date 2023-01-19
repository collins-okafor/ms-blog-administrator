import styled from "styled-components";

export const PostAdsStructureDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 40px 0px;

  .post {
    width: 70%;

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }

  .ads {
    width: 25%;

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;
