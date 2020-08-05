import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { verifyFundWalletWithNewCard } from "state/ducks/verifyFundWalletWithNewCard/actions";
import AddBankContext from "contexts/AddBankContext";
import PaystackModal from "./components/PaystackModal";
import FundWalletModal from "./components/FundWalletModal";
import NoBankYetModal from "./components/NoBankYetModal";
import AddBankModal from "./components/AddBankModal";
import WithdrawFundsSuccess from "./components/WithdrawFundsSuccess";
import AddBankSuccess from "./components/AddBankSuccess";
import produce from "immer";

const AddBankProvider = ({ dispatchVerifyFundWalletWithNewCard, ...props }) => {
  const [state, setState] = useState({
    tranxRef: "",
    amount: 0,
    isFundWalletModalOpen: false,
    isSuccessModalOpen: false,
    isPaystackModalOpen: false,
    isNoBankYetModalOpen: false,
    isAddBankModalOpen: false,
    isAddBankSuccessModalOpen: false,
  });

  const openFundWalletModal = () => {
    setState(
      produce((draftState) => {
        draftState.isFundWalletModalOpen = true;
      })
    );
  };

  const closeFundWalletModal = () => {
    setState(
      produce((draftState) => {
        draftState.isFundWalletModalOpen = false;
      })
    );
  };

  const showSuccessModal = () => {
    setState(
      produce((draftState) => {
        draftState.isSuccessModalOpen = true;
        draftState.isFundWalletModalOpen = false;
      })
    );
  };

  const closeSuccessModal = () => {
    setState(
      produce((draftState) => {
        draftState.isSuccessModalOpen = false;
      })
    );
  };

  const showPaystackModal = () => {
    setState(
      produce((draftState) => {
        draftState.isPaystackModalOpen = true;
      })
    );
  };

  const closePaystackModal = () => {
    setState(
      produce((draftState) => {
        draftState.isPaystackModalOpen = false;
      })
    );
  };

  const openNoBankYetModal = () => {
    setState(
      produce((draftState) => {
        draftState.isNoBankYetModalOpen = true;
      })
    );
  };

  const closeNoBankYetModal = () => {
    setState(
      produce((draftState) => {
        draftState.isNoBankYetModalOpen = false;
      })
    );
  };

  const openAddBankModal = () => {
    setState(
      produce((draftState) => {
        draftState.isAddBankModalOpen = true;
      })
    );
  };

  const closeAddBankModal = () => {
    setState(
      produce((draftState) => {
        draftState.isAddBankModalOpen = false;
      })
    );
  };

  const showAddBankSuccessModal = () => {
    setState(
      produce((draftState) => {
        draftState.isAddBankSuccessModalOpen = true;
      })
    );
  };

  const closeAddBankSuccessModal = () => {
    setState(
      produce((draftState) => {
        draftState.isAddBankSuccessModalOpen = false;
      })
    );
  };

  const setAmount = (amount) => {
    setState(
      produce((draftState) => {
        draftState.amount = amount;
      })
    );
  };

  const openWithdrawFundsModal = () => {
    openNoBankYetModal();
  };

  const continueToPaystack = (tranxRef) => {
    setState(
      produce((draftState) => {
        draftState.tranxRef = tranxRef;
        draftState.isFundWalletModalOpen = false;
        draftState.isPaystackModalOpen = true;
      })
    );
  };

  const completePaystackPayment = () => {
    setState(
      produce((draftState) => {
        draftState.isPaystackModalOpen = false;
        draftState.isSuccessModalOpen = true;
      })
    );
  };

  const handlePaystackSuccess = () => {
    const params = { transactionReference: state.tranxRef };
    const meta = { completePaystackPayment };
    dispatchVerifyFundWalletWithNewCard(params, meta);
  };

  const continueToAddBankDetails = () => {
    setState(
      produce((draftState) => {
        draftState.isNoBankYetModalOpen = false;
        draftState.isAddBankModalOpen = true;
      })
    );
  };

  const showAddBankSuccess = () => {
    setState(
      produce((draftState) => {
        draftState.isAddBankModalOpen = false;
        draftState.isAddBankSuccessModalOpen = true;
      })
    );
  };

  const contextValues = {
    tranxRef: state.tranxRef,
    amount: state.amount,
    isFundWalletModalOpen: state.isFundWalletModalOpen,
    isSuccessModalOpen: state.isSuccessModalOpen,
    isPaystackModalOpen: state.isPaystackModalOpen,
    isNoBankYetModalOpen: state.isNoBankYetModalOpen,
    isAddBankModalOpen: state.isAddBankModalOpen,
    isAddBankSuccessModalOpen: state.isAddBankSuccessModalOpen,
    openFundWalletModal,
    closeFundWalletModal,
    showSuccessModal,
    closeSuccessModal,
    showPaystackModal,
    closePaystackModal,
    openNoBankYetModal,
    closeNoBankYetModal,
    openAddBankModal,
    closeAddBankModal,
    showAddBankSuccessModal,
    closeAddBankSuccessModal,
    setAmount,
    openWithdrawFundsModal,
    continueToPaystack,
    completePaystackPayment,
    handlePaystackSuccess,
    continueToAddBankDetails,
    showAddBankSuccess,
  };

  return (
    <Fragment>
      <AddBankContext.Provider value={contextValues}>
        {props.children}
        <FundWalletModal />
        <PaystackModal />
        <WithdrawFundsSuccess />
        <NoBankYetModal />
        <AddBankModal />
        <AddBankSuccess />
      </AddBankContext.Provider>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  customerDetails: state.account.data.customerDetails,
  startFundWithNewCardLoading: state.startFundWalletWithNewCard.loading,
  startFundWithNewCardError: state.startFundWalletWithNewCard.error,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchVerifyFundWalletWithNewCard: (payload, meta) =>
    dispatch(verifyFundWalletWithNewCard(payload, meta)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBankProvider);
