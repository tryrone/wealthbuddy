import axios from '~/services/api';
import urls from '~/constants/url';

export const createPersonalTargetSaving = (params) => {
  return axios.post(urls.createPersonalSaving, params);
};

export const startPersonalTargetWithdrawal = (params) => {
  return axios.post(urls.startPersonalWithdrawal, params);
};

export const completePersonalTargetWithdrawal = (params) => {
  return axios.post(urls.completePersonalWithdrawal, params);
};

export const startCancelPersonalTargetSavings = (params) => {
  return axios.post(urls.startCancelPersonalSavings, params);
};

export const completeCancelPersonalTargetSavings = (params) => {
  return axios.post(urls.completeCancelPersonalSavings, params);
};
