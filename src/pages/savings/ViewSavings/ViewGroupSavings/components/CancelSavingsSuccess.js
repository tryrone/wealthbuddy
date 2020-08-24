import React from "react";
import SuccessModal from "shared-components/modals/SuccessModal";
import CardIcon from "assets/img/cardIcon.png";
import { formatCurrency } from "utils";

const CancelSavingsSuccess = ({ isVisible, closeModal, amountToDisburse }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <SuccessModal
      title="Success"
      subtitle={
        <span>
          You have successfully deleted your savings, and{" "}
          <span className="font-bold color-black">
            ₦{formatCurrency(amountToDisburse)}
          </span>{" "}
          has been added to your Wallet.
        </span>
      }
      icon={CardIcon}
      buttonTitle="Done"
      closeModal={closeModal}
    />
  );
};

export default CancelSavingsSuccess;
