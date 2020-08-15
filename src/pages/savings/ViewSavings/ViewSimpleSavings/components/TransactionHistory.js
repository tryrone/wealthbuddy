import React from "react";
import { getDesiredTime } from "utilities";
import personalSavings from "assets/img/personalIcon.png";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import EmptyCard from "shared-components/empty/empty-card";
import { formatCurrency } from "utils";

const ViewSavings = ({ groupedTransactions }) => (
  <div className="card card-padding w-full has-scrollBar single-savings--scroll">
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
        <React.Fragment>
          {groupedTransactions.map((item, key) => (
            <React.Fragment key={key}>
              <div className="transaction-wealth--padding">
                <div className="transaction--heading card-padding transaction-padding">
                  <h4 className="transaction-range--header">{3005060}</h4>
                </div>
                {item.transactions.map((items, key) => (
                  <div
                    key={key}
                    className="transaction-body flex justify-between items-center card-padding transaction-padding"
                  >
                    <div className="left-tran--summary flex align-items-center">
                      <div className="trans-image">
                        <img src={personalSavings} alt="" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <p className="tran-single--title font-medium">
                          {`${getDesiredTime(items.creationDate)}`}
                        </p>
                      </div>
                    </div>
                    <div className="right-tran--summary">
                      <h3
                        className={`tran-single--title card-header flex font-medium ${
                          items.action === 2 ? "" : "color-red"
                        }`}
                      >
                        {`${items.action === 2 ? "+" : "-"}₦${formatCurrency(
                          items.amount
                        )}`}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </React.Fragment>
      )}
    </PerfectScrollbar>
  </div>
);

export default ViewSavings;
