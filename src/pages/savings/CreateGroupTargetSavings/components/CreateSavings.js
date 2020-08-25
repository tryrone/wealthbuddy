import React, { Fragment, useState } from "react";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import UploadIcon from "assets/img/uploadIcon.svg";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { formatCurrency } from "utils";
import { SavingsFrequency } from "constants/enums";
import { FaTimes } from "react-icons/fa";
import { connect } from "react-redux";
import * as yup from "yup";

yup.addMethod(yup.array, "unique", function (message, mapper = (a) => a) {
  return this.test("unique", message, function (list) {
    return list.length === new Set(list.map(mapper)).size;
  });
});

const Member = ({ member, removeItem }) => (
  <div className="w-full flex flex-row justify-between my-2">
    <div className="flex flex-grow">
      <div className="flex-initial text-gray-700 text-center text-sm bg-teal-100 rounded-full p-3 mr-2">
        {member.email.toString().substring(0, 2).toUpperCase()}
      </div>
      <div className="flex-initial text-gray-700 text-center text-sm py-3 mr-2 member-email truncate">
        {member.email}
      </div>
    </div>

    {member.isModifiable && (
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
    )}
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

const isEmail = (email) => {
  return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
    email
  );
};

const CreateSavings = ({
  savingsConfiguration,
  initialFormValues,
  isVisible,
  onSubmit: handleOnSubmit,
  customerDetails,
}) => {
  const [memberEmail, setMemberEmail] = useState("");

  const minimumAmount = savingsConfiguration.minimumAmount;
  const maximumAmount = savingsConfiguration.maximumAmount;

  const minimumDurationInDays = savingsConfiguration.minimumDurationInDays;
  const minimumDurationInWeeks = minimumDurationInDays / 7;
  const minimumDurationInMonths = minimumDurationInDays / 30;

  const maximumDurationInDays = savingsConfiguration.maximumDurationInDays;
  const maximumDurationInWeeks = maximumDurationInDays / 7;
  const maximumDurationInMonths = maximumDurationInDays / 30;

  const initialValues = {
    ...initialFormValues,
    participants: [{ email: customerDetails.email, isModifiable: false }],
  };

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
    participants: Yup.array()
      .of(
        Yup.object().shape({
          email: Yup.string().email().required("Required"),
          isModifiable: yup.boolean(),
        })
      )
      .unique("Duplicate member email", (a) => a.email)
      .min(2, "You must have at least 2 participants")
      .required("No members added to savings invite"),
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
          <h1 className="text-4xl font-medium">Group target savings</h1>
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
                            What is the Target Amount ?
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
                            <FieldArray name="participants">
                              {(arrayHelpers) => (
                                <Fragment>
                                  {values.participants.map((member, index) => (
                                    <div key={index}>
                                      <Member
                                        member={values.participants[index]}
                                        removeItem={() =>
                                          arrayHelpers.remove(index)
                                        }
                                      />
                                    </div>
                                  ))}

                                  <div className="w-full flex flex-row justify-between mt-5">
                                    <div className="flex flex-grow">
                                      <input
                                        placeholder="member@email.com"
                                        type="text"
                                        name="email"
                                        value={memberEmail}
                                        onChange={(e) =>
                                          setMemberEmail(e.target.value)
                                        }
                                        className="block w-full text-xs p-3 readOnly border border-gray-400 rounded"
                                      />
                                    </div>
                                    <button
                                      type="button"
                                      className="flex-initial color-green text-center text-sm py-3 ml-5"
                                      onClick={() => {
                                        if (
                                          !isEmail(memberEmail) ||
                                          memberEmail === customerDetails.email
                                        ) {
                                          return false;
                                        }
                                        arrayHelpers.push({
                                          email: memberEmail,
                                          isModifiable: true,
                                        });
                                        setMemberEmail("");
                                      }}
                                    >
                                      <span className="font-bold">+</span> Add
                                    </button>
                                  </div>
                                </Fragment>
                              )}
                            </FieldArray>

                            <ErrorMessage
                              name="participants"
                              component="p"
                              className="label-error--text mt-3 text-xs color-red font-medium text-center bg-red-200"
                            />
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

const mapStateToProps = (state) => ({
  customerDetails: state.account.data.customerDetails,
});

export default connect(mapStateToProps)(CreateSavings);
