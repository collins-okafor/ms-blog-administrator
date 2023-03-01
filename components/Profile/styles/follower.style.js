import styled from "styled-components";

export const FollowersDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .followersHeader {
    p {
      font-family: "Public Sans", sans-serif;
      font-size: 16px;
      font-weight: 500;
      font-style: normal;
      color: ${({ theme }) => theme.textColor};
      transition: all 1.5s;
      line-height: 20px;
    }
  }

  .followersBody {
    width: 75%;
    border-radius: 6px;
    box-shadow: 0px 4px 8px 2px ${({ theme }) => theme.boxShaw};
    padding: 20px;

    .followersBodyOne {
      .followersBodynum {
        font-family: "Public Sans", sans-serif;
        font-size: 14px;
        font-weight: 400;
        font-style: normal;
        color: ${({ theme }) => theme.textColor};
        transition: all 1.5s;
        line-height: 20px;
        opacity: 0.6;
      }
      .followersBodycount {
        font-family: "Public Sans", sans-serif;
        font-size: 14px;
        font-weight: 400;
        font-style: normal;
        color: ${({ theme }) => theme.textColor};
        transition: all 1.5s;
        line-height: 20px;
        margin: 5px 0px;
      }
    }

    .followersBodyTwo {
      margin-top: 15px;
      .followersBodyTwoList {
        font-family: "Public Sans", sans-serif;
        font-size: 14px;
        font-weight: 400;
        font-style: normal;
        color: ${({ theme }) => theme.textColor};
        transition: all 1.5s;
        line-height: 20px;
        opacity: 0.6;
      }

      .followersBodyTwoView {
        font-family: "Public Sans", sans-serif;
        font-size: 14px;
        font-weight: 500;
        font-style: normal;
        color: ${({ theme }) => theme.secondaryColor};
        transition: all 1.5s;
        line-height: 20px;
        margin: 5px 0px;
      }
    }
  }
`;
