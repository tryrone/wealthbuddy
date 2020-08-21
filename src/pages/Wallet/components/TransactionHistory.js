import React, { Fragment } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import 'react-perfect-scrollbar/dist/css/styles.css';
import EmptyCard from "shared-components/EmptyCard";
import personalSavings from "assets/img/personalIcon.png";
import { connect } from "react-redux";
import { formatCurrency } from "utils";
import moment from "moment";

const TransactionHistory = ({ walletTransactions }) => {
  const groups = walletTransactions.reduce((groups, transactions) => {
    const date = transactions.creationDate.split("T")[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(transactions);
    return groups;
  }, {});

  const groupedTransactions = Object.keys(groups).map((date) => {
    return {
      date: date,
      transactions: groups[date],
    };
  });

  return (
    <div className="wallet-wrap">
      <PerfectScrollbar className="card card-padding w-full">
        <div className="card-label">
          <h1 className="text-4xl mb-6 font-medium card-header">
            Transaction history
          </h1>
        </div>
        <div className="min-wallet">
          {groupedTransactions.length === 0 ? (
            <EmptyCard
              title="Nothing to see here yet."
              message="Find any of your savings plan to and see you your transactions history here."
            />
          ) : (
            <Fragment>
              {groupedTransactions.map((item, key) => (
                <Fragment key={key}>
                  <div className="remove-card--padding">
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
                            <img src={personalSavings} alt="Wealth Buddy" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <p className="tran-single--title mb-1 font-medium">
                              {items.name === null
                                ? "Personal Savings"
                                : items.description}
                            </p>
                            <p className="text-sm">
                              {`${moment(items.creationDate).format('h:mm a')} - ${
                                items.action === 2 ? "Fund" : "Withdrawal"
                              }`}
                            </p>
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
        </div>
      </PerfectScrollbar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  walletTransactions: state.dashboard.data.walletTransactions,
});

export default connect(mapStateToProps)(TransactionHistory);
