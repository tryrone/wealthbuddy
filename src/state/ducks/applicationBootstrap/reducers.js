import produce from "immer";
import {
  GET_APPLICATION_BOOTSTRAP_DATA_SUCCESS,
  GET_APPLICATION_BOOTSTRAP_DATA_FAIL,
} from "./types";

const initialState = {
  loading: true,
  completed: false,
  error: false,
};

export default function rootReducer(baseState = initialState, action) {
  switch (action.type) {
    case GET_APPLICATION_BOOTSTRAP_DATA_SUCCESS: {
      return produce(baseState, (draftState) => {
        draftState.loading = false;
        draftState.error = false;
        draftState.completed = true;
      });
    }
    case GET_APPLICATION_BOOTSTRAP_DATA_FAIL: {
      return produce(baseState, (draftState) => {
        draftState.loading = false;
        draftState.error = true;
        draftState.completed = false;
      });
    }
    default:
      return baseState;
  }
}
