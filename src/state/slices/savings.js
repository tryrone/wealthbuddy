import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  Savings,
  PersonalTargetSavings,
  FixedFlexibleSavings,
  FixedLockSavings,
} from "services/network";
import {getDashboardData} from "../ducks/dashboard/actions";
import {getRecentSavingTransactionsData} from "../ducks/recentSavingTransactions/actions";
import {getCustomerSavingsData} from "../ducks/customerSavings/actions";

const initialState = {
  fetchByIdLoading: false,
  fetchByIdError: null,
  fetchByIdEntities: [],
  startCancelLoading: false,
  startCancelError: null,
  startCancelEntities: [],
  completeCancelLoading: false,
  completeCancelError: null,
  completeCancelEntities: [],
};

export const fetchSavingsById = createAsyncThunk(
  "savings/fetchById",
  async (savingsId) => {
    const response = await Savings.getAllSavings(savingsId);
    return response.data.data;
  }
);

export const startCancelSavings = createAsyncThunk(
  "savings/startCancel",
  async ({ savingsID, savingsType }) => {
    let requestCancel;

    if (savingsType === 1) {
      requestCancel = PersonalTargetSavings.startCancelPersonalTargetSavings;
    } else if (savingsType === 2) {
      requestCancel = FixedLockSavings.startCancelFixedLockSavings;
    } else if (savingsType === 3) {
      requestCancel = FixedFlexibleSavings.startCancelFixedFlexibleSavings;
    } else {
      requestCancel = PersonalTargetSavings.startCancelPersonalTargetSavings;
    }

    const response = await requestCancel(savingsID);
    return response.data.data;
  }
);

export const completeCancelSavings = createAsyncThunk(
  "savings/completeCancel",
  async ({ savingsID, savingsType }, thunkAPI) => {
    let requestCancel;

    if (savingsType === 1) {
      requestCancel = PersonalTargetSavings.completeCancelPersonalTargetSavings;
    } else if (savingsType === 2) {
      requestCancel = FixedLockSavings.completeCancelFixedLockSavings;
    } else if (savingsType === 3) {
      requestCancel = FixedFlexibleSavings.completeCancelFixedFlexibleSavings;
    } else {
      requestCancel = PersonalTargetSavings.completeCancelPersonalTargetSavings;
    }

    const response = await requestCancel(savingsID);

    thunkAPI.dispatch(getDashboardData());
    thunkAPI.dispatch(getCustomerSavingsData());
    thunkAPI.dispatch(getRecentSavingTransactionsData());

    return response.data.data;
  }
);

const savings = createSlice({
  name: "savings",
  initialState,
  extraReducers: {
    [fetchSavingsById.pending]: (state) => {
      state.fetchByIdLoading = true;
      state.fetchByIdError = null;
    },
    [fetchSavingsById.fulfilled]: (state, action) => {
      state.fetchByIdEntities = action.payload;
      state.fetchByIdLoading = false;
      state.fetchByIdError = null;
    },
    [fetchSavingsById.rejected]: (state, action) => {
      state.fetchByIdEntities = null;
      state.fetchByIdLoading = false;
      state.fetchByIdError = action.fetchByIdError;
    },
    [startCancelSavings.pending]: (state) => {
      state.startCancelLoading = true;
      state.startCancelError = null;
    },
    [startCancelSavings.fulfilled]: (state, action) => {
      state.startCancelEntities = action.payload;
      state.startCancelLoading = false;
      state.startCancelError = null;
    },
    [startCancelSavings.rejected]: (state, action) => {
      state.startCancelEntities = null;
      state.startCancelLoading = false;
      state.startCancelError = action.fetchByIdError;
    },
    [completeCancelSavings.pending]: (state) => {
      state.completeCancelLoading = true;
      state.completeCancelError = null;
    },
    [completeCancelSavings.fulfilled]: (state, action) => {
      state.completeCancelEntities = action.payload;
      state.completeCancelLoading = false;
      state.completeCancelError = null;
    },
    [completeCancelSavings.rejected]: (state, action) => {
      state.completeCancelEntities = null;
      state.completeCancelLoading = false;
      state.completeCancelError = action.fetchByIdError;
    },
  },
});

export default savings;
