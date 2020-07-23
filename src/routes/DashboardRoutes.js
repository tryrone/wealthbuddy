import React, { Fragment, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { getApplicationBootstrapData } from "state/ducks/applicationBootstrap/actions";
import MobileNav from "pages/dashboard/components/MobileNav";
import NavBar from "pages/dashboard/components/NavBar";
import Header from "pages/dashboard/components/Header";
import Loader from "../shared-components/Loader";
import DashboardHome from "pages/dashboard/components/DashboardHome";
import Savings from "routes/SavingsRoutes";
import Wallet from "pages/wallet";
import Settings from "pages/settings";

const mobileMenu = false;

const DashboardRoutes = ({
  user,
  applicationBootstrapLoading,
  applicationBootstrapComplete,
  dispatchApplicationBootstrapData,
}) => {
  let { path } = useRouteMatch();

  useEffect(() => {
    dispatchApplicationBootstrapData();
  }, []);

  const userIsNew = !(user.isBVNAdded && user.isCardAdded);

  return (
    <Fragment>
      {!applicationBootstrapLoading || applicationBootstrapComplete ? (
        <Fragment>
          <div className="flex">
            {mobileMenu && <MobileNav />}
            <NavBar />
            <section className={`flex-grow ${userIsNew ? "new-user" : "existing-entry"}`}>
              <Header />
              <Switch>
                <Route exact path={`${path}/`} component={DashboardHome} />
                <Route path={`${path}/savings`} component={Savings} />
                <Route exact path={`${path}/wallet`} component={Wallet} />
                <Route exact path={`${path}/settings`} component={Settings} />
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
  applicationBootstrapLoading: state.applicationBootstrap.loading,
  applicationBootstrapComplete: state.applicationBootstrap.completed,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchApplicationBootstrapData: () =>
    dispatch(getApplicationBootstrapData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardRoutes);
