import {
  GET_SAVINGS_CONFIGURATION_DATA_START,
  GET_SAVINGS_CONFIGURATION_DATA_SUCCESS,
  GET_SAVINGS_CONFIGURATION_DATA_FAIL,
  GET_SAVINGS_CONFIGURATION_DATA,
} from "./types";

export const getSavingsConfigurationDataStart = () => ({
  type: GET_SAVINGS_CONFIGURATION_DATA_START,
});

export const getSavingsConfigurationDataSuccess = (payload) => ({
  type: GET_SAVINGS_CONFIGURATION_DATA_SUCCESS,
  payload,
});

export const getSavingsConfigurationDataFail = (payload) => ({
  type: GET_SAVINGS_CONFIGURATION_DATA_FAIL,
  payload,
});

export const getSavingsConfigurationData = (payload, meta) => ({
  type: GET_SAVINGS_CONFIGURATION_DATA,
  payload,
  meta,
});

export default {
  getSavingsConfigurationDataStart,
  getSavingsConfigurationDataSuccess,
  getSavingsConfigurationDataFail,
  getSavingsConfigurationData,
};
