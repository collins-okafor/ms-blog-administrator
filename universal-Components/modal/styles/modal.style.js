import styled from "styled-components";

export const ModalOverlay = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.548);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ show }) => (show === false ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  overflow: auto;
  z-index: 20;
  backdrop-filter: blur(3px);

  .modalContent {
    width: inherit;
  }
`;
