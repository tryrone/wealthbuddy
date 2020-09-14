import React, { useEffect } from 'react';
import {
  smallDollar,
  withblack,
  withdram,
  terminate,
  fundInvestment,
  investBars,
} from '../../../imageLinks';
import { formatCurrency } from 'utils';
import { connect, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

const ViewCard = (props) => {
  // const specificData = props.allPersonalInvestmentsData.filter(
  //   (item) => props.investmentId == item.securityId
  // );

  const setInvestmentTypeOne = props.investmentValuationData.fixedDeposits.filter(
    (item) => item.instrumentId == props.investmentIdFixed
  );
  const setInvestmentTypeTwo = props.investmentValuationData.portfolioHoldings.filter(
    (item) => item.securityId == props.investmentIdFunds
  );
  const setInvestmentTypeThree = props.investmentValuationData.treasuryBills.filter(
    (item) => item.typeId == props.investmentIdTbills
  );

  let makeArray = [];

  if (setInvestmentTypeOne.length == 0 && setInvestmentTypeTwo.length == 0) {
    makeArray = setInvestmentTypeThree;
  } else if (
    setInvestmentTypeTwo.length == 0 &&
    setInvestmentTypeThree.length == 0
  ) {
    makeArray = setInvestmentTypeOne;
  } else if (
    setInvestmentTypeOne.length == 0 &&
    setInvestmentTypeThree.length == 0
  ) {
    makeArray = setInvestmentTypeTwo;
  }

  // console.log(setInvestmentTypeTwo, "web new issues");
  // console.log(setInvestmentTypeThree, "trust new issues");
  // props.investmentValuationData.length == 0 ? (
  //   <Redirect to="/dashboard/investment" />
  // ) :

  return (
    <div
      // style={{ borderRadius: "2px" }}
      className="card-padding card h-auto mt-6  card-black  flex-column  text-white"
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center content-center">
          {/* <img src={smallDollar} alt="wealth-buddy" /> */}
          <p className="text-white text-opacity-25 self-center pt-1 pl-3">
            Total Investments
          </p>
        </div>
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
        {`₦${formatCurrency(
          setInvestmentTypeOne.length == 0 && setInvestmentTypeTwo.length == 0
            ? makeArray[0].reportCurrentValue.amount
            : setInvestmentTypeTwo.length == 0 &&
              setInvestmentTypeThree.length == 0
            ? makeArray[0].netInstrumentValue.amount
            : makeArray[0].currentValue
        )} `}
      </p>

      <div className="flex flex-summary card-margin--x  justify-between items-center content-center pt-6">
        <div className="text-left sm:pl-6">
          <p className="text-base text-white text-opacity-25 ">
            Total Interest
          </p>
          <p className="ext-gray-100 text-2xl font-bold">
            {`+ ₦${formatCurrency(
              setInvestmentTypeOne.length == 0 &&
                setInvestmentTypeTwo.length == 0
                ? makeArray[0].interestAccrued.amount.toFixed(2)
                : setInvestmentTypeTwo.length == 0 &&
                  setInvestmentTypeThree.length == 0
                ? makeArray[0].interestLessTaxes.amount
                : makeArray[0].totalGainLoss
            )} `}
          </p>
        </div>
        <div
          style={{ width: '2px', height: '50px', backgroundColor: '#222222' }}
        />
        <div className="text-left card-margin--y ml-6 sm:ml-0 sm:pr-6">
          <p className="text-base text-white text-opacity-25">Total Returns</p>
          <p className="text-gray-100 text-2xl font-bold text-right">
            {`₦${formatCurrency(
              setInvestmentTypeOne.length == 0 &&
                setInvestmentTypeTwo.length == 0
                ? (
                    makeArray[0].reportCurrentValue.amount +
                    makeArray[0].interestAccrued.amount
                  ).toFixed(2)
                : setInvestmentTypeTwo.length == 0 &&
                  setInvestmentTypeThree.length == 0
                ? (
                    makeArray[0].interestLessTaxes.amount +
                    makeArray[0].netInstrumentValue.amount
                  ).toFixed(2)
                : (
                    makeArray[0].totalGainLoss + makeArray[0].totalPurchaseCost
                  ).toFixed(2)
            )}`}
          </p>
        </div>
      </div>

      <div className="flex flex-summary flex-row sm:flex-row justify-between items-center content-center pt-6">
        {setInvestmentTypeOne.length == 0 &&
        setInvestmentTypeThree.length == 0 ? (
          <Link
            to={{
              pathname: 'fund-investment/existing',
              // investmentId: `${specificData[0].securityId}`,
              investmentId: `${
                setInvestmentTypeOne.length == 0 &&
                setInvestmentTypeTwo.length == 0
                  ? makeArray[0].id
                  : setInvestmentTypeTwo.length == 0 &&
                    setInvestmentTypeThree.length == 0
                  ? makeArray[0].instrumentId
                  : makeArray[0].securityId
              }`,
            }}
            className="pl-2 flex items-center content-center"
          >
            <img src={fundInvestment} alt="wealth-buddy" className="sm:pr-3" />
            <p className="text-white text-base ml-3 self-center">
              Fund Investment
            </p>
          </Link>
        ) : null}

        {setInvestmentTypeOne.length == 0 &&
        setInvestmentTypeThree.length == 0 ? (
          <Link
            to={{
              pathname: '/dashboard/investment/view-investment/withdraw',
              // investmentId: `${specificData[0].securityId}`,
              investmentId: `${
                setInvestmentTypeOne.length == 0 &&
                setInvestmentTypeTwo.length == 0
                  ? makeArray[0].id
                  : setInvestmentTypeTwo.length == 0 &&
                    setInvestmentTypeThree.length == 0
                  ? makeArray[0].instrumentId
                  : makeArray[0].securityId
              }`,
            }}
            className="pl-6 flex flex-wrap  sm:mt-0 relative ml-2 sm:ml-0 items-center content-center pr-5"
          >
            <img src={withblack} alt="wealth-buddy" className="sm:pr-3" />
            <p className="text-white text-base self-center ">Withdraw</p>
          </Link>
        ) : null}

        {setInvestmentTypeOne.length == 0 &&
        setInvestmentTypeThree.length == 0 ? null : (
          <Link
            to={{
              pathname: '/dashboard/investment/view-investment/terminate',
              // investmentId: `${specificData[0].securityId}`,
              investmentId: `${
                setInvestmentTypeOne.length == 0 &&
                setInvestmentTypeTwo.length == 0
                  ? makeArray[0].id
                  : setInvestmentTypeTwo.length == 0 &&
                    setInvestmentTypeThree.length == 0
                  ? makeArray[0].instrumentId
                  : makeArray[0].securityId
              }`,
            }}
            className="pl-6 flex mt-6 sm:mt-0 relative ml-2 sm:ml-0 items-center content-center pr-5"
          >
            <img src={terminate} alt="wealth-buddy" className="pr-3" />
            <p className="text-white text-base self-center">Terminate</p>
          </Link>
        )}
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
  investmentValuationData: state.investments.investmentValuationData,
  investmentValuationLoading: state.investments.investmentValuationLoading,
});

export default connect(mapStateToProps)(ViewCard);
