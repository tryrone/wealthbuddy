import { call, put, takeLatest } from "redux-saga/effects";
import { GET_CARDS_DATA } from "./types";
import {
  getCardsDataStart,
  getCardsDataSuccess,
  getCardsDataFail,
} from "./actions";
import { Customer } from "services/network";

function* operation() {
  yield put(getCardsDataStart());

  try {
    const response = yield call(Customer.getCustomerCards);
    let { data } = response.data;
    yield put(getCardsDataSuccess(data));
  } catch (error) {
    yield put(getCardsDataFail(error));
  }
}

export default function* saga() {
  yield takeLatest(GET_CARDS_DATA, operation);
}
