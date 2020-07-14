import axios from '~/services/api';
import urls from '~/constants/url';

export const getCustomerSavings = (params) => {
  return axios.post(urls.getCustomerSavings, params);
};

export const getSavingsTransactions = (params) => {
  return axios.post(urls.getSavingsTransactions, params);
};

export const getAllSavings = (params) => {
  return axios.post(urls.getAllSavings, params);
};

export const getSavingsConfiguration = (params) => {
  return axios.post(urls.getSavingsConfiguration, params);
};
