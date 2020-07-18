import { call, put, takeLatest } from "redux-saga/effects";
import { COMPLETE_VERIFY_EMAIL } from "./types";
// import { processError } from "state/ducks/api/actions";
import {
  completeVerifyEmailComplete,
  completeVerifyEmailSuccess,
  completeVerifyEmailFail,
} from "./actions";
import { Customer } from "services/network";

function* operation({ payload, meta }) {
  yield put(completeVerifyEmailComplete());

  try {
    const response = yield call(Customer.completeVerifyEmail, payload);
    let { status } = response.data;
    yield put(completeVerifyEmailSuccess(status));
    // yield meta.history.push("/dashboard");
  } catch (error) {
    // yield put(processError({ error, formikProps: meta.formikProps }));
    yield put(completeVerifyEmailFail(error));
  }
}

export default function* saga() {
  yield takeLatest(COMPLETE_VERIFY_EMAIL, operation);
}
