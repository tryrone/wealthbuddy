import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Investment } from "services/network";

const initialState = {
  // INVESTMENT CONFIG
  investmentConfigurationLoading: false,
  investmentConfigurationError: null,
  investmentConfigurationData: [],
  //  INVESTMENT SUMMARY
  investmentSummaryLoading: false,
  investmentSummaryError: null,
  investmentSummaryData: {
    summary: {
      totalInvestment: "",
      totalInterest: "",
      todayReturns: "",
    },
    investments: [],
  },
  // INVESTMENT TRANSACTION
  investmentTransactionsLoading: false,
  investmentTransactionsError: null,
  investmentTransactionsData: [],
  // INVESTMENT FUNDS ACTIVE
  investmentFundsActiveLoading: false,
  investmentFundsActiveError: null,
  investmentFundsActiveData: [],
  // CREATE INVESTMENTS
  createInvestmentLoading: false,
  createInvestmentError: null,
  createInvestmentData: {},
};

export const getInvestmentConfigurations = createAsyncThunk(
  "investment/getConfigurations",
  async () => {
    const response = await Investment.getInvestmentConfigs();
    return response.data.data;
  }
);

export const getInvestmentSummary = createAsyncThunk(
  "investment/getSummary",
  async () => {
    const response = await Investment.getInvestmentSummary();
    return response.data.data;
  }
);

export const getInvestmentTransactions = createAsyncThunk(
  "investment/getTransactions",
  async () => {
    const response = await Investment.getInvestmentTransactions();
    return response.data.data;
  }
);

export const getInvestmentFundsActive = createAsyncThunk(
  "investment/getFundsActive",
  async () => {
    const response = await Investment.getInvestmentFundsActive();
    return response.data.data;
  }
);

export const createInvestment = createAsyncThunk(
  "investment/createInvestment",
  async (data) => {
    const response = await Investment.createInvestment(data);
    return response.data.data;
  }
);

const investmentsSlice = createSlice({
  name: "investments",
  initialState,
  extraReducers: {
    //   GET INVESTMENT CONFIGURATION
    [getInvestmentConfigurations.pending]: (state) => {
      state.investmentConfigurationLoading = true;
      state.investmentConfigurationError = null;
    },
    [getInvestmentConfigurations.fulfilled]: (state, action) => {
      state.investmentConfigurationData = action.payload;
      state.investmentConfigurationLoading = false;
      state.investmentConfigurationError = null;
    },
    [getInvestmentConfigurations.rejected]: (state, action) => {
      state.investmentConfigurationData = null;
      state.investmentConfigurationLoading = false;
      state.investmentConfigurationError = action.error;
    },
    // GET INVESTMENT SUMMARY
    [getInvestmentSummary.pending]: (state) => {
      state.investmentSummaryLoading = true;
      state.investmentSummaryError = null;
    },
    [getInvestmentSummary.fulfilled]: (state, action) => {
      state.investmentSummaryData = action.payload;
      state.investmentSummaryLoading = false;
      state.investmentSummaryError = null;
    },
    [getInvestmentSummary.rejected]: (state, action) => {
      state.investmentSummaryData = null;
      state.investmentSummaryLoading = false;
      state.investmentSummaryError = action.error;
    },
    //   GET INVESTMENT TRANSACTIONS
    [getInvestmentTransactions.pending]: (state) => {
      state.investmentTransactionsLoading = true;
      state.investmentTransactionsError = null;
    },
    [getInvestmentTransactions.fulfilled]: (state, action) => {
      state.investmentTransactionsData = action.payload;
      state.investmentTransactionsLoading = false;
      state.investmentTransactionsError = null;
    },
    [getInvestmentTransactions.rejected]: (state, action) => {
      state.investmentTransactionsData = null;
      state.investmentTransactionsLoading = false;
      state.investmentTransactionsError = action.error;
    },
    // GET FUNDS ACTIVE
    [getInvestmentFundsActive.pending]: (state) => {
      state.investmentFundsActiveLoading = true;
      state.investmentFundsActiveError = null;
    },
    [getInvestmentFundsActive.fulfilled]: (state, action) => {
      state.investmentFundsActiveData = action.payload;
      state.investmentFundsActiveLoading = false;
      state.investmentFundsActiveError = null;
    },
    [getInvestmentFundsActive.rejected]: (state, action) => {
      state.investmentFundsActiveData = null;
      state.investmentFundsActiveLoading = false;
      state.investmentFundsActiveError = action.error;
    },
    // CREATE INVESTMENT
    [createInvestment.pending]: (state) => {
      state.createInvestmentLoading = true;
      state.createInvestmentError = null;
    },
    [createInvestment.fulfilled]: (state, action) => {
      state.createInvestmentData = action.payload;
      state.createInvestmentLoading = false;
      state.createInvestmentError = null;
    },
    [createInvestment.rejected]: (state, action) => {
      state.createInvestmentData = null;
      state.createInvestmentLoading = false;
      state.createInvestmentError = action.error;
    },
  },
});

export default investmentsSlice.reducer;
