import * as types from "./types";
export const submitFaculitySelfEvaluation = (evaluation) => ({
  type: types.FACULITY_SELF_EVALUATION_SUBMIT_ASYNC,
  payload: evaluation,
});

export const resetSubmitFaculitySelfEvaluation = () => ({
  type: types.RESET_FACULITY_SELF_EVALUATION,
});

export const submitChairSelfEvaluation = (evaluation) => ({
  type: types.CHAIR_SELF_EVALUATION_SUBMIT_ASYNC,
  payload: evaluation,
});

export const resetSubmitChairSelfEvaluation = () => ({
  type: types.CHAIR_SELF_EVALUATION_SUBMIT_RESET,
});

export const submitSchoolEvaluation = (evaluation) => ({
  type: types.SCHOOL_EVALUATION_SUBMIT_ASYNC,
  payload: evaluation,
});

export const resetSubmitSchoolEvaluation = () => ({
  type: types.SCHOOL_EVALUATION_SUBMIT_RESET,
});
