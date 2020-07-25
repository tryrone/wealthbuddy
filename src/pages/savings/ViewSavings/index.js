import React, { Fragment, useEffect, useState } from "react";
import { logo } from "assets/exports";
import { useParams } from "react-router-dom";
import Loading from "shared-components/Loading";
import "react-perfect-scrollbar/dist/css/styles.css";
import "toasted-notes/src/styles.css";
import { connect, useDispatch } from "react-redux";
import MainDetails from "./components/MainDetails";
import TransactionHistory from "./components/TransactionHistory";
import { fetchSavingsById } from "state/slices/savings";
import { unwrapResult } from "@reduxjs/toolkit";
import produce from "immer";
import CancelSavingsModal from "./components/StartCancelSavingsModal";
import {
  completeCancelSavings,
  startCancelSavings,
} from "state/slices/savings";
import CancelSavingsSuccess from "./components/CancelSavingsSuccess";
import StartWithdrawSavingsModal from "./components/StartWithdrawSavingsModal";

const ViewSavings = ({ customerSavings, history }) => {
  const { savingsId } = useParams();
  const dispatch = useDispatch();

  const savings =
    customerSavings.find((savingsItem) => {
      return savingsItem.savingsID === savingsId;
    }) || {};

  const [state, setState] = useState({
    transactionsLoaded: false,
    savingsTransactions: [],
    amountToDisburse: 0,
    isStartCancelSavingsModalVisible: false,
    isCancelSavingsSuccessModalVisible: false,
    isStartWithdrawSavingsModalVisible: false,
  });

  useEffect(() => {
    dispatch(fetchSavingsById(savingsId))
      .then(unwrapResult)
      .then((data) =>
        setState(
          produce((draft) => {
            draft.transactionsLoaded = true;
            draft.savingsTransactions = data || [];
          })
        )
      );
  }, []);

  const groups = state.savingsTransactions.reduce((groups, transactions) => {
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

  const startCancelProcess = () => {
    dispatch(startCancelSavings(savings))
      .then(unwrapResult)
      .then((data) => {
        setState(
          produce((draft) => {
            draft.isStartCancelSavingsModalVisible = true;
            draft.amountToDisburse = data.amountToDisburse;
          })
        );
      });
  };

  const completeCancelProcess = () => {
    dispatch(completeCancelSavings(savings))
      .then(unwrapResult)
      .then((data) => {
        setState(
          produce((draft) => {
            draft.isStartCancelSavingsModalVisible = false;
            draft.isCancelSavingsSuccessModalVisible = true;
          })
        );
      });
  };

  const closeStartCancelSavingsModal = () => {
    setState(
      produce((draft) => {
        draft.isStartCancelSavingsModalVisible = false;
      })
    );
  };

  const closeStartCancelSavingsSuccessModal = () => {
    setState(
      produce((draft) => {
        draft.isCancelSavingsSuccessModalVisible = false;
      })
    );

    history.push("/dashboard/savings");
  };

  const startWithdrawProcess = () => {
    setState(
      produce((draft) => {
        draft.isStartWithdrawSavingsModalVisible = true;
      })
    );
  };

  const closeStartWithdrawSavingsModalVisible = () => {
    setState(
      produce((draft) => {
        draft.isStartWithdrawSavingsModalVisible = false;
      })
    );
  };

  return (
    <Fragment>
      <div className="px-12 pb-12 inner-savings--wrap flex-wrap flex justify-between">
        {customerSavings.length > 0 && state.transactionsLoaded ? (
          <React.Fragment>
            <div className="w65">
              <div className="view-savings--wrap">
                <MainDetails
                  savings={savings}
                  startWithdrawSavings={startWithdrawProcess}
                  startCancelSavings={startCancelProcess}
                />
              </div>
            </div>

            <div className="w35">
              <TransactionHistory groupedTransactions={groupedTransactions} />
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

      <CancelSavingsModal
        isVisible={state.isStartCancelSavingsModalVisible}
        closeModal={closeStartCancelSavingsModal}
        amountToDisburse={state.amountToDisburse}
        completeCancelSavings={completeCancelProcess}
      />

      <CancelSavingsSuccess
        isVisible={state.isCancelSavingsSuccessModalVisible}
        closeModal={closeStartCancelSavingsSuccessModal}
        amountToDisburse={state.amountToDisburse}
      />

      <StartWithdrawSavingsModal
        isVisible={state.isStartWithdrawSavingsModalVisible}
        closeModal={closeStartWithdrawSavingsModalVisible}
        savings={savings}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  customerSavings: state.customerSavings.data,
});

export default connect(mapStateToProps)(ViewSavings);
