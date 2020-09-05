import produce from "immer";
import {
  START_VERIFY_EMAIL_START,
  START_VERIFY_EMAIL_SUCCESS,
  START_VERIFY_EMAIL_FAIL,
} from "./types";

const initialState = {
  loading: false,
  error: null,
  status: null
};

export default function rootReducer(baseState = initialState, action) {
  switch (action.type) {
    case START_VERIFY_EMAIL_START: {
      return produce(baseState, (draftState) => {
        draftState.loading = true;
        draftState.error = null;
      });
    }
    case START_VERIFY_EMAIL_SUCCESS: {
      return produce(baseState, (draftState) => {
        draftState.loading = false;
        draftState.error = null;
        draftState.status = action.payload;
      });
    }
    case START_VERIFY_EMAIL_FAIL: {
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
