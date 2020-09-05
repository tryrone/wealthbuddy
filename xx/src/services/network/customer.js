import axios from 'services/api';
import urls from "../../constants/urls";

export const login = (data) => {
  return axios.post(urls.login, data);
};

export const createUser = (data) => {
  return axios.post(urls.createUser, data);
};

export const startVerifyEmail = (data) => {
  return axios.post(urls.startVerifyEmail, data);
};

export const completeVerifyEmail = (data) => {
  return axios.post(urls.completeVerifyEmail, data);
};

export const resendVerifyEmail = (data) => {
  return axios.post(urls.resendVerifyEmail, data);
};

export const addBvn = (data) => {
  return axios.post(urls.addBvn, data);
};

export const startFundWalletWithNewCard = (data) => {
  return axios.post(urls.startFundNewCard, data);
};

export const verifyFundWalletWithNewCard = (data) => {
  return axios.post(urls.verifyFundNewCard, data);
};

export const getCustomerCards = (data) => {
  return axios.post(urls.getCustomerCards, data);
};

export const getDashboard = (data) => {
  return axios.get(urls.getDashboard, data);
};

export const uploadProfilePicture = (data) => {
  return axios.post(urls.uploadProfilePicture, data);
};

export const uploadUtilityBill = (data) => {
  return axios.post(urls.uploadUtilityBill, data);
};

export const uploadIdentification = (data) => {
  return axios.post(urls.uploadIdentification, data);
};

export const fundWalletWithExistingCard = (data) => {
  return axios.post(urls.fundWalletWithExistingCard, data);
};

export const resetPassword = (data) => {
  return axios.post(urls.resetPassword, data);
};

export const changePassword = (data) => {
  return axios.post(urls.changePassword, data);
};

export const updateProfile = (data) => {
  return axios.post(urls.updateProfile, data);
};

export const getBankList = (data) => {
  return axios.get(urls.getBankList, data);
};

export const getUserBanks = (data) => {
  return axios.post(urls.getUserBanks, data);
};

export const addBankAccount = (data) => {
  return axios.post(urls.addBankAccount, data);
};

export const sendToken = (data) => {
  return axios.post(urls.sendToken, data);
};

export const verifyAddBankAccount = (data) => {
  return axios.post(urls.verifyAddBankAccount, data);
};
