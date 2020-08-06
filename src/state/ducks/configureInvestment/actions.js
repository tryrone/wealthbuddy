import {
  GET_INVESTMENT_CONFIG,
  GET_INVESTMENT_CONFIG_START,
  GET_INVESTMENT_CONFIG_FAIL,
  GET_INVESTMENT_CONFIG_SUCCESS
} from "./types";

export const getInvestmentStart = () => ({
  type: GET_INVESTMENT_CONFIG_START,
});

export const getInvestmentConfigSuccess = (payload) => ({
  type: GET_INVESTMENT_CONFIG_SUCCESS,
  payload,
});

export const getInvestmentConfigFail = (payload) => ({
  type: GET_INVESTMENT_CONFIG_FAIL,
  payload,
});

export const getInvetmentConfig = (payload, meta) => ({
  type: GET_INVESTMENT_CONFIG,
  payload,
  meta,
});

export default {
  getInvestmentStart,
  getInvestmentConfigSuccess,
  getInvestmentConfigFail,
  getInvetmentConfig

};
