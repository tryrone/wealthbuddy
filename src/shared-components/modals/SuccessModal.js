import React, { useEffect } from "react";
import CardIcon from "assets/img/cardIcon.png";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
import { closeModalOnOutsideClick } from "utils";

const SuccessModal = ({
  title,
  subtitle,
  buttonTitle,
  icon,
  closeModal,
  IconComponent,
}) => {
  useEffect(() => {
    closeModalOnOutsideClick(closeModal);
  }, []);

  return (
    <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
      <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
        <span className="closeModal" onClick={closeModal}>
          <CloseModalIcon />
        </span>
        <div className="flex flex-col items-center mb-0">
          {IconComponent ? (
            <IconComponent />
          ) : (
            <i className="w-20 mb-4">
              <img src={icon || CardIcon} alt="" />
            </i>
          )}

          <h1 className="text-2xl font-medium mb-2">{title}</h1>
          <p className="text-center text-gray-500 leading-normal">{subtitle}</p>
        </div>

        <div
          className="w-40 text-center wealth-buddy--cta leading-loose bg-wb-primary text-white rounded-sm mt-8"
          onClick={closeModal}
        >
          {buttonTitle}
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
