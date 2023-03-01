import {
  SUBTITLES,
  SUBTITLE_LOADER,
  SUBTITLE_FORMVALUE,
  SUBTITLE_EDIT_OPTION,
} from "../type";

const initialState = {
  subtitle: [],
  loader: true,
  formValue: {},
  editOption: false,
};

const SubtitleReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SUBTITLES: {
      return {
        ...state,
        subtitle: payload,
      };
    }

    case SUBTITLE_LOADER: {
      return {
        ...state,
        loader: payload,
      };
    }

    case SUBTITLE_FORMVALUE: {
      return {
        ...state,
        formValue: payload,
      };
    }

    case SUBTITLE_EDIT_OPTION: {
      return {
        ...state,
        editOption: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default SubtitleReducers;
