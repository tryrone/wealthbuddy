import React, { useEffect } from "react";
import { connect } from "react-redux";
import { usePaystackPayment } from "react-paystack";
import Loading from "shared-components/Loading";

const PaystackModal = ({
  customerDetails,
  isVisible,
  tranxRef,
  isTranxInitialized,
  isTranxInitLoading,
  isVerificationLoading,
  onPaystackSuccess: handlePaystackSuccess,
  onClose: handleClose,
}) => {
  const initializePayment = usePaystackPayment({
    reference: tranxRef,
    email: customerDetails.email,
    amount: 100 * 100,
    publicKey: process.env.REACT_APP_PAYSTACK_TEST_KEY,
  });

  useEffect(() => {
    if (isVisible && isTranxInitialized) {
      initializePayment(handlePaystackSuccess, handleClose);
    }
  }, [isVisible, isTranxInitialized]);

  return (
    isVisible && (
      <div className="modal modal-active fixed inset-0 bg-wb-overlay flex justify-center items-center">
        {(isVerificationLoading || isTranxInitLoading) && <Loading text="" />}
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  customerDetails: state.account.data.customerDetails,
});

export default connect(mapStateToProps)(PaystackModal);
