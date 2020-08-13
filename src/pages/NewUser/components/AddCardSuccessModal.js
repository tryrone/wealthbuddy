import React from "react";
import SuccessModal from "shared-components/modals/SuccessModal";
import CardIcon from "assets/img/cardIcon.png";

const AddCardSuccessModal = ({ isVisible, close }) =>
  isVisible && (
    <SuccessModal
      title="Success"
      subtitle="Your card has been added successfully"
      icon={CardIcon}
      buttonTitle="Done"
      closeModal={close}
    />
  );

export default AddCardSuccessModal;
