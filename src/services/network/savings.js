import axios from "services/api";
import urls from "constants/urls";

export const getCustomerSavings = (data) => {
  return axios.post(urls.getCustomerSavings, data);
};

export const getSavingsTransactions = (data) => {
  return axios.post(urls.getSavingsTransactions, data);
};

export const getAllSavings = (savingsId) => {
  return axios.post(urls.getAllSavings, null, {
    params: { savingsId },
  });
};

export const getSavingsConfiguration = (data) => {
  return axios.get(urls.getSavingsConfiguration, data);
};

export const getPendingSavingsInvitations = () => {
  return axios.post(urls.getPendingSavingsInvitations);
};
