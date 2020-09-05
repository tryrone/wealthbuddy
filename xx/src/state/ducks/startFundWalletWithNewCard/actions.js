import {
  START_FUND_WALLET_WITH_NEW_CARD_START,
  START_FUND_WALLET_WITH_NEW_CARD_SUCCESS,
  START_FUND_WALLET_WITH_NEW_CARD_FAIL,
  START_FUND_WALLET_WITH_NEW_CARD,
} from "./types";

export const startFundWalletWithNewCardStart = () => ({
  type: START_FUND_WALLET_WITH_NEW_CARD_START,
});

export const startFundWalletWithNewCardSuccess = (payload) => ({
  type: START_FUND_WALLET_WITH_NEW_CARD_SUCCESS,
  payload,
});

export const startFundWalletWithNewCardFail = (payload) => ({
  type: START_FUND_WALLET_WITH_NEW_CARD_FAIL,
  payload,
});

export const startFundWalletWithNewCard = (payload, meta) => ({
  type: START_FUND_WALLET_WITH_NEW_CARD,
  payload,
  meta,
});

export default {
  startFundWalletWithNewCardStart,
  startFundWalletWithNewCardSuccess,
  startFundWalletWithNewCardFail,
  startFundWalletWithNewCard,
};
