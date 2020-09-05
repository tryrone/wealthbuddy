import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Customer } from "services/network";

const initialState = {
  resendVerifyEmailLoading: false,
  resendVerifyEmailError: null,
};

export const resendVerifyEmail = createAsyncThunk(
  "customer/resendVerifyEmail",
  async (payload) => {
    const response = await Customer.resendVerifyEmail(payload);
    return response.data.data;
  }
);

const customer = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default customer.reducer;
