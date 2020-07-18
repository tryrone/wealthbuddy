import { call, put, takeLatest } from "redux-saga/effects";
import { SAVE_PROFILE } from "./types";
// import { processError } from "state/ducks/api/actions";
import {
  saveProfileStart,
  saveProfileSuccess,
  saveProfileFail,
} from "./actions";
import { Customer } from "services/network";

function* operation({ payload, meta }) {
  yield put(saveProfileStart());

  try {
    const response = yield call(Customer.saveProfile, payload);
    let { status } = response.data;
    yield put(saveProfileSuccess(status));
    // yield meta.history.push("/dashboard");
  } catch (error) {
    // yield put(processError({ error, formikProps: meta.formikProps }));
    yield put(saveProfileFail(error));
  }
}

export default function* saga() {
  yield takeLatest(SAVE_PROFILE, operation);
}
