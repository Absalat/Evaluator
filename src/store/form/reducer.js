import * as types from "./types";

const initialState = {
  faculitySelfEvaludation: {
    isLoading: false,
    error: null,
    submitSuccess: null,
  },
  chairSelfEvaluation: {
    isLoading: false,
    error: null,
    submitSuccess: null,
  },
  schoolEvaluation: {
    isLoading: false,
    error: null,
    submitSuccess: null,
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
          submitSuccess: null,
        },
      };
    }
    case types.FACULITY_SELF_EVALUATION_SUBMIT_SUCCESS: {
      return {
        ...state,
        faculitySelfEvaludation: {
          isLoading: false,
          error: null,
          submitSuccess: action.payload,
        },
      };
    }
    case types.FACULITY_SELF_EVALUATION_SUBMIT_FAILURE: {
      return {
        ...state,
        faculitySelfEvaludation: {
          isLoading: false,
          error: action.payload,
          submitSuccess: null,
        },
      };
    }
    case types.RESET_FACULITY_SELF_EVALUATION: {
      return {
        ...state,
        faculitySelfEvaludation: {
          isLoading: false,
          error: null,
          submitSuccess: null,
        },
      };
    }
    case types.CHAIR_SELF_EVALUATION_SUBMIT_ATTEMPT: {
      return {
        ...state,
        chairSelfEvaluation: {
          isLoading: true,
          error: null,
          submitSuccess: null,
        },
      };
    }
    case types.CHAIR_SELF_EVALUATION_SUBMIT_SUCCESS: {
      return {
        ...state,
        chairSelfEvaluation: {
          isLoading: false,
          error: null,
          submitSuccess: action.payload,
        },
      };
    }
    case types.CHAIR_SELF_EVALUATION_SUBMIT_FAILURE: {
      return {
        ...state,
        chairSelfEvaluation: {
          isLoading: false,
          error: action.payload,
          submitSuccess: null,
        },
      };
    }
    case types.CHAIR_SELF_EVALUATION_SUBMIT_RESET: {
      return {
        ...state,
        chairSelfEvaluation: {
          isLoading: false,
          error: null,
          submitSuccess: null,
        },
      };
    }
    case types.SCHOOL_EVALUATION_SUBMIT_ATTEMPT: {
      return {
        ...state,
        schoolEvaluation: {
          isLoading: true,
          error: null,
          submitSuccess: null,
        },
      };
    }
    case types.SCHOOL_EVALUATION_SUBMIT_SUCCESS: {
      return {
        ...state,
        schoolEvaluation: {
          isLoading: false,
          error: null,
          submitSuccess: action.payload,
        },
      };
    }
    case types.SCHOOL_EVALUATION_SUBMIT_FAILURE: {
      return {
        ...state,
        schoolEvaluation: {
          isLoading: false,
          error: action.payload,
          submitSuccess: null,
        },
      };
    }
    case types.SCHOOL_EVALUATION_SUBMIT_RESET: {
      return {
        ...state,
        schoolEvaluation: {
          isLoading: false,
          error: null,
          submitSuccess: null,
        },
      };
    }
  }
  return state;
};

export default formReducer;
