import {
  VERIFY_FUND_WALLET_WITH_NEW_CARD_START,
  VERIFY_FUND_WALLET_WITH_NEW_CARD_SUCCESS,
  VERIFY_FUND_WALLET_WITH_NEW_CARD_FAIL,
  VERIFY_FUND_WALLET_WITH_NEW_CARD,
} from "./types";

export const verifyFundWalletWithNewCardStart = () => ({
  type: VERIFY_FUND_WALLET_WITH_NEW_CARD_START,
});

export const verifyFundWalletWithNewCardSuccess = (payload) => ({
  type: VERIFY_FUND_WALLET_WITH_NEW_CARD_SUCCESS,
  payload,
});

export const verifyFundWalletWithNewCardFail = (payload) => ({
  type: VERIFY_FUND_WALLET_WITH_NEW_CARD_FAIL,
  payload,
});

export const verifyFundWalletWithNewCard = (payload, meta) => ({
  type: VERIFY_FUND_WALLET_WITH_NEW_CARD,
  payload,
  meta,
});

export default {
  verifyFundWalletWithNewCardStart,
  verifyFundWalletWithNewCardSuccess,
  verifyFundWalletWithNewCardFail,
  verifyFundWalletWithNewCard,
};
