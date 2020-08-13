import React, { Fragment } from "react";
import NumberFormat from "react-number-format";
import { Link, useLocation } from "react-router-dom";
import UploadIcon from "assets/img/uploadIcon.svg";
import "./styles.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { formatCurrency } from "utils";
import { SavingsFrequency } from "constants/enums";
import { FaTimes, FaPlus } from "react-icons/fa";

const Member = ({ email, removeItem }) => (
  <div className="w-full flex flex-row justify-between my-2">
    <div className="flex flex-grow">
      <div className="flex-initial text-gray-700 text-center text-sm bg-teal-100 rounded-full p-3 mr-2">
        {email.toString().substring(0, 2).toUpperCase()}
      </div>
      <div className="flex-initial text-gray-700 text-center text-sm py-3 mr-2 member-email truncate">
        {email}
      </div>
    </div>
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        removeItem && removeItem();
      }}
      className="text-red-300 text-center text-sm py-3"
    >
      <FaTimes />
    </a>
  </div>
);

const savingsFrequencies = {
  [SavingsFrequency.Daily.toString()]: "Day",
  [SavingsFrequency.Weekly.toString()]: "Week",
  [SavingsFrequency.Monthly.toString()]: "Month",
};

const savingsFrequenciesPluralized = {
  [SavingsFrequency.Daily.toString()]: "Days",
  [SavingsFrequency.Weekly.toString()]: "Weeks",
  [SavingsFrequency.Monthly.toString()]: "Months",
};

const CreateSavings = ({
  savingsConfiguration,
  initialFormValues,
  isVisible,
  onSubmit: handleOnSubmit,
}) => {
  const { state: locationState } = useLocation();

  const minimumAmount = savingsConfiguration.minimumAmount;
  const maximumAmount = savingsConfiguration.maximumAmount;

  const minimumDurationInDays = savingsConfiguration.minimumDurationInDays;
  const minimumDurationInWeeks = minimumDurationInDays / 7;
  const minimumDurationInMonths = minimumDurationInDays / 30;

  const maximumDurationInDays = savingsConfiguration.maximumDurationInDays;
  const maximumDurationInWeeks = maximumDurationInDays / 7;
  const maximumDurationInMonths = maximumDurationInDays / 30;

  const validationSchema = Yup.object().shape({
    name: Yup.string().label("Name").required(),
    amount: Yup.number()
      .min(
        minimumAmount,
        `You can only save a minimum of ₦${formatCurrency(minimumAmount)}`
      )
      .max(
        maximumAmount,
        `You can only save a maximum of ₦${formatCurrency(maximumAmount)}`
      )
      .label("Amount")
      .required(),
    frequency: Yup.string().label("Schedule").required(),
    duration: Yup.number()
      .label("Duration")
      .required()
      .when("frequency", {
        is: SavingsFrequency.Daily.toString(),
        then: Yup.number()
          .min(
            minimumDurationInDays,
            `You can only save for a minimum of ${minimumDurationInDays} Days`
          )
          .max(
            maximumDurationInDays,
            `You can only save for a maximum of ${maximumDurationInDays} Days`
          ),
      })
      .when("frequency", {
        is: SavingsFrequency.Weekly.toString(),
        then: Yup.number()
          .min(
            minimumDurationInWeeks,
            `You can only save for a minimum of ${minimumDurationInWeeks} weeks`
          )
          .max(
            maximumDurationInWeeks,
            `You can only save for a maximum of ${maximumDurationInWeeks} weeks`
          ),
      })
      .when("frequency", {
        is: SavingsFrequency.Monthly.toString(),
        then: Yup.number()
          .min(
            minimumDurationInMonths,
            `You can only save for a minimum of ${minimumDurationInDays} month`
          )
          .max(
            maximumDurationInMonths,
            `You can only save for a maximum of ${maximumDurationInDays} month`
          ),
      }),
    applyInterest: Yup.boolean().label("Apply Interest").required(),
  });

  const handleImageChange = (e, setFieldValue) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    file && reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFieldValue("file", file);
      setFieldValue("imagePreviewUrl", reader.result);
    };
  };

  return (
    isVisible && (
      <Fragment>
        <div className="page-heading mb-8 flex flex-col fadeIn">
          <h1 className="text-4xl font-medium">Group challenge savings</h1>
        </div>
        <div className="flex-grow flex justify-center items-start fadeIn">
          <div className="create-saving--overview overview-full w-full">
            <Formik
              initialValues={initialFormValues}
              validationSchema={validationSchema}
              validateOnMount={true}
              onSubmit={handleOnSubmit}
            >
              {({
                handleSubmit,
                isValid,
                setFieldValue,
                handleChange,
                handleBlur,
                values,
              }) => {
                return (
                  <Form
                    className="create-personal--savings w-full flex justify-between"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex flex-col justify-between card create-card p-0">
                      <div className="create-card w-full">
                        <fieldset className="mb-6">
                          <label className="block text-xs mb-3">
                            Group name
                          </label>
                          <Field
                            placeholder="Enter Group Name"
                            type="text"
                            name="name"
                            className="block w-full text-xs p-3 readOnly border border-gray-400 rounded"
                          />
                        </fieldset>

                        <fieldset className="mb-6">
                          <label className="block text-xs mb-3">
                            How much do you want to save?
                          </label>
                          <NumberFormat
                            thousandSeparator={true}
                            placeholder="Enter Amount"
                            autoComplete="off"
                            type="text"
                            id="amount"
                            name="amount"
                            className="block w-full text-xs p-3 border border-gray-400 rounded"
                            value={values.amount}
                            onBlur={handleBlur}
                            onValueChange={({ value }) =>
                              setFieldValue("amount", value)
                            }
                          />
                          <ErrorMessage
                            name="amount"
                            render={(errorMessage) => (
                              <p className="label-error--text mt-3 text-xs color-red font-medium text-center bg-red-200">
                                {errorMessage}
                              </p>
                            )}
                          />
                        </fieldset>

                        <fieldset className="mb-6">
                          <label className="block text-xs mb-3">
                            How often do you want to save?
                          </label>
                          <select
                            name="frequency"
                            className="block w-full text-xs p-3 border border-gray-400 rounded"
                            value={values.frequency}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option defaultValue="" disabled>
                              Select how often you want to save
                            </option>
                            {Object.entries(SavingsFrequency).map(
                              (option, key) => (
                                <option key={key} value={option[1]}>
                                  {option[0]}
                                </option>
                              )
                            )}
                          </select>
                        </fieldset>

                        <fieldset className="mb-6">
                          <label className="block text-xs mb-3">
                            How long do you want to save for?
                          </label>
                          <div className="amount-wrap">
                            <NumberFormat
                              placeholder={
                                "E.g 30 " +
                                  savingsFrequenciesPluralized[
                                    values.frequency
                                  ] ||
                                savingsFrequenciesPluralized[
                                  SavingsFrequency.Daily
                                ]
                              }
                              type="text"
                              autoComplete="off"
                              name="duration"
                              className="block w-full text-xs p-3 border border-gray-400 rounded"
                              value={values.duration}
                              onBlur={handleBlur}
                              onValueChange={({ value }) =>
                                setFieldValue("duration", value)
                              }
                            />

                            <span className="frequency-title">
                              {values.duration > 1
                                ? savingsFrequenciesPluralized[
                                    values.frequency
                                  ] ||
                                  savingsFrequenciesPluralized[
                                    SavingsFrequency.Daily
                                  ]
                                : savingsFrequencies[values.frequency] ||
                                  savingsFrequencies[SavingsFrequency.Daily]}
                            </span>
                          </div>

                          <ErrorMessage
                            name="duration"
                            render={(errorMessage) => (
                              <p className="label-error--text mt-3 text-xs color-red font-medium text-center bg-red-200">
                                {errorMessage}
                              </p>
                            )}
                          />
                        </fieldset>
                      </div>

                      <div className="saving-summary  flex justify-center flex-col items-center pt-10 pb-10 has-summary--bg">
                        <p className="text-xs mb-2 text-center text-faded">
                          Contribution
                        </p>
                        <h1 className="font-medium text-2xl">
                          {`₦${formatCurrency(
                            values.amount / (values.duration || 1)
                          )}/${
                            savingsFrequencies[values.frequency] ||
                            savingsFrequencies[SavingsFrequency.Daily]
                          }`}
                        </h1>
                      </div>
                    </div>
                    <div className="card create-card flex flex-col justify-between">
                      <div className="personalize--card mb-5">
                        <div className="previewComponent">
                          <input
                            className="fileInput"
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              handleImageChange(e, setFieldValue)
                            }
                          />
                          <div
                            className={`${
                              !values.imagePreviewUrl && "drop"
                            } imgPreview`}
                          >
                            {values.imagePreviewUrl ? (
                              <img src={values.imagePreviewUrl} alt="" />
                            ) : (
                              <div className="buddy-image--drop">
                                <img src={UploadIcon} alt="" />
                              </div>
                            )}
                          </div>
                        </div>
                        {values.imagePreviewUrl ? (
                          <h3 className="color-secondary personalize-text text-center">
                            + Change Photo
                          </h3>
                        ) : (
                          <h3 className="color-secondary change-text personalize-text text-center">
                            Personalise your goal by <br />
                            <span>+ Adding a photo.</span>
                          </h3>
                        )}
                      </div>

                      <div className="mx-5">
                        <div className="w-full items-center justify-between pt-6">
                          <div className="block font-semi-bold text-gray-700 text-xs mb-3">
                            Group members
                          </div>
                          <div className="p-5 rounded border border-solid border-gray-200">
                            <Member email="johndoe@gmail.com" />
                            <Member email="legendofsanni@yahoo.com" />
                            <Member email="yusufuthman@gmail.com" />

                            <div className="w-full flex flex-row justify-between mt-5">
                              <div className="flex flex-grow">
                                <Field
                                  placeholder="member@email.com"
                                  type="text"
                                  name="email"
                                  className="block w-full text-xs p-3 readOnly border border-gray-400 rounded"
                                />
                              </div>
                              <a
                                href="#"
                                onClick={() => alert("add item")}
                                className="flex-initial color-green text-center text-sm py-3 ml-5"
                              >
                                <span className="font-bold">+</span> Add
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <Link
                          to="/dashboard/savings/create"
                          className="mt-12 w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
                        >
                          Back
                        </Link>
                        <button
                          type="submit"
                          className="mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm"
                          disabled={!isValid}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </Fragment>
    )
  );
};

export default CreateSavings;
