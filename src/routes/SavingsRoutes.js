import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import SavingsHome from "pages/savings/SavingsHome";
import ViewSavings from "pages/savings/ViewSavings";
import CreateSavingsHome from "pages/savings/CreateSavingsHome";
import PersonalSavings from "pages/savings/PersonalSavings/PersonalSavings";
import CreateFixedLockSavings from "pages/savings/CreateFixedLockSavings"
import CreateFixedFlexibleSavings from "pages/savings/CreateFixedFlexibleSavings"
import CreateGroupTargetSavings from "pages/savings/CreateGroupTargetSavings";
import CreateGroupChallengeSavings from "pages/savings/CreateGroupChallengeSavings";
import CreateGroupContributorySavings from "pages/savings/CreateGroupContributorySavings";

const Savings = () => {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}`} component={SavingsHome} />
      <Route exact path={`${path}/create`} component={CreateSavingsHome} />
      <Route path={`${path}/create/personal`} component={PersonalSavings} />
      <Route path={`${path}/create/fixed-lock`} component={CreateFixedLockSavings} />
      <Route path={`${path}/create/fixed-flexible`} component={CreateFixedFlexibleSavings} />
      <Route path={`${path}/create/group-target`} component={CreateGroupTargetSavings} />
      <Route path={`${path}/create/group-challenge`} component={CreateGroupChallengeSavings} />
      <Route path={`${path}/create/group-contributory`} component={CreateGroupContributorySavings} />
      <Route path={`${path}/view/:savingsId`} component={ViewSavings} />
    </Switch>
  );
};

export default Savings;
