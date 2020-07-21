import { call, put, takeLatest } from "redux-saga/effects";
import { START_FUND_WALLET_WITH_NEW_CARD } from "./types";
import {
  startFundWalletWithNewCardStart,
  startFundWalletWithNewCardSuccess,
  startFundWalletWithNewCardFail,
} from "./actions";
import { Customer } from "services/network";
import {getDashboardData} from "../dashboard/actions";

function* operation({ payload, meta }) {
  yield put(startFundWalletWithNewCardStart());

  try {
    const response = yield call(Customer.startFundWalletWithNewCard, payload);
    let { status } = response.data;
    yield meta.closeFundWalletModal();
    yield meta.showSuccessModal();
    yield put(getDashboardData());
    yield put(startFundWalletWithNewCardSuccess(status));
  } catch (error) {
    yield put(startFundWalletWithNewCardFail(error.response));
  }
}

export default function* saga() {
  yield takeLatest(START_FUND_WALLET_WITH_NEW_CARD, operation);
}
