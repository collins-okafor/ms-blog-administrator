import styled from "styled-components";

export const SearchStyle = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.BaseColor};
  /* color: white; */
  text-align: center;
  button {
    position: absolute;
    font-size: 30px;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.mainColor};
    top: 1rem;
    right: 1rem;
  }
  input {
    width: 70%;
    margin: 1rem auto;
    margin-top: 10rem;
    padding: 10px;
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.majorColor};
    font-size: 20px;
    color: ${({ theme }) => theme.mainColor};
    @media (max-width: 700px) {
      width: 95%;
    }
  }
  .searchContainer {
    width: 70%;
    margin: 0 auto;
    background-color: ${({ theme, searchItem }) =>
      searchItem.length > 0 && theme.stableColor};
    color: white;
    padding: 2px 10px;
    @media (max-width: 700px) {
      width: 95%;
    }
    .searchDisplay {
      display: flex;
      width: 100%;
      margin-top: 1rem;
      align-items: center;
      border-bottom: 1px solid white;
      .imageContainer {
        width: 13%;
        height: 70px;
        @media (max-width: 700px) {
          width: 30%;
        }
        img {
          width: 100%;
          height: inherit;
          border-radius: 10px;
        }
      }
      .searchWord {
        text-align: left;
        padding: 0 10px;
        h3 {
          margin-bottom: 0.5rem;
          text-transform: capitalize;
        }
      }
    }
  }
`;
