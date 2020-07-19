import produce from "immer";
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from "./types";

const initialState = {
  loginLoading: false,
  loginError: null,
  logoutLoading: false,
  logoutError: null,
  data: {
    email: "",
    phoneNumber: "",
    id: "",
    isBVNAdded: null,
    isCardAdded: null,
    isPasswordChangeRequired: false,
    customerDetails: {
      id: "",
      title: "",
      lastName: "",
      bvn: "",
      otherNames: "",
      gender: null,
      address: "",
      landmark: "",
      marritalStatus: null,
      maidenName: "",
      religion: null,
      signature: null,
      picture: "",
      approvedSelfie: null,
      phoneNumber: "",
      email: "",
      homeTown: "",
      dateOfBirth: "",
      nationality: "",
      state: "",
      lga: "",
      meansOfIdentification: 0,
      idNumber: null,
      meansOfIdentificationUploadUrl: null,
      utilityBillUploadUrl: null,
      nextOfKinName: "",
      nextOfKinAddress: "",
      nextOfKinRelationship: "",
      nextOfKinPhoneNumber: "",
      nextOfKinEmail: "",
      occupation: "",
      employerName: "",
      employerAddress: "",
      employerPhoneNumber: "",
    },
    meansOfIdentificationUploadStatus: {
      isUploaded: null,
      approvalStatus: null,
    },
    utilityBillUploadStatus: {
      isUploaded: null,
      approvalStatus: null,
    },
    jwtToken: null,
  },
};

export default function rootReducer(baseState = initialState, action) {
  switch (action.type) {
    case LOGIN_START: {
      return produce(baseState, (draftState) => {
        draftState.loginLoading = true;
        draftState.loginError = null;
      });
    }
    case LOGIN_SUCCESS: {
      return produce(baseState, (draftState) => {
        draftState.loginLoading = false;
        draftState.data = action.payload;
      });
    }
    case LOGIN_FAIL: {
      return produce(baseState, (draftState) => {
        draftState.loginLoading = false;
        draftState.data = initialState.data;
        draftState.loginError = action.payload;
      });
    }
    case LOGOUT_START: {
      return produce(baseState, (draftState) => {
        draftState.logoutLoading = true;
        draftState.logoutError = null;
      });
    }
    case LOGOUT_SUCCESS: {
      return produce(baseState, (draftState) => {
        draftState.logoutLoading = false;
        draftState.data = initialState.data;
      });
    }
    case LOGOUT_FAIL: {
      return produce(baseState, (draftState) => {
        draftState.logoutLoading = false;
        draftState.data = initialState.data;
        draftState.logoutError = action.payload;
      });
    }
    default:
      return baseState;
  }
}
