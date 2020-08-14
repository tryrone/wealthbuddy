import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import InvestHome from "./InvestHome";
import AddInvestment from "./components/addInvestments/AddInvestment";
import InvestmentInfo from "./components/investmentInfo/InvestmentInfo";
import AddInvestmentForm from "./components/addInvestmentForm/AddInvestmentForm";
import FundInvestment from "./fundInvestment/FundInvestment";
import ViewInvestment from "./viewAnInvestment/ViewInvestment";
import FundExistingInvestment from "./viewAnInvestment/component/fundExistingInvestment/FundExistingInvestment";
import WithdrawInvestment from "./withdrawInvestment/WithdrawInvestment";
import RollOver from "./rollOverInvestment/RollOver";
import TerminateInvestment from "./terminateInvestment/TerminateInvestment";

const Investment = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}`} component={InvestHome} />
      <Route exact path={`${path}/add-investment`} component={AddInvestment} />
      <Route
        exact
        path={`${path}/investment-info`}
        component={InvestmentInfo}
      />
      <Route
        exact
        path={`${path}/add-investment-form`}
        component={AddInvestmentForm}
      />
      <Route
        exact
        path={`${path}/fund-investment`}
        component={FundInvestment}
      />
      <Route
        exact
        path={`${path}/fund-investment/existing`}
        component={FundExistingInvestment}
      />
      <Route
        exact
        path={`${path}/view-investment`}
        component={ViewInvestment}
      />
      <Route
        exact
        path={`${path}/view-investment/withdraw`}
        component={WithdrawInvestment}
      />
      <Route
        exact
        path={`${path}/view-investment/roll-over`}
        component={RollOver}
      />
      <Route
        exact
        path={`${path}/view-investment/terminate`}
        component={TerminateInvestment}
      />
    </Switch>
  );
};

export default Investment;
