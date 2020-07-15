import produce from "immer";
import {
  ADD_BANK_ACCOUNT_START,
  ADD_BANK_ACCOUNT_SUCCESS,
  ADD_BANK_ACCOUNT_FAIL,
} from "./types";

const initialState = {
  loading: false,
  error: null,
  status: null
};

export default function rootReducer(baseState = initialState, action) {
  switch (action.type) {
    case ADD_BANK_ACCOUNT_START: {
      return produce(baseState, (draftState) => {
        draftState.loading = true;
        draftState.error = null;
      });
    }
    case ADD_BANK_ACCOUNT_SUCCESS: {
      return produce(baseState, (draftState) => {
        draftState.loading = false;
        draftState.error = null;
        draftState.status = action.payload;
      });
    }
    case ADD_BANK_ACCOUNT_FAIL: {
      return produce(baseState, (draftState) => {
        draftState.loading = false;
        draftState.status = initialState.status;
        draftState.error = action.payload;
      });
    }
    default:
      return baseState;
  }
}
