import axios from 'services/api';
import urls from "../../constants/urls";

export const createFixedLocked = (data) => {
  return axios.post(urls.createFixedLocked, data);
};

export const startFixedLockWithdraw = (data) => {
  return axios.post(urls.startFixedLockWithdraw, data);
};

export const completeFixedLockWithdraw = (data) => {
  return axios.post(urls.completeFixedLockWithdraw, data);
};

export const startCancelFixedLockSavings = (data) => {
  return axios.post(urls.startCancelFixedLockSavings, data);
};

export const completeCancelFixedLockSavings = (data) => {
  return axios.post(urls.completeCancelFixedLockSavings, data);
};
