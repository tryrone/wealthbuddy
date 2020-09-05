import React, { Fragment } from "react";
import { logo } from "assets/exports";
import Loading from "shared-components/Loading";
import UploadIcon from "assets/img/uploadIcon.svg";
import { formatCurrency, convertYmdJsonToIsoDate } from "utils";
import { SavingsFrequency } from "constants/enums";
import moment from "moment";

const loading = false;
const error = false;

const savingsFrequencies = {
  [SavingsFrequency.Daily.toString()]: "Day",
  [SavingsFrequency.Weekly.toString()]: "Week",
  [SavingsFrequency.Monthly.toString()]: "Month",
};

const momentUnits = {
  [SavingsFrequency.Daily.toString()]: "days",
  [SavingsFrequency.Weekly.toString()]: "weeks",
  [SavingsFrequency.Monthly.toString()]: "months",
};

const ConfirmPersonalSavings = ({
  savingsConfiguration,
  formValues,
  isVisible,
  onBack,
  onLaunch,
}) => {
  const startDate = `${formValues.startDate.year}-${formValues.startDate.month}-${formValues.startDate.day}`;
  const momentStartDate = moment(startDate);
  const momentMaturityDate = moment(startDate).add(
    formValues.duration,
    momentUnits[formValues.frequency]
  );

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
                {loading ? (
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                      <i
                        className="w-10 mb-8"
                        dangerouslySetInnerHTML={{ __html: logo }}
                      />
                      <Loading text="Creating your Goal" />
                    </div>
                  </div>
                ) : (
                  <Fragment>
                    {error && (
                      <div className="w-72 mb-8 text-xs text-left">
                        <p className="w-full p-3 bg-red-200 text-red-700 rounded text-center font-medium">
                          {error}
                        </p>
                      </div>
                    )}
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
                          {`₦${formatCurrency(formValues.amount)}`}
                        </h1>
                      </div>
                    </div>

                    <div className="savings-summary--items">
                      <div className="savings-inner--item">
                        <h5 className="savings-inner--subtitle text-gray-300 text-xs">
                          Contribution
                        </h5>
                        <h1 className="savings-inner--title mt-3 font-medium">
                          {`₦${formatCurrency(
                            formValues.amount / formValues.duration
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
                          {`${momentStartDate.format("MMM D, YYYY")}`}
                        </h1>
                      </div>
                      <div className="savings-inner--item">
                        <h5 className="savings-inner--subtitle text-gray-300 text-xs">
                          Maturity Date
                        </h5>
                        <h1 className="savings-inner--title mt-3 font-medium">
                          {`${momentMaturityDate.format("MMM D, YYYY")}`}
                        </h1>
                      </div>
                    </div>

                    <div className="nav-buttons flex justify-center">
                      <button
                        onClick={onBack}
                        className="mt-12 w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
                      >
                        Back
                      </button>

                      <button
                        onClick={onLaunch}
                        className="mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm"
                      >
                        Launch
                      </button>
                    </div>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  );
};

export default ConfirmPersonalSavings;
