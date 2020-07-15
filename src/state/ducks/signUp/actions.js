import { SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAIL, SIGN_UP } from "./types";

export const signUpStart = () => ({ type: SIGN_UP_START });

export const signUpSuccess = (payload) => ({ type: SIGN_UP_SUCCESS, payload });

export const signUpFail = (payload) => ({ type: SIGN_UP_FAIL, payload });

export const signUp = (payload, meta) => ({ type: SIGN_UP, payload, meta });

export default { signUpStart, signUpSuccess, signUpFail, signUp };
