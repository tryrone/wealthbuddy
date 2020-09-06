import React, { Fragment } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import EmptyCard from "pages/dashboard/components/DashboardInner/EmptyCard";
import { connect } from "react-redux";
import { formatCurrency } from "utils";
import moment from "moment";
import PersonalSavingsIcon from "assets/img/personalIcon.png";
import FixedLockSavingsIcon from "assets/img/fixedIcon.png";
import FixedFlexibleSavingsIcon from "assets/img/fixedFlex.png";
import GroupSavingsIcon from "assets/img/groupIcon.png";
import { walletIcon, outflowIcon, inflowIcon } from "assets/exports";



const TransactionHistory = ({ savingsTransactions }) => {
  const transactionGroups = savingsTransactions.reduce(
    (groups, transaction) => {
      const date = moment(transaction.creationDate).format("YYYY-MM-DD");
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(transaction);
      return groups;
    },
    {}
  );

  const groupedTransactions = Object.keys(transactionGroups).map((date) => {
    return {
      date: date,
      transactions: transactionGroups[date],
    };
  });

  const savingsIcon = (savingsType) => {
    switch (savingsType) {
      case 1:
        return PersonalSavingsIcon;
      case 2:
        return FixedLockSavingsIcon;
      case 3:
        return FixedFlexibleSavingsIcon;
      default:
        return GroupSavingsIcon;
    }
  };
  
console.log(`savings transac: ${savingsIcon()}`);

  return (
    <div className="card card-padding w-full has-scrollBar">
      <div className="card-label">
        <h1 className="text-4xl mb-6 font-medium card-header">
          Transaction history
        </h1>
      </div>
      <PerfectScrollbar>
        {groupedTransactions.length === 0 ? (
          <EmptyCard
            title="Nothing to see here yet."
            message="Find any of your savings plan to and see you your transactions history here."
          />
        ) : (
          <Fragment>
            {groupedTransactions.map((item, key) => (
              <Fragment key={key}>
                <div className="transaction-wealth--padding">
                  <div className="transaction--heading card-padding transaction-padding">
                    <h4 className="transaction-range--header">{item.date}</h4>
                  </div>
                  {item.transactions.map((items, key) => (
                    <div
                      key={key}
                      className="transaction-body flex justify-between items-center card-padding transaction-padding"
                    >
                      <div className="left-tran--summary flex align-items-center">
                        <div className="trans-image">
                        {
                             <img style={{width:"30px", height:"30px"}} src={savingsIcon(items.savingsType)} alt="" />
                          }
                        </div>
                        <div className="flex flex-col justify-center">
                          <p className="tran-single--title mb-1 font-medium">
                            {items.name === null
                              ? "Personal Savings"
                              : items.name}
                          </p>
                          <p className="text-sm">{`${moment(
                            items.creationDate
                          ).format("h:MM A")} - ${
                            items.action === 2 ? "Fund" : "Withdrawal"
                          }`}</p>
                        </div>
                      </div>
                      <div className="right-tran--summary">
                        <h3 className="tran-single--title card-header font-medium">
                          {`₦${formatCurrency(items.amount)}`}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </Fragment>
            ))}
          </Fragment>
        )}
      </PerfectScrollbar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  savingsTransactions: state.dashboard.data.savingsTransactions,
});  

export default connect(mapStateToProps)(TransactionHistory);
