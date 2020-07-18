import produce from "immer";
import {
  COMPLETE_VERIFY_EMAIL_COMPLETE,
  COMPLETE_VERIFY_EMAIL_SUCCESS,
  COMPLETE_VERIFY_EMAIL_FAIL,
} from "./types";

const initialState = {
  loading: false,
  error: null,
  status: null
};

export default function rootReducer(baseState = initialState, action) {
  switch (action.type) {
    case COMPLETE_VERIFY_EMAIL_COMPLETE: {
      return produce(baseState, (draftState) => {
        draftState.loading = true;
        draftState.error = null;
      });
    }
    case COMPLETE_VERIFY_EMAIL_SUCCESS: {
      return produce(baseState, (draftState) => {
        draftState.loading = false;
        draftState.error = null;
        draftState.status = action.payload;
      });
    }
    case COMPLETE_VERIFY_EMAIL_FAIL: {
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
