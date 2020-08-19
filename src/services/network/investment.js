import axios from "services/api";
import urls from "../../constants/urls";

export const getInvestmentConfigs = () => {
  return axios.get(urls.investmentConfiguration);
};
export const getAllInvestments = () => {
  return axios.get(urls.getAllInvestments);
};
export const fundMutualFund = (data) => {
  return axios.post(urls.fundMutualFund, data);
};
export const fundTbills = (data) => {
  return axios.post(urls.fundInvestmentTbills, data);
};
export const fundFixed = (data) => {
  return axios.post(urls.fundInvestmentFixed, data);
};
export const createFundInvestment = (data) => {
  return axios.post(urls.createFundInvestment, data);
};
export const createTbillsInvestment = (data) => {
  return axios.post(urls.createTbillsInvestment, data);
};
export const createTerminstrumentsInvestment = (data) => {
  return axios.post(urls.createTerminstrumentsInvestment, data);
};
export const getAllInvetstmentTransactions = () => {
  return axios.get(urls.getAllInvetstmentTransactions);
};
export const getAllPersonalInvestments = () => {
  return axios.get(urls.getPersonalInvestments);
};
export const getInvestmentTransactionsForFunds = () => {
  return axios.get(urls.investmentTransactionsForFunds);
};
export const fundInvestment = (data) => {
  return axios.post(urls.fundInvestment, data);
};
export const withdrawFunds = (data) => {
  return axios.post(urls.fundsWithdraw, data);
};
export const getInvestmentValuation = () => {
  return axios.get(urls.investmentValuation);
};
export const getAllFundsTransactions = () => {
  return axios.get(urls.fundsTransactionsList);
};
export const getAllTbillsTransactions = () => {
  return axios.get(urls.tBillsTransactionsList);
};
export const getAllFixedTransactions = () => {
  return axios.get(urls.fixedTransactionsList);
};
