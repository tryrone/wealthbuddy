import React, { Fragment, useContext } from "react";
import AddBankContext from "contexts/AddBankContext";
import { formatCurrency } from "utils";
import CardIcon from "assets/img/cardIcon.png";
import SuccessModal from "shared-components/modals/SuccessModal";

const FundWalletSuccess = () => {
  const { isSuccessModalOpen, amount, closeSuccessModal } = useContext(
    AddBankContext
  );

  return (
    isSuccessModalOpen && (
      <SuccessModal
        title="Success"
        subtitle={
          <Fragment>
            <span className="font-bold">₦{formatCurrency(amount)}</span>{" "}
            successfully added to your Wallet.
          </Fragment>
        }
        icon={CardIcon}
        buttonTitle="Done"
        closeModal={closeSuccessModal}
      />
    )
  );
};

export default FundWalletSuccess;
