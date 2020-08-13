import React from "react";
import SuccessModal from "shared-components/modals/SuccessModal";
import CardIcon from "assets/img/cardIcon.png";

const CreateSavingsSuccessModal = ({ isVisible, close }) =>
  isVisible && (
    <SuccessModal
      title="Success"
      subtitle="Your goal has been created and shared with members successfully"
      icon={CardIcon}
      buttonTitle="Done"
      closeModal={close}
    />
  );

export default CreateSavingsSuccessModal;
