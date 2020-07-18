import produce from "immer";
import {
  SAVE_PROFILE_START,
  SAVE_PROFILE_SUCCESS,
  SAVE_PROFILE_FAIL,
} from "./types";

const initialState = {
  loading: false,
  error: null,
  status: null
};

export default function rootReducer(baseState = initialState, action) {
  switch (action.type) {
    case SAVE_PROFILE_START: {
      return produce(baseState, (draftState) => {
        draftState.loading = true;
        draftState.error = null;
      });
    }
    case SAVE_PROFILE_SUCCESS: {
      return produce(baseState, (draftState) => {
        draftState.loading = false;
        draftState.error = null;
        draftState.status = action.payload;
      });
    }
    case SAVE_PROFILE_FAIL: {
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
