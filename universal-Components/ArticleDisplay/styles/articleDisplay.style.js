import styled from "styled-components";

export const ArticleDisplayDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 40px 0px 80px 0px;

  .articleWrapper {
    width: 95%;

    .articleWrapper__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .articleWrapper__headerProfile {
        display: flex;
        align-items: center;

        .articleWrapper__headerProfilePics {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          margin-right: 10px;

          .articleWrapper__headerProfilePicsItem {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
          }
        }

        .articleWrapper__headerProfileDetails {
          .articleWrapper__headerProfileDetailsHeader {
            font-family: "Public Sans", sans-serif;
            /* font-family: "Nunito", sans-serif; */
            font-size: 16px;
            font-weight: 500;
            font-style: normal;
            color: ${({ theme }) => theme.textColor};
            line-height: 30px;
            transition: all 1.5s;
          }

          .articleWrapper__headerProfileDetailsParagraph {
            /* font-family: "Public Sans", sans-serif; */
            font-family: "Nunito", sans-serif;
            font-size: 14px;
            font-weight: 400;
            font-style: normal;
            color: ${({ theme }) => theme.textColor};
            line-height: 25px;
            transition: all 1.5s;
          }
        }
      }

      .articleWrapper__headerProfileSectionState {
        display: flex;
        align-items: center;
        gap: 30px;

        .sharing_wrapper {
          position: relative;

          .sharingbody {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            .sharingicon {
              font-size: 20px;
              color: ${({ theme }) => theme.textColor};
              transition: all 1s;
            }
          }

          .SocialWrapper {
            z-index: 10;
            margin-top: 8px;
            position: absolute;
            display: flex;
            align-items: center;
            gap: 10px;
            flex-direction: column;
            box-shadow: 0px 2px 8px 0px ${({ theme }) => theme.boxShaw};
            background-color: ${({ theme }) => theme.primaryColor};
            transition: all 1.5s;
            padding: 10px;
            border-radius: 4px;

            .SocialBody {
              .SocialContent {
                display: flex;
                align-items: center;
                justify-content: center;

                .SocialIcon {
                  color: ${({ theme }) => theme.secondaryColor};
                  font-size: 22px;
                  cursor: pointer;
                  transition: all 1.5s;
                }
              }
            }
          }
        }

        .articleWrapper__headerProfileSectionStateSave {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          .articleWrapper__headerProfileSectionStateSaveItem {
            color: ${({ theme }) => theme.textColor};
            transition: all 1.5s;
            font-size: 25px;
          }
        }

        .articleWrapper__headerProfileSectionStateFollowState {
          position: relative;

          .articleWrapper__headerProfileSectionStateFollow {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            .articleWrapper__headerProfileSectionStateFollowItem {
              color: ${({ theme }) => theme.textColor};
              transition: all 1.5s;
              font-size: 25px;
            }
          }
        }
      }
    }

    .articleWrapper__title {
      width: 100%;
      margin: 30px 0px;

      .articleWrapper__titleImageWrapper {
        max-width: 100%;
        /* max-height: 80vh; */

        .articleWrapper__titleImageWrapperItem {
          border-radius: 8px;
          /* width: 100%;
          height: 100%; */
        }
      }

      .articleWrapper__titleDetails {
        width: 100%;
        margin-bottom: 20px;

        .articleWrapper__titleDetailsItem {
          font-family: "Inter", sans-serif;
          /* font-family: "Public Sans", sans-serif; */
          /* font-family: "Nunito", sans-serif; */
          font-size: 32px;
          font-weight: 700;
          font-style: normal;
          color: ${({ theme }) => theme.textColor};
          line-height: 40px;
          text-transform: capitalize;
          transition: all 1.5s;
        }
      }
    }

    .articleWrapper__articleDetails {
      width: 100%;

      .articleWrapper__articleDetailsItem {
        /* font-family: "Public Sans", sans-serif; */
        font-family: "Nunito", sans-serif;
        font-size: 16px;
        font-weight: 400;
        font-style: normal;
        color: ${({ theme }) => theme.textColor};
        line-height: 30px;
        max-width: 100%;
        overflow: auto;
        transition: all 1.5s;

        .image {
          width: 100%;

          img {
            max-width: 100%;
          }
        }

        img {
          max-width: 100%;
        }
      }
    }

    .articleWrapper__SocialMedai {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 20px 0px;

      .articleWrapper__SocialMedaiDetails {
        display: flex;
        align-items: center;

        .articleWrapper__SocialMedaiDetailsLike {
          display: flex;
          align-items: center;
          margin-right: 20px;
          cursor: pointer;

          .articleWrapper__SocialMedaiDetailsLikeIconBody {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 5px;

            .articleWrapper__SocialMedaiDetailsLikeIcon {
              font-size: 15px;
              color: ${({ theme }) => theme.textColor};
              transition: all 1.5s;
            }
          }

          .articleWrapper__SocialMedaiDetailsLikeContent {
            p {
              /* font-family: "Public Sans", sans-serif; */
              font-family: "Nunito", sans-serif;
              font-size: 15px;
              font-weight: 400;
              font-style: normal;
              color: ${({ theme }) => theme.textColor};
              line-height: 30px;
              transition: all 1.5s;
            }
          }
        }
      }

      .articleWrapper__SocialMedaiStatus {
        display: flex;
        align-items: center;
        gap: 20px;

        .sharing_wrapper {
          position: relative;

          .sharingbody {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            .sharingicon {
              font-size: 20px;
              color: ${({ theme }) => theme.textColor};
              transition: all 1s;
            }
          }

          .SocialWrapper {
            z-index: 10;
            margin-top: 8px;
            position: absolute;
            display: flex;
            align-items: center;
            gap: 10px;
            flex-direction: column;
            box-shadow: 0px 2px 8px 0px ${({ theme }) => theme.boxShaw};
            background-color: ${({ theme }) => theme.primaryColor};
            transition: all 1.5s;
            padding: 10px;
            border-radius: 4px;

            .SocialBody {
              .SocialContent {
                display: flex;
                align-items: center;
                justify-content: center;

                .SocialIcon {
                  color: ${({ theme }) => theme.secondaryColor};
                  font-size: 14px;
                  cursor: pointer;
                  transition: all 1.5s;
                }
              }
            }
          }
        }

        .articleWrapper__SocialMedaiStatusSaveIconBody {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          .articleWrapper__SocialMedaiStatusSaveIcon {
            font-size: 15px;
            color: ${({ theme }) => theme.textColor};
            transition: all 1.5s;
          }
        }

        .articleWrapper__SocialMedaiStatusFollowIconBodyStae {
          position: relative;

          .articleWrapper__SocialMedaiStatusFollowIconBody {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            .articleWrapper__SocialMedaiStatusFollowIcon {
              font-size: 15px;
              color: ${({ theme }) => theme.textColor};
              transition: all 1.5s;
            }
          }
        }
      }
    }

    .articleWrapper__comment {
      width: 100%;
      border-top: 1px solid ${({ theme }) => theme.secondaryColor};
      padding: 20px 0px;
      transition: all 1.5s;

      .articleWrapper__commentSection {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .articleWrapper__commentSectionImageWrapper {
          width: 8%;

          .articleWrapper__commentSectionImage {
            border-radius: 50%;
          }
        }

        .articleWrapper__commentSectionStage {
          width: 90%;
          position: relative;

          .articleWrapper__commentSectionStageTitle {
            width: 100%;

            p {
              font-family: "Public Sans", sans-serif;
              /* font-family: "Nunito", sans-serif; */
              font-size: 14px;
              font-weight: 400;
              font-style: normal;
              color: ${({ theme }) => theme.textColor};
              line-height: 30px;
              text-transform: capitalize;
              transition: all 1.5s;
            }
          }

          .articleWrapper__commentSectionStageTextarea {
            resize: none;
            width: 100%;
            height: 100px;
            border-radius: 8px;
            padding: 10px;
            color: ${({ theme }) => theme.textColor};
            background-color: transparent;
            border: 1px solid #d0d5dd;
            font-family: "Poppins", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 24px;
            outline: none;
          }

          .articleWrapper__commentSectionStageButton {
            position: absolute;
            right: 0;

            button {
              border: none;
              outline: none;
              padding: 6px 12px;
              cursor: pointer;
              background-color: ${({ theme }) => theme.secondaryColor};
              color: ${({ theme }) => theme.primaryColor};
              font-family: "Public Sans", sans-serif;
              /* font-family: "Nunito", sans-serif; */
              font-size: 14px;
              font-weight: 400;
              font-style: normal;
              text-transform: capitalize;
              transition: all 1.5s;
              border-radius: 8px;
            }
          }

          @media screen and (max-width: 800px) {
            width: 80%;
          }
        }
      }

      .articleWrapper__commentTextSectionWrapper {
        width: 100%;
        margin-top: 45px;
        max-height: 150vh;
        overflow-y: auto;
        border-top: 1px solid ${({ theme }) => theme.secondaryColor};

        &::-webkit-scrollbar-track {
          border-radius: 5px;
        }

        &::-webkit-scrollbar {
          width: 5px;
          height: 3px;
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background-color: #e89b2d;
        }

        .articleWrapper__commentTextSection {
          width: 100%;
          padding: 20px 0px;
          transition: all 1.5s;
          display: flex;
          /* align-items: center; */
          justify-content: space-between;

          .articleWrapper__commentTextSectionWImageWrapper {
            width: 6%;

            .articleWrapper__commentTextSectionWImage {
              border-radius: 50%;
            }
          }

          .articleWrapper__commentTextSectionText {
            width: 90%;

            .articleWrapper__commentTextSectionTextTitle {
              p {
                font-family: "Public Sans", sans-serif;
                /* font-family: "Nunito", sans-serif; */
                font-size: 14px;
                font-weight: 400;
                font-style: normal;
                color: ${({ theme }) => theme.textColor};
                line-height: 30px;
                text-transform: capitalize;
                transition: all 1.5s;

                .articleWrapper__commentTextSectionTextTitleSpan {
                  opacity: 0.5;
                }
              }
            }

            .articleWrapper__commentTextSectionTextBody {
              margin: 10px 0px;
              p {
                /* font-family: "Public Sans", sans-serif; */
                font-family: "Nunito", sans-serif;
                font-size: 14px;
                font-weight: 400;
                font-style: normal;
                color: ${({ theme }) => theme.textColor};
                line-height: 25px;
                text-transform: capitalize;
                transition: all 1.5s;
              }
            }

            @media screen and (max-width: 400px) {
              width: 80%;
            }
          }
        }
      }
    }

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }

  /* .articleWrapperAds {
    width: 25%;

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  } */

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;
