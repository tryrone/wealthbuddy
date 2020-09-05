import {
  ADD_BANK_ACCOUNT_START,
  ADD_BANK_ACCOUNT_SUCCESS,
  ADD_BANK_ACCOUNT_FAIL,
  ADD_BANK_ACCOUNT,
} from "./types";

export const addBankAccountStart = () => ({
  type: ADD_BANK_ACCOUNT_START,
});

export const addBankAccountSuccess = (payload) => ({
  type: ADD_BANK_ACCOUNT_SUCCESS,
  payload,
});

export const addBankAccountFail = (payload) => ({
  type: ADD_BANK_ACCOUNT_FAIL,
  payload,
});

export const addBankAccount = (payload, meta) => ({
  type: ADD_BANK_ACCOUNT,
  payload,
  meta,
});

export default {
  addBankAccountStart,
  addBankAccountSuccess,
  addBankAccountFail,
  addBankAccount,
};
