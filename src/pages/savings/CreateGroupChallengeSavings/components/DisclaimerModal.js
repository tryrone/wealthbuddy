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
                  I agree that this savings instance therein shall be locked-in 
                  for the period we have specified in the setup of this savings 
                  instance.
                </p>
                <p className="mb-6 text-gray-300">
                  Apart from the job of a collecting agent, Meristem shall not be
                  liable for any actions that anybody in this group savings takes
                  with regards to the money saved herein.
                </p> 
                <p className="mb-6 text-gray-300">
                	I agree that I know, and I am willing to enter a group savings
                  plan with the members of this group as stated in the setup of
                  this savings plan

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
