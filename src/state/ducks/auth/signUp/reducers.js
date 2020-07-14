import produce from "immer"
import { SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAIL } from "./types";

const initialState = {
  loading: false,
  error: null,
  data: {},
};

export default function rootReducer(baseState = initialState, action) {
  switch (action.type) {
    case SIGN_UP_START: {
      return produce(baseState, draftState => {
        draftState.loading = true;
      });
    }
    case SIGN_UP_SUCCESS: {
      return produce(baseState, draftState => {
        draftState.loading = true;
        draftState.data = action.payload;
      });
    }
    case SIGN_UP_FAIL: {
      return produce(baseState, draftState => {
        draftState.loading = false;
        draftState.data = initialState.data;
        draftState.error = action.payload;
      });
    }
    default:
      return baseState;
  }
}
