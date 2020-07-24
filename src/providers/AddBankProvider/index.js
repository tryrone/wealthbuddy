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

const AddBankProvider = ({ dispatchVerifyFundWalletWithNewCard }) => {
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
    setState({ ...state, isFundWalletModalOpen: true });
  };

  const closeFundWalletModal = () => {
    setState({ ...state, isFundWalletModalOpen: false });
  };

  const showSuccessModal = () => {
    setState({ ...state, isSuccessModalOpen: true });
  };

  const closeSuccessModal = () => {
    setState({ ...state, isSuccessModalOpen: false });
  };

  const showPaystackModal = () => {
    setState({ ...state, isPaystackModalOpen: true });
  };

  const closePaystackModal = () => {
    setState({ ...state, isPaystackModalOpen: false });
  };

  const openNoBankYetModal = () => {
    setState({ ...state, isNoBankYetModalOpen: true });
  };

  const closeNoBankYetModal = () => {
    setState({ ...state, isNoBankYetModalOpen: false });
  };

  const openAddBankModal = () => {
    setState({ ...state, isAddBankModalOpen: true });
  };

  const closeAddBankModal = () => {
    setState({ ...state, isAddBankModalOpen: false });
  };

  const showAddBankSuccessModal = () => {
    setState({ ...state, isAddBankSuccessModalOpen: true });
  };

  const closeAddBankSuccessModal = () => {
    setState({ ...state, isAddBankSuccessModalOpen: false });
  };

  const setTranxRef = (tranxRef) => setState({ ...state, tranxRef });
  const setAmount = (amount) => setState({ ...state, amount });

  const continueToPaystack = (tranxRef) => {
    setTranxRef(tranxRef);
    showPaystackModal();
  };

  const completePaystackPayment = () => {
    closePaystackModal();
    showSuccessModal();
  };

  const handlePaystackSuccess = () => {
    const params = { transactionReference: state.tranxRef };
    const meta = { completePaystackPayment };
    dispatchVerifyFundWalletWithNewCard(params, meta);
  };

  const continueToAddBankDetails = () => {
    closeNoBankYetModal();
    openAddBankModal();
  };

  const showAddBankSuccess = () => {
    closeAddBankModal();
    showAddBankSuccessModal();
  };

  const contextValues = {
    ...state,
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
    setTranxRef,
    setAmount,
    continueToPaystack,
    completePaystackPayment,
    handlePaystackSuccess,
    continueToAddBankDetails,
    showAddBankSuccess,
  };

  return (
    <Fragment>
      <AddBankContext.Provider value={contextValues}>
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
  customerDetails: state.user.data.customerDetails,
  startFundWithNewCardLoading: state.startFundWalletWithNewCard.loading,
  startFundWithNewCardError: state.startFundWalletWithNewCard.error,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchVerifyFundWalletWithNewCard: (payload, meta) =>
    dispatch(verifyFundWalletWithNewCard(payload, meta)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBankProvider);
