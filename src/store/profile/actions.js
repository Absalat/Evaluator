import * as types from './types'

export const updateProfile = (profile)=>({
    type: types.UPDATE_PROFILE_ASYNC,
    payload:profile
})

export const resetUpdateProfile = ()=>({
    type: types.RESET_UPDATE_PROFILE
})