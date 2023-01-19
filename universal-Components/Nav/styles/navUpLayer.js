import styled from "styled-components";

export const NavUpLayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.stableColor};
  padding: 10px 80px;
  width: 100%;

  .menu {
    display: none;
    align-items: center;
    justify-content: center;
    padding: 5px;
    cursor: pointer;

    .menuIcon {
      font-size: 28px;
      color: #fff;
    }

    @media screen and (max-width: 800px) {
      display: flex;
    }
  }

  .navUpLayerLogo {
  }

  .navUpLayerLogoAuth {
    display: flex;
    align-items: center;

    .LowerNavDetails {
      display: none;
      align-items: center;

      .LowerNavDetailsModeSection {
        margin: 0px 5px;
      }

      .LowerNavDetailsSearchIconBody {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px 10px;

        .LowerNavDetailsSearchIcon {
          color: ${({ theme }) => theme.mainColor};
          font-size: 19px;
          cursor: pointer;
          transition: all 1s;

          &:hover {
            color: ${({ theme }) => theme.majorColor};
          }
        }
      }

      @media screen and (max-width: 800px) {
        display: flex;
      }
    }

    .navUpLayerLogoAuthSystem {
      display: flex;
      align-items: center;

      .navUpLayerLogoAuthSignIn {
        color: ${({ theme }) => theme.mainColor};
        background-color: transparent;
        outline: none;
        border: 1px solid ${({ theme }) => theme.majorColor};
        font-size: 15px;
        font-weight: 600;
        margin: 0px 10px;
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;

        &:hover {
          background-color: ${({ theme }) => theme.BaseColor};
        }
      }

      .navUpLayerLogoAuthGetStarted {
        color: ${({ theme }) => theme.mainColor};
        background-color: transparent;
        outline: none;
        border: 1px solid ${({ theme }) => theme.majorColor};
        font-size: 15px;
        font-weight: 600;
        margin: 0px 10px;
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;

        &:hover {
          background-color: ${({ theme }) => theme.BaseColor};
        }
      }

      @media screen and (max-width: 800px) {
        display: none;
      }
    }
  }

  @media screen and (max-width: 800px) {
    background-color: ${({ theme }) => theme.BaseColor};
    padding: 10px 15px;
    position: fixed;
    top: 0;
    left: 0;
  }

  @media screen and (max-width: 330px) {
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
  }
`;
