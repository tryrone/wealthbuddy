import {
  GET_BANK_ACCOUNTS_DATA_START,
  GET_BANK_ACCOUNTS_DATA_SUCCESS,
  GET_BANK_ACCOUNTS_DATA_FAIL,
  GET_BANK_ACCOUNTS_DATA,
} from "./types";

export const getBankAccountsDataStart = () => ({
  type: GET_BANK_ACCOUNTS_DATA_START,
});

export const getBankAccountsDataSuccess = (payload) => ({
  type: GET_BANK_ACCOUNTS_DATA_SUCCESS,
  payload,
});

export const getBankAccountsDataFail = (payload) => ({
  type: GET_BANK_ACCOUNTS_DATA_FAIL,
  payload,
});

export const getBankAccountsData = (payload, meta) => ({
  type: GET_BANK_ACCOUNTS_DATA,
  payload,
  meta,
});

export default {
  getBankAccountsDataStart,
  getBankAccountsDataSuccess,
  getBankAccountsDataFail,
  getBankAccountsData,
};
