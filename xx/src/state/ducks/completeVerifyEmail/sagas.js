import { call, put, takeLatest } from "redux-saga/effects";
import { COMPLETE_VERIFY_EMAIL } from "./types";
import {
  completeVerifyEmailStart,
  completeVerifyEmailSuccess,
  completeVerifyEmailFail,
} from "./actions";
import { Customer } from "services/network";
import {saveEmailVerificationId} from "../signUpParams/actions";

function* operation({ payload, meta }) {
  yield put(completeVerifyEmailStart());

  try {
    const response = yield call(Customer.completeVerifyEmail, payload);
    let { verificationID } = response.data;
    yield put(saveEmailVerificationId({ verificationID }));
    yield put(completeVerifyEmailSuccess());
    yield meta.history.push("/auth/sign-up/set-password");
  } catch (error) {
    yield put(completeVerifyEmailFail(error.message));
  }
}

export default function* saga() {
  yield takeLatest(COMPLETE_VERIFY_EMAIL, operation);
}
