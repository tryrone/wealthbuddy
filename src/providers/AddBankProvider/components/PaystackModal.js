import React, { useContext, useEffect } from "react";
import { connect } from "react-redux";
import { PaystackButton, usePaystackPayment } from "react-paystack";
import Loading from "shared-components/Loading";
import AddBankContext from "contexts/AddBankContext";

const PaystackModal = ({ customerDetails, verifyFundWithNewCardLoading }) => {
  const {
    isPaystackModalOpen,
    amount,
    tranxRef,
    handlePaystackSuccess,
    closePaystackModal,
  } = useContext(AddBankContext);

  const config = {
    reference: tranxRef,
    email: customerDetails.email,
    amount: amount * 100,
    publicKey: process.env.REACT_APP_PAYSTACK_TEST_KEY,
    onSuccess: handlePaystackSuccess,
    onClose: closePaystackModal,
  };

  const initializePayment = usePaystackPayment(config);

  useEffect(() => {
    if (isPaystackModalOpen) {
      initializePayment();
      // setTimeout(() => {
      //   document.querySelector(".payButton").click();
      // }, 1000);
    }
  }, [isPaystackModalOpen]);

  if (!isPaystackModalOpen) {
    return null;
  }

  return (
    <div className="modal modal-active fixed inset-0 bg-wb-overlay flex justify-center items-center">
      {verifyFundWithNewCardLoading ? (
        <Loading text="" />
      ) : (
        <PaystackButton
          className="payButton"
          text="PAY"
          disabled={false}
          embed={false}
          reference={tranxRef}
          email={customerDetails.email}
          amount={amount * 100}
          publicKey={process.env.REACT_APP_PAYSTACK_TEST_KEY}
          onSuccess={handlePaystackSuccess}
          onClose={closePaystackModal}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  customerDetails: state.user.data.customerDetails,
  verifyFundWithNewCardLoading: state.verifyFundWalletWithNewCard.loading,
});

export default connect(mapStateToProps)(PaystackModal);
