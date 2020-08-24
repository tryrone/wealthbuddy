import React, { useContext, useEffect } from "react";
import { connect } from "react-redux";
import { usePaystackPayment } from "react-paystack";
import AddBankContext from "contexts/AddBankContext";
import Loading from "shared-components/Loading";

const PaystackModal = ({ customerDetails, verifyFundWithNewCardLoading }) => {
  const {
    isPaystackModalOpen,
    amount,
    tranxRef,
    handlePaystackSuccess,
    closePaystackModal,
  } = useContext(AddBankContext);

  const initializePayment = usePaystackPayment({
    reference: tranxRef,
    email: customerDetails.email,
    amount: amount * 100,
    publicKey: process.env.REACT_APP_PAYSTACK_TEST_KEY,
  });

  useEffect(() => {
    if (isPaystackModalOpen) {
      initializePayment(handlePaystackSuccess, closePaystackModal);
    }
  }, [isPaystackModalOpen]);

  return (
    isPaystackModalOpen && (
      <div className="modal modal-active fixed inset-0 bg-wb-overlay flex justify-center items-center">
        {verifyFundWithNewCardLoading && <Loading text="" />}
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  customerDetails: state.account.data.customerDetails,
  verifyFundWithNewCardLoading: state.verifyFundWalletWithNewCard.loading,
});

export default connect(mapStateToProps)(PaystackModal);
