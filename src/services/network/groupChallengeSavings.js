import axios from '~/services/api';
import urls from '~/constants/url';

export const createGroupChallengeSavings = (params) => {
  return axios.post(urls.createGroupChallengeSavings, params);
};
