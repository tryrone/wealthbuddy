import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { SavingsType } from "constants/enums";
import ViewSimpleSavings from "./ViewSimpleSavings";
import ViewGroupSavings from "./ViewGroupSavings";

const ViewSavings = ({ customerSavings }) => {
  const { savingsId } = useParams();
  const SavingsTypes = { Simple: "simple", Group: "group" };

  const savings =
    customerSavings.find((savingsItem) => {
      return savingsItem.savingsID === savingsId;
    }) || {};

  let savingsType = null;

  switch (savings.savingsType) {
    case SavingsType.PersonalTargetSavings:
    case SavingsType.FixedLockSavings:
    case SavingsType.FixedFlexibleSavings:
      savingsType = SavingsTypes.Simple;
      break;
    case SavingsType.GroupTargetSavings:
    case SavingsType.GroupChallengeSavings:
    case SavingsType.GroupContributorySavings:
      savingsType = SavingsTypes.Group;
      break;
  }

  if (savingsType === SavingsTypes.Simple) {
    return <ViewSimpleSavings />;
  } else if (savingsType === SavingsTypes.Group) {
    return <ViewGroupSavings />;
  } else {
    return <div>Error 404</div>;
  }
};

const mapStateToProps = (state) => ({
  customerSavings: state.customerSavings.data,
});

export default connect(mapStateToProps)(ViewSavings);
