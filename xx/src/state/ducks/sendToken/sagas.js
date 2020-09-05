import { call, put, takeLatest } from "redux-saga/effects";
import { SEND_TOKEN } from "./types";
import { sendTokenStart, sendTokenSuccess, sendTokenFail } from "./actions";
import { Customer } from "services/network";

function* operation({ payload, meta }) {
  yield put(sendTokenStart());

  try {
    const response = yield call(Customer.sendToken, payload);
    let { tokenReference } = response.data;
    meta.setTokenReference(tokenReference);
    yield put(sendTokenSuccess(tokenReference));
  } catch (error) {
    yield put(sendTokenFail(error.message));
  }
}

export default function* saga() {
  yield takeLatest(SEND_TOKEN, operation);
}
