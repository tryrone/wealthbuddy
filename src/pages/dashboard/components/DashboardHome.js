import React, { useEffect } from "react";
import DashboardSummary from "./DashboardInner/DashboardSummary";
import DashboardSavings from "./DashboardInner/DashboardSavings";
import DashboardAnalysis from "./DashboardInner/DashboardAnalysis";
import SummaryFeeds from "../components/DashboardInner/SummaryFeeds";
import { connect } from "react-redux";
import { getDashboardData } from "state/ducks/dashboard/actions";
import { getCustomerSavingsData } from "state/ducks/customerSavings/actions";
import { getSavingsConfigurationData } from "state/ducks/savingsConfiguration/actions";
import { getBankAccountsData } from "state/ducks/bankAccounts/actions";
import {getCardsData} from "state/ducks/cards/actions";
import {getRecentSavingTransactionsData} from "../../../state/ducks/recentSavingTransactions/actions";

const DashboardHome = (props) => {
  useEffect(() => {
    props.dispatchGetDashboardData();
    props.dispatchGetCardsData();
    props.dispatchGetCustomerSavingsData();
    props.dispatchGetRecentSavingTransactionsData();
    props.dispatchGetSavingsConfigurationData();
    props.dispatchGetBankAccountsData();
  });

  return (
    <div className="px-12 flex flex-col fadeIn">
      <h1 className="text-4xl mb-6 font-medium">Overview</h1>
      <div className="flex-wrap flex justify-between max-cards">
        <div className="flex home-card summary-analysis">
          <DashboardSummary />
          <DashboardSavings />
          <DashboardAnalysis />
        </div>
        <div className="flex home-card card summary-feeds">
          <SummaryFeeds />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.user.loginLoading,
  error: state.user.loginError,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchGetDashboardData: () => dispatch(getDashboardData()),
  dispatchGetCardsData: () => dispatch(getCardsData()),
  dispatchGetCustomerSavingsData: () => dispatch(getCustomerSavingsData()),
  dispatchGetRecentSavingTransactionsData: () => dispatch(getRecentSavingTransactionsData()),
  dispatchGetSavingsConfigurationData: () => dispatch(getSavingsConfigurationData()),
  dispatchGetBankAccountsData: () => dispatch(getBankAccountsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHome);
