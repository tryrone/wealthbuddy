import { call, put, takeLatest } from "redux-saga/effects";
import { GET_ALL_SAVINGS_DATA } from "./types";
import {
  getAllSavingsDataStart,
  getAllSavingsDataSuccess,
  getAllSavingsDataFail,
} from "./actions";
import { Savings } from "services/network";

function* operation({ payload }) {
  yield put(getAllSavingsDataStart());

  try {
    const response = yield call(Savings.getAllSavings, payload);
    let { data } = response.data;
    yield put(getAllSavingsDataSuccess(data));
  } catch (error) {
    yield put(getAllSavingsDataFail(error));
  }
}

export default function* saga() {
  yield takeLatest(GET_ALL_SAVINGS_DATA, operation);
}
