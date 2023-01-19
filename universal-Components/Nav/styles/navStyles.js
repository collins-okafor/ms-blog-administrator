import styled from "styled-components";

export const NavDiv = styled.div`
  position: relative;
  width: 100%;
  z-index: 3;

  .UpperSection {
    transition: all 2s;
  }

  .LowerSection {
    width: 100%;
    position: sticky;
    position: -webkit-sticky;
    top: 0;

    @media screen and (max-width: 800px) {
      display: none;
    }
  }
`;
