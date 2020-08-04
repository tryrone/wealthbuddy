import React from "react";
import TotalCard from "./components/totalCard/TotalCard";
import TransactHistory from "./components/transactHistory/TransactHistory";
import MyInvestment from "./components/myInvestment/MyInvestment";

export default function InvestHome() {
  return (
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
}
