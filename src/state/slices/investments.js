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
  createInvestmentMe: false,
  // GET ALL INVETSMENTS
  getAllInvestmentsLoading: false,
  getAllInvestmentsError: null,
  getAllInvestmentsData: [],

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
  fundInvestmentMe: false,
  //INVESTMENT VALUATION
  investmentValuationLoading: false,
  investmentValuationCompleted: false,
  investmentValuationError: null,
  investmentValuationData: {},
  investmentValuationEntities: [],
  // WITHDRAW FUNDS
  withdrawFundsLoading: false,
  withdrawFundsError: null,
  withdrawFundsData: {},
  // GET ALL TBILLS TRANSACTIONS
  allTbillsTrasactionsLoading: false,
  allTbillsTrasactionsError: null,
  allTbillsTrasactionsData: [],
  // GET ALL FIXED TRANSACTIONS
  allFixedTrasactionsLoading: false,
  allFixedTrasactionsError: null,
  allFixedTrasactionsData: [],
  // TERMINATE INVESTMENT
  terminateFundsLoading: false,
  terminateFundsError: null,
  terminateFundsData: {},
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
  async (props) => {
    let requestCreate;
    if (props.investmentType == 1) {
      requestCreate = Investment.createFundInvestment;
    } else if (props.investmentType == 2) {
      requestCreate = Investment.createTerminstrumentsInvestment;
    } else if (props.investmentType == 3) {
      requestCreate = Investment.createTbillsInvestment;
    } else {
      requestCreate = Investment.createFundInvestment;
    }

    const response = await requestCreate(props);
    return response.data.data;
  }
);

export const withdrawFunds = createAsyncThunk(
  "investment/withdrawFunds",
  async (props) => {
    const response = await Investment.withdrawFunds(props);
    return response.data;
  }
);

export const terminateFunds = createAsyncThunk(
  "investment/terminateFunds",
  async (props) => {
    let requestTerminate;
    if (props.typeId == 2) {
      requestTerminate = Investment.terminateFixed;
    } else if (props.typeId == 3) {
      requestTerminate = Investment.terminateTbills;
    }
    delete props.typeId;

    const response = await requestTerminate(props);
    return response.data;

    // const response = await Investment.terminateTbills(props);
    // return response.data;
  }
);

export const getAllInvestments = createAsyncThunk(
  "investment/getAllInvestments",
  async () => {
    const response = await Investment.getAllInvestments();
    return response.data.data;
  }
);

export const getAllTbillsTransactions = createAsyncThunk(
  "investment/allTbillsTransactions",
  async () => {
    const response = await Investment.getAllTbillsTransactions();
    return response.data.data;
  }
);
export const getAllFixedTransactions = createAsyncThunk(
  "investment/allFixedTransactions",
  async () => {
    const response = await Investment.getAllFixedTransactions();
    return response.data.data;
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
  async (props) => {
    let requestFund;
    if (props.investmentType == 1) {
      requestFund = Investment.fundMutualFund;
    } else if (props.investmentType == 2) {
      requestFund = Investment.fundFixed;
    } else if (props.investmentType == 3) {
      requestFund = Investment.fundTbills;
    } else {
      requestFund = Investment.fundMutualFund;
    }

    delete props.investmentType;

    const response = await requestFund(props);
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
    //   WITHDRAW FUNDS
    [withdrawFunds.pending]: (state) => {
      state.withdrawFundsLoading = true;
      state.withdrawFundsError = null;
    },
    [withdrawFunds.fulfilled]: (state, action) => {
      state.withdrawFundsData = action.payload;
      state.withdrawFundsLoading = false;
      state.withdrawFundsError = null;
    },
    [withdrawFunds.rejected]: (state, action) => {
      state.withdrawFundsData = null;
      state.withdrawFundsLoading = false;
      state.withdrawFundsError = action.error;
    },
    //   TERMINATE FUNDS
    [terminateFunds.pending]: (state) => {
      state.terminateFundsLoading = true;
      state.terminateFundsError = null;
    },
    [terminateFunds.fulfilled]: (state, action) => {
      state.terminateFundsData = action.payload;
      state.terminateFundsLoading = false;
      state.terminateFundsError = null;
    },
    [terminateFunds.rejected]: (state, action) => {
      state.terminateFundsData = null;
      state.terminateFundsLoading = false;
      state.terminateFundsError = action.error;
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
    // GET ALL TBILLS TRANSACTOIONS
    [getAllTbillsTransactions.pending]: (state) => {
      state.allTbillsTrasactionsLoading = true;
      state.allTbillsTrasactionsError = null;
      state.allTbillsTrasactionsisEmpty = false;
    },
    [getAllTbillsTransactions.fulfilled]: (state, action) => {
      state.allTbillsTrasactionsData = action.payload;
      state.allTbillsTrasactionsLoading = false;
      state.allTbillsTrasactionsError = null;
      state.allTbillsTrasactionsisEmpty = action.payload > 0 ? false : true;
    },
    [getAllTbillsTransactions.rejected]: (state, action) => {
      state.gallTbillsTrasactionsData = null;
      state.gallTbillsTrasactionsLoading = false;
      state.gallTbillsTrasactionsError = action.error;
      state.gallTbillsTrasactionsisEmpty = false;
    },
    // GET ALL Fixed TRANSACTOIONS
    [getAllFixedTransactions.pending]: (state) => {
      state.allFixedTrasactionsLoading = true;
      state.allFixedTrasactionsError = null;
      state.allFixedTrasactionsisEmpty = false;
    },
    [getAllFixedTransactions.fulfilled]: (state, action) => {
      state.allFixedTrasactionsData = action.payload;
      state.allFixedTrasactionsLoading = false;
      state.allFixedTrasactionsError = null;
      state.allFixedTrasactionsisEmpty = action.payload > 0 ? false : true;
    },
    [getAllFixedTransactions.rejected]: (state, action) => {
      state.allFixedTrasactionsData = null;
      state.allFixedTrasactionsLoading = false;
      state.allFixedTrasactionsError = action.error;
      state.allFixedTrasactionsisEmpty = false;
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
      state.createInvestmentMe = true;
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
      state.fundInvestmentMe = true;
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
      state.investmentValuationCompleted = true;
      state.investmentValuationError = null;
      state.investmentValuationEntities.push(
        action.payload.fixedDeposits,
        action.payload.portfolioHoldings,
        action.payload.treasuryBills
      );
    },
    [getInvestmentValuation.rejected]: (state, action) => {
      state.investmentValuationData = null;
      state.investmentValuationLoading = false;
      state.investmentValuationError = action.error;
    },
  },
});

export default investmentsSlice.reducer;
// getAllInvetstmentTransactions
