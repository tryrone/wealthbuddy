import { CREATE_USER_START, CREATE_USER_SUCCESS, CREATE_USER_FAIL, CREATE_USER } from "./types";

export const createUserStart = () => ({ type: CREATE_USER_START });

export const createUserSuccess = (payload) => ({ type: CREATE_USER_SUCCESS, payload });

export const createUserFail = (payload) => ({ type: CREATE_USER_FAIL, payload });

export const createUser = (payload, meta) => ({ type: CREATE_USER, payload, meta });

export default { createUserStart, createUserSuccess, createUserFail, createUser };
