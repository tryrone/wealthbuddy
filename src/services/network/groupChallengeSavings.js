import axios from "services/api";
import urls from "constants/urls";

export const createGroupChallengeSavings = (data) => {
  return axios.post(urls.createGroupChallengeSavings, data);
};

export const fetchGroupChallengeSavingsById = (savingsId) => {
  return axios.get(urls.getGroupChallengeSavingsById.replace(":id", savingsId));
};

export const startGroupChallengeSavings = (data) => {
  return axios.post(urls.startGroupChallengeSavings, data);
};

export const startGroupChallengeWithdraw = (data) => {
  return axios.post(urls.startGroupChallengeWithdraw, data);
};

export const completeGroupChallengeWithdraw = (data) => {
  return axios.post(urls.completeGroupChallengeWithdraw, data);
};

export const treatGroupChallengeInvitation = (data) => {
  return axios.post(urls.treatGroupChallengeInvitation, data);
};
