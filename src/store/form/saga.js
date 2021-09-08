import { all, call, takeLatest, delay, put } from "redux-saga/effects";
import config from "../../config";
import * as types from "./types";
import axios from "axios";
function* handleSubmitFaculitySelfEvaluation(action) {
  try {
    yield put({
      type: types.FACULITY_SELF_EVALUATION_SUBMIT_ATTEMPT,
    });
    action.payload.year = "2021";
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
        payload: response.data.data
      });
    }
  } catch (error) {
    yield put({
      type: types.FACULITY_SELF_EVALUATION_SUBMIT_FAILURE,
      payload: "submitting faculity self evaluation failed",
    });
  }
}

function* handleSubmitChairSelfEvaluation(action) {
  try {
    yield put({
      type: types.CHAIR_SELF_EVALUATION_SUBMIT_ATTEMPT,
    });
    action.payload.year = new Date().getFullYear();
    const storageResponse = yield call(
      [localStorage, localStorage.getItem],
      config.storage
    );
    const storageData = JSON.parse(storageResponse);
    yield axios.post(`${config.baseURL}/evaluation/chair`, action.payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: storageData.token,
      },
    });
    yield put({
      type: types.CHAIR_SELF_EVALUATION_SUBMIT_SUCCESS,
      payload: "chair self evaluation submitted succesfully!",
    });
  } catch (error) {
    yield put({
      type: types.CHAIR_SELF_EVALUATION_SUBMIT_FAILURE,
      payload: "submitting chair self evaluation failed !",
    });
  }
}

function* handleSchoolEvaluation(action) {
  try {
    yield put({
      type: types.SCHOOL_EVALUATION_SUBMIT_ATTEMPT,
    });
    action.payload.year = new Date().getFullYear();
    const storageResponse = yield call(
      [localStorage, localStorage.getItem],
      config.storage
    );
    const storageData = JSON.parse(storageResponse);
    yield axios.post(`${config.baseURL}/evaluation/school`, action.payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: storageData.token,
      },
    });
    yield put({
      type: types.SCHOOL_EVALUATION_SUBMIT_SUCCESS,
      payload: "school evaluation submitted succesfully!",
    });
  } catch (error) {
    yield put({
      type: types.SCHOOL_EVALUATION_SUBMIT_FAILURE,
      payload: "submitting school evaluation failed !",
    });
  }
}

function* watchSchoolEvaluationSubmit() {
  yield takeLatest(
    types.SCHOOL_EVALUATION_SUBMIT_ASYNC,
    handleSchoolEvaluation
  );
}

function* watchChairSelfEvaluationSubmit() {
  yield takeLatest(
    types.CHAIR_SELF_EVALUATION_SUBMIT_ASYNC,
    handleSubmitChairSelfEvaluation
  );
}
function* watchFaculitySelfEvaludationSubmit() {
  yield takeLatest(
    types.FACULITY_SELF_EVALUATION_SUBMIT_ASYNC,
    handleSubmitFaculitySelfEvaluation
  );
}
function* formSaga() {
  yield all([
    call(watchFaculitySelfEvaludationSubmit),
    call(watchChairSelfEvaluationSubmit),
    call(watchSchoolEvaluationSubmit),
  ]);
}

export default formSaga;
