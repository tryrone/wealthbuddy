import React, { useState, useEffect } from "react";
import Chart from "../Chart";
import moment from "moment";
import { connect, useDispatch } from "react-redux";
import { investBars } from "../../imageLinks";
import {
  getAllTbillsTransactions,
  getInvestmentTransactionsForFund,
  getAllFixedTransactions,
} from "../../../../state/slices/investments";
import Loading from "shared-components/Loading";
import { formatCurrency } from "utils";
import LinesEllipsis from "react-lines-ellipsis";
import "./style.css";
import EmptyCard from "pages/dashboard/components/DashboardInner/EmptyCard";

const TransactHistory = (props) => {
  // const [myHeight, setHeight] = useState(400);
  const [activeOne, setactiveOne] = useState(true);
  const [activeTwo, setactiveTwo] = useState(false);
  const [activeThree, setactiveThree] = useState(false);

  const naira = "₦";
  const dollar = "$";

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      properTransactions.length === 0 &&
      fixedTransactions.length === 0 &&
      tBillsTransactions.length === 0
    ) {
      dispatch(getAllTbillsTransactions());
      dispatch(getAllFixedTransactions());
      dispatch(getInvestmentTransactionsForFund());
    }
  }, []);

  const properTransactions = props.investmentTransactionsForFundsData;
  const fixedTransactions = props.allFixedTrasactionsData;
  const tBillsTransactions = props.allTbillsTrasactionsData;

  // var trimmedString = string.substring(0, length);

  // console.log(fixedTransactions, "maa nigger");

  return props.investmentTransactionsForFundsLoading ? (
    <div className="shadow-2xl w-full bg-white border px-8 py-5 hide-scroll overflow-y-scroll h-screen">
      <Loading text="" />
    </div>
  ) : (
    <div
      style={{
        border: "1px solid #F1F1F1",
        borderRadius: "14px",
      }}
      className="shadow-2xl w-full bg-white border px-8 py-5 hide-scroll overflow-y-scroll h-screen"
    >
      <p className={`text-black text-base text-center mb-4 font-light`}>
        Transaction History
      </p>
      {fixedTransactions.length === 0 &&
      properTransactions.length === 0 &&
      tBillsTransactions.length === 0 ? (
        <EmptyCard
          title="Nothing here Yet"
          message="Create some Investments and see them show here"
        />
      ) : null}
      <div className="flex flex-row mt-8 justify-between main_border_wrap content-center items-center">
        {fixedTransactions.length === 0 ? null : (
          <p
            onClick={() => {
              setactiveOne(true);
              setactiveTwo(false);
              setactiveThree(false);
            }}
            className={`text-black text-base font-light sm:w-4/12 text-center cursor-pointer ${
              activeOne ? "active_me" : null
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
            className={`text-black text-base font-light sm:w-4/12 text-center two_borders cursor-pointer ${
              activeTwo ? "active_me" : null
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
            className={`text-black text-base font-light sm:w-4/12 text-center cursor-pointer ${
              activeThree ? "active_me" : null
            }`}
          >
            Treasury Bills
          </p>
        )}
      </div>

      <div className="hide-scroll overflow-y-scroll hide-scroll h-screen">
        <div style={{ display: activeTwo ? "block" : "none" }}>
          {/* invest content */}
          {props.investmentTransactionsForFundsLoading
            ? null
            : properTransactions.map((num, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row justify-between content-center items-center mt-8"
                  >
                    <div className="flex flex-col sm:flex-row content-center items-center">
                      <img src={investBars} />

                      <div className="ml-5 mt-4 sm:mt-0">
                        <p className="text-black text-base font-light">
                          {num.description}
                        </p>
                        <p
                          style={{ color: "#999999" }}
                          className="text-sm mt-2"
                        >
                          {num.transType}
                        </p>
                      </div>
                    </div>

                    <div className="mt-10 sm:mt-0">
                      <p className="text-black font-bold text-right font-light">
                        {num.currency === "NGN" ? naira : dollar}
                        {formatCurrency(num.transAmount)}
                      </p>
                      <p
                        style={{ color: "#999999" }}
                        className="text-sm text-right w-full mt-2"
                      >
                        {moment(parseInt(num.orderDate)).format("L")}
                      </p>
                    </div>
                  </div>
                );
              })}
        </div>
        <div style={{ display: activeOne ? "block" : "none" }}>
          {/* invest content */}
          {props.allFixedTrasactionsLoading
            ? null
            : !fixedTransactions
            ? null
            : fixedTransactions.map((num, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row justify-between content-center items-center mt-8"
                  >
                    <div className="flex flex-col sm:flex-row content-center items-center">
                      <img src={investBars} />

                      <div className="ml-5 mt-4 sm:mt-0">
                        <p className="text-black text-sm font-light">
                          {num.portfolioLabel}
                        </p>
                        <p
                          style={{ color: "#999999" }}
                          className="text-xs mt-2"
                        >
                          {num.label.substring(0, 15)}
                          {/* <LinesEllipsis
                          text={`${num.label}`}
                          maxLine="2"
                          ellipsis="..."
                          trimRight
                        /> */}
                          {/* {num.label} */}
                        </p>
                      </div>
                    </div>

                    <div className="mt-10 sm:mt-0">
                      <p className="text-black font-bold text-right font-light">
                        {num.currency === "NGN" ? naira : dollar}
                        {formatCurrency(num.faceValue)}
                      </p>
                      <p
                        style={{ color: "#999999" }}
                        className="text-sm mt-2 w-full text-right"
                      >
                        {moment(num.startDate).format("L")}
                      </p>
                    </div>
                  </div>
                );
              })}
        </div>

        <div
          style={{
            display: activeThree ? "block" : "none",
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
                      <p style={{ color: "#999999" }} className="text-sm mt-2">
                        <LinesEllipsis
                          text={`${num.label}`}
                          maxLine="2"
                          ellipsis="..."
                          trimRight
                        />
                        {/* {num.label} */}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 sm:mt-0">
                    <p className="text-black text-right font-bold font-light">
                      {num.currency === "NGN" ? naira : dollar}
                      {formatCurrency(num.faceValue)}
                    </p>
                    <p
                      style={{ color: "#999999" }}
                      className="text-sm text-right mt-2"
                    >
                      {moment(num.orderDate).format("L")}
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
  // INVESTMENT TRANSACTION
  investmentTransactionsForFundsLoading:
    state.investments.investmentTransactionsForFundsLoading,
  investmentTransactionsForFundsData:
    state.investments.investmentTransactionsForFundsData,
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

export default connect(mapStateToProps)(TransactHistory);
