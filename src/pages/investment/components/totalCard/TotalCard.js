import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getInvestmentValuation } from '../../../../state/slices/investments';
import {
  smallDollar,
  addInvestment,
  fundInvestment,
  investBars,
} from '../../imageLinks';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import { formatCurrency } from 'utils';
import Loading from 'shared-components/Loading';

const TotalCard = ({ investmentValuationData, investmentValuationLoading }) => {
  const [mySwicth, setMySwicth] = useState(false);

  const totSum = Object.keys(investmentValuationData).length;

  const dispatch = useDispatch();
  useEffect(() => {
    if (totSum === 0) {
      dispatch(getInvestmentValuation());
    }
  }, []);

  const handleChange = (checked) => {
    setMySwicth(checked);
  };
  const fundReturns = !investmentValuationData.fundValue
    ? null
    : investmentValuationData.fundValue - !investmentValuationData.fundCost
    ? null
    : investmentValuationData.fundCost;

  const myTotalCost =
    investmentValuationData.fundCost +
    investmentValuationData.totalFixedDepositPrincipal +
    investmentValuationData.totalTBillDiscountedValue;

  return (
    <div
      // style={{ borderRadius: "2px" }}
      className="card-padding card h-auto  card-black  flex-column  text-white"
    >
      <div className={`${mySwicth ? 'hidden' : null}`}>
        <div className="flex flex-row items-center justify-between content-center">
          <div className="flex items-center">
            <p className="text-white text-opacity-25 self-center pt-1 pl-3">
              Total Returns
            </p>
          </div>
          {/* <Switch
            onChange={(checked) => {
              setMySwicth(checked);
            }}
            checked={mySwicth}
          /> */}
          <img
            src={investBars}
            alt="wealth-buddy"
            style={{
              height: '45px',
              width: '45px',
              position: 'relative',
              top: '10px',
            }}
          />
        </div>

        <p className="text-gray-100 text-4xl font-bold pl-6">
          {' '}
          {investmentValuationLoading
            ? '₦0'
            : `₦${formatCurrency(
                !investmentValuationData
                  ? null
                  : (
                      fundReturns +
                      investmentValuationData.totalFixedDepositIncome +
                      investmentValuationData.totalTBillInterestValue +
                      myTotalCost
                    ).toFixed(2)
              )}`}
        </p>

        <div className="flex flex-summary card-margin--x  justify-between items-center content-center pt-6">
          <div className="text-left sm:pl-6">
            <p className="text-base text-white text-opacity-25 ">
              Investment Capital
            </p>
            <p className="text-gray-100 text-2xl font-bold text-right">
              {investmentValuationLoading
                ? '₦0'
                : `₦${formatCurrency(
                    !investmentValuationData.totalPortfolioValue
                      ? null
                      : myTotalCost.toFixed(2)
                  )} `}
            </p>
          </div>
          <div
            style={{ width: '2px', height: '50px', backgroundColor: '#222222' }}
          />
          <div className="text-left card-margin--y ml-2 sm:ml-0 sm:pr-6">
            <p className="text-base text-white text-opacity-25">
              Total Interests
            </p>
            <p className="ext-gray-100 text-2xl font-bold">
              {investmentValuationLoading
                ? '₦0'
                : `+ ₦${formatCurrency(
                    !investmentValuationData
                      ? null
                      : fundReturns +
                          investmentValuationData.totalFixedDepositIncome +
                          investmentValuationData.totalTBillInterestValue
                  )}`}
            </p>
          </div>
        </div>

        <div className="flex flex-summary flex-row sm:flex-row justify-between items-center content-center pt-6">
          <Link
            to="/dashboard/investment/fund-investment"
            className="pl-2 flex items-center content-center"
          >
            <img src={fundInvestment} alt="wealth-buddy" className="pr-3" />
            <p className="text-white text-base self-center">Fund Investment</p>
          </Link>
          <Link
            to="/dashboard/investment/add-investment"
            className="pl-6 flex sm:mt-6 sm:mt-0 relative ml-2 sm:ml-0 items-center content-center pr-5"
          >
            <img src={addInvestment} alt="wealth-buddy" className="pr-3" />
            <p className="text-white text-base self-center">Add Investment</p>
          </Link>
        </div>
      </div>

      {/* SECOND TOTAL SCREEN */}

      <div className={`${!mySwicth ? 'hidden' : null}`}>
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
          Purchase Cost:{' '}
          {investmentValuationLoading
            ? null
            : `N${formatCurrency(
                !investmentValuationData.netAssetValue
                  ? null
                  : investmentValuationData.fundCost.toFixed(1)
              )} `}
        </p>
        <p className="text-gray-100 text-base font-bold">
          Total Returns:{' '}
          {investmentValuationLoading
            ? null
            : `N${formatCurrency(
                !investmentValuationData.netAssetValue ? null : fundReturns
              )} `}
        </p>
        {/* TOP SECTION  END*/}

        {/* SECOND SECTION */}
        <div className=" flex flex-summary flex-col sm:flex-row justify-between items-center content-center  pt-3 mt-6  border-t-2 border-white border-solid border-opacity-25">
          <div className="text-left">
            <p className="text-white text-opacity-25 self-center pt-1">
              FIXED DEPOSIT
            </p>
            <p className="text-gray-100 text-base font-bold">
              Purchase Cost{' '}
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
              Total Returns:{' '}
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
            style={{ width: '2px', height: '50px', backgroundColor: '#222222' }}
          />
          <div className="text-left">
            <p className="text-white text-opacity-25 self-center">
              TBILLS INVESTMENT
            </p>
            <p className="text-gray-100 text-base font-bold text-right">
              Purchase Cost:{' '}
              {investmentValuationLoading
                ? null
                : `N${Math.sign(
                    !investmentValuationData.commodityPerc
                      ? null
                      : investmentValuationData.totalTBillDiscountedValue
                  )}`}
            </p>
            <p className="text-gray-100 text-base font-bold text-right">
              Total Returns:{' '}
              {investmentValuationLoading
                ? null
                : `N${Math.sign(
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
