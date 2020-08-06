import axios from "services/api";
import urls from "../../constants/urls";

export const getInvestmentConfigs = () => {
  return axios.get(urls.investmentConfiguration);
};
export const getInvestmentSummary = () => {
  return axios.get(urls.investmentSummary);
};
export const getInvestmentTransactions = () => {
  return axios.get(urls.investmentTransactions);
};
export const getInvestmentFundsActive = () => {
  return axios.get(urls.investmentFundsActive);
};
export const createInvestment = (data) => {
  return axios.post(urls.createInvestment, data);
};
// export const createInvestment = (data) => {
//   return axios.post(urls.createInvestment, data);
// };
