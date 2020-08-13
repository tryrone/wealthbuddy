import React, { useEffect } from "react";
import {
  smallDollar,
  withblack,
  withdram,
  terminate,
  fundInvestment,
} from "../../../imageLinks";
import { formatCurrency } from "utils";
import { connect, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";

const ViewCard = (props) => {
  const specificData = props.allPersonalInvestmentsData.filter(
    (item) => props.investmentId == item.securityId
  );
  return !props.investmentId ? (
    <Redirect to="/dashboard/investment" />
  ) : (
    <div
      style={{ borderRadius: "2px" }}
      className="card-padding card h-auto mt-6  card-black  flex-column  text-white"
    >
      <div className="flex flex-row items-center content-center">
        <img src={smallDollar} alt="wealth-buddy" />
        <p className="text-white text-opacity-25 self-center pt-1 pl-3">
          Total Investments
        </p>
      </div>
      <p className="text-gray-100 text-4xl font-bold pl-6">
        {`N${formatCurrency(
          !specificData[0].totalPurchaseCost
            ? null
            : specificData[0].totalPurchaseCost.toFixed(2)
        )} `}
      </p>

      <div className="flex flex-summary card-margin--x flex-wrap justify-between items-center content-center pt-6">
        <div className="text-left pl-6">
          <p className="text-base text-white text-opacity-25 ">
            Total Interest
          </p>
          <p className="ext-gray-100 text-2xl font-bold">
            {`N${formatCurrency(
              !specificData[0].currentValue
                ? null
                : specificData[0].currentValue.toFixed(2)
            )} `}
          </p>
        </div>
        <div
          style={{ width: "2px", height: "50px", backgroundColor: "#222222" }}
        />
        <div className="text-left card-margin--y ml-6 sm:ml-0 pr-6">
          <p className="text-base text-white text-opacity-25">
            Today's returns
          </p>
          <p className="text-gray-100 text-2xl font-bold text-right">
            {Math.sign(
              !specificData[0].totalGainLossPercent
                ? null
                : specificData[0].totalGainLossPercent.toFixed(2)
            )}
          </p>
        </div>
      </div>

      <div className="flex flex-summary flex-col sm:flex-row justify-between items-center content-center pt-6">
        <Link
          to={{
            pathname: "fund-investment/existing",
            investmentId: `${specificData[0].securityId}`,
          }}
          className="pl-2 flex items-center content-center"
        >
          <img src={fundInvestment} alt="wealth-buddy" className="pr-3" />
          <p className="text-white text-base self-center">Fund Investment</p>
        </Link>
        <Link
          to="/dashboard/investment/view-investment/withdraw"
          className="pl-6 flex mt-6 sm:mt-0 relative ml-2 sm:ml-0 items-center content-center pr-5"
        >
          <img src={withblack} alt="wealth-buddy" className="pr-3" />
          <p className="text-white text-base self-center">Withdraw</p>
        </Link>
        <Link
          to="/dashboard/investment/view-investment/terminate"
          className="pl-6 flex mt-6 sm:mt-0 relative ml-2 sm:ml-0 items-center content-center pr-5"
        >
          <img src={terminate} alt="wealth-buddy" className="pr-3" />
          <p className="text-white text-base self-center">Terminate</p>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // ALL PERSONAL INVESTMENT DATA
  allPersonalInvestmentsData: state.investments.allPersonalInvestmentsData,
  allPersonalInvestmentsLoading:
    state.investments.allPersonalInvestmentsLoading,
  allPersonalInvestmentsError: state.investments.allPersonalInvestmentsError,
});

export default connect(mapStateToProps)(ViewCard);
