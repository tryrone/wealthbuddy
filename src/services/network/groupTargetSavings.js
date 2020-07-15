import axios from 'services/api';
import urls from "../../constants/urls";

export const createGroupTargetSavings = (params) => {
  return axios.post(urls.createGroupTargetSavings, params);
};
