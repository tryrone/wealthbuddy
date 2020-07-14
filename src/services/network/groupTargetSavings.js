import axios from '~/services/api';
import urls from '~/constants/url';

export const createGroupTargetSavings = (params) => {
  return axios.post(urls.createGroupTargetSavings, params);
};
