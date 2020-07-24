import React, { useEffect, useState } from "react";
import { logo } from "assets/exports";
import { getDesiredTime } from "utilities";
import personalSavings from "assets/img/personalIcon.png";
import { useParams } from "react-router-dom";
import Loading from "shared-components/Loading";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import EmptyCard from "shared-components/empty/empty-card";
import "toasted-notes/src/styles.css";
import { connect } from "react-redux";
import MainDetails from "./components/MainDetails";
import { formatCurrency } from "utils";
import { getAllSavingsData } from "state/ducks/getAllSavings/actions";

const ViewSavings = ({
  customerSavings,
  savingsTransactions,
  dispatchGetAllSavings,
}) => {
  const { savingsId } = useParams();
  const [transactionsLoaded] = useState(true);

  useEffect(() => {
    dispatchGetAllSavings({ params: { savingsId } });
  }, []);

  const groups = savingsTransactions.reduce((groups, transactions) => {
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

  // const proceed = () => {
  //     dispatch({
  //         type: "CHANGE_WITHDRAW_SAVINGS",
  //         newPayload: {
  //             ...withdrawSavings,
  //             type: getSingleItemArray.savingsType,
  //             modal: true,
  //             id: savingsId,
  //             name: getSingleItemArray.name,
  //             balance: getSingleItemArray.amountSaved
  //         }
  //     });
  // }

  return (
    <div className="px-12 pb-12 inner-savings--wrap flex-wrap flex justify-between">
      {customerSavings.length > 0 && transactionsLoaded ? (
        <React.Fragment>
          <div className="w65">
            <div className="view-savings--wrap">
              <MainDetails />
            </div>
          </div>

          <div className="w35">
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
                            <h4 className="transaction-range--header">
                              {3005060}
                            </h4>
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
                                  {`${
                                    items.action === 2 ? "+" : "-"
                                  }₦${formatCurrency(items.amount)}`}
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
          </div>
        </React.Fragment>
      ) : (
        <div className="flex flex-col justify-center min-screen items-center">
          <div className="flex flex-col justify-center items-center">
            <i
              className="w-10 mb-4"
              dangerouslySetInnerHTML={{ __html: logo }}
            />
            <Loading text="" />
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  customerSavings: state.customerSavings.data,
  savingsTransactions: state.getAllSavings.data,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchGetAllSavings: (payload, meta) =>
    dispatch(getAllSavingsData(payload, meta)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewSavings);
