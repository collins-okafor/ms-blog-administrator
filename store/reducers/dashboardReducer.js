import {
  DASHBOARD_ALL_ARTICLE,
  DASHBOARD_LOADER,
  DASHBOARD_SINGLE_POST,
  USER_DETAILS,
  SINGLE_POST_COMMENT,
  SINGLE_POST_LIKE,
  SINGLE_POST_DISLIKE,
  SAVED_POST,
  NOTIFICATION_STATE,
  ALL_FOLLOWERS_DETAILS,
  MY_USER_DETAILS,
  REFRESH_USER_DETAILS,
  OTHER_USER_DETAILS,
  USER_STORE,
  PUBLISH,
  PENDING,
  TOTAL,
} from "../type";

const initialState = {
  dashboardAllArticle: {},
  DashboardLoader: true,
  dashboardSinglePost: {},
  userDetails: {},
  singlePostComment: {},
  singlePostLike: {},
  singlePostDisLike: {},
  savedPost: [],
  notificationState: [],
  allFollowerDetails: [],
  myUserDetails: {},
  RefreshUserDetails: {},
  otherUserDetails: {},
  userStore: {},
  pending: 0,
  publish: 0,
  total: 0,
};

const DashboardReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOTAL: {
      return {
        ...state,
        total: payload,
      };
    }

    case USER_DETAILS: {
      return {
        ...state,
        userDetails: payload,
      };
    }

    case DASHBOARD_ALL_ARTICLE: {
      return {
        ...state,
        dashboardAllArticle: payload,
      };
    }

    case DASHBOARD_LOADER: {
      return {
        ...state,
        DashboardLoader: payload,
      };
    }

    case DASHBOARD_SINGLE_POST: {
      return {
        ...state,
        dashboardSinglePost: payload,
      };
    }

    case SINGLE_POST_COMMENT: {
      return {
        ...state,
        singlePostComment: payload,
      };
    }

    case SINGLE_POST_LIKE: {
      return {
        ...state,
        singlePostLike: payload,
      };
    }

    case SINGLE_POST_DISLIKE: {
      return {
        ...state,
        singlePostDisLike: payload,
      };
    }

    case SAVED_POST: {
      return {
        ...state,
        savedPost: payload,
      };
    }

    case NOTIFICATION_STATE: {
      return {
        ...state,
        notificationState: payload,
      };
    }

    case ALL_FOLLOWERS_DETAILS: {
      return {
        ...state,
        allFollowerDetails: payload,
      };
    }

    case MY_USER_DETAILS: {
      return {
        ...state,
        myUserDetails: payload,
      };
    }

    case REFRESH_USER_DETAILS: {
      return {
        ...state,
        RefreshUserDetails: payload,
      };
    }

    case OTHER_USER_DETAILS: {
      return {
        ...state,
        otherUserDetails: payload,
      };
    }

    case USER_STORE: {
      return {
        ...state,
        userStore: payload,
      };
    }

    case PENDING: {
      return {
        ...state,
        pending: payload,
      };
    }

    case PUBLISH: {
      return {
        ...state,
        publish: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default DashboardReducers;
