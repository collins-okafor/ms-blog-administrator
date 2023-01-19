import styled from "styled-components";

export const StyledOverView = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  margin: 2rem 0;
  .left {
    width: 75%;
  }
  .cardContainer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 3rem;
  }
  .card {
    width: 32%;
    height: 20vh;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    padding: 20px;
    /* text-align: center; */
    border-radius: 8px;
    background-color: ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.primaryColor};
    display: flex;
    align-items: center;
    .text {
      /* background-color: green; */
      width: 75%;
      h5 {
        text-transform: uppercase;
        font-size: 15px;
      }
      p {
        margin-top: 0.5rem;
      }
    }
    .iconNum {
      /* background-color: green; */
      /* width: 20%; */
      margin: 0 auto;
      justify-content: space-between;
      /* height: inherit; */
      padding: 5px;
      .icon {
        font-size: 40px;
      }
    }
  }
  .adsDisplay {
    width: 22%;
  }
`;
