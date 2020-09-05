import React from "react";
import { walletIcon, outflowIcon, inflowIcon } from "assets/exports";
import { connect } from "react-redux";
import { formatCurrency } from "utils";

const WalletSummary = ({ dashboard }) => {
  return (
    <div className="flex flex-col card card-black flex-summary margin-x--zero">
      <div className="flex justify-between items-center card-margin--x">
        <div className="text-white">
          <h5 className="text-xs mb-2 font-medium text-faded">
            Wallet Balance
          </h5>
          <h2 className="summary-balance font-medium">
            {`₦${formatCurrency(dashboard.walletBalance)}`}
          </h2>
        </div>
        <div className="flex flex-col items-center text-white">
          <span
            className="wallet-main--icon"
            dangerouslySetInnerHTML={{ __html: walletIcon }}
          />
        </div>
      </div>

      <div className="flex justify-between items-center card-margin--x mini-summary">
        <div className="text-white flex">
          <span
            className="mr-2"
            dangerouslySetInnerHTML={{ __html: inflowIcon }}
          />
          <div>
            <h5 className="text-xs mb-2 font-medium text-faded">
              Monthly Inflow
            </h5>
            <h2 className="summary-balance font-medium">
              {`₦${formatCurrency(dashboard.totalMonthlyInflow)}`}
            </h2>
          </div>
        </div>
        <div className="text-white flex">
          <span
            className="mr-2"
            dangerouslySetInnerHTML={{ __html: outflowIcon }}
          />
          <div>
            <h5 className="text-xs mb-2 font-medium text-faded">
              Monthly Outflow
            </h5>
            <h2 className="summary-balance font-medium">
              {`₦${formatCurrency(dashboard.totalMonthlyOutFlow)}`}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard.data,
});

export default connect(mapStateToProps)(WalletSummary);
