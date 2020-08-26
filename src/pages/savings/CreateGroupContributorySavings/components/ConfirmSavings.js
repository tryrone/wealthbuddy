import React, { Fragment } from "react";
import UploadIcon from "assets/img/uploadIcon.svg";
import { formatCurrency } from "utils";
import { SavingsFrequency } from "constants/enums";
import { FaUsers } from "react-icons/fa";
import converter from "number-to-words";

const savingsFrequencies = {
  [SavingsFrequency.Daily.toString()]: "Day",
  [SavingsFrequency.Weekly.toString()]: "Week",
  [SavingsFrequency.Monthly.toString()]: "Month",
};

const ConfirmSavings = ({
  savingsConfiguration,
  formValues,
  isVisible,
  onBack,
  onLaunch,
}) => {
  return (
    isVisible && (
      <Fragment>
        <div className="page-heading mb-8 flex flex-col fadeIn">
          <h1 className="text-4xl font-medium">Summary</h1>
        </div>
        <div className="flex-grow flex justify-center items-start fadeIn">
          <div className="create-saving--overview overview-full w-full">
            <div className="create-personal--savings w-full flex justify-between">
              <div className="card overview-card w-full">
                <div className="summary-heading--wrap flex flex-col items-center ">
                  {formValues.imagePreviewUrl ? (
                    <div className="image-wrap">
                      <img src={formValues.imagePreviewUrl} alt="image" />
                    </div>
                  ) : (
                    <div className="image-wrap image-empty flex items-center justify-center">
                      <img src={UploadIcon} alt="Wealth Buddy" />
                    </div>
                  )}

                  <div className="savings-heading text-center">
                    <h5 className="savings-subtitle">{formValues.name}</h5>
                    <h1 className="savings-title mt-2">
                      {`₦${formatCurrency(formValues.amount * formValues.participants.length)}`}
                    </h1>
                  </div>
                </div>

                <div className="savings-summary--items">
                  <div className="savings-inner--item">
                    <h5 className="savings-inner--subtitle text-gray-300 text-xs">
                      Each Member's Contribution
                    </h5>
                    <h1 className="savings-inner--title mt-3 font-medium">
                    {/* {`₦${formatCurrency(
                        formValues.amount / formValues.duration
                      )} */}
                      {`₦${formatCurrency(
                        formValues.amount
                      )}
                          /
                          ${savingsFrequencies[formValues.frequency]}`}
                    </h1>
                  </div>
                  <div className="savings-inner--item">
                    <h5 className="savings-inner--subtitle text-gray-300 text-xs">
                      Interest Rate
                    </h5>
                    <h1 className="savings-inner--title mt-3 font-medium">
                      {`${savingsConfiguration.interestRate}%`}
                    </h1>
                  </div>
                  <div className="savings-inner--item">
                    <h5 className="savings-inner--subtitle text-gray-300 text-xs">
                      Start Date
                    </h5>
                    <h1 className="savings-inner--title mt-3 font-medium">
                      N/A
                    </h1>
                  </div>
                  <div className="savings-inner--item">
                    <h5 className="savings-inner--subtitle text-gray-300 text-xs">
                      Maturity Date
                    </h5>
                    <h1 className="savings-inner--title mt-3 font-medium">
                      N/A
                    </h1>
                  </div>
                </div>

                <div className="flex-col flex-grow flex justify-center items-center">
                  <div className="p-3 bg-purple-200 rounded-md">
                    <div className="text-purple-600 p-1">
                      <FaUsers />
                    </div>
                  </div>
                  <div className="text-sm text-center leading-relaxed text-gray-300 w-2/3 mt-3">
                    <span className="capitalize">
                      {converter.toWords(formValues.participants.length)}
                    </span>{" "}
                    people have been added to this group and will be sent a mail
                    to confirm the agree
                  </div>
                </div>

                <div className="flex justify-center mt-12">
                  <button
                    onClick={onBack}
                    className="w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
                  >
                    Back
                  </button>

                  <button
                    onClick={onLaunch}
                    className="w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm"
                  >
                    Launch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  );
};

export default ConfirmSavings;
