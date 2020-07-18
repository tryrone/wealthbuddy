import { combineReducers } from "redux";
import userReducer from "./ducks/user";
import signUpReducer from "./ducks/signUp";
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

export default combineReducers({
  user: userReducer,
  signUp: signUpReducer,
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
});
