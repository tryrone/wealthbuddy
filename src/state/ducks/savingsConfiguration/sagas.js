import { call, put, takeLatest } from "redux-saga/effects";
import { GET_SAVINGS_CONFIGURATION_DATA } from "./types";
import {
  getSavingsConfigurationDataStart,
  getSavingsConfigurationDataSuccess,
  getSavingsConfigurationDataFail,
} from "./actions";
import { Savings } from "services/network";

function* operation() {
  yield put(getSavingsConfigurationDataStart());

  try {
    const response = yield call(Savings.getSavingsConfiguration);
    let { data } = response.data;
    yield put(getSavingsConfigurationDataSuccess(data));
  } catch (error) {
    yield put(getSavingsConfigurationDataFail(error));
  }
}

export default function* saga() {
  yield takeLatest(GET_SAVINGS_CONFIGURATION_DATA, operation);
}
