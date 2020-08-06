import React, { Fragment, useState } from "react";
import NumberFormat from "react-number-format";
import { Link, useLocation } from "react-router-dom";
import UploadIcon from "assets/img/uploadIcon.svg";
import DatePicker, { utils } from "react-modern-calendar-datepicker";
import "./styles.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { formatCurrency } from "utils";
import { SavingsFrequency, SavingsType } from "constants/enums";
import produce from "immer";
import { connect } from "react-redux";

const CreatePersonalSavings = ({ savingsConfiguration }) => {
  const { state: locationState } = useLocation();

  const [files, setFiles] = useState({
    file: "",
    imagePreviewUrl: "",
    isFixed: false,
  });

  const selectedSavingsConfiguration = savingsConfiguration.find(
    (sc) => sc.savingsType === SavingsType.PersonalTargetSavings
  );

  const validationSchema = Yup.object().shape({
    name: Yup.string().label("Name").required(),
    amount: Yup.number()
      .min(
        selectedSavingsConfiguration.minimumAmount,
        `You can only save a minimum of ₦${formatCurrency(
          selectedSavingsConfiguration.minimumAmount
        )}`
      )
      .max(
        selectedSavingsConfiguration.maximumAmount,
        `You can only save a maximum of ₦${formatCurrency(
          selectedSavingsConfiguration.maximumAmount
        )}`
      )
      .label("Amount")
      .required(),
    frequency: Yup.string().label("Schedule").required(),
    startDate: Yup.string().label("Start Date").required(),
    duration: Yup.number()
      .when("frequency", {
        is: (frequency) => frequency === SavingsFrequency.Daily,
        then: Yup.number()
          .label("Duration")
          .min(30, "You can only save for a minimum of 30 Days")
          .required(),
      })
      .when("frequency", {
        is: (frequency) => frequency === SavingsFrequency.Weekly,
        then: Yup.number()
          .label("Duration")
          .min(4, "You can only save for a minimum of 4 weeks")
          .required(),
      })
      .when("frequency", {
        is: (frequency) => frequency === SavingsFrequency.Monthly,
        then: Yup.number()
          .label("Duration")
          .min(1, "You can only save for a minimum of 1 month")
          .required(),
      }),
    applyInterest: Yup.boolean().label("Apply Interest").required(),
  });

  const predefinedName = locationState.params.name;

  const initialValues = {
    name: predefinedName || "",
    amount: "",
    frequency: "",
    startDate: "",
    duration: "",
    applyInterest: true,
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setFiles(
        produce((draft) => {
          draft.file = file;
          draft.imagePreviewUrl = reader.result;
        })
      );
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleOnSubmit = (formValues) => {
    console.log(formValues);

    const date = moment(formValues.startDate).toISOString();
  };

  const interestRate = 15;

  return (
    <Fragment>
      <div className="page-heading mb-8 flex flex-col fadeIn">
        <h1 className="text-4xl font-medium">Personal savings</h1>
      </div>
      <div className="flex-grow flex justify-center items-start fadeIn">
        <div className="create-saving--overview overview-full w-full">
          <Formik
            initialValues={initialValues}
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
                  <div className="card create-card p-0">
                    <div className="create-card w-full">
                      <fieldset className="mb-6">
                        <label className="block text-xs mb-3">Goal name</label>
                        <Field
                          placeholder="Enter Goal Name"
                          type="text"
                          name="name"
                          className="block w-full text-xs p-3 readOnly border border-gray-400 rounded"
                          readOnly={Boolean(predefinedName)}
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
                          When do you want to start?
                        </label>
                        <DatePicker
                          inputPlaceholder="Select Start Date"
                          value={values.startDate}
                          onChange={(value) =>
                            setFieldValue("startDate", value)
                          }
                          shouldHighlightWeekends
                          minimumDate={utils("en").getToday()}
                          inputClassName="w-full text-xs p-3 border border-gray-400 rounded text-left-f"
                        />
                      </fieldset>

                      <fieldset className="mb-6">
                        <label className="block text-xs mb-3">
                          How long do you want to save for?
                        </label>
                        <div className="amount-wrap">
                          <NumberFormat
                            placeholder={`E.g 30 ${
                              values.frequency ===
                              SavingsFrequency.Daily.toString()
                                ? "Days"
                                : values.frequency ===
                                  SavingsFrequency.Weekly.toString()
                                ? "Weeks"
                                : values.frequency ===
                                  SavingsFrequency.Monthly.toString()
                                ? "Months"
                                : "Days"
                            }`}
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
                            {values.frequency ===
                            SavingsFrequency.Daily.toString()
                              ? `Day${parseInt(values.duration) > 1 ? "s" : ""}`
                              : values.frequency ===
                                SavingsFrequency.Weekly.toString()
                              ? `Week${
                                  parseInt(values.duration) > 1 ? "s" : ""
                                }`
                              : values.frequency ===
                                SavingsFrequency.Monthly.toString()
                              ? `Month${
                                  parseInt(values.duration) > 1 ? "s" : ""
                                }`
                              : `Day${
                                  parseInt(values.duration) > 1 ? "s" : ""
                                }`}
                          </span>
                        </div>

                        <ErrorMessage
                          name="frequency"
                          render={(errorMessage) => (
                            <p className="label-error--text mt-3 text-xs color-red font-medium text-center bg-red-200">
                              {errorMessage}
                            </p>
                          )}
                        />

                        <ErrorMessage
                          name="duration"
                          render={(errorMessage) => (
                            <p className="label-error--text mt-3 text-xs color-red font-medium text-center bg-red-200">
                              {errorMessage}
                            </p>
                          )}
                        />

                        {/*{(values.frequency === "" ||*/}
                        {/*  values.frequency ===*/}
                        {/*    SavingsFrequency.Daily.toString()) &&*/}
                        {/*parseInt(values.duration) < 30 ? (*/}
                        {/*  <p className="label-error--text mt-3 text-xs color-red font-medium text-center bg-red-200">*/}
                        {/*    You can only save for a minimum of 30 Days*/}
                        {/*  </p>*/}
                        {/*) : values.frequency ===*/}
                        {/*    SavingsFrequency.Weekly.toString() &&*/}
                        {/*  parseInt(values.duration) < 4 ? (*/}
                        {/*  <p className="label-error--text mt-3 text-xs color-red font-medium text-center bg-red-200">*/}
                        {/*    You can only save for a minimum of 4 Weeks*/}
                        {/*  </p>*/}
                        {/*) : (*/}
                        {/*  values.frequency ===*/}
                        {/*    SavingsFrequency.Monthly.toString() &&*/}
                        {/*  parseInt(values.duration) < 1 && (*/}
                        {/*    <p className="label-error--text mt-3 text-xs color-red font-medium text-center bg-red-200">*/}
                        {/*      You can only save for a minimum of 1 Month*/}
                        {/*    </p>*/}
                        {/*  )*/}
                        {/*)}*/}
                      </fieldset>
                    </div>

                    <div className="saving-summary  flex justify-center flex-col items-center pt-10 pb-10 has-summary--bg">
                      <p className="text-xs mb-2 text-center text-faded">
                        Contribution
                      </p>
                      <h1 className="font-medium text-2xl">
                        <span>
                          {`₦${
                            values.amount
                              ? formatCurrency(
                                  values.amount / (values.duration || 1)
                                )
                              : 0
                          }`}
                        </span>{" "}
                        /
                        <span>{`${values.duration || ""} ${
                          values.frequency === SavingsFrequency.Daily.toString()
                            ? `Day${parseInt(values.duration) > 1 ? "s" : ""}`
                            : values.frequency ===
                              SavingsFrequency.Weekly.toString()
                            ? `Week${parseInt(values.duration) > 1 ? "s" : ""}`
                            : values.frequency ===
                              SavingsFrequency.Monthly.toString()
                            ? `Month${parseInt(values.duration) > 1 ? "s" : ""}`
                            : `Day${parseInt(values.duration) > 1 ? "s" : ""}`
                        }`}</span>
                      </h1>
                    </div>
                  </div>
                  <div className="card create-card flex flex-col justify-between">
                    <div>
                      {/* IMAGE INPUT */}
                      <div className="personalize--card mb-5">
                        <div className="previewComponent">
                          <input
                            className="fileInput"
                            type="file"
                            onChange={(e) => handleImageChange(e)}
                            accept="image/*"
                          />
                          <div
                            className={`${
                              files.imagePreviewUrl === "" && "drop"
                            } imgPreview`}
                          >
                            {files.imagePreviewUrl ? (
                              <img src={files.imagePreviewUrl} alt="" />
                            ) : (
                              <div className="buddy-image--drop">
                                <img src={UploadIcon} alt="" />
                              </div>
                            )}
                          </div>
                        </div>
                        {files.imagePreviewUrl ? (
                          <h3 className="color-secondary personalize-text text-center">
                            + Change Photo
                          </h3>
                        ) : (
                          <h3 className="color-secondary change-text personalize-text text-center">
                            Personalise your goal by <br />{" "}
                            <span>+ Adding a photo.</span>
                          </h3>
                        )}
                      </div>
                      {/* IMAGE INPUT */}
                      <div className="image-footer mt-12 ">
                        <div className="flex items-center justify-between pb-6">
                          <div className="confirm-automation flex items-center">
                            <p className="text-black">Interest Rate Per Year</p>
                          </div>
                          <p className="text-black font-medium">{`${
                            !values.applyInterest
                              ? "N/A"
                              : selectedSavingsConfiguration.interestRate + "%"
                          }`}</p>
                        </div>
                        <div className="flex items-center justify-between pt-6">
                          <div className="confirm-automation flex items-center">
                            <p className="text-black">
                              {`${
                                !values.applyInterest
                                  ? "Will you like to get interests?"
                                  : "Uncheck if you would not lke to get interests?"
                              }`}{" "}
                            </p>
                          </div>
                          <div className="pretty p-switch p-fill ">
                            <Field
                              type="checkbox"
                              name="applyInterest"
                              // defaultChecked={savingsData.applyInterest || true}
                            />
                            <div className="state">
                              <label />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="nav-buttons flex justify-center">
                      <Link
                        to="/dashboard/savings/create"
                        className="mt-12 w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
                      >
                        Back
                      </Link>
                      <button
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
  );
};

const mapStateToProps = (state) => ({
  savingsConfiguration: state.savingsConfiguration.data,
});

export default connect(mapStateToProps)(CreatePersonalSavings);
