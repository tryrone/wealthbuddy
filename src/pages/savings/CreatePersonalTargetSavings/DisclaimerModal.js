import React, { Fragment, useEffect } from "react";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
import DisclaimerIcon from "assets/img/disclaimerIcon.png";
import { closeModalOnOutsideClick } from "utils";
import CardIcon from "assets/img/cardIcon.png";
import Loading from "shared-components/Loading";

const DisclaimerModal = ({
  isVisible,
  isCreateLoading,
  createError,
  onBack: handleBack,
  onProceed: handleProceed,
  close,
}) => {
  useEffect(() => {
    isVisible && closeModalOnOutsideClick(close);
  }, [isVisible]);

  return (
    isVisible && (
      <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
        <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
          {!isCreateLoading && (
            <span className="closeModal" onClick={close}>
              <CloseModalIcon />
            </span>
          )}

          {!isCreateLoading ? (
            <Fragment>
              <div className="flex flex-col items-center mb-6">
                <i className="w-20 mb-4">
                  <img src={DisclaimerIcon} alt="" />
                </i>
                <h1 className="text-2xl font-medium mb-2">Disclaimers</h1>
              </div>

              {createError && (
                <div className="w-72 text-xs text-left mb-8">
                  <p className="w-full p-3 bg-red-200 text-red-700 rounded text-center font-medium">
                    {createError}
                  </p>
                </div>
              )}

              <div className="disclaimer-text">
                <p className="mb-6 text-gray-300">
                I authorize MWML act in accordance with our instructions or 
                that of any person authorized by us in respect of this savings 
                (including those transmitted and received by telephone, fax, 
                electronic mail or the internet), and to do all things necessary to 
                give effect thereto.

                </p>
                <p className="text-gray-300">
                I agree that this savings instance therein shall be 
                locked-in for the period I have specified in the setup 
                of this savings instance.

                </p>
                
              </div>

              <div className="nav-buttons flex justify-center">
                <div
                  onClick={handleBack}
                  className=" w-40 border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
                >
                  Back
                </div>

                <button
                  type="submit"
                  className="w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm"
                  onClick={handleProceed}
                >
                  Proceed
                </button>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className="flex flex-col items-center mb-0">
                <i className="w-20 mb-4">
                  <img src={CardIcon} alt="" />
                </i>
                <h1 className="text-2xl font-medium mb-2">Create Savings</h1>
                <p className="text-center text-gray-500 leading-normal">
                  As simple as investing your savings and we will help you grow
                  from there.
                </p>
              </div>

              <div className="flex flex-col items-center mt-8">
                <Loading text="Creating goal" />
              </div>
            </Fragment>
          )}
        </div>
      </div>
    )
  );
};

export default DisclaimerModal;
