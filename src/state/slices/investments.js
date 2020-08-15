import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Investment } from "services/network";

const initialState = {
  // INVESTMENT CONFIG
  investmentConfigurationLoading: false,
  investmentConfigurationError: null,
  investmentConfigurationData: [],
  // CREATE INVESTMENTS
  createInvestmentLoading: false,
  createInvestmentError: null,
  createInvestmentData: {},
  // GET ALL INVETSMENTS
  getAllInvestmentsLoading: false,
  getAllInvestmentsError: null,
  getAllInvestmentsData: [],
  // GET ALL INVETSMENT TRANSACTIONS
  getAllInvetstmentTransactionsLoading: false,
  getAllInvetstmentTransactionsError: null,
  getAllInvetstmentTransactionsData: [],
  getAllInvetstmentTransactionsisEmpty: false,
  // GET ALL PERSONAL INVESTMENTS
  allPersonalInvestmentsLoading: false,
  allPersonalInvestmentsError: null,
  allPersonalInvestmentsData: [],
  // GET FUNDS INVESTMENT TRANSACTIONS
  investmentTransactionsForFundsLoading: false,
  investmentTransactionsForFundsError: null,
  investmentTransactionsForFundsData: [],
  // FUND INVESTMENT
  fundInvestmentLoading: false,
  fundInvestmentError: null,
  fundInvestmentData: [],
  //INVESTMENT VALUATION
  investmentValuationLoading: false,
  investmentValuationError: null,
  investmentValuationData: {},
};

export const getInvestmentConfigurations = createAsyncThunk(
  "investment/getConfigurations",
  async () => {
    const response = await Investment.getInvestmentConfigs();
    return response.data.data;
  }
);

export const createInvestment = createAsyncThunk(
  "investment/createInvestment",
  async ({ data, investType }) => {
    let requestCreate;

    if (investType === 1) {
      requestCreate = Investment.createFundInvestment;
    } else if (investType === 2) {
      requestCreate = Investment.createTerminstrumentsInvestment;
    } else if (investType === 3) {
      requestCreate = Investment.createTbillsInvestment;
    } else {
      requestCreate = Investment.createFundInvestment;
    }

    const response = await requestCreate(data);
    return response.data.data;
  }
);

export const getAllInvestments = createAsyncThunk(
  "investment/getAllInvestments",
  async () => {
    const response = await Investment.getAllInvestments();
    return response.data.data;
  }
);
export const getAllInvetstmentTransactions = createAsyncThunk(
  "investment/getAllInvetstmentTransactions",
  async () => {
    const response = await Investment.getAllInvetstmentTransactions();
    return response.data.fundTransactions;
  }
);

export const allPersonalInvestments = createAsyncThunk(
  "investment/allPersonalInvestments",
  async () => {
    const response = await Investment.getAllPersonalInvestments();
    return response.data;
  }
);

export const getInvestmentTransactionsForFund = createAsyncThunk(
  "investment/investmentTransactionsForFund",
  async () => {
    const response = await Investment.getInvestmentTransactionsForFunds();
    return response.data.data;
  }
);

export const fundInvestment = createAsyncThunk(
  "investment/fundInvestment",
  async (data) => {
    const response = await Investment.getInvestmentTransactionsForFunds(data);
    return response.data.data;
  }
);

export const getInvestmentValuation = createAsyncThunk(
  "investment/investmentValuation",
  async () => {
    const response = await Investment.getInvestmentValuation();
    return response.data;
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
    //   GET ALL INVESTMENTS
    [getAllInvestments.pending]: (state) => {
      state.getAllInvestmentsLoading = true;
      state.getAllInvestmentsError = null;
    },
    [getAllInvestments.fulfilled]: (state, action) => {
      state.getAllInvestmentsData = action.payload;
      state.getAllInvestmentsLoading = false;
      state.getAllInvestmentsError = null;
    },
    [getAllInvestments.rejected]: (state, action) => {
      state.getAllInvestmentsData = null;
      state.getAllInvestmentsLoading = false;
      state.getAllInvestmentsError = action.error;
    },
    //   GET ALL INVESTMENTS TRANSACTIONS
    [getAllInvetstmentTransactions.pending]: (state) => {
      state.getAllInvetstmentTransactionsLoading = true;
      state.getAllInvetstmentTransactionsError = null;
      state.getAllInvetstmentTransactionsisEmpty = false;
    },
    [getAllInvetstmentTransactions.fulfilled]: (state, action) => {
      state.getAllInvetstmentTransactionsData = action.payload;
      state.getAllInvetstmentTransactionsLoading = false;
      state.getAllInvetstmentTransactionsError = null;
      state.getAllInvetstmentTransactionsisEmpty =
        action.payload > 0 ? false : true;
    },
    [getAllInvetstmentTransactions.rejected]: (state, action) => {
      state.getAllInvetstmentTransactionsData = null;
      state.getAllInvetstmentTransactionsLoading = false;
      state.getAllInvetstmentTransactionsError = action.error;
      state.getAllInvetstmentTransactionsisEmpty = false;
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
    // GET ALL PERSONAL INVESTMENTS
    [allPersonalInvestments.pending]: (state) => {
      state.allPersonalInvestmentsLoading = true;
      state.allPersonalInvestmentsError = null;
    },
    [allPersonalInvestments.fulfilled]: (state, action) => {
      state.allPersonalInvestmentsData = action.payload;
      state.allPersonalInvestmentsLoading = false;
      state.allPersonalInvestmentsError = null;
    },
    [allPersonalInvestments.rejected]: (state, action) => {
      state.allPersonalInvestmentsData = null;
      state.allPersonalInvestmentsLoading = false;
      state.allPersonalInvestmentsError = action.error;
    },
    // INVESTMENT TRANSACTIONS FOR FUNDS
    [getInvestmentTransactionsForFund.pending]: (state) => {
      state.investmentTransactionsForFundsLoading = true;
      state.investmentTransactionsForFundsError = null;
    },
    [getInvestmentTransactionsForFund.fulfilled]: (state, action) => {
      state.investmentTransactionsForFundsData = action.payload;
      state.investmentTransactionsForFundsLoading = false;
      state.investmentTransactionsForFundsError = null;
    },
    [getInvestmentTransactionsForFund.rejected]: (state, action) => {
      state.investmentTransactionsForFundsData = null;
      state.investmentTransactionsForFundsLoading = false;
      state.investmentTransactionsForFundsError = action.error;
    },
    // FUND INVESTMENT
    [fundInvestment.pending]: (state) => {
      state.fundInvestmentLoading = true;
      state.fundInvestmentError = null;
    },
    [fundInvestment.fulfilled]: (state, action) => {
      state.fundInvestmentData = action.payload;
      state.fundInvestmentLoading = false;
      state.fundInvestmentError = null;
    },
    [fundInvestment.rejected]: (state, action) => {
      state.fundInvestmentData = null;
      state.fundInvestmentLoading = false;
      state.fundInvestmentError = action.error;
    },
    //GET INVESTMENT VALUATION
    [getInvestmentValuation.pending]: (state) => {
      state.investmentValuationLoading = true;
      state.investmentValuationError = null;
    },
    [getInvestmentValuation.fulfilled]: (state, action) => {
      state.investmentValuationData = action.payload;
      state.investmentValuationLoading = false;
      state.investmentValuationError = null;
    },
    [getInvestmentValuation.rejected]: (state, action) => {
      state.investmentValuationData = null;
      state.investmentValuationLoading = false;
      state.investmentValuationError = action.error;
    },
  },
});

export default investmentsSlice.reducer;
