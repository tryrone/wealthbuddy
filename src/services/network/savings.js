import axios from 'services/api';
import urls from "../../constants/urls";

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
  return axios.get(urls.getSavingsConfiguration, params);
};
