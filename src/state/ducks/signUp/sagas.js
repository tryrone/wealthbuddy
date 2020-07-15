import { call, put, takeLatest } from "redux-saga/effects";
import { SIGN_UP } from "./types";
import { processError } from "state/ducks/api/actions";
import { signUpStart, signUpSuccess, signUpFail } from "./actions";
import { Customer } from "services/network";

function* operation({ payload, meta }) {
  yield put(signUpStart());

  try {
    const response = yield call(Customer.createUser, payload);
    let { data } = response.data;
    yield put(signUpSuccess(data));
    yield meta.history.push("/dashboard");
  } catch (error) {
    yield put(processError({ error, formikProps: meta.formikProps }));
    yield put(signUpFail(error));
  }
}

export default function* saga() {
  yield takeLatest(SIGN_UP, operation);
}
