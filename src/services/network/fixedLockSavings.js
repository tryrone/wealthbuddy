import axios from 'services/api';
import urls from "../../constants/urls";

export const createFixedLocked = (params) => {
  return axios.post(urls.createFixedLocked, params);
};

export const startFixedLockWithdraw = (params) => {
  return axios.post(urls.startFixedLockWithdraw, params);
};

export const completeFixedLockWithdraw = (params) => {
  return axios.post(urls.completeFixedLockWithdraw, params);
};

export const startCancelFixedLockSavings = (params) => {
  return axios.post(urls.startCancelFixedLockSavings, params);
};

export const completeCancelFixedLockSavings = (params) => {
  return axios.post(urls.completeCancelFixedLockSavings, params);
};
