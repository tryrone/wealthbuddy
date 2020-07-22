import {
  VERIFY_ADD_BANK_ACCOUNT_START,
  VERIFY_ADD_BANK_ACCOUNT_SUCCESS,
  VERIFY_ADD_BANK_ACCOUNT_FAIL,
  VERIFY_ADD_BANK_ACCOUNT,
} from "./types";

export const verifyAddBankAccountStart = () => ({
  type: VERIFY_ADD_BANK_ACCOUNT_START,
});

export const verifyAddBankAccountSuccess = (payload) => ({
  type: VERIFY_ADD_BANK_ACCOUNT_SUCCESS,
  payload,
});

export const verifyAddBankAccountFail = (payload) => ({
  type: VERIFY_ADD_BANK_ACCOUNT_FAIL,
  payload,
});

export const verifyAddBankAccount = (payload, meta) => ({
  type: VERIFY_ADD_BANK_ACCOUNT,
  payload,
  meta,
});

export default {
  verifyAddBankAccountStart,
  verifyAddBankAccountSuccess,
  verifyAddBankAccountFail,
  verifyAddBankAccount,
};
