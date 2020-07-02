import { all, fork } from "redux-saga/effects";

import postSaga from "./posts/saga";

export default function* rootSaga() {
  yield all([fork(postSaga)]);
}
