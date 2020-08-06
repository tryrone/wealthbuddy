import React, { useEffect } from "react";
import TotalCard from "./components/totalCard/TotalCard";
import TransactHistory from "./components/transactHistory/TransactHistory";
import { connect, useDispatch } from "react-redux";
import {
  getInvestmentTransactions,
  getInvestmentFundsActive,
} from "../../state/slices/investments";
import MyInvestment from "./components/myInvestment/MyInvestment";
import { unwrapResult } from "@reduxjs/toolkit";
import Loading from "shared-components/Loading";

const InvestHome = ({
  investmentFundsActiveLoading,
  investmentFundsActiveData,
  history,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInvestmentTransactions());
    dispatch(getInvestmentFundsActive());
    if (!investmentFundsActiveData) {
      history.location.push("/dashboard/investment/add-investment");
    }
  }, []);
  return investmentFundsActiveLoading ? (
    <div className="px-12 flex justify-center content-center items-center">
      <Loading text="Loading" />
    </div>
  ) : (
    <div className="px-12">
      <p className="text-black mb-4 text-base">Hello, John Word</p>
      <div className="md:flex md:flex-shrink-0 savings-home--wrap  justify-between fadeIn">
        <div className="flex flex-col w-full mr-5">
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
  investmentTransactionsLoading:
    state.investments.investmentTransactionsLoading,
  investmentTransactionsError: state.investments.investmentTransactionsError,
  investmentTransactionsData: state.investments.investmentTransactionsData,
  // GET FUNDS ACTIVE
  investmentFundsActiveData: state.investments.investmentFundsActiveData,
  investmentFundsActiveError: state.investments.investmentFundsActiveError,
  investmentFundsActiveLoading: state.investments.investmentFundsActiveLoading,
});

export default connect(mapStateToProps)(InvestHome);
