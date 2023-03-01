import {
  ALL_FOLLOWERS_DETAILS,
  DASHBOARD_ALL_ARTICLE,
  DASHBOARD_LOADER,
  DASHBOARD_SINGLE_POST,
  DASHBOARD_SUBTITLE,
  MY_FOLLOWERS,
  MY_STORIES_DETAILS,
  MY_STORIES_LOADER,
  MY_USER_DETAILS,
  NEW,
  NOTIFICATION_STATE,
  OTHER_USER_DETAILS,
  PENDING,
  PUBLISH,
  REFRESH_USER_DETAILS,
  SAVED_POST,
  SINGLE_POST_COMMENT,
  SINGLE_POST_DISLIKE,
  SINGLE_POST_LIKE,
  SUBTITLE_LOADER_CONFIGURATION,
  SUBTITLE_SELECTED_SUB_TAG,
  SUBTITLE_SELECTED_TAG,
  TOTAL,
  TOTAL_ARTICLE,
  USER_DETAILS,
  USER_STORE,
} from "../type";

export const getDashboardAllArticle = (param) => (dispatch) => {
  dispatch({ type: DASHBOARD_ALL_ARTICLE, payload: param });
};

export const getDashboardLoader = (param) => (dispatch) => {
  dispatch({ type: DASHBOARD_LOADER, payload: param });
};

export const getDashboardSinglePost = (param) => (dispatch) => {
  dispatch({ type: DASHBOARD_SINGLE_POST, payload: param });
};

export const getUserDetails = (param) => (dispatch) => {
  dispatch({ type: USER_DETAILS, payload: param });
};

export const getSinglePostComment = (param) => (dispatch) => {
  dispatch({ type: SINGLE_POST_COMMENT, payload: param });
};

export const getSinglePostLike = (param) => (dispatch) => {
  dispatch({ type: SINGLE_POST_LIKE, payload: param });
};

export const getSinglePostDisLike = (param) => (dispatch) => {
  dispatch({ type: SINGLE_POST_DISLIKE, payload: param });
};

export const getSavedPost = (param) => (dispatch) => {
  dispatch({ type: SAVED_POST, payload: param });
};

export const getNotificationState = (param) => (dispatch) => {
  dispatch({ type: NOTIFICATION_STATE, payload: param });
};

export const getAllFollowingDetails = (param) => (dispatch) => {
  dispatch({ type: ALL_FOLLOWERS_DETAILS, payload: param });
};

export const getMyUserDetails = (param) => (dispatch) => {
  dispatch({ type: MY_USER_DETAILS, payload: param });
};

export const getRefreshUserDetails = (param) => (dispatch) => {
  dispatch({ type: REFRESH_USER_DETAILS, payload: param });
};

export const getOtherUserDetails = (param) => (dispatch) => {
  dispatch({ type: OTHER_USER_DETAILS, payload: param });
};

export const getUserStore = (param) => (dispatch) => {
  dispatch({ type: USER_STORE, payload: param });
};

export const getPublish = (param) => (dispatch) => {
  dispatch({ type: PUBLISH, payload: param });
};

export const getPending = (param) => (dispatch) => {
  dispatch({ type: PENDING, payload: param });
};

export const getTotal = (param) => (dispatch) => {
  dispatch({ type: TOTAL, payload: param });
};

export const getNew = (param) => (dispatch) => {
  dispatch({ type: NEW, payload: param });
};

export const getDashboardSubtitle = (param) => (dispatch) => {
  dispatch({ type: DASHBOARD_SUBTITLE, payload: param });
};

export const getSubtitleLoader = (param) => (dispatch) => {
  dispatch({ type: SUBTITLE_LOADER_CONFIGURATION, payload: param });
};

export const getSubtitleSelectedTag = (param) => (dispatch) => {
  dispatch({ type: SUBTITLE_SELECTED_TAG, payload: param });
};

export const getTotalArticle = (param) => (dispatch) => {
  dispatch({ type: TOTAL_ARTICLE, payload: param });
};

export const getMyStoriesDetails = (param) => (dispatch) => {
  dispatch({ type: MY_STORIES_DETAILS, payload: param });
};

export const getMyStoriesLoader = (param) => (dispatch) => {
  dispatch({ type: MY_STORIES_LOADER, payload: param });
};

export const getSubTagDetails = (param) => (dispatch) => {
  dispatch({ type: SUBTITLE_SELECTED_SUB_TAG, payload: param });
};

export const getMyFollowers = (param) => (dispatch) => {
  dispatch({ type: MY_FOLLOWERS, payload: param });
};
