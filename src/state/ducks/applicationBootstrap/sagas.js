import { call, put, takeLatest, all } from "redux-saga/effects";
import { GET_APPLICATION_BOOTSTRAP_DATA } from "./types";
import { getApplicationBootstrapDataSuccess, getApplicationBootstrapDataFail } from "./actions";
import { Customer, Savings } from "services/network";
import { getDashboardDataSuccess } from "../dashboard/actions";
import { getCardsDataSuccess } from "../cards/actions";
import { getCustomerSavingsDataSuccess } from "../customerSavings/actions";
import { getRecentSavingTransactionsDataSuccess } from "../recentSavingTransactions/actions";
import { getSavingsConfigurationDataSuccess } from "../savingsConfiguration/actions";
import { getBankAccountsDataSuccess } from "../bankAccounts/actions";
import {getBankListDataSuccess} from "../bankList/actions";

function* operation() {
  try {
    const [
      dashboardResponse,
      cardsResponse,
      customerSavingsResponse,
      recentSavingTransactionsResponse,
      savingsConfiguration,
      userBanksResponse,
      bankListResponse,
    ] = yield all([
      call(Customer.getDashboard),
      call(Customer.getCustomerCards),
      call(Savings.getCustomerSavings),
      call(Savings.getSavingsTransactions),
      call(Savings.getSavingsConfiguration),
      call(Customer.getUserBanks),
      call(Customer.getBankList),
    ]);

    yield put(getDashboardDataSuccess(dashboardResponse.data.data));
    yield put(getCardsDataSuccess(cardsResponse.data.data));
    yield put(getCustomerSavingsDataSuccess(customerSavingsResponse.data.data));
    yield put(getRecentSavingTransactionsDataSuccess(recentSavingTransactionsResponse.data.data));
    yield put(getSavingsConfigurationDataSuccess(savingsConfiguration.data.data));
    yield put(getBankAccountsDataSuccess(userBanksResponse.data.data));
    yield put(getBankListDataSuccess(bankListResponse.data.data));
    yield put(getApplicationBootstrapDataSuccess());
  } catch (error) {
    yield put(getApplicationBootstrapDataFail());
  }
}

export default function* saga() {
  yield takeLatest(GET_APPLICATION_BOOTSTRAP_DATA, operation);
}
