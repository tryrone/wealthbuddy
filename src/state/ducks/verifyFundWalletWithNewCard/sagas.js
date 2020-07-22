import { call, put, takeLatest } from "redux-saga/effects";
import { VERIFY_FUND_WALLET_WITH_NEW_CARD } from "./types";
import {
  verifyFundWalletWithNewCardStart,
  verifyFundWalletWithNewCardSuccess,
  verifyFundWalletWithNewCardFail,
} from "./actions";
import { Customer } from "services/network";
import {getDashboardData} from "../dashboard/actions";

function* operation({ payload, meta }) {
  yield put(verifyFundWalletWithNewCardStart());

  try {
    const response = yield call(Customer.verifyFundWalletWithNewCard, payload);
    let { status } = response.data;
    yield meta.completePaystackPayment();
    yield put(getDashboardData());
    yield put(verifyFundWalletWithNewCardSuccess(status));
  } catch (error) {
    yield put(verifyFundWalletWithNewCardFail(error.message));
  }
}

export default function* saga() {
  yield takeLatest(VERIFY_FUND_WALLET_WITH_NEW_CARD, operation);
}
