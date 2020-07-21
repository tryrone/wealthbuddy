import React, { Fragment, useState } from "react";
import WalletSummary from "./components/WalletSummary";
import WalletActions from "./components/WalletActions";
import StickyBox from "react-sticky-box";
import TransactionHistory from "./components/TransactionHistory";
import FundWalletModal from "./components/FundWalletModal";
import SuccessModal from "shared-components/modals/SuccessModal";
import CardIcon from "assets/img/cardIcon.png";
import { formatCurrency } from "utils";

const Wallet = () => {
  const [isFundWalletModalOpen, setFundWalletModalOpen] = useState(false);
  const openFundWalletModal = () => setFundWalletModalOpen(true);
  const closeFundWalletModal = () => setFundWalletModalOpen(false);

  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const showSuccessModal = () => setSuccessModalOpen(true);
  const closeSuccessModal = () => setSuccessModalOpen(false);

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
          showSuccessModal={showSuccessModal}
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

export default Wallet;
