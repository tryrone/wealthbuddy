import {
  SAVE_PROFILE_START,
  SAVE_PROFILE_SUCCESS,
  SAVE_PROFILE_FAIL,
  SAVE_PROFILE,
} from "./types";

export const saveProfileStart = () => ({
  type: SAVE_PROFILE_START,
});

export const saveProfileSuccess = (payload) => ({
  type: SAVE_PROFILE_SUCCESS,
  payload,
});

export const saveProfileFail = (payload) => ({
  type: SAVE_PROFILE_FAIL,
  payload,
});

export const saveProfile = (payload, meta) => ({
  type: SAVE_PROFILE,
  payload,
  meta,
});

export default {
  saveProfileStart,
  saveProfileSuccess,
  saveProfileFail,
  saveProfile,
};
