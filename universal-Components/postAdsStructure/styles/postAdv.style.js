import styled from "styled-components";

export const PostAdvDiv = styled.div`
  width: 100%;

  .flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    .userDetails {
      width: 30%;
      cursor: pointer;

      .photoContainer {
        width: 100%;
        height: 150px;
        border-radius: 8px;

        .photoContainerImage {
          width: 100%;
          height: inherit;
          border-radius: 8px;
        }
      }
    }

    .mainPostContainer {
      width: 65%;

      .mainPostContainerHeaderWrapper {
        width: 100%;
        cursor: pointer;

        .mainPostContainerHeaderWrapperSystem {
          display: flex;
          align-items: center;
          margin: 3px 0px;

          .profileImage {
            width: 26px;
            height: 26px;
            margin-right: 10px;

            .profileImageState {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              object-fit: cover;
            }
          }

          .userName {
            h4 {
              font-family: "Public Sans", sans-serif;
              /* font-family: "Nunito", sans-serif; */
              font-size: 14px;
              font-weight: 500;
              font-style: normal;
              color: ${({ theme }) => theme.textColor};
              line-height: 16px;
              transition: all 1.5s;
            }
          }
        }

        .mainPostContainerHeaderWrapperContent {
          margin: 6px 0px;
          h1 {
            font-family: "Inter", sans-serif;
            /* font-family: "Nunito", sans-serif; */
            font-size: 22px;
            font-weight: 800;
            font-style: normal;
            color: ${({ theme }) => theme.textColor};
            transition: all 1.5s;

            line-height: 28px;
            /* max-height: 5rem;
            overflow: hidden !important;
            text-overflow: ellipsis;
            white-space: wrap;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            line-clamp: 1; */
          }

          .textContent {
            font-family: "Public Sans", sans-serif;
            /* font-family: "Poppins", sans-serif; */
            font-size: 14px;
            font-weight: 400;
            font-style: normal;
            color: ${({ theme }) => theme.textColor};
            transition: all 1.5s;
            opacity: 0.6;
            margin: 7px 0px;

            /* display: block; */
            line-height: 20px;
            max-height: 5rem;
            overflow: hidden !important;
            text-overflow: ellipsis;
            white-space: wrap;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            line-clamp: 2;
          }
        }
      }

      .postContainer {
        display: flex;
        align-items: center;
        margin: 20px 0px;

        p {
          font-family: "Public Sans", sans-serif;
          /* font-family: "Nunito", sans-serif; */
          font-size: 13px;
          font-weight: 400;
          font-style: normal;
          color: ${({ theme }) => theme.textColor};
          transition: all 1.5s;
          line-height: 20px;
          opacity: 0.7;
          margin-right: 10px;
        }

        button {
          font-family: "Public Sans", sans-serif;
          /* font-family: "Nunito", sans-serif; */
          font-size: 13px;
          font-weight: 400;
          font-style: normal;
          color: ${({ theme }) => theme.textColorReverse};
          background-color: ${({ theme }) => theme.textColor};
          transition: all 1.5s;
          line-height: 20px;
          opacity: 0.7;
          margin-right: 10px;
          border: none;
          background-color: none;
          border-radius: 10px;
          padding: 3px 7px;
        }
      }
    }
  }
`;
