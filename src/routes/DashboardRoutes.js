import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MobileNav from "pages/dashboard/components/MobileNav";
import NavBar from "pages/dashboard/components/NavBar";
import Header from "pages/dashboard/components/Header";
import DashboardHome from "pages/dashboard/components/DashboardHome";
import Savings from "pages/savings";
import { connect } from "react-redux";
import FundWalletModal from "pages/wallet/components/FundWalletModal";
import WithdrawFundsModal from "pages/wallet/components/WithdrawFundsModal";
import Wallet from "pages/wallet";

const mobileMenu = false;

const DashboardRoutes = ({ user }) => {
  let { path } = useRouteMatch();

  const [mode, setMode] = useState(false);
  const [modeTwo, setTwo] = useState(false);

  const showModal = (value) => setMode(value);
  const showModal2 = (value) => setTwo(value);

  return (
    <div className="flex">
      {mobileMenu && <MobileNav />}
      <NavBar />
      <section
        className={`flex-grow ${
          !(user.isBVNAdded && user.isCardAdded) ? "new-user" : "existing-entry"
        }`}
      >
        <Header />
        <Switch>
          <Route exact path={`${path}/`} component={DashboardHome} />
          <Route path={`${path}/savings`} component={Savings} />

          <Route exact path={`${path}/wallet`}>
            <Wallet show={showModal} show2={showModal2} />
          </Route>

          {mode ? <FundWalletModal show={showModal} /> : null}
          {modeTwo ? <WithdrawFundsModal show2={showModal2} /> : null}
        </Switch>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.data,
});

export default connect(mapStateToProps)(DashboardRoutes);
