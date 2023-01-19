import styled from "styled-components";

export const ProfileDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 40px 0px;

  .profileDetials {
    width: 70%;

    .profileDetials__Header {
    }

    .profileDetials__follower {
      margin-top: 70px;
    }

    .profileDetials__list {
      margin-top: 70px;
    }

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }

  .profileAds {
    width: 25%;

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;
