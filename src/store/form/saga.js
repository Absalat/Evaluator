import { all, call, takeLatest, delay, put } from "redux-saga/effects";
import config from "../../config";
import * as types from "./types";
import axios from "axios";
function* handleSubmitFaculitySelfEvaluation(action) {
  try {
    yield put({
      type: types.FACULITY_SELF_EVALUATION_SUBMIT_ATTEMPT,
    });
    action.payload.year = "2021"
    const storageResponse = yield call(
      [localStorage, localStorage.getItem],
      config.storage
    );
    const storageData = JSON.parse(storageResponse);
    const response = yield axios.post(
      `${config.baseURL}/evaluation/faculty`,
      action.payload,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: storageData.token,
        },
      }
    );
    if (response.statusText === "OK") {
      yield put({
        type: types.FACULITY_SELF_EVALUATION_SUBMIT_SUCCESS,
      });
    }
  } catch (error) {
    yield put({
      type: types.FACULITY_SELF_EVALUATION_SUBMIT_FAILURE,
      payload: "submitting faculity self evaluation failed",
    });
  }
}

function* watchFaculitySelfEvaludationSubmit() {
  yield takeLatest(
    types.FACULITY_SELF_EVALUATION_SUBMIT_ASYNC,
    handleSubmitFaculitySelfEvaluation
  );
}
function* formSaga() {
  yield all([call(watchFaculitySelfEvaludationSubmit)]);
}

export default formSaga;
