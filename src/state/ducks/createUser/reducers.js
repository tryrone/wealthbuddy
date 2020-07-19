import produce from "immer"
import { CREATE_USER_START, CREATE_USER_SUCCESS, CREATE_USER_FAIL } from "./types";

const initialState = {
  loading: false,
  error: null,
  data: {},
};

export default function rootReducer(baseState = initialState, action) {
  switch (action.type) {
    case CREATE_USER_START: {
      return produce(baseState, draftState => {
        draftState.loading = true;
        draftState.error = null;
      });
    }
    case CREATE_USER_SUCCESS: {
      return produce(baseState, draftState => {
        draftState.loading = false;
        draftState.error = null;
        draftState.data = action.payload;
      });
    }
    case CREATE_USER_FAIL: {
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
