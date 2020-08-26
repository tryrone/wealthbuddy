import React, { Fragment, useEffect, useState } from "react";
import { logo } from "assets/exports";
import { useHistory, useParams } from "react-router-dom";
import Loading from "shared-components/Loading";
import "react-perfect-scrollbar/dist/css/styles.css";
import "toasted-notes/src/styles.css";
import { connect, useDispatch } from "react-redux";
import MainDetails from "./components/MainDetails";
import TransactionHistory from "./components/TransactionHistory";
import { unwrapResult } from "@reduxjs/toolkit";
import produce from "immer";
import {
  fetchGroupSavingsById,
  startWithdrawSavings,
  completeWithdrawSavings,
  cancelGroupSavings,
  startGroupSavings as startGroupSavingsRequest,
} from "state/slices/savings";
import CancelSavingsModal from "./components/ConfirmCancelSavingsModal";
import CancelSavingsSuccess from "./components/CancelSavingsSuccess";
import StartWithdrawSavingsModal from "./components/StartWithdrawSavingsModal";
import WithdrawalSummaryModal from "./components/WithdrawalSummaryModal";
import WithdrawSavingsSuccess from "./components/WithdrawSavingsSuccess";
import { getDashboardData } from "state/ducks/dashboard/actions";
import { getCustomerSavingsData } from "state/ducks/customerSavings/actions";
import { getRecentSavingTransactionsData } from "state/ducks/recentSavingTransactions/actions";

const ViewGroupSavings = ({ customerSavings }) => {
  const { savingsId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const savings =
    customerSavings.find((savingsItem) => {
      return savingsItem.savingsID === savingsId;
    }) || {};

  const [state, setState] = useState({
    transactionsLoaded: false,
    groupSavings: {},
    groupMembers: [],
    invitations: [],
    savingsTransactions: [],
    amountToDisburse: 0,
    penalty: 0,
    amountSaved: 0,
    isStartGroupSavingsLoading: false,
    isConfirmCancelSavingsModalVisible: false,
    isCancelSavingsSuccessModalVisible: false,
    isStartWithdrawSavingsModalVisible: false,
    isWithdrawalSummaryModalVisible: false,
    isWithdrawSavingsSuccessModalVisible: false,
    isCancelSavingsLoading: false,
    cancelSavingsError: null,
  });

  useEffect(() => {
    getGroupSavings().then(undefined);
  }, [savings]);

  const getGroupSavings = async () => {
    const resultAction = await dispatch(fetchGroupSavingsById(savings));
    if (fetchGroupSavingsById.fulfilled.match(resultAction)) {
      const groupSavingsResponse = unwrapResult(resultAction);
      groupSavingsResponse.groupSavings.type = savings.savingsType;

      setState(
        produce((draft) => {
          draft.transactionsLoaded = true;
          draft.groupSavings = groupSavingsResponse.groupSavings;
          draft.groupMembers = groupSavingsResponse.groupMembers || [];
          draft.invitations = groupSavingsResponse.invitations || [];
          draft.savingsTransactions = groupSavingsResponse.transactions || [];
        })
      );
    } else {
      setState(
        produce((draft) => {
          draft.transactionsLoaded = false;
        })
      );
    }
  };

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

  const startGroupSavings = async () => {
    setState(
      produce((draft) => {
        draft.isStartGroupSavingsLoading = true;
      })
    );

    const payload = {
      savingsType: savings.savingsType,
      savingsID: state.groupSavings.id,
    };

    const resultAction = await dispatch(startGroupSavingsRequest(payload));

    if (startGroupSavingsRequest.fulfilled.match(resultAction)) {
      setState(
        produce((draft) => {
          draft.isStartGroupSavingsLoading = false;
        })
      );
      getGroupSavings().then(undefined);
    } else {
      setState(
        produce((draft) => {
          draft.isStartGroupSavingsLoading = false;
        })
      );
    }
  };

  const confirmCancel = () => {
    setState(
      produce((draft) => {
        draft.isConfirmCancelSavingsModalVisible = true;
      })
    );
  };

  const cancelSavings = async () => {
    const payload = {
      savingsType: savings.savingsType,
      savingsID: state.groupSavings.id,
    };

    setState(
      produce((draft) => {
        draft.isCancelSavingsLoading = true;
        draft.cancelSavingsError = null;
      })
    );

    const resultAction = await dispatch(cancelGroupSavings(payload));

    if (cancelGroupSavings.fulfilled.match(resultAction)) {
      setState(
        produce((draft) => {
          draft.isCancelSavingsLoading = false;
          draft.cancelSavingsError = null;
          draft.isConfirmCancelSavingsModalVisible = false;
          draft.isCancelSavingsSuccessModalVisible = true;
        })
      );
    } else {
      setState(
        produce((draft) => {
          draft.isCancelSavingsLoading = false;
          draft.cancelSavingsError = resultAction.error.message;
        })
      );
    }
  };

  const startWithdrawProcess = async (formValues) => {
    const payload = {
      savingsType: savings.savingsType,
      formValues: {
        amount: parseFloat(formValues.amount),
        savingsID: state.groupSavings.id,
      },
    };

    const resultAction = await dispatch(startWithdrawSavings(payload));

    if (startWithdrawSavings.fulfilled.match(resultAction)) {
      const withdrawalDetails = unwrapResult(resultAction);
      setState(
        produce((draft) => {
          draft.isStartWithdrawSavingsModalVisible = false;
          draft.isWithdrawalSummaryModalVisible = true;
          draft.penalty = withdrawalDetails.penalty;
          draft.amountSaved = withdrawalDetails.amountSaved;
          draft.amountToDisburse = withdrawalDetails.amountToDisburse;
        })
      );
    }
  };

  const completeWithdrawProcess = async () => {
    const payload = {
      savingsType: savings.savingsType,
      formValues: {
        amount: parseFloat(state.amountToDisburse),
        savingsID: state.groupSavings.id,
      },
    };

    const resultAction = await dispatch(completeWithdrawSavings(payload));

    if (completeWithdrawSavings.fulfilled.match(resultAction)) {
      setState(
        produce((draft) => {
          draft.isWithdrawalSummaryModalVisible = false;
          draft.isWithdrawSavingsSuccessModalVisible = true;
        })
      );
    }
  };

  const closeConfirmCancelSavingsModal = () => {
    setState(
      produce((draft) => {
        draft.isConfirmCancelSavingsModalVisible = false;
      })
    );
  };

  const closeCancelSavingsSuccessModal = () => {
    setState(
      produce((draft) => {
        draft.isCancelSavingsSuccessModalVisible = false;
      })
    );

    dispatch(getDashboardData());
    dispatch(getCustomerSavingsData());
    dispatch(getRecentSavingTransactionsData());

    history.push("/dashboard/savings");
  };

  const openStartWithdrawSavingsModal = () => {
    setState(
      produce((draft) => {
        draft.isStartWithdrawSavingsModalVisible = true;
      })
    );
  };

  const closeStartWithdrawSavingsModal = () => {
    setState(
      produce((draft) => {
        draft.isStartWithdrawSavingsModalVisible = false;
      })
    );
  };

  const showWithdrawalSummaryModal = (data) => {
    setState(
      produce((draft) => {
        draft.isStartWithdrawSavingsModalVisible = false;
        draft.isWithdrawalSummaryModalVisible = true;
        draft.penalty = data.penalty;
        draft.amountSaved = data.amountSaved;
        draft.amountToDisburse = data.amountToDisburse;
      })
    );
  };

  const closeWithdrawalSummaryModal = () => {
    setState(
      produce((draft) => {
        draft.isWithdrawalSummaryModalVisible = false;
      })
    );
  };

  const closeWithdrawSavingsSuccessModal = () => {
    setState(
      produce((draft) => {
        draft.isWithdrawSavingsSuccessModalVisible = false;
      })
    );

    history.push("/dashboard/wallet");
  };

  return (
    <Fragment>
      <div className="px-12 pb-12 inner-savings--wrap flex-wrap flex justify-between">
        {customerSavings.length > 0 && state.transactionsLoaded ? (
          <React.Fragment>
            <div className="w65">
              <div className="view-savings--wrap">
                <MainDetails
                  savings={state.groupSavings}
                  groupMembers={state.groupMembers}
                  invitations={state.invitations}
                  isStartGroupSavingsLoading={state.isStartGroupSavingsLoading}
                  startWithdrawSavings={openStartWithdrawSavingsModal}
                  startGroupSavings={startGroupSavings}
                  confirmCancel={confirmCancel}
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
        isVisible={state.isConfirmCancelSavingsModalVisible}
        isCancelSavingsLoading={state.isCancelSavingsLoading}
        cancelSavingsError={state.cancelSavingsError}
        cancelSavings={cancelSavings}
        closeModal={closeConfirmCancelSavingsModal}
      />

      <CancelSavingsSuccess
        isVisible={state.isCancelSavingsSuccessModalVisible}
        closeModal={closeCancelSavingsSuccessModal}
      />

      <StartWithdrawSavingsModal
        isVisible={state.isStartWithdrawSavingsModalVisible}
        closeModal={closeStartWithdrawSavingsModal}
        savings={state.groupSavings}
        startWithdrawProcess={startWithdrawProcess}
        continueToWithdrawalSummary={showWithdrawalSummaryModal}
      />

      <WithdrawalSummaryModal
        isVisible={state.isWithdrawalSummaryModalVisible}
        closeModal={closeWithdrawalSummaryModal}
        savings={state.groupSavings}
        withdrawalDetails={{
          penalty: state.penalty,
          amountSaved: state.amountSaved,
          amountToDisburse: state.amountToDisburse,
        }}
        completeWithdrawSavings={completeWithdrawProcess}
      />

      <WithdrawSavingsSuccess
        isVisible={state.isWithdrawSavingsSuccessModalVisible}
        closeModal={closeWithdrawSavingsSuccessModal}
        amountToDisburse={state.amountToDisburse}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  customerSavings: state.customerSavings.data,
});

export default connect(mapStateToProps)(ViewGroupSavings);
