import axios from "services/api";
import urls from "../../constants/urls";

export const createFixedFlexible = (data) => {
  return axios.post(urls.createFixedFlexible, data);
};

export const startFixedFlexibleWithdraw = (data) => {
  return axios.post(urls.startFixedFlexibleWithdraw, data);
};

export const completeFixedFlexibleWithdraw = (data) => {
  return axios.post(urls.completeFixedFlexibleWithdraw, data);
};

export const startCancelFixedFlexibleSavings = (savingsID) => {
  return axios.post(urls.startCancelFixedFlexibleSavings, { savingsID });
};

export const completeCancelFixedFlexibleSavings = (savingsID) => {
  return axios.post(urls.completeCancelFixedFlexibleSavings, { savingsID });
};
