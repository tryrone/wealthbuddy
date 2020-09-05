import {
  COMPLETE_VERIFY_EMAIL_START,
  COMPLETE_VERIFY_EMAIL_SUCCESS,
  COMPLETE_VERIFY_EMAIL_FAIL,
  COMPLETE_VERIFY_EMAIL,
} from "./types";

export const completeVerifyEmailStart = () => ({
  type: COMPLETE_VERIFY_EMAIL_START,
});

export const completeVerifyEmailSuccess = (payload) => ({
  type: COMPLETE_VERIFY_EMAIL_SUCCESS,
  payload,
});

export const completeVerifyEmailFail = (payload) => ({
  type: COMPLETE_VERIFY_EMAIL_FAIL,
  payload,
});

export const completeVerifyEmail = (payload, meta) => ({
  type: COMPLETE_VERIFY_EMAIL,
  payload,
  meta,
});

export default {
  completeVerifyEmailStart,
  completeVerifyEmailSuccess,
  completeVerifyEmailFail,
  completeVerifyEmail,
};
