import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MobileNav from "../pages/dashboard/components/MobileNav";
import NavBar from "../pages/dashboard/components/NavBar";
import Header from "../pages/dashboard/components/Header";
import DashboardHome from "../pages/dashboard/components/DashboardHome";
import Savings from "../pages/savings";
import { connect } from "react-redux";
import Wallet from "../pages/wallet";
import FundWallet from "../pages/wallet/components/fundWallet/FundWallet";
import WithdrawFunds from "../pages/wallet/components/withdrawFunds/WithdrawFunds";
import Settings from "pages/settings";

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

          <Route path={`${path}/wallet`}>
            <Wallet show={showModal} show2={showModal2} />
          </Route>
          <Route path={`${path}/settings`}>
            <Settings/>
          </Route>

          {mode ? <FundWallet show={showModal} /> : null}
          {modeTwo ? <WithdrawFunds show2={showModal2} /> : null}
        </Switch>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.data,
});

export default connect(mapStateToProps)(DashboardRoutes);
