import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import InvestmentIcon from "shared-components/svgs/InvestmentIcon";
import SavingsIcon from "shared-components/svgs/SavingsIcon";
import GainIcon from "shared-components/svgs/GainIcon";
import WalletIcon from "shared-components/svgs/WalletIcon";
import AddFundIcon from "shared-components/svgs/AddFundIcon";
import DashboardIcon from "shared-components/svgs/DashboardIcon";
import { formatCurrency } from "utils";

const DashboardSummary = ({ dashboard }) => {
  return (
    <div className="flex flex-col card card-black flex-summary">
      <div className="flex justify-between items-center card-margin--x">
        <div className="text-white flex">
          <span className="mr-2 text-faded">
            <DashboardIcon />
          </span>
          <div>
            <h5 className="text-xs mb-2 font-medium text-faded ">
              Net asset value
            </h5>
            <h2 className="summary-balance font-medium text-primary">
              {`₦${formatCurrency(dashboard.netAssetValue)}`}
            </h2>
          </div>
        </div>
        <Link
          to="/dashboard/wallet"
          className="flex flex-col items-center text-white"
        >
          <span>
            <AddFundIcon />
          </span>
          <h5 className="text-xs mt-3 font-medium ">Add Fund</h5>
        </Link>
      </div>

      <div className="flex justify-between items-center card-margin--x mini-summary">
        <div className="text-white flex">
          <span className="mr-2 text-faded">
            <WalletIcon />
          </span>
          <div>
            <h5 className="text-xs mb-2 font-medium text-faded">Wallet</h5>
            <h2 className="summary-balance font-medium">
              {`₦${formatCurrency(dashboard.walletBalance)}`}
            </h2>
          </div>
        </div>
        <div className="text-white flex">
          <span className="mr-2 text-faded">
            <InvestmentIcon />
          </span>
          <div>
            <h5 className="text-xs mb-2 font-medium text-faded">Investment</h5>
            <h2 className="summary-balance font-medium">
              {`₦${formatCurrency(dashboard.totalInvestment)}`}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center card-margin--x mini-summary">
        <div className="text-white flex">
          <div className="mr-2 text-faded">
            <SavingsIcon />
          </div>
          <div>
            <h5 className="text-xs mb-2 font-medium text-faded">Savings</h5>
            <h2 className="summary-balance font-medium">
              {`₦${formatCurrency(dashboard.totalSavings)}`}
            </h2>
          </div>
        </div>
        <div className="text-white flex">
          <span className="mr-2 text-faded">
            <GainIcon />
          </span>
          <div>
            <h5 className="text-xs font-medium mb-2 text-faded">Daily gain</h5>
            <h2 className="summary-balance font-medium">
              {`₦${formatCurrency(dashboard.dailyGain)}`}
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

export default connect(mapStateToProps)(DashboardSummary);
