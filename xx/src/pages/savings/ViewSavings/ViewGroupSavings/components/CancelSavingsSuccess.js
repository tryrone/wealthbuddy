import React from "react";
import SuccessModal from "shared-components/modals/SuccessModal";
import CardIcon from "assets/img/cardIcon.png";
import { formatCurrency } from "utils";

const CancelSavingsSuccess = ({ isVisible, closeModal }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <SuccessModal
      title="Success"
      subtitle={<span>You have successfully deleted your savings</span>}
      icon={CardIcon}
      buttonTitle="Done"
      closeModal={closeModal}
    />
  );
};

export default CancelSavingsSuccess;
