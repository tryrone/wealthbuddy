import {
  GET_CARDS_DATA_START,
  GET_CARDS_DATA_SUCCESS,
  GET_CARDS_DATA_FAIL,
  GET_CARDS_DATA,
} from "./types";

export const getCardsDataStart = () => ({
  type: GET_CARDS_DATA_START,
});

export const getCardsDataSuccess = (payload) => ({
  type: GET_CARDS_DATA_SUCCESS,
  payload,
});

export const getCardsDataFail = (payload) => ({
  type: GET_CARDS_DATA_FAIL,
  payload,
});

export const getCardsData = (payload, meta) => ({
  type: GET_CARDS_DATA,
  payload,
  meta,
});

export default {
  getCardsDataStart,
  getCardsDataSuccess,
  getCardsDataFail,
  getCardsData,
};
