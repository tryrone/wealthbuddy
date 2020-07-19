import { SAVE_EMAIL_VERIFICATION_ID, SAVE_PERSONAL_DETAILS } from "./types";

export const savePersonalDetails = (payload) => ({ type: SAVE_PERSONAL_DETAILS, payload });
export const saveEmailVerificationId = (payload) => ({ type: SAVE_EMAIL_VERIFICATION_ID, payload });

export default { savePersonalDetails, saveEmailVerificationId };
