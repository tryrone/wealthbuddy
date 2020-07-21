import React, { Fragment, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import MobileNav from "pages/dashboard/components/MobileNav";
import NavBar from "pages/dashboard/components/NavBar";
import Header from "pages/dashboard/components/Header";
import DashboardHome from "pages/dashboard/components/DashboardHome";
import Savings from "pages/savings";
import Wallet from "pages/wallet";
import Loader from "../shared-components/Loader";
import { getDashboardData } from "../state/ducks/dashboard/actions";
import { getCardsData } from "../state/ducks/cards/actions";
import { getCustomerSavingsData } from "../state/ducks/customerSavings/actions";
import { getRecentSavingTransactionsData } from "../state/ducks/recentSavingTransactions/actions";
import { getSavingsConfigurationData } from "../state/ducks/savingsConfiguration/actions";
import { getBankAccountsData } from "../state/ducks/bankAccounts/actions";

const mobileMenu = false;

const DashboardRoutes = ({ user, ...props }) => {
  let { path } = useRouteMatch();

  const loading =
    props.dashboardLoading ||
    props.cardsLoading ||
    props.customerSavingsLoading ||
    props.recentSavingTransactionsLoading ||
    props.bankAccountsLoading;

  useEffect(() => {
    props.dispatchGetDashboardData();
    props.dispatchGetCardsData();
    props.dispatchGetCustomerSavingsData();
    props.dispatchGetRecentSavingTransactionsData();
    props.dispatchGetSavingsConfigurationData();
    props.dispatchGetBankAccountsData();
  }, []);

  const userIsNew = !(user.isBVNAdded && user.isCardAdded);

  return (
    <Fragment>
      {!loading ? (
        <Fragment>
          <div className="flex">
            {mobileMenu && <MobileNav />}
            <NavBar />
            <section
              className={`flex-grow ${
                userIsNew ? "new-user" : "existing-entry"
              }`}
            >
              <Header />
              <Switch>
                <Route exact path={`${path}/`} component={DashboardHome} />
                <Route path={`${path}/savings`} component={Savings} />
                <Route exact path={`${path}/wallet`} component={Wallet} />
              </Switch>
            </section>
          </div>
        </Fragment>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.data,
  dashboardLoading: state.dashboard.loading,
  cardsLoading: state.cards.loading,
  customerSavingsLoading: state.customerSavings.loading,
  recentSavingTransactionsLoading: state.recentSavingTransactions.loading,
  savingsConfigurationLoading: state.savingsConfiguration.loading,
  bankAccountsLoading: state.bankAccounts.loading,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchGetDashboardData: () => dispatch(getDashboardData()),
  dispatchGetCardsData: () => dispatch(getCardsData()),
  dispatchGetCustomerSavingsData: () => dispatch(getCustomerSavingsData()),
  dispatchGetRecentSavingTransactionsData: () =>
    dispatch(getRecentSavingTransactionsData()),
  dispatchGetSavingsConfigurationData: () =>
    dispatch(getSavingsConfigurationData()),
  dispatchGetBankAccountsData: () => dispatch(getBankAccountsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardRoutes);
