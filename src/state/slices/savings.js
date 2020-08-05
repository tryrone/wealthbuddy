import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Savings, PersonalTargetSavings, FixedFlexibleSavings, FixedLockSavings } from "services/network";
import { getDashboardData } from "../ducks/dashboard/actions";
import { getRecentSavingTransactionsData } from "../ducks/recentSavingTransactions/actions";
import { getCustomerSavingsData } from "../ducks/customerSavings/actions";
import { SavingsType } from "constants/enums";

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
  startWithdrawLoading: false,
  startWithdrawError: null,
  startWithdrawEntities: [],
  completeWithdrawLoading: false,
  completeWithdrawError: null,
  completeWithdrawEntities: [],
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

    if (savingsType === SavingsType.PersonalTargetSavings) {
      requestCancel = PersonalTargetSavings.startCancelPersonalTargetSavings;
    } else if (savingsType === SavingsType.FixedLockSavings) {
      requestCancel = FixedLockSavings.startCancelFixedLockSavings;
    } else if (savingsType === SavingsType.FixedFlexibleSavings) {
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

    if (savingsType === SavingsType.PersonalTargetSavings) {
      requestCancel = PersonalTargetSavings.completeCancelPersonalTargetSavings;
    } else if (savingsType === SavingsType.FixedLockSavings) {
      requestCancel = FixedLockSavings.completeCancelFixedLockSavings;
    } else if (savingsType === SavingsType.FixedFlexibleSavings) {
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

export const startWithdrawSavings = createAsyncThunk(
  "savings/startWithdraw",
  async ({ savingsType, formValues }) => {
    let requestStartWithdraw;

    if (savingsType === SavingsType.PersonalTargetSavings) {
      requestStartWithdraw =
        PersonalTargetSavings.startPersonalTargetWithdrawal;
    } else if (savingsType === SavingsType.FixedLockSavings) {
      requestStartWithdraw = FixedLockSavings.startFixedLockWithdraw;
    } else if (savingsType === SavingsType.FixedFlexibleSavings) {
      requestStartWithdraw = FixedFlexibleSavings.startFixedFlexibleWithdraw;
    } else {
      requestStartWithdraw =
        PersonalTargetSavings.startPersonalTargetWithdrawal;
    }

    const response = await requestStartWithdraw(formValues);
    return response.data.data;
  }
);

export const completeWithdrawSavings = createAsyncThunk(
  "savings/completeWithdraw",
  async ({ savingsType, formValues }, thunkAPI) => {
    let requestCompleteWithdraw;

    if (savingsType === SavingsType.PersonalTargetSavings) {
      requestCompleteWithdraw =
        PersonalTargetSavings.completePersonalTargetWithdrawal;
    } else if (savingsType === SavingsType.FixedLockSavings) {
      requestCompleteWithdraw = FixedLockSavings.completeFixedLockWithdraw;
    } else if (savingsType === SavingsType.FixedFlexibleSavings) {
      requestCompleteWithdraw =
        FixedFlexibleSavings.completeFixedFlexibleWithdraw;
    } else {
      requestCompleteWithdraw =
        PersonalTargetSavings.completePersonalTargetWithdrawal;
    }

    const response = await requestCompleteWithdraw(formValues);

    thunkAPI.dispatch(getDashboardData());

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
      state.fetchByIdError = action.error;
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
      state.startCancelError = action.error;
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
      state.completeCancelError = action.error;
    },
    [startWithdrawSavings.pending]: (state) => {
      state.startWithdrawLoading = true;
      state.startWithdrawError = null;
    },
    [startWithdrawSavings.fulfilled]: (state, action) => {
      state.startWithdrawEntities = action.payload;
      state.startWithdrawLoading = false;
      state.startWithdrawError = null;
    },
    [startWithdrawSavings.rejected]: (state, action) => {
      state.startWithdrawEntities = null;
      state.startWithdrawLoading = false;
      state.startWithdrawError = action.error.message;
    },
    [completeWithdrawSavings.pending]: (state) => {
      state.completeWithdrawLoading = true;
      state.completeWithdrawError = null;
    },
    [completeWithdrawSavings.fulfilled]: (state, action) => {
      state.completeWithdrawEntities = action.payload;
      state.completeWithdrawLoading = false;
      state.completeWithdrawError = null;
    },
    [completeWithdrawSavings.rejected]: (state, action) => {
      state.completeWithdrawEntities = null;
      state.completeWithdrawLoading = false;
      state.completeWithdrawError = action.error.message;
    },
  },
});

export default savings.reducer;
