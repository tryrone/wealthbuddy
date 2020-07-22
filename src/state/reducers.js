import { combineReducers } from "redux";
import userReducer from "./ducks/user";
import createUserReducer from "./ducks/createUser";
import signUpParamsReducer from "./ducks/signUpParams";
import dashboardReducer from "./ducks/dashboard";
import customerSavingsReducer from "./ducks/customerSavings";
import recentSavingTransactionsReducer from "./ducks/recentSavingTransactions";
import savingsConfigurationReducer from "./ducks/savingsConfiguration";
import bankListReducer from "./ducks/bankList";
import cardsReducer from "./ducks/cards";
import bankAccountsReducer from "./ducks/bankAccounts";
import fundWalletWithExistingCardReducer from "./ducks/fundWalletWithExistingCard";
import addBankAccountReducer from "./ducks/addBankAccount";
import startVerifyEmailReducer from "./ducks/startVerifyEmail";
import completeVerifyEmailReducer from "./ducks/completeVerifyEmail";
import addBvnReducer from "./ducks/addBvn";
import saveProfileReducer from "./ducks/saveProfile";
import startFundWalletWithNewCardReducer from "./ducks/startFundWalletWithNewCard";
import verifyFundWalletWithNewCardReducer from "./ducks/verifyFundWalletWithNewCard";
import applicationBootstrapReducer from "./ducks/applicationBootstrap";
import sendTokenReducer from "./ducks/sendToken";
import verifyAddBankAccountReducer from "./ducks/verifyAddBankAccount";

export default combineReducers({
  user: userReducer,
  createUser: createUserReducer,
  signUpParams: signUpParamsReducer,
  dashboard: dashboardReducer,
  customerSavings: customerSavingsReducer,
  recentSavingTransactions: recentSavingTransactionsReducer,
  savingsConfiguration: savingsConfigurationReducer,
  bankList: bankListReducer,
  cards: cardsReducer,
  bankAccounts: bankAccountsReducer,
  fundWalletWithExistingCard: fundWalletWithExistingCardReducer,
  addBankAccount: addBankAccountReducer,
  startVerifyEmail: startVerifyEmailReducer,
  completeVerifyEmail: completeVerifyEmailReducer,
  addBvn: addBvnReducer,
  saveProfile: saveProfileReducer,
  startFundWalletWithNewCard: startFundWalletWithNewCardReducer,
  verifyFundWalletWithNewCard: verifyFundWalletWithNewCardReducer,
  applicationBootstrap: applicationBootstrapReducer,
  sendToken: sendTokenReducer,
  verifyAddBankAccount: verifyAddBankAccountReducer,
});
