import {
  ADD_BVN_START,
  ADD_BVN_SUCCESS,
  ADD_BVN_FAIL,
  ADD_BVN,
} from "./types";

export const addBvnStart = () => ({
  type: ADD_BVN_START,
});

export const addBvnSuccess = (payload) => ({
  type: ADD_BVN_SUCCESS,
  payload,
});

export const addBvnFail = (payload) => ({
  type: ADD_BVN_FAIL,
  payload,
});

export const addBvn = (payload, meta) => ({
  type: ADD_BVN,
  payload,
  meta,
});

export default {
  addBvnStart,
  addBvnSuccess,
  addBvnFail,
  addBvn,
};
