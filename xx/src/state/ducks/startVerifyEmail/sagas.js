import { call, put, takeLatest } from "redux-saga/effects";
import { START_VERIFY_EMAIL } from "./types";
import {
  startVerifyEmailStart,
  startVerifyEmailSuccess,
  startVerifyEmailFail,
} from "./actions";
import { Customer } from "services/network";
import {
  saveEmailVerificationId,
  savePersonalDetails,
} from "../signUpParams/actions";

function* operation({ payload, meta }) {
  yield put(startVerifyEmailStart());
  yield put(savePersonalDetails(payload));

  try {
    const response = yield call(Customer.startVerifyEmail, payload);
    let { verificationID } = response.data;
    yield put(saveEmailVerificationId({ verificationID }));
    yield put(startVerifyEmailSuccess());
    yield meta.history.push("/auth/sign-up/verify-email");
  } catch (error) {
    yield put(startVerifyEmailFail(error.message));
  }
}

export default function* saga() {
  yield takeLatest(START_VERIFY_EMAIL, operation);
}
