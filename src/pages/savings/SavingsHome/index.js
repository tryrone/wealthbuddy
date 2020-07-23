import React from "react";
import StickyBox from "react-sticky-box";
import { connect } from "react-redux";
import TransactionHistory from "./components/TransactionHistory";
import SavingsSummary from "./components/SavingsSummary";
import SavingsList from "./components/SavingsList";

const SavingsHome = () => (
  <div className="px-12 flex flex-col fadeIn">
    <h1 className="text-4xl mb-6 font-medium">Savings</h1>

    <div className="flex">
      <div
        className="flex justify-between savings-home--wrap w-full"
        style={{ display: "flex", alignItems: "flex-start" }}
      >
        <StickyBox offsetTop={115} offsetBottom={20} className="w35">
          <div className="w-full w-transaction--max">
            <div className="savings-transactions flex flex-col">
              <SavingsSummary/>
              <TransactionHistory />
            </div>
          </div>
        </StickyBox>

        <div className="w65">
          <SavingsList/>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  customerSavings: state.customerSavings.data,
});

export default connect(mapStateToProps)(SavingsHome);
