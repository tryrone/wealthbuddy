import React, { useEffect, useState } from 'react';
import Chart from '../../../components/Chart';
import { connect, useDispatch } from 'react-redux';
import { investBars } from '../../../imageLinks';
import moment from 'moment';
import Loading from 'shared-components/Loading';
import './style.css';
import { formatCurrency } from 'utils';

const TransactionHistory = (props) => {
  const [activeOne, setactiveOne] = useState(true);
  const [activeTwo, setactiveTwo] = useState(false);
  const [activeThree, setactiveThree] = useState(false);

  const naira = '₦';
  const dollar = '$';

  const properTransactions = props.investmentTransactionsForFundsData;
  const fixedTransactions = props.allFixedTrasactionsData;
  const tBillsTransactions = props.allTbillsTrasactionsData;

  return (
    <div
      style={{
        border: '1px solid #F1F1F1',
        borderRadius: '14px',
      }}
      className="shadow-2xl mt-6 w-full bg-white border px-8 py-5"
    >
      {/* <div className="flex justify-center content-center items-center">
        <p className="text-xs font-bold text-teal-700">+324,442.88</p>
        <p style={{ color: "#999999" }} className="text-xs">
          today
        </p>
      </div>
      <Chart /> */}
      <p className={`text-black text-base text-center mb-4 font-light`}>
        Transaction History
      </p>
      <div className="flex flex-row main_border_wrap mt-8 justify-between items-center">
        {fixedTransactions.length === 0 ? null : (
          <p
            onClick={() => {
              setactiveOne(true);
              setactiveTwo(false);
              setactiveThree(false);
            }}
            className={`text-black text-base pl-4 font-light sm:w-4/12 text-center cursor-pointer ${
              activeOne ? 'active_me' : null
            }`}
          >
            Fixed Deposits
          </p>
        )}
        {properTransactions.length === 0 ? null : (
          <p
            onClick={() => {
              setactiveTwo(true);
              setactiveOne(false);
              setactiveThree(false);
            }}
            className={`text-black px-4 text-base font-light sm:w-4/12 text-center two_borders cursor-pointer ${
              activeTwo ? 'active_me' : null
            }`}
          >
            Mutual Funds
          </p>
        )}
        {tBillsTransactions.length === 0 ? null : (
          <p
            onClick={() => {
              setactiveThree(true);
              setactiveTwo(false);
              setactiveOne(false);
            }}
            className={`text-black text-base px-4 font-light sm:w-4/12 text-center cursor-pointer ${
              activeThree ? 'active_me' : null
            }`}
          >
            Treasury Bills
          </p>
        )}
      </div>
      <div className="hide-scroll no_showing overflow-y-scroll h-screen">
        {/* invest content */}

        <div style={{ display: activeTwo ? 'block' : 'none' }}>
          {/* invest content */}
          {props.investmentTransactionsForFundsLoading ? (
            <Loading text="" />
          ) : (
            properTransactions.map((num, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row justify-between content-center items-center mt-8"
                >
                  <div className="flex flex-col sm:flex-row content-center items-center">
                    <img src={investBars} />

                    <div className="ml-5 mt-4 sm:mt-0">
                      <p className="text-black text-xs font-light">
                        {num.description}
                      </p>
                      <p style={{ color: '#999999' }} className="text-xs mt-2">
                        {num.transType}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 sm:mt-0">
                    <p className="text-black font-bold text-right font-light">
                      {num.currency === 'NGN' ? naira : dollar}
                      {formatCurrency(num.transAmount)}
                    </p>
                    <p
                      style={{ color: '#999999' }}
                      className="text-sm text-right w-full mt-2"
                    >
                      {moment(parseInt(num.orderDate)).format('L')}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div style={{ display: activeOne ? 'block' : 'none' }}>
          {/* invest content */}
          {props.allFixedTrasactionsLoading ? (
            <Loading text="" />
          ) : (
            fixedTransactions.map((num, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row justify-between content-center items-center mt-8"
                >
                  <div className="flex flex-col sm:flex-row content-center items-center">
                    <img src={investBars} />

                    <div className="ml-5 mt-4 sm:mt-0">
                      <p className="text-black text-base font-light">
                        {num.portfolioLabel}
                      </p>
                      <p style={{ color: '#999999' }} className="text-sm mt-2">
                        {num.label.substring(0, 15)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 sm:mt-0">
                    <p className="text-black font-bold text-right font-light">
                      {num.currency === 'NGN' ? naira : dollar}
                      {formatCurrency(num.faceValue)}
                    </p>
                    <p
                      style={{ color: '#999999' }}
                      className="text-sm text-right w-full mt-2"
                    >
                      {moment(num.startDate).format('L')}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div
          style={{
            display: activeThree ? 'block' : 'none',
          }}
        >
          {/* invest content */}
          {props.allTbillsTrasactionsLoading ? (
            <Loading text="" />
          ) : (
            tBillsTransactions.map((num, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row justify-between content-center items-center mt-8"
                >
                  <div className="flex flex-col sm:flex-row content-center items-center">
                    <img src={investBars} />

                    <div className="ml-5 mt-4 sm:mt-0">
                      <p className="text-black text-base font-light">
                        {num.instrumentTypeLabel}
                      </p>
                      <p style={{ color: '#999999' }} className="text-sm mt-2">
                        {num.label}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 sm:mt-0">
                    <p className="text-black font-bold text-right font-light">
                      {num.currency === 'NGN' ? naira : dollar}
                      {formatCurrency(num.faceValue)}
                    </p>
                    <p
                      style={{ color: '#999999' }}
                      className="text-sm text-right w-full mt-2"
                    >
                      {moment(num.orderDate).format('L')}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // ALL PERSONAL INVESTMENT DATA
  investmentTransactionsForFundsData:
    state.investments.investmentTransactionsForFundsData,
  investmentTransactionsForFundsLoading:
    state.investments.investmentTransactionsForFundsLoading,
  investmentTransactionsForFundsError:
    state.investments.investmentTransactionsForFundsError,

  allFixedTrasactionsLoading: state.investments.allFixedTrasactionsLoading,
  allFixedTrasactionsData: state.investments.allFixedTrasactionsData,
  allFixedTrasactionsError: state.investments.allFixedTrasactionsError,

  allTbillsTrasactionsLoading: state.investments.allTbillsTrasactionsLoading,
  allTbillsTrasactionsData: state.investments.allTbillsTrasactionsData,
  allTbillsTrasactionsError: state.investments.allTbillsTrasactionsError,

  investmentValuationLoading: state.investments.investmentValuationLoading,
  investmentValuationData: state.investments.investmentValuationData,
});

export default connect(mapStateToProps)(TransactionHistory);
