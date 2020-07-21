import React, { Fragment, useState } from "react";
import WalletSummary from "./components/WalletSummary";
import WalletActions from "./components/WalletActions";
import StickyBox from "react-sticky-box";
import TransactionHistory from "./components/TransactionHistory";
import FundWalletModal from "./components/FundWalletModal";
import SuccessModal from "shared-components/modals/SuccessModal";
import CardIcon from "assets/img/cardIcon.png";
import { formatCurrency } from "utils";
import { connect } from "react-redux";
import PaystackModal from "./components/PaystackModal";
import { verifyFundWalletWithNewCard } from "state/ducks/verifyFundWalletWithNewCard/actions";

const Wallet = ({ dispatchVerifyFundWalletWithNewCard }) => {
  const [isFundWalletModalOpen, setFundWalletModalOpen] = useState(false);
  const openFundWalletModal = () => setFundWalletModalOpen(true);
  const closeFundWalletModal = () => setFundWalletModalOpen(false);

  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const showSuccessModal = () => setSuccessModalOpen(true);
  const closeSuccessModal = () => setSuccessModalOpen(false);

  const [isPaystackModalOpen, setPaystackModalOpen] = useState(false);
  const showPaystackModal = () => setPaystackModalOpen(true);
  const closePaystackModal = () => setPaystackModalOpen(false);

  const [tranxRef, setTranxRef] = useState("");

  const continueToPaystack = (tranxRef) => {
    setTranxRef(tranxRef);
    showPaystackModal();
  };

  const completePaystackPayment = () => {
    closePaystackModal();
    showSuccessModal();
  };

  const handlePaystackSuccess = () => {
    const params = { transactionReference: tranxRef };
    const meta = { completePaystackPayment };
    dispatchVerifyFundWalletWithNewCard(params, meta);
  };

  const [amount, setAmount] = useState(0);

  return (
    <Fragment>
      <div className="px-12 flex flex-col fadeIn">
        <h1 className="text-4xl mb-6 font-medium">Wallet</h1>

        <div className="flex">
          <div className="flex justify-between savings-home--wrap wallet-home--wrap w-full">
            <StickyBox offsetTop={115} offsetBottom={20} className="w35">
              <div className=" w-transaction--max  w-full">
                <div className="flex flex-col">
                  <WalletSummary />
                  <WalletActions openFundWalletModal={openFundWalletModal} />
                </div>
              </div>
            </StickyBox>

            <div className="w65">
              <TransactionHistory />
            </div>
          </div>
        </div>
      </div>

      {isFundWalletModalOpen && (
        <FundWalletModal
          setAmount={setAmount}
          closeModal={closeFundWalletModal}
          continueToPaystack={continueToPaystack}
          showSuccessModal={showSuccessModal}
        />
      )}

      {isPaystackModalOpen && (
          <PaystackModal
              amount={amount}
              tranxRef={tranxRef}
              onSuccess={handlePaystackSuccess}
              onClose={closePaystackModal}
          />
      )}

      {isSuccessModalOpen && (
        <SuccessModal
          title="Success"
          subtitle={
            <span>
              <span className="font-bold">₦{formatCurrency(amount)}</span>{" "}
              successfully added to your Wallet.
            </span>
          }
          icon={CardIcon}
          buttonTitle="Done"
          closeModal={closeSuccessModal}
        />
      )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
