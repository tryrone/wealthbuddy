import {
  GET_BANK_LIST_DATA_START,
  GET_BANK_LIST_DATA_SUCCESS,
  GET_BANK_LIST_DATA_FAIL,
  GET_BANK_LIST_DATA,
} from "./types";

export const getBankListDataStart = () => ({
  type: GET_BANK_LIST_DATA_START,
});

export const getBankListDataSuccess = (payload) => ({
  type: GET_BANK_LIST_DATA_SUCCESS,
  payload,
});

export const getBankListDataFail = (payload) => ({
  type: GET_BANK_LIST_DATA_FAIL,
  payload,
});

export const getBankListData = (payload, meta) => ({
  type: GET_BANK_LIST_DATA,
  payload,
  meta,
});

export default {
  getBankListDataStart,
  getBankListDataSuccess,
  getBankListDataFail,
  getBankListData,
};
