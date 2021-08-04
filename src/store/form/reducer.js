import * as types from "./types";

const initialState = {
  faculitySelfEvaludation: {
    isLoading: false,
    error: null,
    submitSuccess: false,
  },
};
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FACULITY_SELF_EVALUATION_SUBMIT_ATTEMPT: {
      return {
        ...state,
        faculitySelfEvaludation: {
          isLoading: true,
          error: null,
          submitSuccess: false,
        },
      };
    }
    case types.FACULITY_SELF_EVALUATION_SUBMIT_SUCCESS: {
      return {
        ...state,
        faculitySelfEvaludation: {
          isLoading: false,
          error: null,
          submitSuccess: true,
        },
      };
    }
    case types.FACULITY_SELF_EVALUATION_SUBMIT_FAILURE: {
      return {
        ...state,
        faculitySelfEvaludation: {
          isLoading: false,
          error: action.payload,
          submitSuccess: false,
        },
      };
    }
    case types.RESET_FACULITY_SELF_EVALUATION: {
      return {
        ...state,
        faculitySelfEvaludation: {
          isLoading: false,
          error: null,
          submitSuccess: false,
        },
      };
    }
  }
  return state;
};

export default formReducer;
