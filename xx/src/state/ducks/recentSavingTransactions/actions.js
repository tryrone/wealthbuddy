import {
  GET_RECENT_SAVING_TRANSACTIONS_DATA_START,
  GET_RECENT_SAVING_TRANSACTIONS_DATA_SUCCESS,
  GET_RECENT_SAVING_TRANSACTIONS_DATA_FAIL,
  GET_RECENT_SAVING_TRANSACTIONS_DATA,
} from "./types";

export const getRecentSavingTransactionsDataStart = () => ({
  type: GET_RECENT_SAVING_TRANSACTIONS_DATA_START,
});

export const getRecentSavingTransactionsDataSuccess = (payload) => ({
  type: GET_RECENT_SAVING_TRANSACTIONS_DATA_SUCCESS,
  payload,
});

export const getRecentSavingTransactionsDataFail = (payload) => ({
  type: GET_RECENT_SAVING_TRANSACTIONS_DATA_FAIL,
  payload,
});

export const getRecentSavingTransactionsData = (payload, meta) => ({
  type: GET_RECENT_SAVING_TRANSACTIONS_DATA,
  payload,
  meta,
});

export default {
  getRecentSavingTransactionsDataStart,
  getRecentSavingTransactionsDataSuccess,
  getRecentSavingTransactionsDataFail,
  getRecentSavingTransactionsData,
};
