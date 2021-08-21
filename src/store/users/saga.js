import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import config from "../../config";
import * as types from "./types";
function* handleFetchUsers(action) {
  try {
    const { username, limit, page } = action.payload;
    const storageResponse = yield call(
      [localStorage, localStorage.getItem],
      config.storage
    );
    const storageData = JSON.parse(storageResponse);
    const response = yield axios.get(
      `${config.baseURL}/users?username=${username}&limit=${limit}&start=${page}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: storageData.token,
        },
      }
    );
    yield put({
      type: types.FETCH_USERS_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    yield put({
      type: types.FETCH_USERS_FAILURE,
      payload: "couldn't fetch users",
    });
  }
}

function* handleChangeRoles(action) {
  try {
    const { roles, id } = action.payload;
    const storageResponse = yield call(
      [localStorage, localStorage.getItem],
      config.storage
    );
    const storageData = JSON.parse(storageResponse);
    const response = yield axios.patch(
      `${config.baseURL}/users/${id}/roles`,
      {
        roles: roles,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: storageData.token,
        },
      }
    );
    console.log(response.data);
    yield put({
      type: types.CHANGE_ROLE_SUCCESS,
      payload: {
        roles: roles,
        id: id,
        msg: "Role Successfuly Changed !",
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: types.CHANGE_ROLE_FAILURE,
      payload: "Changing Role failed !",
    });
  }
}

function* watchChangeRoles() {
  yield takeLatest(types.CHANGE_ROLE_ASYNC, handleChangeRoles);
}
function* watchFetchUsers() {
  yield takeLatest(types.FETCH_USERS_ASYNC, handleFetchUsers);
}
function* userSaga() {
  yield all([call(watchFetchUsers), call(watchChangeRoles)]);
}

export default userSaga;
