import React, { Fragment, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { getApplicationBootstrapData } from "state/ducks/applicationBootstrap/actions";
import MobileNav from "pages/dashboard/components/MobileNav";
import NavBar from "pages/dashboard/components/NavBar";
import Header from "pages/dashboard/components/Header";
import Loader from "shared-components/Loader";
import DashboardHome from "pages/dashboard/components/DashboardHome";
import Savings from "routes/SavingsRoutes";
import Wallet from "pages/wallet";
import Investment from "pages/investment";
import Settings from "pages/settings";
import classNames from "classnames";
import NavigationProvider from "providers/NavigationProvider";
import NewUser from "../pages/NewUser";
import LockedOutModal from "../pages/auth/components/LockedOutModal";
import { timeOutAccountSession } from "../state/slices/account";
import IdleTimer from "react-idle-timer";

const DashboardRoutes = ({
  account,
  applicationBootstrapLoading,
  applicationBootstrapComplete,
  dispatchApplicationBootstrapData,
}) => {
  const { path } = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatchApplicationBootstrapData();
  }, []);

  const userIsNew = !(account.isBVNAdded && account.isCardAdded);

  const timeOutUserSession = () => {
    dispatch(timeOutAccountSession());
  };

  return (
    <Fragment>
      {!applicationBootstrapLoading || applicationBootstrapComplete ? (
        <NavigationProvider>
          <IdleTimer
            timeout={1000 * 300}
            onIdle={timeOutUserSession}
            debounce={250}
          />

          <div className="flex">
            <MobileNav />
            <NavBar />
            <section
              className={classNames({
                "flex-grow": true,
                "new-user": userIsNew,
                "existing-entry": !userIsNew,
              })}
            >
              <Header />
              {userIsNew ? (
                <NewUser />
              ) : (
                <Fragment>
                  <Switch>
                    <Route exact path={`${path}`} component={DashboardHome} />
                    <Route path={`${path}/savings`} component={Savings} />
                    <Route path={`${path}/investment`} component={Investment} />
                    <Route exact path={`${path}/wallet`} component={Wallet} />
                    <Route
                      exact
                      path={`${path}/settings`}
                      component={Settings}
                    />
                  </Switch>
                  {account.sessionTimedOut && <LockedOutModal />}
                </Fragment>
              )}
            </section>
          </div>
        </NavigationProvider>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  account: state.account.data,
  applicationBootstrapLoading: state.applicationBootstrap.loading,
  applicationBootstrapComplete: state.applicationBootstrap.completed,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchApplicationBootstrapData: () =>
    dispatch(getApplicationBootstrapData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardRoutes);
