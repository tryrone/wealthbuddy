import axios from 'services/api';
import urls from "../../constants/urls";

export const login = (params) => {
  return axios.post(urls.login, params);
};

export const createUser = (params) => {
  return axios.post(urls.createUser, params);
};

export const startVerifyEmail = (params) => {
  return axios.post(urls.startVerifyEmail, params);
};

export const completeVerifyEmail = (params) => {
  return axios.post(urls.completeVerifyEmail, params);
};

export const addBvn = (params) => {
  return axios.post(urls.addBvn, params);
};

export const startFundWalletWithNewCard = (params) => {
  return axios.post(urls.startFundNewCard, params);
};

export const verifyFundWalletWithNewCard = (params) => {
  return axios.post(urls.verifyFundNewCard, params);
};

export const getCustomerCards = (params) => {
  return axios.post(urls.getCustomerCards, params);
};

export const getDashboard = (params) => {
  return axios.get(urls.getDashboard, params);
};

export const uploadProfilePicture = (params) => {
  return axios.post(urls.uploadProfilePicture, params);
};

export const uploadUtilityBill = (params) => {
  return axios.post(urls.uploadUtilityBill, params);
};

export const uploadIdentification = (params) => {
  return axios.post(urls.uploadIdentification, params);
};

export const fundWalletWithExistingCard = (params) => {
  return axios.post(urls.fundWalletWithExistingCard, params);
};

export const resetPassword = (params) => {
  return axios.post(urls.resetPassword, params);
};

export const changePassword = (params) => {
  return axios.post(urls.changePassword, params);
};

export const saveProfile = (params) => {
  return axios.post(urls.saveProfile, params);
};

export const getBankList = (params) => {
  return axios.get(urls.getBankList, params);
};

export const getUserBanks = (params) => {
  return axios.post(urls.getUserBanks, params);
};

export const addBankAccount = (params) => {
  return axios.post(urls.addBankAccount, params);
};

export const sendToken = (params) => {
  return axios.post(urls.sendToken, params);
};

export const verifyAddBankAccount = (params) => {
  return axios.post(urls.verifyAddBankAccount, params);
};
