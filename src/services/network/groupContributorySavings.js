import axios from "services/api";
import urls from "constants/urls";

export const createGroupContributorySavings = (data) => {
  return axios.post(urls.createGroupContributorySavings, data);
};

export const fetchGroupContributorySavingsById = (savingsId) => {
  return axios.get(urls.getGroupContributorySavingsById.replace(":id", savingsId));
};

export const startGroupContributorySavings = (data) => {
  return axios.post(urls.startGroupContributorySavings, data);
};
