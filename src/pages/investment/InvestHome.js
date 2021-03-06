import React, { useEffect, useLayoutEffect } from "react";
import TotalCard from "./components/totalCard/TotalCard";
import { logo } from "assets/exports";
import TransactHistory from "./components/transactHistory/TransactHistory";
import { connect, useDispatch } from "react-redux";
import {
  getInvestmentTransactionsForFund,
  getAllInvestments,
  getAllFixedTransactions,
  getAllTbillsTransactions,
} from "../../state/slices/investments";
import MyInvestment from "./components/myInvestment/MyInvestment";
import Loading from "shared-components/Loading";
import "./style.css";

const InvestHome = ({
  investmentTransactionsForFundsLoading,
  investmentValuationLoading,
  getAllInvestmentsData,
  investmentValuationCompleted,
  investmentValuationData,
  allTbillsTrasactionsData,
  allFixedTrasactionsData,
  isEmpty,
  investmentTransactionsForFundsData,
}) => {
  const dispatch = useDispatch();
  const tegaSum = Object.keys(investmentValuationData).length;
  useLayoutEffect(() => {
    if (tegaSum === 0) {
      dispatch(getInvestmentTransactionsForFund());
      dispatch(getAllInvestments());
      dispatch(getAllTbillsTransactions());
      dispatch(getInvestmentTransactionsForFund());
      dispatch(getAllFixedTransactions());
    }
  }, []);

  return investmentValuationLoading ? (
    <div className="flex flex-col justify-center min-screen items-center">
      <div className="flex flex-col justify-center items-center">
        <i className="w-10 mb-4" dangerouslySetInnerHTML={{ __html: logo }} />
        <Loading text="" />
      </div>
    </div>
  ) : (
    <div className="px-12">
      {/* <p className="text-black mb-4 text-base">Hello, John Word</p> */}
      <div className="md:flex md:flex-shrink-0 savings-home--wrap  justify-between fadeIn">
        <div className="flex flex-col w-full mr-5 overflow-y-scroll hide-scroll overscroll-contain h-screen">
          <TotalCard />
          <p className="text-black mb-4 text-base">My Investment</p>
          <div className="has-scrollbar">
            <MyInvestment />
          </div>
        </div>
        <TransactHistory />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  investmentValuationLoading: state.investments.investmentValuationLoading,
  investmentValuationCompleted: state.investments.investmentValuationCompleted,
  investmentValuationData: state.investments.investmentValuationData,
  allPersonalInvestmentsLoading:
    state.investments.allPersonalInvestmentsLoading,
  getAllInvetstmentTransactionsLoading:
    state.investments.getAllInvetstmentTransactionsLoading,
  investmentTransactionsForFundsLoading:
    state.investments.investmentTransactionsForFundsLoading,
  investmentTransactionsForFundsData:
    state.investments.investmentTransactionsForFundsData,
  isEmpty: state.investments.getAllInvetstmentTransactionsisEmpty,
  allTbillsTrasactionsData: state.investments.allTbillsTrasactionsData,
  allFixedTrasactionsData: state.investments.allFixedTrasactionsData,
  getAllInvestmentsData: state.investments.getAllInvestmentsData,
});

export default connect(mapStateToProps)(InvestHome);

// !isEmpty ? (
//   <Redirect to="/dashboard/investment/add-investment" />
// ) :
