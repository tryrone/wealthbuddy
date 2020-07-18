import {
  COMPLETE_VERIFY_EMAIL_COMPLETE,
  COMPLETE_VERIFY_EMAIL_SUCCESS,
  COMPLETE_VERIFY_EMAIL_FAIL,
  COMPLETE_VERIFY_EMAIL,
} from "./types";

export const completeVerifyEmailComplete = () => ({
  type: COMPLETE_VERIFY_EMAIL_COMPLETE,
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
  completeVerifyEmailComplete,
  completeVerifyEmailSuccess,
  completeVerifyEmailFail,
  completeVerifyEmail,
};
