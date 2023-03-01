import React from "react";
import { REDUCE_SIDEBAR, DASHBOARD_NAV_DROPDOWN } from "../type";

const initialState = { reduceSideBar: false, dashbaordNavDropdown: false };

const DashboardConditionReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REDUCE_SIDEBAR: {
      return {
        ...state,
        reduceSideBar: payload,
      };
    }

    case DASHBOARD_NAV_DROPDOWN: {
      return {
        ...state,
        dashbaordNavDropdown: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default DashboardConditionReducers;
