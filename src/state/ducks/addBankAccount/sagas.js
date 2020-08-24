import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_BANK_ACCOUNT } from "./types";
import {
  addBankAccountStart,
  addBankAccountSuccess,
  addBankAccountFail,
} from "./actions";
import { Customer } from "services/network";
import {getBankAccountsData} from "../bankAccounts/actions";

function* operation({ payload, meta }) {
  yield put(addBankAccountStart());

  try {
    const response = yield call(Customer.addBankAccount, payload);
    let { data } = response.data;
    meta.markAsValid();
    yield put(addBankAccountSuccess(data));
    yield put(getBankAccountsData());
  } catch (error) {
    yield put(addBankAccountFail(error.message));
  }
}

export default function* saga() {
  yield takeLatest(ADD_BANK_ACCOUNT, operation);
}
