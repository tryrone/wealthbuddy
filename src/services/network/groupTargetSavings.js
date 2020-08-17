import axios from 'services/api';
import urls from "constants/urls";

export const createGroupTargetSavings = (data) => {
  return axios.post(urls.createGroupTargetSavings, data);
};

export const fetchGroupTargetSavingsById = (savingsId) => {
  return axios.get(urls.getGroupTargetSavingsById.replace(":id", savingsId));
};

export const startGroupTargetSavings = (data) => {
  return axios.post(urls.startGroupTargetSavings, data);
};

export const startGroupTargetWithdraw = (data) => {
  return axios.post(urls.startGroupTargetWithdraw, data);
};

export const completeGroupTargetWithdraw = (data) => {
  return axios.post(urls.completeGroupTargetWithdraw, data);
};

export const treatGroupTargetInvitation = (data) => {
  return axios.post(urls.treatGroupTargetInvitation, data);
};
