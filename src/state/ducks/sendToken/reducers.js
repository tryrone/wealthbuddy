import produce from "immer";
import { SEND_TOKEN_START, SEND_TOKEN_SUCCESS, SEND_TOKEN_FAIL } from "./types";

const initialState = {
  loading: false,
  error: null,
  data: {
    tokenReference: "",
  },
};

export default function rootReducer(baseState = initialState, action) {
  switch (action.type) {
    case SEND_TOKEN_START: {
      return produce(baseState, (draftState) => {
        draftState.loading = true;
        draftState.error = null;
        draftState.data = initialState.data;
      });
    }
    case SEND_TOKEN_SUCCESS: {
      return produce(baseState, (draftState) => {
        draftState.loading = false;
        draftState.error = null;
        draftState.data = action.payload;
      });
    }
    case SEND_TOKEN_FAIL: {
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
