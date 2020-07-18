import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_BVN } from "./types";
// import { processError } from "state/ducks/api/actions";
import {
  addBvnStart,
  addBvnSuccess,
  addBvnFail,
} from "./actions";
import { Customer } from "services/network";

function* operation({ payload, meta }) {
  yield put(addBvnStart());

  try {
    const response = yield call(Customer.addBvn, payload);
    let { status } = response.data;
    yield put(addBvnSuccess(status));
    // yield meta.history.push("/dashboard");
  } catch (error) {
    // yield put(processError({ error, formikProps: meta.formikProps }));
    yield put(addBvnFail(error));
  }
}

export default function* saga() {
  yield takeLatest(ADD_BVN, operation);
}
