import produce from "immer";
import {
  GET_BANK_LIST_DATA_START,
  GET_BANK_LIST_DATA_SUCCESS,
  GET_BANK_LIST_DATA_FAIL,
} from "./types";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export default function rootReducer(baseState = initialState, action) {
  switch (action.type) {
    case GET_BANK_LIST_DATA_START: {
      return produce(baseState, (draftState) => {
        draftState.loading = true;
        draftState.error = null;
      });
    }
    case GET_BANK_LIST_DATA_SUCCESS: {
      return produce(baseState, (draftState) => {
        draftState.loading = false;
        draftState.error = null;
        draftState.data = action.payload;
      });
    }
    case GET_BANK_LIST_DATA_FAIL: {
      return produce(baseState, (draftState) => {
        draftState.loading = false;
        draftState.data = initialState.data;
        draftState.error = action.payload;
      });
    }
    default:
      return baseState;
  }
}
