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
  NEW,
  DASHBOARD_SUBTITLE,
  SUBTITLE_LOADER_CONFIGURATION,
  SUBTITLE_SELECTED_TAG,
  TOTAL_ARTICLE,
  MY_STORIES_DETAILS,
  MY_STORIES_LOADER,
  SUBTITLE_SELECTED_SUB_TAG,
  MY_FOLLOWERS,
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
  new: 0,

  dashboard_Subtitle: [],
  subtitleLoaderConfiguration: false,
  subtitleSelectedTag: "",
  totalArticle: 0,

  myStoriesDetails: {},
  myStoriesLoader: false,

  subtitleSelectedSubTag: "",

  myFollowers: [],
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

    case NEW: {
      return {
        ...state,
        new: payload,
      };
    }

    case DASHBOARD_SUBTITLE: {
      return {
        ...state,
        dashboard_Subtitle: payload,
      };
    }

    case SUBTITLE_LOADER_CONFIGURATION: {
      return {
        ...state,
        subtitleLoaderConfiguration: payload,
      };
    }

    case SUBTITLE_SELECTED_TAG: {
      return {
        ...state,
        subtitleSelectedTag: payload,
      };
    }

    case SUBTITLE_SELECTED_SUB_TAG: {
      return {
        ...state,
        subtitleSelectedSubTag: payload,
      };
    }

    case TOTAL_ARTICLE: {
      return {
        ...state,
        totalArticle: payload,
      };
    }

    case MY_STORIES_DETAILS: {
      return {
        ...state,
        myStoriesDetails: payload,
      };
    }

    case MY_FOLLOWERS: {
      return {
        ...state,
        myFollowers: payload,
      };
    }

    case MY_STORIES_LOADER: {
      return {
        ...state,
        myStoriesLoader: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default DashboardReducers;
