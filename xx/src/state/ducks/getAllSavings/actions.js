import {
  GET_ALL_SAVINGS_DATA_START,
  GET_ALL_SAVINGS_DATA_SUCCESS,
  GET_ALL_SAVINGS_DATA_FAIL,
  GET_ALL_SAVINGS_DATA,
} from "./types";

export const getAllSavingsDataStart = () => ({
  type: GET_ALL_SAVINGS_DATA_START,
});

export const getAllSavingsDataSuccess = (payload) => ({
  type: GET_ALL_SAVINGS_DATA_SUCCESS,
  payload,
});

export const getAllSavingsDataFail = (payload) => ({
  type: GET_ALL_SAVINGS_DATA_FAIL,
  payload,
});

export const getAllSavingsData = (payload, meta) => ({
  type: GET_ALL_SAVINGS_DATA,
  payload,
  meta,
});

export default {
  getAllSavingsDataStart,
  getAllSavingsDataSuccess,
  getAllSavingsDataFail,
  getAllSavingsData,
};
