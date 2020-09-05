import {
  FUND_WALLET_WITH_EXISTING_CARD_START,
  FUND_WALLET_WITH_EXISTING_CARD_SUCCESS,
  FUND_WALLET_WITH_EXISTING_CARD_FAIL,
  FUND_WALLET_WITH_EXISTING_CARD,
} from "./types";

export const fundWalletWithExistingCardStart = () => ({
  type: FUND_WALLET_WITH_EXISTING_CARD_START,
});

export const fundWalletWithExistingCardSuccess = (payload) => ({
  type: FUND_WALLET_WITH_EXISTING_CARD_SUCCESS,
  payload,
});

export const fundWalletWithExistingCardFail = (payload) => ({
  type: FUND_WALLET_WITH_EXISTING_CARD_FAIL,
  payload,
});

export const fundWalletWithExistingCard = (payload, meta) => ({
  type: FUND_WALLET_WITH_EXISTING_CARD,
  payload,
  meta,
}); 

export default {
  fundWalletWithExistingCardStart,
  fundWalletWithExistingCardSuccess,
  fundWalletWithExistingCardFail,
  fundWalletWithExistingCard,
};
