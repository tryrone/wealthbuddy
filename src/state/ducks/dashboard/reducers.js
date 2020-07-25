import produce from "immer";
import {
  GET_DASHBOARD_DATA_START,
  GET_DASHBOARD_DATA_SUCCESS,
  GET_DASHBOARD_DATA_FAIL,
} from "./types";

const initialState = {
  loading: false,
  error: null,
  data: {
    netAssetValue: 0,
    walletBalance: 0,
    totalSavings: 0,
    totalInvestment: 0,
    dailyGain: 0,
    totalMonthlyInflow: 0,
    totalMonthlyOutFlow: 0,
    totalMonthlySavingsInflow: 0,
    totalMonthlySavingsOutFlow: 0,
    updateFeeds: [],
    savingsTransactions: [],
    walletTransactions: [],
    profileUpdateStatus: null,
  },
};

export default function rootReducer(baseState = initialState, action) {
  switch (action.type) {
    case GET_DASHBOARD_DATA_START: {
      return produce(baseState, (draftState) => {
        draftState.loading = true;
        draftState.error = null;
      });
    }
    case GET_DASHBOARD_DATA_SUCCESS: {
      let data = action.payload;
      data.savingsTransactions = data.savingsTransactions || [];

      return produce(baseState, (draftState) => {
        draftState.loading = false;
        draftState.error = null;
        draftState.data = data;
      });
    }
    case GET_DASHBOARD_DATA_FAIL: {
      return produce(baseState, (draftState) => {
        draftState.loading = false;
        draftState.data = initialState.data;
        draftState.error = action.payload;
      });
    }
    default:
      return baseState;
  }
}
