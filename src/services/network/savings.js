import axios from 'services/api';
import urls from "../../constants/urls";

export const getCustomerSavings = (data) => {
  return axios.post(urls.getCustomerSavings, data);
};

export const getSavingsTransactions = (data) => {
  return axios.post(urls.getSavingsTransactions, data);
};

export const getAllSavings = (config) => {
  return axios.post(urls.getAllSavings, null, config);
};

export const getSavingsConfiguration = (data) => {
  return axios.get(urls.getSavingsConfiguration, data);
};
