import React from "react";
import SuccessModal from "shared-components/modals/SuccessModal";
import CardIcon from "assets/img/cardIcon.png";

const SubmitIdentificationSuccessModal = ({ isVisible, close }) =>
  isVisible && (
    <SuccessModal
      title="Success"
      subtitle="Identification added successfully"
      icon={CardIcon}
      buttonTitle="Done"
      closeModal={close}
    />
  );

export default SubmitIdentificationSuccessModal;
