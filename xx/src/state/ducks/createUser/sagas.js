import { call, put, takeLatest } from "redux-saga/effects";
import { CREATE_USER } from "./types";
import { processError } from "state/ducks/api/actions";
import { createUserStart, createUserSuccess, createUserFail } from "./actions";
import { Customer } from "services/network";

function* operation({ payload, meta }) {
  yield put(createUserStart());

  try {
    const response = yield call(Customer.createUser, payload);
    let { data } = response.data;
    yield put(createUserSuccess(data));
    yield meta.history.push("/auth/sign-up/success");
  } catch (error) {
    yield put(processError({ error, formikProps: meta.formikProps }));
    yield put(createUserFail(error.message));
  }
}

export default function* saga() {
  yield takeLatest(CREATE_USER, operation);
}
