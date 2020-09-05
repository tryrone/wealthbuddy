import produce from "immer";
import { SAVE_EMAIL_VERIFICATION_ID, SAVE_PERSONAL_DETAILS } from "./types";

const initialState = {
  lastName: "",
  otherNames: "",
  phoneNumber: "",
  email: "",
  password: "",
  comparePassword: "",
  emailVerificationID: "",
};

export default function rootReducer(baseState = initialState, action) {
  switch (action.type) {
    case SAVE_PERSONAL_DETAILS: {
      return produce(baseState, (draftState) => {
        draftState.otherNames = action.payload.firstName;
        draftState.lastName = action.payload.lastName;
        draftState.email = action.payload.email;
        draftState.phoneNumber = action.payload.phoneNumber;
        draftState.referralCode = action.payload.referralCode;
      });
    }
    case SAVE_EMAIL_VERIFICATION_ID: {
      return produce(baseState, (draftState) => {
        draftState.emailVerificationID = action.payload.verificationID;
      });
    }
    default:
      return baseState;
  }
}
