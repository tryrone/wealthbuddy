import React from "react";
import SuccessModal from "shared-components/modals/SuccessModal";
import CardIcon from "assets/img/cardIcon.png";

const AcceptSavingsSuccessModal = ({ isVisible, onClose: handleClose }) =>
  isVisible && (
    <SuccessModal
      title="Success"
      subtitle="Your goal has been created successfully"
      icon={CardIcon}
      buttonTitle="Done"
      closeModal={handleClose}
    />
  );

export default AcceptSavingsSuccessModal;
