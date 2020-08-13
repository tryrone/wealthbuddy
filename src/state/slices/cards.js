import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Customer } from "services/network";
import { getDashboardData } from "../ducks/dashboard/actions";
import { getRecentSavingTransactionsData } from "../ducks/recentSavingTransactions/actions";
import { getCustomerSavingsData } from "../ducks/customerSavings/actions";
import { setIsCardAddedToTrue } from "./account";

const initialState = {
  verifyFundWalletWithNewCardLoading: false,
  verifyFundWalletWithNewCardError: null,
};

export const startFundWalletWithNewCard = createAsyncThunk(
  "cards/startFundWalletWithNewCard",
  async (payload) => {
    const response = await Customer.startFundWalletWithNewCard(payload);
    return response.data.data.data;
  }
);

export const verifyFundWalletWithNewCard = createAsyncThunk(
  "cards/verifyFundWalletWithNewCard",
  async (payload, thunkAPI) => {
    const response = await Customer.verifyFundWalletWithNewCard(payload);

    thunkAPI.dispatch(setIsCardAddedToTrue());
    thunkAPI.dispatch(getDashboardData());
    thunkAPI.dispatch(getCustomerSavingsData());
    thunkAPI.dispatch(getRecentSavingTransactionsData());

    return response.data.data;
  }
);

const cards = createSlice({
  name: "cards",
  initialState,
  extraReducers: {
    [verifyFundWalletWithNewCard.pending]: (state) => {
      state.verifyFundWalletWithNewCardLoading = true;
      state.verifyFundWalletWithNewCardError = null;
    },
    [verifyFundWalletWithNewCard.rejected]: (state, action) => {
      state.verifyFundWalletWithNewCardEntities = null;
      state.verifyFundWalletWithNewCardLoading = false;
      state.verifyFundWalletWithNewCardError = action.error;
    },
  },
});

export default cards.reducer;
