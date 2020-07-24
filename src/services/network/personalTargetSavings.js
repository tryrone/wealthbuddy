import axios from 'services/api';
import urls from "../../constants/urls";

export const createPersonalTargetSaving = (data) => {
  return axios.post(urls.createPersonalSaving, data);
};

export const startPersonalTargetWithdrawal = (data) => {
  return axios.post(urls.startPersonalWithdrawal, data);
};

export const completePersonalTargetWithdrawal = (data) => {
  return axios.post(urls.completePersonalWithdrawal, data);
};

export const startCancelPersonalTargetSavings = (data) => {
  return axios.post(urls.startCancelPersonalSavings, data);
};

export const completeCancelPersonalTargetSavings = (data) => {
  return axios.post(urls.completeCancelPersonalSavings, data);
};
