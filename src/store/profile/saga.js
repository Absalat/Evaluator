import { all, call, takeLatest, delay, put } from "redux-saga/effects";
import config from "../../config";
import * as types from "./types";
import axios from "axios";
function* handleUpdateProfile(action) {
  try {
    yield put({
      type: types.UPDATE_PROFILE_ATTEMPT,
    });
    const storageResponse = yield call(
      [localStorage, localStorage.getItem],
      config.storage
    );
    const storageData = JSON.parse(storageResponse);
    const response = yield axios.put(
      `${config.baseURL}/auth/profile`,
      action.payload,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: storageData.token,
        },
      }
    );
    
    storageData.user = response.data.data;
    yield call(
      [localStorage, localStorage.setItem],
      config.storage,
      JSON.stringify(storageData)
    );
    yield put({
      type: types.UPDATE_PROFILE_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_PROFILE_FAILURE,
      payload: "failed to create profile",
    });
  }
}

function* watchUpdateProfile() {
  yield takeLatest(types.UPDATE_PROFILE_ASYNC, handleUpdateProfile);
}

function* profileSaga() {
  yield all([call(watchUpdateProfile)]);
}

export default profileSaga;
