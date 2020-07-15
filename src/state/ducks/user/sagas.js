import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN } from "./types";
import { processError } from "state/ducks/api/actions";
import { loginStart, loginSuccess, loginFail } from "./actions";
import { Customer } from "services/network";

function* login({ payload, meta }) {
  yield put(loginStart());

  try {
    const response = yield call(Customer.login, payload);
    let { data } = response.data;
    data.jwtToken = response.headers['token'];
    yield put(loginSuccess(data));
    // yield meta.history.push("/dashboard");
  } catch (error) {
    // yield put(processError({ error, formikProps: meta.formikProps }));
    yield console.log(error);
    yield put(loginFail(error));
  }
}

export default function* saga() {
  yield takeLatest(LOGIN, login);
}
