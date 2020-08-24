import { call, put, takeLatest } from "redux-saga/effects";
import { VERIFY_ADD_BANK_ACCOUNT } from "./types";
import {
  verifyAddBankAccountStart,
  verifyAddBankAccountSuccess,
  verifyAddBankAccountFail,
} from "./actions";
import { Customer } from "services/network";

function* operation({ payload, meta }) {
  yield put(verifyAddBankAccountStart());

  try {
    const response = yield call(Customer.verifyAddBankAccount, payload);
    let { data } = response.data;
    meta.showAddBankSuccess();
    yield put(verifyAddBankAccountSuccess(data));
  } catch (error) {
    yield put(verifyAddBankAccountFail(error.message));
  }
}

export default function* saga() {
  yield takeLatest(VERIFY_ADD_BANK_ACCOUNT, operation);
}
