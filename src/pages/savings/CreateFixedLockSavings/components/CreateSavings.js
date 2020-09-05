import React, { Fragment } from "react";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import UploadIcon from "assets/img/uploadIcon.svg";
import DatePicker, { utils } from "react-modern-calendar-datepicker";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { formatCurrency } from "utils";
import moment from "moment";
import "../styles.css";

const CreateSavings = ({
  savingsConfiguration,
  initialFormValues,
  isVisible,
  onSubmit: handleOnSubmit,
}) => {
  const minimumAmount = savingsConfiguration.minimumAmount;
  const maximumAmount = savingsConfiguration.maximumAmount;
  const minimumDurationInDays = savingsConfiguration.minimumDurationInDays;
  const maximumDurationInDays = savingsConfiguration.maximumDurationInDays;

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
    maturityDate: Yup.object()
      .label("Maturity Date")
      .test(
        "minimumMaturityDuration",
        `You can only save for a minimum of ${minimumDurationInDays} Days`,
        function (maturityDate) {
          if (!maturityDate) return false;
          const { year, month, day } = maturityDate;
          const maturityDateYmd = `${year}-${month}-${day}`;
          const duration = moment(maturityDateYmd, "YYYY-MM-DD").diff(
            moment(),
            "days"
          );
          return duration >= minimumDurationInDays;
        }
      )
      .test(
        "maximumMaturityDuration",
        `You can only save for a maximum of ${maximumDurationInDays} Days`,
        function (maturityDate) {
          if (!maturityDate) return;
          const { year, month, day } = maturityDate;
          const maturityDateYmd = `${year}-${month}-${day}`;
          const duration = moment(maturityDateYmd, "YYYY-MM-DD").diff(
            moment(),
            "days"
          );
          console.log(duration);
          return duration <= maximumDurationInDays;
        }
      )
      .required(),
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
          <h1 className="text-4xl font-medium">Fixed Lock Savings</h1>
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
                    <div className="card create-card p-0">
                      <div className="create-card w-full">
                        <fieldset className="mb-6">
                          <label className="block text-xs mb-3">
                            Goal name
                          </label>
                          <Field
                            placeholder="Enter Goal Name"
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
                          For how long?
                          </label>
                          <DatePicker
                            inputPlaceholder="Select Maturity Date"
                            value={values.maturityDate}
                            onChange={(value) =>
                              setFieldValue("maturityDate", value)
                            }
                            shouldHighlightWeekends
                            minimumDate={utils("en").getToday()}
                            inputClassName="w-full text-xs p-3 border border-gray-400 rounded text-left-f"
                          />
                          <ErrorMessage
                            name="maturityDate"
                            render={(errorMessage) => (
                              <p className="label-error--text mt-3 text-xs color-red font-medium text-center bg-red-200">
                                {errorMessage}
                              </p>
                            )}
                          />
                        </fieldset>

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
                      </div>
                    </div>

                    <div className="card create-card flex flex-col justify-between">
                      <div className="image-footer">
                        <div className="flex items-center justify-between pb-6">
                          <div className="confirm-automation flex items-center">
                            <p className="text-black">Interest Rate Per Year</p>
                          </div>
                          <p className="text-black font-medium">{`${
                            !values.applyInterest
                              ? "N/A"
                              : savingsConfiguration.interestRate + "%"
                          }`}</p>
                        </div>
                        <div className="flex items-center justify-between pt-6">
                          <div className="confirm-automation flex items-center">
                          <p className="text-black">
                              {`${
                                values.applyInterest
                                  ? "Uncheck if you an Ethical Investor"
                                  : "Are you an Ethical Investor?"
                              }`}
                            </p>
                          </div>
                          <div className="pretty p-switch p-fill ">
                            <Field type="checkbox" name="applyInterest" />
                            <div className="state">
                              <label />
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
