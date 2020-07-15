import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_BANK_ACCOUNT } from "./types";
// import { processError } from "state/ducks/api/actions";
import {
  addBankAccountStart,
  addBankAccountSuccess,
  addBankAccountFail,
} from "./actions";
import { Customer } from "services/network";

function* operation({ payload, meta }) {
  yield put(addBankAccountStart());

  try {
    const response = yield call(Customer.addBankAccount, payload);
    let { status } = response.data;
    yield put(addBankAccountSuccess(status));
    // yield meta.history.push("/dashboard");
  } catch (error) {
    // yield put(processError({ error, formikProps: meta.formikProps }));
    yield put(addBankAccountFail(error));
  }
}

export default function* saga() {
  yield takeLatest(ADD_BANK_ACCOUNT, operation);
}
