import produce from "immer";
import {
  VERIFY_FUND_WALLET_WITH_NEW_CARD_START,
  VERIFY_FUND_WALLET_WITH_NEW_CARD_SUCCESS,
  VERIFY_FUND_WALLET_WITH_NEW_CARD_FAIL,
} from "./types";

const initialState = {
  loading: false,
  error: null,
  status: null
};

export default function rootReducer(baseState = initialState, action) {
  switch (action.type) {
    case VERIFY_FUND_WALLET_WITH_NEW_CARD_START: {
      return produce(baseState, (draftState) => {
        draftState.loading = true;
        draftState.error = null;
      });
    }
    case VERIFY_FUND_WALLET_WITH_NEW_CARD_SUCCESS: {
      return produce(baseState, (draftState) => {
        draftState.loading = false;
        draftState.error = null;
        draftState.status = action.payload;
      });
    }
    case VERIFY_FUND_WALLET_WITH_NEW_CARD_FAIL: {
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
