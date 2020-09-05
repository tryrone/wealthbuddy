import produce from "immer";
import {
  FUND_WALLET_WITH_EXISTING_CARD_START,
  FUND_WALLET_WITH_EXISTING_CARD_SUCCESS,
  FUND_WALLET_WITH_EXISTING_CARD_FAIL,
} from "./types";

const initialState = {
  loading: false,
  error: null,
  status: null
};

export default function rootReducer(baseState = initialState, action) {
  switch (action.type) {
    case FUND_WALLET_WITH_EXISTING_CARD_START: {
      return produce(baseState, (draftState) => {
        draftState.loading = true;
        draftState.error = null;
      });
    }
    case FUND_WALLET_WITH_EXISTING_CARD_SUCCESS: {
      return produce(baseState, (draftState) => {
        draftState.loading = false;
        draftState.error = null;
        draftState.status = action.payload;
      });
    }
    case FUND_WALLET_WITH_EXISTING_CARD_FAIL: {
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
