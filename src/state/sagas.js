import { fork } from "redux-saga/effects";
import { apiSagas } from "./ducks/api";
import { userSagas } from "./ducks/user";
import { signUpSagas } from "./ducks/signUp";
import { dashboardSagas } from "./ducks/dashboard";
import { customerSavingsSagas } from "./ducks/customerSavings";
import { recentSavingTransactionsSagas } from "./ducks/recentSavingTransactions";
import { savingsConfigurationSagas } from "./ducks/savingsConfiguration";
import { bankListSagas } from "./ducks/bankList";
import { cardsSagas } from "./ducks/cards";
import { bankAccountsSagas } from "./ducks/bankAccounts";
import { fundWalletWithExistingCardSagas } from "./ducks/fundWalletWithExistingCard";
import { addBankAccountSagas } from "./ducks/addBankAccount";
import { addBvnSagas } from "./ducks/addBvn";
import { saveProfileSagas } from "./ducks/saveProfile";

export default function* rootSaga() {
  yield fork(apiSagas);
  yield fork(userSagas);
  yield fork(signUpSagas);
  yield fork(dashboardSagas);
  yield fork(customerSavingsSagas);
  yield fork(recentSavingTransactionsSagas);
  yield fork(savingsConfigurationSagas);
  yield fork(bankListSagas);
  yield fork(cardsSagas);
  yield fork(bankAccountsSagas);
  yield fork(fundWalletWithExistingCardSagas);
  yield fork(addBankAccountSagas);
  yield fork(addBvnSagas);
  yield fork(saveProfileSagas);
}
