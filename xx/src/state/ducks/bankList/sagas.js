import { call, put, takeLatest } from "redux-saga/effects";
import { GET_BANK_LIST_DATA } from "./types";
import {
  getBankListDataStart,
  getBankListDataSuccess,
  getBankListDataFail,
} from "./actions";
import { Customer } from "services/network";

function* operation() {
  yield put(getBankListDataStart());

  try {
    const response = yield call(Customer.getBankList);
    let { data } = response.data;
    yield put(getBankListDataSuccess(data));
  } catch (error) {
    yield put(getBankListDataFail(error));
  }
}

export default function* saga() {
  yield takeLatest(GET_BANK_LIST_DATA, operation);
}
