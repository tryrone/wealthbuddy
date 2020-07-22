import {
  SEND_TOKEN_START,
  SEND_TOKEN_SUCCESS,
  SEND_TOKEN_FAIL,
  SEND_TOKEN,
} from "./types";

export const sendTokenStart = () => ({ type: SEND_TOKEN_START });

export const sendTokenSuccess = (payload) => ({
  type: SEND_TOKEN_SUCCESS,
  payload,
});

export const sendTokenFail = (payload) => ({
  type: SEND_TOKEN_FAIL,
  payload,
});

export const sendToken = (payload, meta) => ({
  type: SEND_TOKEN,
  payload,
  meta,
});

export default { sendTokenStart, sendTokenSuccess, sendTokenFail, sendToken };
