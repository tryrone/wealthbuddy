import { call, put, takeLatest } from "redux-saga/effects";
import {LOGIN, LOGOUT} from "./types";
import {
  loginStart,
  loginSuccess,
  loginFail,
  logoutStart,
  logoutSuccess,
  logoutFail,
} from "./actions";
import { Customer } from "services/network";

function* login({ payload, meta }) {
  yield put(loginStart());

  try {
    const response = yield call(Customer.login, payload);
    let { data } = response.data;
    data.jwtToken = response.headers["token"];
    yield put(loginSuccess(data));
    yield meta.history.push("/dashboard");
  } catch (error) {
    yield put(loginFail(error.message));
  }
}

function* logout({ payload, meta }) {
  yield put(logoutStart());

  try {
    sessionStorage.removeItem('persist:root');
    yield put(logoutSuccess());
    yield meta.history.push("/auth/login");
  } catch (error) {
    yield put(logoutFail(error.message));
  }
}

export default function* saga() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(LOGOUT, logout);
}
