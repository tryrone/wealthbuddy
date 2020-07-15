import { call, put, takeLatest } from "redux-saga/effects";
import { FUND_WALLET_WITH_EXISTING_CARD } from "./types";
// import { processError } from "state/ducks/api/actions";
import {
  fundWalletWithExistingCardStart,
  fundWalletWithExistingCardSuccess,
  fundWalletWithExistingCardFail,
} from "./actions";
import { Customer } from "services/network";

function* operation({ payload, meta }) {
  yield put(fundWalletWithExistingCardStart());

  try {
    const response = yield call(Customer.fundWalletWithExistingCard, payload);
    let { status } = response.data;
    yield put(fundWalletWithExistingCardSuccess(status));
    // yield meta.history.push("/dashboard");
  } catch (error) {
    // yield put(processError({ error, formikProps: meta.formikProps }));
    yield put(fundWalletWithExistingCardFail(error));
  }
}

export default function* saga() {
  yield takeLatest(FUND_WALLET_WITH_EXISTING_CARD, operation);
}
