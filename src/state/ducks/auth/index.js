import { combineReducers } from "redux";
import signUpReducer from "./signUp";
import { fork } from "redux-saga/effects";
import { signUpSagas } from "./signUp";

export function* authSagas() {
  yield fork(signUpSagas);
}

export default combineReducers({
  signUp: signUpReducer,
});
