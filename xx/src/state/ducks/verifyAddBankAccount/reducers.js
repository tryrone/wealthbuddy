import produce from "immer";
import {
  VERIFY_ADD_BANK_ACCOUNT_START,
  VERIFY_ADD_BANK_ACCOUNT_SUCCESS,
  VERIFY_ADD_BANK_ACCOUNT_FAIL,
} from "./types";

const initialState = {
  loading: false,
  error: null,
  data: {
    accountNumber: "",
    accountName: "",
    id: "",
    bankId: "",
  },
};

export default function rootReducer(baseState = initialState, action) {
  switch (action.type) {
    case VERIFY_ADD_BANK_ACCOUNT_START: {
      return produce(baseState, (draftState) => {
        draftState.loading = true;
        draftState.error = null;
        draftState.data = initialState.data;
      });
    }
    case VERIFY_ADD_BANK_ACCOUNT_SUCCESS: {
      return produce(baseState, (draftState) => {
        draftState.loading = false;
        draftState.error = null;
        draftState.data = action.payload;
      });
    }
    case VERIFY_ADD_BANK_ACCOUNT_FAIL: {
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
