import { call, put, takeLatest } from "redux-saga/effects";
import { START_VERIFY_EMAIL } from "./types";
// import { processError } from "state/ducks/api/actions";
import {
  startVerifyEmailStart,
  startVerifyEmailSuccess,
  startVerifyEmailFail,
} from "./actions";
import { Customer } from "services/network";

function* operation({ payload, meta }) {
  yield put(startVerifyEmailStart());

  try {
    const response = yield call(Customer.startVerifyEmail, payload);
    let { status } = response.data;
    yield put(startVerifyEmailSuccess(status));
    // yield meta.history.push("/dashboard");
  } catch (error) {
    // yield put(processError({ error, formikProps: meta.formikProps }));
    yield put(startVerifyEmailFail(error));
  }
}

export default function* saga() {
  yield takeLatest(START_VERIFY_EMAIL, operation);
}
