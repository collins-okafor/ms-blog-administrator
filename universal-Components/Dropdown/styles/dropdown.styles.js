import styled from "styled-components";

export const DropdownWrapperDiv = styled.div`
  width: 100%;
  position: relative;

  .checkBoxBody {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #d0d5dd;
    border-radius: 8px;
    padding: 4px 10px;
    cursor: pointer;
    width: 100%;
    margin-bottom: 10px;
    box-shadow: 0px 0.855949px 1.7119px rgba(16, 24, 40, 0.05);
    background-color: "#fff";

    .checkboxHeader {
      display: flex;
      align-items: center;

      .checkboxHeaderIconBody {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
      }

      p {
        padding: 7px 0px;
        // font-size: 16px;
        font-weight: 500;
        // color: #101828;
        color: ${({ theme }) => theme.textColor};
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 21px;
      }
    }
    .searchIconBody {
      display: flex;
      align-items: center;
      justify-content: center;
      .searchIcon {
        color: #98a2b3;
        font-size: 18px;
      }
    }
  }
  .dropDownBody {
    /* border: 1px solid red; */
    box-shadow: 0px 4px 8px 1px rgba(0, 0, 0, 0.157);
    margin-top: 5px;
    padding: 10px 2px;
    border-radius: 8px;
    width: 100%;
    height: 200px;
    overflow-y: auto;
    position: absolute;
    z-index: 10;
    border: 1px solid ${({ theme }) => theme.textColor};
    /* background-color: #fff; */

    &::-webkit-scrollbar-track {
      /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
      border-radius: 0px;
      /* background-color: #f5f5f5; */
    }

    &::-webkit-scrollbar {
      width: 3px;
      /* background-color: #f5f5f5; */
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 0px;
      /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
      background-color: ${({ theme }) => theme.textColor};
    }

    .containerColor {
      /* background-color: #f9fafb; */
    }
    /* border-bottom: 1px solid #f2f4f7; */
    .dropDownContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 8px;
      padding: 6px 10px;
      cursor: pointer;
      width: 100%;
      border-bottom: 1px solid #f2f4f7;
      /* box-shadow: 0px 0.855949px 1.7119px rgba(16, 24, 40, 0.05); */
      &:last-child() {
        border: none;
        /* box-shadow: 0px 0px 0px rgba(16, 24, 40, 0.05); */
      }
      &:hover {
        transition: all 0.2s ease-in-out;
        opacity: 0.6;
        transform: scale(0.97);
      }

      .dropDownHeader {
        display: flex;
        align-items: center;

        .dropDownHeaderIconBody {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
        }

        p {
          padding: 7px 0px;
          /* font-size: 16px;
            font-weight: 500; */
          color: ${({ theme }) => theme.textColor};
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 1rem;
          line-height: 21px;
        }
      }
      .dropDownIconBody {
        display: flex;
        align-items: center;
        justify-content: center;
        .dropDownIcon {
          color: #7f56d9;
          width: 25px;
          font-size: 1.5rem;
        }
      }
    }
  }
`;
