import EmptyCard from "../../../DashboardInner/EmptyCard";
import React, { Fragment } from "react";
import GeneralUpdateItem from "./GeneralUpdateItem";
import {connect} from "react-redux";

const GeneralUpdate = ({ savingsTransactions = [] }) => (
  <Fragment>
    {savingsTransactions.length === 0 ? (
      <EmptyCard
        title="Nothing to see here yet."
        message="Find any of your savings plan to and see you your transactions history here."
      />
    ) : (
      <Fragment>
        {savingsTransactions.map((item, index) => (
          <div key={index} className="transaction-wealth--padding">
            <GeneralUpdateItem key={index} index={index} />
          </div>
        ))}
      </Fragment>
    )}
  </Fragment>
);

const mapStateToProps = (state) => ({
    savingsTransactions: state.dashboard.data.savingsTransactions,
});

export default connect(mapStateToProps)(GeneralUpdate);
