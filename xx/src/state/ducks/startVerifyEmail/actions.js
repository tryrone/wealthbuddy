import {
  START_VERIFY_EMAIL_START,
  START_VERIFY_EMAIL_SUCCESS,
  START_VERIFY_EMAIL_FAIL,
  START_VERIFY_EMAIL,
} from "./types";

export const startVerifyEmailStart = () => ({
  type: START_VERIFY_EMAIL_START,
});

export const startVerifyEmailSuccess = (payload) => ({
  type: START_VERIFY_EMAIL_SUCCESS,
  payload,
});

export const startVerifyEmailFail = (payload) => ({
  type: START_VERIFY_EMAIL_FAIL,
  payload,
});

export const startVerifyEmail = (payload, meta) => ({
  type: START_VERIFY_EMAIL,
  payload,
  meta,
});

export default {
  startVerifyEmailStart,
  startVerifyEmailSuccess,
  startVerifyEmailFail,
  startVerifyEmail,
};
