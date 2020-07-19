import React from "react";
import EmptyCard from "./EmptyCard";

const DashboardSavings = () => (
  <div className="flex flex-col card">
    <h1 className="text-4xl mb-6 font-medium card-header">Your savings</h1>
    <div className="flex-grow flex justify-center items-center">
      <EmptyCard
        title="Nothing to see here yet."
        message="Find any of your savings plan to and see you your transactions history here."
      />
    </div>
  </div>
);

export default DashboardSavings;
