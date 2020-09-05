import { call, put, takeLatest } from "redux-saga/effects";
import { GET_RECENT_SAVING_TRANSACTIONS_DATA } from "./types";
import {
  getRecentSavingTransactionsDataStart,
  getRecentSavingTransactionsDataSuccess,
  getRecentSavingTransactionsDataFail,
} from "./actions";
import { Savings } from "services/network";

function* operation() {
  yield put(getRecentSavingTransactionsDataStart());

  try {
    const response = yield call(Savings.getSavingsTransactions);
    let { data } = response.data;
    yield put(getRecentSavingTransactionsDataSuccess(data));
  } catch (error) {
    yield put(getRecentSavingTransactionsDataFail(error));
  }
}

export default function* saga() {
  yield takeLatest(GET_RECENT_SAVING_TRANSACTIONS_DATA, operation);
}
