import { call, put, takeLatest } from "redux-saga/effects";
import { START_FUND_WALLET_WITH_NEW_CARD } from "./types";
import {
  startFundWalletWithNewCardStart,
  startFundWalletWithNewCardSuccess,
  startFundWalletWithNewCardFail,
} from "./actions";
import { Customer } from "services/network";

function* operation({ payload, meta }) {
  yield put(startFundWalletWithNewCardStart());

  try {
    const response = yield call(Customer.startFundWalletWithNewCard, payload);
    let { status, data } = response.data;
    yield meta.continueToPaystack(data.data.reference);
    yield put(startFundWalletWithNewCardSuccess(status));
  } catch (error) {
    yield put(startFundWalletWithNewCardFail(error.message));
  }
}

export default function* saga() {
  yield takeLatest(START_FUND_WALLET_WITH_NEW_CARD, operation);
}
