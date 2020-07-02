import { all, takeEvery, put, call } from "redux-saga/effects";
import { GET_POSTS, GET_POSTS_FAILURE, GET_POSTS_SUCCESS } from "./actions";
import postAPI from "../../services/api/postAPI";

function* getPosts() {
  try {
    const res = yield call(postAPI.getPosts);
    yield put({
      type: GET_POSTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_POSTS_FAILURE,
      payload: err,
    });
  }
}

export default function* () {
  yield all([takeEvery(GET_POSTS, getPosts)]);
}
