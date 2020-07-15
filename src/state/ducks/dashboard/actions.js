import {
  GET_DASHBOARD_DATA_START,
  GET_DASHBOARD_DATA_SUCCESS,
  GET_DASHBOARD_DATA_FAIL,
  GET_DASHBOARD_DATA,
} from "./types";

export const getDashboardDataStart = () => ({
  type: GET_DASHBOARD_DATA_START,
});

export const getDashboardDataSuccess = (payload) => ({
  type: GET_DASHBOARD_DATA_SUCCESS,
  payload,
});

export const getDashboardDataFail = (payload) => ({
  type: GET_DASHBOARD_DATA_FAIL,
  payload,
});

export const getDashboardData = (payload, meta) => ({
  type: GET_DASHBOARD_DATA,
  payload,
  meta,
});

export default {
  getDashboardDataStart,
  getDashboardDataSuccess,
  getDashboardDataFail,
  getDashboardData,
};
