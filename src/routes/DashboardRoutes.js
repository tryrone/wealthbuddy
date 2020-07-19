import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MobileNav from "../pages/dashboard/components/MobileNav";
import NavBar from "../pages/dashboard/components/NavBar";
import Header from "../pages/dashboard/components/Header";
import DashboardHome from "../pages/dashboard/components/DashboardHome";
import Savings from "../pages/savings";
import { connect } from "react-redux";

const mobileMenu = false;

const DashboardRoutes = ({ user }) => {
  let { path } = useRouteMatch();

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
        </Switch>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.data,
});

export default connect(mapStateToProps)(DashboardRoutes);
