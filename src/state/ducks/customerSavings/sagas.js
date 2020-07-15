import { call, put, takeLatest } from "redux-saga/effects";
import { GET_CUSTOMER_SAVINGS_DATA } from "./types";
import {
  getCustomerSavingsDataStart,
  getCustomerSavingsDataSuccess,
  getCustomerSavingsDataFail,
} from "./actions";
import { Savings } from "services/network";

function* operation() {
  yield put(getCustomerSavingsDataStart());

  try {
    const response = yield call(Savings.getSavingsTransactions);
    let { data } = response.data;
    yield put(getCustomerSavingsDataSuccess(data));
  } catch (error) {
    yield put(getCustomerSavingsDataFail(error));
  }
}

export default function* saga() {
  yield takeLatest(GET_CUSTOMER_SAVINGS_DATA, operation);
}
