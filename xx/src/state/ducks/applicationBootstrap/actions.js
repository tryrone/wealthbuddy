import {
  GET_APPLICATION_BOOTSTRAP_DATA_SUCCESS,
  GET_APPLICATION_BOOTSTRAP_DATA_FAIL,
  GET_APPLICATION_BOOTSTRAP_DATA,
} from "./types";

export const getApplicationBootstrapDataSuccess = (payload) => ({
  type: GET_APPLICATION_BOOTSTRAP_DATA_SUCCESS,
  payload,
});

export const getApplicationBootstrapDataFail = (payload) => ({
  type: GET_APPLICATION_BOOTSTRAP_DATA_FAIL,
  payload,
});

export const getApplicationBootstrapData = (payload, meta) => ({
  type: GET_APPLICATION_BOOTSTRAP_DATA,
  payload,
  meta,
});

export default {
  getApplicationBootstrapDataSuccess,
  getApplicationBootstrapDataFail,
  getApplicationBootstrapData,
};
