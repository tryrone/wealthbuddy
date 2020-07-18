import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN } from "./types";
import { loginStart, loginSuccess, loginFail } from "./actions";
import { Customer } from "services/network";

function* login({ payload, meta }) {
  yield put(loginStart());

  try {
    const response = yield call(Customer.login, payload);
    console.log(response);
    let { data } = response.data;
    data.jwtToken = response.headers["token"];
    yield put(loginSuccess(data));
    yield meta.history.push("/dashboard");
  } catch (error) {
    yield put(loginFail(error.message));
  }
}

export default function* saga() {
  yield takeLatest(LOGIN, login);
}
