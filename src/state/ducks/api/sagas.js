import { takeEvery } from "redux-saga/effects";
import { PROCESS_API_ERROR } from "./types";
import _ from "lodash";

const getFormattedErrors = (errors) => {
  return _.mapValues(errors, (item) => item[0] || "");
};

function* processError({ payload }) {
  const { error, formikProps } = payload;

  if (error.toString().includes("Network Error")) {
    yield console.log("Network Error");
    return false;
  } else if (error.toString().includes("401")) {
    return "Token Expired";
  } else if (formikProps && error.toString().includes("412")) {
    const { errors } = error.response.data;
    formikProps.setErrors(getFormattedErrors(errors));
  } else {
    console.log(error);
  }
}

export default function* api() {
  yield takeEvery(PROCESS_API_ERROR, processError);
}
