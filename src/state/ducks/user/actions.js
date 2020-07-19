import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT,
} from "./types";

export const loginStart = () => ({ type: LOGIN_START });

export const loginSuccess = (payload) => ({ type: LOGIN_SUCCESS, payload });

export const loginFail = (payload) => ({ type: LOGIN_FAIL, payload });

export const login = (payload, meta) => ({ type: LOGIN, payload, meta });

export const logoutStart = () => ({ type: LOGOUT_START });

export const logoutSuccess = (payload) => ({ type: LOGOUT_SUCCESS, payload });

export const logoutFail = (payload) => ({ type: LOGOUT_FAIL, payload });

export const logout = (payload, meta) => ({ type: LOGOUT, payload, meta });

export default {
  loginStart,
  loginSuccess,
  loginFail,
  login,
  logoutStart,
  logoutSuccess,
  logoutFail,
  logout,
};
