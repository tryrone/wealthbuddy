import axios from 'services/api';
import urls from "constants/urls";

export const createGroupTargetSavings = (data) => {
  return axios.post(urls.createGroupTargetSavings, data);
};
