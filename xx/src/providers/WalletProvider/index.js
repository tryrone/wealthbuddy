import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { verifyFundWalletWithNewCard } from "state/ducks/verifyFundWalletWithNewCard/actions";
import AddBankContext from "contexts/AddBankContext";
import PaystackModal from "./components/PaystackModal";
import FundWalletModal from "./components/FundWalletModal";
import NoBankYetModal from "./components/NoBankYetModal";
import AddBankModal from "./components/AddBankModal";
import FundWalletSuccess from "./components/FundWalletSuccess";
import AddBankSuccess from "./components/AddBankSuccess";
import WithdrawFundsModal from "./components/WithdrawFundsModal";
import produce from "immer";

const WalletProvider = ({
  bankAccounts,
  dispatchVerifyFundWalletWithNewCard,
  ...props
}) => {
  const [state, setState] = useState({
    tranxRef: "",
    amount: 0,
    isFundWalletModalOpen: false,
    isSuccessModalOpen: false,
    isPaystackModalOpen: false,
    isNoBankYetModalOpen: false,
    isAddBankModalOpen: false,
    isAddBankSuccessModalOpen: false,
    isWithdrawFundsModalOpen: false,
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

  const startWithdrawFundsIntent = () => {
    if (bankAccounts && bankAccounts.length > 0) {
      openWithdrawFundsModal();
    } else {
      openNoBankYetModal();
    }
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

  const openWithdrawFundsModal = () => {
    setState(
      produce((draftState) => {
        draftState.isWithdrawFundsModalOpen = true;
      })
    );
  };

  const closeWithdrawFundsModal = () => {
    setState(
      produce((draftState) => {
        draftState.isWithdrawFundsModalOpen = false;
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
    isWithdrawFundsModalOpen: state.isWithdrawFundsModalOpen,
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
    continueToPaystack,
    completePaystackPayment,
    handlePaystackSuccess,
    startWithdrawFundsIntent,
    openWithdrawFundsModal,
    closeWithdrawFundsModal,
    continueToAddBankDetails,
    showAddBankSuccess,
  };

  return (
    <Fragment>
      <AddBankContext.Provider value={contextValues}>
        {props.children}
        <FundWalletModal />
        <PaystackModal />
        <FundWalletSuccess />
        <NoBankYetModal />
        <AddBankModal />
        <AddBankSuccess />

        <WithdrawFundsModal />
      </AddBankContext.Provider>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  bankAccounts: state.bankAccounts.data,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchVerifyFundWalletWithNewCard: (payload, meta) =>
    dispatch(verifyFundWalletWithNewCard(payload, meta)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletProvider);
