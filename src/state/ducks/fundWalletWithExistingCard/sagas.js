import { call, put, takeLatest } from "redux-saga/effects";
import { FUND_WALLET_WITH_EXISTING_CARD } from "./types";
import {
  fundWalletWithExistingCardStart,
  fundWalletWithExistingCardSuccess,
  fundWalletWithExistingCardFail,
} from "./actions";
import { Customer } from "services/network";
import {getDashboardData} from "../dashboard/actions";

function* operation({ payload, meta }) {
  yield put(fundWalletWithExistingCardStart());

  try {
    const response = yield call(Customer.fundWalletWithExistingCard, payload);
    let { status } = response.data;
    yield meta.closeFundWalletModal();
    yield meta.showSuccessModal();
    yield put(getDashboardData());
    yield put(fundWalletWithExistingCardSuccess(status));
  } catch (error) {
    yield put(fundWalletWithExistingCardFail(error.message));
  }
}

export default function* saga() {
  yield takeLatest(FUND_WALLET_WITH_EXISTING_CARD, operation);
}
