import axios from "services/api";
import urls from "constants/urls";

export const createGroupChallengeSavings = (data) => {
  return axios.post(urls.createGroupChallengeSavings, data);
};

export const fetchGroupChallengeSavingsById = (savingsId) => {
  return axios.get(urls.getGroupChallengeSavingsById.replace(":id", savingsId));
};
