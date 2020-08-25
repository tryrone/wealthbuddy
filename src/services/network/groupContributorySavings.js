import axios from "services/api";
import urls from "constants/urls";

export const createGroupContributorySavings = (data) => {
  return axios.post(urls.createGroupContributorySavings, data);
};

export const fetchGroupContributorySavingsById = (savingsId) => {
  return axios.get(urls.getGroupContributorySavingsById.replace(":id", savingsId));
};

export const startGroupContributorySavings = (savingsID) => {
  return axios.post(urls.startGroupContributorySavings, { savingsID });
};

export const cancelGroupContributorySavings = (data) => {
  return axios.post(urls.cancelGroupContributorySavings, data);
};

export const treatGroupContributoryInvitation = (data) => {
  return axios.post(urls.treatGroupContributoryInvitation, data);
};
