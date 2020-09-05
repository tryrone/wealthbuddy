import {
  GET_CUSTOMER_SAVINGS_DATA_START,
  GET_CUSTOMER_SAVINGS_DATA_SUCCESS,
  GET_CUSTOMER_SAVINGS_DATA_FAIL,
  GET_CUSTOMER_SAVINGS_DATA,
} from "./types";

export const getCustomerSavingsDataStart = () => ({
  type: GET_CUSTOMER_SAVINGS_DATA_START,
});

export const getCustomerSavingsDataSuccess = (payload) => ({
  type: GET_CUSTOMER_SAVINGS_DATA_SUCCESS,
  payload,
});

export const getCustomerSavingsDataFail = (payload) => ({
  type: GET_CUSTOMER_SAVINGS_DATA_FAIL,
  payload,
});

export const getCustomerSavingsData = (payload, meta) => ({
  type: GET_CUSTOMER_SAVINGS_DATA,
  payload,
  meta,
});

export default {
  getCustomerSavingsDataStart,
  getCustomerSavingsDataSuccess,
  getCustomerSavingsDataFail,
  getCustomerSavingsData,
};
