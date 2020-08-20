import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { getInvestmentValuation } from "../../../../state/slices/investments";
import {
  smallDollar,
  addInvestment,
  fundInvestment,
  investBars,
} from "../../imageLinks";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import { formatCurrency } from "utils";
import Loading from "shared-components/Loading";

const TotalCard = ({ investmentValuationData, investmentValuationLoading }) => {
  const [mySwicth, setMySwicth] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInvestmentValuation());
  }, []);

  const handleChange = (checked) => {
    setMySwicth(checked);
  };
  const fundReturns = !investmentValuationData.fundValue
    ? null
    : investmentValuationData.fundValue - !investmentValuationData.fundCost
    ? null
    : investmentValuationData.fundCost;

  return (
    <div
      style={{ borderRadius: "2px" }}
      className="card-padding card h-auto  card-black  flex-column  text-white"
    >
      <div className={`${mySwicth ? "hidden" : null}`}>
        <div className="flex flex-row items-center justify-between content-center">
          <div className="flex items-center">
            <img
              src={investBars}
              alt="wealth-buddy"
              style={{ height: "15px", width: "15px" }}
            />
            <p className="text-white text-opacity-25 self-center pt-1 pl-3">
              Total Investments
            </p>
          </div>
          <Switch
            onChange={(checked) => {
              setMySwicth(checked);
            }}
            checked={mySwicth}
          />
        </div>

        <p className="text-gray-100 text-4xl font-bold pl-6">
          {" "}
          {investmentValuationLoading ? (
            <div className="mx-auto flex flex-col content-center items-center">
              <Loading text="" />
            </div>
          ) : (
            `N${formatCurrency(
              !investmentValuationData.netAssetValue
                ? null
                : investmentValuationData.totalPortfolioReturn.toFixed(1)
            )} `
          )}
        </p>

        <div className="flex flex-summary card-margin--x flex-wrap justify-between items-center content-center pt-6">
          <div className="text-left pl-6">
            <p className="text-base text-white text-opacity-25 ">
              Total Interest
            </p>
            <p className="ext-gray-100 text-2xl font-bold">
              {investmentValuationLoading ? (
                <div className="mx-auto flex flex-col content-center items-center">
                  <Loading text="" />
                </div>
              ) : (
                `N${formatCurrency(
                  !investmentValuationData.commodityPerc
                    ? null
                    : fundReturns +
                        investmentValuationData.totalFixedDepositIncome +
                        investmentValuationData.totalTBillInterestValue
                )}`
              )}
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
              {investmentValuationLoading ? (
                <div className="mx-auto flex flex-col content-center items-center">
                  <Loading text="" />
                </div>
              ) : (
                `${Math.sign(
                  !investmentValuationData.commodityPerc
                    ? null
                    : fundReturns +
                        investmentValuationData.totalFixedDepositIncome +
                        investmentValuationData.totalTBillInterestValue
                )}`
              )}
            </p>
          </div>
        </div>

        <div className="flex flex-summary flex-col sm:flex-row justify-between items-center content-center pt-6">
          <Link
            to="/dashboard/investment/fund-investment"
            className="pl-6 flex items-center content-center"
          >
            <img src={fundInvestment} alt="wealth-buddy" className="pr-3" />
            <p className="text-white text-base self-center">Fund Investment</p>
          </Link>
          <Link
            to="/dashboard/investment/add-investment"
            className="pl-6 flex mt-6 sm:mt-0 relative ml-2 sm:ml-0 items-center content-center pr-5"
          >
            <img src={addInvestment} alt="wealth-buddy" className="pr-3" />
            <p className="text-white text-base self-center">Add Investment</p>
          </Link>
        </div>
      </div>

      {/* SECOND TOTAL SCREEN */}

      <div className={`${!mySwicth ? "hidden" : null}`}>
        {/* TOP SECTION */}
        <div className="flex justify-between items-center">
          <p className="text-white text-opacity-25 self-center">
            FUND INVESTMENT
          </p>
          <Switch
            onChange={(checked) => {
              setMySwicth(checked);
            }}
            checked={mySwicth}
          />
        </div>

        <p className="text-gray-100 text-base font-bold">
          Total Pur Cost:{" "}
          {investmentValuationLoading
            ? null
            : `N${formatCurrency(
                !investmentValuationData.netAssetValue
                  ? null
                  : investmentValuationData.fundCost.toFixed(1)
              )} `}
        </p>
        <p className="text-gray-100 text-base font-bold">
          Total Returns:{" "}
          {investmentValuationLoading
            ? null
            : `N${formatCurrency(
                !investmentValuationData.netAssetValue ? null : fundReturns
              )} `}
        </p>
        {/* TOP SECTION  END*/}

        {/* SECOND SECTION */}
        <div className="flex flex-summary card-margin--x flex-wrap justify-between items-center content-center pt-6">
          <div className="text-left">
            <p className="text-white text-opacity-25 self-center pt-1">
              FIXED DEPOSIT
            </p>
            <p className="text-gray-100 text-base font-bold">
              Total Pur. Cost{" "}
              {investmentValuationLoading
                ? null
                : `N${formatCurrency(
                    !investmentValuationData.commodityPerc
                      ? null
                      : investmentValuationData.totalFixedDepositPrincipal
                  )}`}
            </p>

            {/* PART TWO */}
            <p className="text-gray-100 text-base font-bold">
              Total Returns:{" "}
              {investmentValuationLoading
                ? null
                : `N${formatCurrency(
                    !investmentValuationData.commodityPerc
                      ? null
                      : investmentValuationData.totalFixedDepositIncome
                  )}`}
            </p>
            {/* PART TWO end */}
          </div>

          <div
            style={{ width: "2px", height: "50px", backgroundColor: "#222222" }}
          />
          <div className="text-left">
            <p className="text-white text-opacity-25 self-center">
              TBILLS INVESTMENT
            </p>
            <p className="text-gray-100 text-base font-bold text-right">
              Total Pur. Cost:{" "}
              {investmentValuationLoading
                ? null
                : `N ${Math.sign(
                    !investmentValuationData.commodityPerc
                      ? null
                      : investmentValuationData.totalTBillDiscountedValue
                  )}`}
            </p>
            <p className="text-gray-100 text-base font-bold text-right">
              Total Returns:{" "}
              {investmentValuationLoading
                ? null
                : `N ${Math.sign(
                    !investmentValuationData.commodityPerc
                      ? null
                      : investmentValuationData.totalTBillInterestValue
                  )}`}
            </p>
          </div>
        </div>
        {/* SECOND SECTION END */}
      </div>

      {/* SECOND TOTAL SCREEN END */}
    </div>
  );
};
const mapStateToProps = (state) => ({
  investmentValuationLoading: state.investments.investmentValuationLoading,
  investmentValuationError: state.investments.investmentValuationError,
  investmentValuationData: state.investments.investmentValuationData,
  isEmpty: state.investments.investmentValuationisEmpty,
});

export default connect(mapStateToProps)(TotalCard);
