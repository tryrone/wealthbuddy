import React, { useEffect } from "react";
import { connect } from "react-redux";
import { PaystackButton } from "react-paystack";
import Loading from "shared-components/Loading";

const PaystackModal = ({
  amount,
  tranxRef,
  onSuccess,
  onClose,
  customerDetails,
  verifyFundWithNewCardLoading,
}) => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".payButton").click();
    }, 100);
  }, []);

  return (
    <div className="modal modal-active fixed inset-0 bg-wb-overlay flex justify-center items-center">
      {verifyFundWithNewCardLoading ? (
        <Loading text="" />
      ) : (
        <PaystackButton
          className="payButton"
          text=""
          disabled={false}
          embed={false}
          reference={tranxRef}
          email={customerDetails.email}
          amount={amount * 100}
          publicKey={process.env.REACT_APP_PAYSTACK_TEST_KEY}
          onSuccess={onSuccess}
          onClose={onClose}
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
