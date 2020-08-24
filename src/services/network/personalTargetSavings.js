import axios from "services/api";
import urls from "../../constants/urls";

export const createPersonalTargetSavings = (data) => {
  return axios.post(urls.createPersonalSaving, data);
};

export const startPersonalTargetWithdrawal = (data) => {
  return axios.post(urls.startPersonalWithdrawal, data);
};

export const completePersonalTargetWithdrawal = (data) => {
  return axios.post(urls.completePersonalWithdrawal, data);
};

export const startCancelPersonalTargetSavings = (savingsID) => {
  return axios.post(urls.startCancelPersonalSavings, { savingsID });
};

export const completeCancelPersonalTargetSavings = (savingsID) => {
  return axios.post(urls.completeCancelPersonalSavings, { savingsID });
};
