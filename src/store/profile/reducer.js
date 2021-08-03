import * as types from "./types";
const initialState = {
  updatedProfile: {
    isLoading: false,
    updateSuccess: false,
    error: null,
  },
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PROFILE_ATTEMPT: {
      return {
        ...state,
        updatedProfile:{
          isLoading: true,
          error: null,
          updateSuccess: false,
        },
      };
    }
    case types.UPDATE_PROFILE_SUCCESS: {
      return {
        ...state,
        updatedProfile: {
          isLoading: false,
          error: null,
          updateSuccess: true,
        },
      };
    }
    case types.UPDATE_PROFILE_FAILURE: {
      return {
        ...state,
        updatedProfile: {
          isLoading: false,
          error: action.payload,
          updateSuccess: false,
        },
      };
    }
    case types.RESET_UPDATE_PROFILE: {
      return {
        ...state,
        updatedProfile: {
          isLoading: false,
          error: null,
          updateSuccess: false,
        },
      };
    }
  }
  return state;
};

export default profileReducer;
