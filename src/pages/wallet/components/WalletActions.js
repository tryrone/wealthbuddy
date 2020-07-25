import React, { Fragment, useContext } from "react";
import { addFundIcon, arrowRight } from "assets/exports";
import AddBankContext from "contexts/AddBankContext";

const WalletActions = () => {
  const { openFundWalletModal, openWithdrawFundsModal } = useContext(
    AddBankContext
  );

  return (
    <Fragment>
      <div className="wallet-action--wrap">
        <div
          className="wallet-action flex items-center card justify-between"
          onClick={openFundWalletModal}
        >
          <div className="flex items-center ">
            <span
              className="wallet-action--icon icon-positive"
              dangerouslySetInnerHTML={{ __html: addFundIcon }}
            />
            <span className="wallet-action--text">Fund Wallet</span>
          </div>
          <span
            className="arrow-right"
            dangerouslySetInnerHTML={{ __html: arrowRight }}
          />
        </div>
        <div
          className="wallet-action flex items-center card justify-between"
          onClick={openWithdrawFundsModal}
        >
          <div className="flex items-center">
            <span
              className="wallet-action--icon icon-dark"
              dangerouslySetInnerHTML={{ __html: addFundIcon }}
            />
            <span className="wallet-action--text">Withdraw Funds</span>
          </div>
          <div
            className="arrow-right"
            dangerouslySetInnerHTML={{ __html: arrowRight }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default WalletActions;
