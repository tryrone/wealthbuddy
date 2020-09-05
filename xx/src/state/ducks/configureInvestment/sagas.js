import { call, put, takeLatest } from "redux-saga/effects";
import { 
  GET_INVESTMENT_CONFIG,
} from "./types";

import {
  getInvestmentStart, 
  getInvestmentConfigSuccess, 
  getInvestmentConfigFail,
} from "./actions";
import { Investment } from "services/network";

function* operation() {
  yield put(getInvestmentStart());

  try {
    const response = yield call(Investment.getInvestmentConfig());
    let { data } = response.data;
    // console.log(data," <<<<<<<<<======= this is the investment config")
    // meta.markAsValid();
    yield put(getInvestmentConfigSuccess(data));
  } catch (error) {
    yield put(getInvestmentConfigFail(error.message));
  }
}

export default function* saga() {
  yield takeLatest(GET_INVESTMENT_CONFIG, operation);
}
