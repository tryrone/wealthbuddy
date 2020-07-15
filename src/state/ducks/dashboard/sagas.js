import { call, put, takeLatest } from "redux-saga/effects";
import { GET_DASHBOARD_DATA } from "./types";
import {
  getDashboardDataStart,
  getDashboardDataSuccess,
  getDashboardDataFail,
} from "./actions";
import { Customer } from "services/network";

function* operation() {
  yield put(getDashboardDataStart());

  try {
    const response = yield call(Customer.getDashboard);
    let { data } = response.data;
    yield put(getDashboardDataSuccess(data));
  } catch (error) {
    yield put(getDashboardDataFail(error));
  }
}

export default function* saga() {
  yield takeLatest(GET_DASHBOARD_DATA, operation);
}
