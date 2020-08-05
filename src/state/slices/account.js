import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Customer } from "services/network";

const initialState = {
  loginLoading: false,
  loginError: null,
  addBvnLoading: false,
  addBvnError: null,
  addBankAccountLoading: false,
  addBankAccountError: null,
  verifyAddBankAccountLoading: false,
  verifyAddBankAccountError: null,
  sendBankAccountTokenLoading: false,
  sendBankAccountTokenError: null,
  data: {
    email: "",
    phoneNumber: "",
    id: "",
    isBVNAdded: null,
    isCardAdded: null,
    isPasswordChangeRequired: false,
    customerDetails: {
      id: "",
      title: "",
      lastName: "",
      bvn: "",
      otherNames: "",
      gender: null,
      address: "",
      landmark: "",
      marritalStatus: null,
      maidenName: "",
      religion: null,
      signature: null,
      picture: "",
      approvedSelfie: null,
      phoneNumber: "",
      email: "",
      homeTown: "",
      dateOfBirth: "",
      nationality: "",
      state: "",
      lga: "",
      meansOfIdentification: 0,
      idNumber: null,
      meansOfIdentificationUploadUrl: null,
      utilityBillUploadUrl: null,
      nextOfKinName: "",
      nextOfKinAddress: "",
      nextOfKinRelationship: "",
      nextOfKinPhoneNumber: "",
      nextOfKinEmail: "",
      occupation: "",
      employerName: "",
      employerAddress: "",
      employerPhoneNumber: "",
    },
    meansOfIdentificationUploadStatus: {
      isUploaded: null,
      approvalStatus: null,
    },
    utilityBillUploadStatus: {
      isUploaded: null,
      approvalStatus: null,
    },
    jwtToken: null,
  },
};

export const login = createAsyncThunk("account/login", async (payload) => {
  const response = await Customer.login(payload);
  const data = response.data.data;
  data.jwtToken = response.headers["token"];
  return data;
});

export const addBvn = createAsyncThunk("account/addBvn", async (payload) => {
  const response = await Customer.addBvn(payload);
  return response.data.data;
});

export const addBankAccount = createAsyncThunk(
  "account/addBankAccount",
  async (payload) => {
    const response = await Customer.addBankAccount(payload);
    return response.data.data;
  }
);

export const sendBankAccountToken = createAsyncThunk(
  "account/sendBankAccountToken",
  async (payload) => {
    const response = await Customer.sendToken(payload);
    return response.data.data;
  }
);

export const verifyAddBankAccount = createAsyncThunk(
  "account/verifyAddBankAccount",
  async (payload) => {
    const response = await Customer.verifyAddBankAccount(payload);
    return response.data.data;
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = initialState.data;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loginLoading = true;
      state.loginError = null;
    },
    [login.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loginLoading = false;
      state.loginError = null;
    },
    [login.rejected]: (state, action) => {
      state.data = null;
      state.loginLoading = false;
      state.loginError = action.error;
    },
    [addBvn.pending]: (state) => {
      state.addBvnLoading = true;
      state.addBvnError = null;
    },
    [addBvn.fulfilled]: (state) => {
      state.addBvnLoading = false;
      state.addBvnError = null;
    },
    [addBvn.rejected]: (state, action) => {
      state.addBvnLoading = false;
      state.addBvnError = action.error;
    },
    [addBankAccount.pending]: (state) => {
      state.addBankAccountLoading = true;
      state.addBankAccountError = null;
    },
    [addBankAccount.fulfilled]: (state) => {
      state.addBankAccountLoading = false;
      state.addBankAccountError = null;
    },
    [addBankAccount.rejected]: (state, action) => {
      state.addBankAccountLoading = false;
      state.addBankAccountError = action.error;
    },
    [verifyAddBankAccount.pending]: (state) => {
      state.verifyAddBankAccountLoading = true;
      state.verifyAddBankAccountError = null;
    },
    [verifyAddBankAccount.fulfilled]: (state) => {
      state.verifyAddBankAccountLoading = false;
      state.verifyAddBankAccountError = null;
    },
    [verifyAddBankAccount.rejected]: (state, action) => {
      state.verifyAddBankAccountLoading = false;
      state.verifyAddBankAccountError = action.error;
    },
    [sendBankAccountToken.pending]: (state) => {
      state.sendBankAccountTokenLoading = true;
      state.sendBankAccountTokenError = null;
    },
    [sendBankAccountToken.fulfilled]: (state) => {
      state.sendBankAccountTokenLoading = false;
      state.sendBankAccountTokenError = null;
    },
    [sendBankAccountToken.rejected]: (state, action) => {
      state.sendBankAccountTokenLoading = false;
      state.sendBankAccountTokenError = action.error;
    },
  },
});

export const { logout } = accountSlice.actions;

export default accountSlice.reducer;
