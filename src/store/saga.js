import { all, call } from "redux-saga/effects";
import authSaga from "./auth/saga";
import profileSaga from "./profile/saga";
import formSaga from "./form/saga";
function* rootSaga() {
  yield all([call(authSaga), call(profileSaga), call(formSaga)]);
}
export default rootSaga;
