import produce from "immer";
import {
  GET_INVESTMENT_CONFIG_START,
  GET_INVESTMENT_CONFIG_FAIL,
  GET_INVESTMENT_CONFIG_SUCCESS,
} from "./types";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export default function rootReducer(baseState = initialState, action) {
  switch (action.type) {
    case GET_INVESTMENT_CONFIG_START: {
      return produce(baseState, (draftState) => {
        draftState.loading = true;
        draftState.error = null;
        draftState.data = initialState.data;
      });
    }
    case GET_INVESTMENT_CONFIG_SUCCESS: {
      return produce(baseState, (draftState) => {
        draftState.loading = false;
        draftState.error = null;
        draftState.data = action.payload;
      });
    }
    case GET_INVESTMENT_CONFIG_FAIL: {
      return produce(baseState, (draftState) => {
        draftState.loading = false;
        draftState.error = action.payload;
        draftState.data = initialState.data;
      });
    }
    default:
      return baseState;
  }
}
