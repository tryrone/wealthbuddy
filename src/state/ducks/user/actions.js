import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN } from "./types";

export const loginStart = () => ({ type: LOGIN_START });

export const loginSuccess = (payload) => ({ type: LOGIN_SUCCESS, payload });

export const loginFail = (payload) => ({ type: LOGIN_FAIL, payload });

export const login = (payload, meta) => ({ type: LOGIN, payload, meta });

export default { loginStart, loginSuccess, loginFail, login };
