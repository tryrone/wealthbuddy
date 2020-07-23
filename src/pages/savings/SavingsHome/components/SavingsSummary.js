import React from "react";
import { connect } from "react-redux";
import { formatCurrency } from "utils";
import { savingsIcon } from "assets/exports";

const SavingsSummary = ({ dashboard }) => (
  <div className="card card-padding card-black w-full flex justify-between items-center">
    <div className="text-white">
      <h5 className="text-xs mb-3 text-faded font-medium">Total saved</h5>
      <h2 className="summary-balance font-medium">
        {`₦${formatCurrency(dashboard.totalSavings)}`}
      </h2>
    </div>
    <div className="flex flex-col items-center text-white">
      <span
        className="wallet-main--icon"
        dangerouslySetInnerHTML={{ __html: savingsIcon }}
      />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  dashboard: state.dashboard.data,
});

export default connect(mapStateToProps)(SavingsSummary);
