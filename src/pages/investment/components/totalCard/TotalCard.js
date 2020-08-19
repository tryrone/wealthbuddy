import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getInvestmentValuation } from "../../../../state/slices/investments";
import { smallDollar, addInvestment, fundInvestment } from "../../imageLinks";
import { Link } from "react-router-dom";
import { formatCurrency } from "utils";
import Loading from "shared-components/Loading";

const TotalCard = ({ investmentValuationData, investmentValuationLoading }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInvestmentValuation());
  }, []);

  return (
    <div
      style={{ borderRadius: "2px" }}
      className="card-padding card h-auto  card-black  flex-column  text-white"
    >
      <div className="flex flex-row items-center content-center">
        <img src={smallDollar} alt="wealth-buddy" />
        <p className="text-white text-opacity-25 self-center pt-1 pl-3">
          Total Investments
        </p>
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
              : investmentValuationData.netAssetValue.toFixed(2)
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
                  : investmentValuationData.commodityPerc.toFixed(2)
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
                !investmentValuationData.commodityReturn
                  ? null
                  : investmentValuationData.commodityReturn.toFixed(2)
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
  );
};
const mapStateToProps = (state) => ({
  investmentValuationLoading: state.investments.investmentValuationLoading,
  investmentValuationError: state.investments.investmentValuationError,
  investmentValuationData: state.investments.investmentValuationData,
  isEmpty: state.investments.investmentValuationisEmpty,
});

export default connect(mapStateToProps)(TotalCard);
