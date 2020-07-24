import axios from 'services/api';
import urls from "../../constants/urls";

export const createGroupChallengeSavings = (data) => {
  return axios.post(urls.createGroupChallengeSavings, data);
};
