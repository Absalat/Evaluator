import * as types from './types'
export const submitFaculitySelfEvaluation = (evaluation)=>({
    type: types.FACULITY_SELF_EVALUATION_SUBMIT_ASYNC,
    payload: evaluation
})

export const resetSubmitFaculitySelfEvaluation = ()=>({
    type: types.RESET_FACULITY_SELF_EVALUATION
})