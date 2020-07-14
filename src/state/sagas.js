import { fork } from "redux-saga/effects";
import { apiSagas } from "./ducks/api";
import { authSagas } from "./ducks/auth";

export default function* rootSaga() {
  yield fork(apiSagas);
  yield fork(authSagas);
}
