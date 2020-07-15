import axios from 'services/api';
import urls from "../../constants/urls";

export const createFixedFlexible = (params) => {
  return axios.post(urls.createFixedFlexible, params);
};

export const startFixedFlexibleWithdraw = (params) => {
  return axios.post(urls.startFixedFlexibleWithdraw, params);
};

export const completeFixedFlexibleWithdraw = (params) => {
  return axios.post(urls.completeFixedFlexibleWithdraw, params);
};

export const startCancelFixedFlexibleSavings = (params) => {
  return axios.post(urls.startCancelFixedFlexibleSavings, params);
};

export const completeCancelFixedFlexibleSavings = (params) => {
  return axios.post(urls.completeCancelFixedFlexibleSavings, params);
};
