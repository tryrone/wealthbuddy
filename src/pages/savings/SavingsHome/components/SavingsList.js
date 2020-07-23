import React from "react";
import { addFundIcon } from "assets/exports";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SavingsListItem from "./SavingsListItem";

const SavingsList = ({ customerSavings }) => (
  <div className="single-savings--wrap summary-items--savings flex justify-between card-is--two flex-wrap w-full">
    <Link
      to="/dashboard/savings/create"
      className="card card-label addNewSavings card-padding flex justify-center items-center"
    >
      <div className="flex flex-col items-center text-black">
        <span dangerouslySetInnerHTML={{ __html: addFundIcon }} />
        <h5 className="card-header color-primary mt-3 font-medium ">
          Create new savings
        </h5>
      </div>
    </Link>
    {customerSavings.map((savings, index) => (
      <SavingsListItem savings={savings} key={index} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  customerSavings: state.customerSavings.data,
});

export default connect(mapStateToProps)(SavingsList);
