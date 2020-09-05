import { call, put, takeLatest } from "redux-saga/effects";
import { GET_BANK_ACCOUNTS_DATA } from "./types";
import {
  getBankAccountsDataStart,
  getBankAccountsDataSuccess,
  getBankAccountsDataFail,
} from "./actions";
import { Customer } from "services/network";

function* operation() {
  yield put(getBankAccountsDataStart());

  try {
    const response = yield call(Customer.getUserBanks);
    let { data } = response.data;
    yield put(getBankAccountsDataSuccess(data));
  } catch (error) {
    yield put(getBankAccountsDataFail(error));
  }
}

export default function* saga() {
  yield takeLatest(GET_BANK_ACCOUNTS_DATA, operation);
}
