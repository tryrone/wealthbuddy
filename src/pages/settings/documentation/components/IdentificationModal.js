import React, { useState, Fragment } from "react";
import DatePicker, { utils } from "react-modern-calendar-datepicker";
import SettingsIdentificationIcon from "assets/img/settings-identification.png";
import Loading from "shared-components/Loading";
import NumberFormat from "react-number-format";
import UploadIcon from "assets/img/uploadIcon.svg";
import { Form, Formik } from "formik";
import * as yup from "yup";

const IdentificationModal = ({
  loading: isLoading,
  error,
  isVisible,
  close,
  onSubmit: handleOnSubmit,
}) => {
  const identificationOptions = [
    { key: 1, label: "Driver's License" },
    { key: 2, label: "National ID" },
    { key: 3, label: "International Passport" },
    { key: 4, label: "Others" },
  ];

  const FormStage = {
    Start: "start",
    FillForm: "fill_form",
  };

  const initialValues = {
    idType: null,
    idNumber: "",
    issuanceDate: null,
    expiryDate: null,
    file: null,
    imagePreviewUrl: null,
  };

  const validationSchema = yup.object().shape({
    idType: yup.string().label("ID Type").required(),
    idNumber: yup.string().label("ID Number").required(),
    issuanceDate: yup
      .object()
      .label("Issuance Date")
      .when("idType", {
        is: (idType) => idType === 1 || idType === 2,
        then: yup.object().required(),
      }),
    expiryDate: yup
      .object()
      .label("Expiry Date")
      .when("idType", {
        is: (idType) => idType === 1 || idType === 2,
        then: yup.object().required(),
      }),
    file: yup.mixed().label("File").required(),
  });

  const [formStage, setFormStage] = useState(FormStage.Start);

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
      <div className="modal fixed inset-0 z-50 bg-wb-overlay flex justify-center items-center modal-active">
        <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset id-modal">
          <div className="w-full flex flex-col items-center text-center">
            <img
              src={SettingsIdentificationIcon}
              className="mx-auto w-32 mb-4"
              alt=""
            />
            <p className="text-center font-normal text-gray-500 leading-normal">
              As simple as investing your savings and we will help you grow from
              there.
            </p>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              validateOnMount={true}
              onSubmit={handleOnSubmit}
            >
              {({
                handleSubmit,
                isValid,
                handleBlur,
                setFieldValue,
                values,
              }) => {
                return (
                  <Form
                    className="w-full flex flex-col items-center text-center"
                    onSubmit={handleSubmit}
                  >
                    {isLoading ? (
                      <div className="w-full mt-8 text-center flex flex-col items-center justify-center">
                        <Loading text="Adding your ID, please wait" />
                      </div>
                    ) : formStage === FormStage.Start ? (
                      <div className="w-full flex selectFund flex-wrap  justify-between text-left">
                        {identificationOptions.map(({ label, key }, index) => (
                          <div key={index} className="select-radio--option">
                            <input
                              type="radio"
                              name="idType"
                              value={key}
                              className="mr-2"
                              id={key}
                              defaultChecked={key === values.idType}
                              onChange={(event) =>
                                setFieldValue(
                                  "idType",
                                  parseInt(event.target.value)
                                )
                              }
                            />
                            <label
                              htmlFor={key}
                              className="font-medium text-base"
                            >
                              {label}
                            </label>
                          </div>
                        ))}
                        <div className="w-full flex mt-8 flex justify-center">
                          <div
                            onClick={close}
                            className=" w-40 border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
                          >
                            Back
                          </div>
                          <button
                            type="button"
                            className="w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm"
                            disabled={!values.idType}
                            onClick={() => setFormStage(FormStage.FillForm)}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="inner-card--wrap mt-4">
                        {error && (
                          <div className="w-full mb-8 text-xs text-left">
                            <p className="w-full p-4 bg-red-200 text-red-700 rounded text-center font-medium">
                              {error}
                            </p>
                          </div>
                        )}

                        <div className="personalize--card">
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
                              + Change ID
                            </h3>
                          ) : (
                            <h3 className="color-secondary change-text personalize-text text-center">
                              <span>+ Upload ID</span>
                            </h3>
                          )}
                        </div>

                        <div className="w-full mt-6 flex justify-center max-wrap fieldset">
                          <fieldset className="w-full max-w-input-upload text-left">
                            <label className="block text-xs mb-2">
                              ID number
                            </label>
                            <NumberFormat
                              placeholder="Enter ID Number"
                              type="text"
                              id="idNumber"
                              name="idNumber"
                              value={values.idNumber}
                              onBlur={handleBlur}
                              onValueChange={({ value }) =>
                                setFieldValue("idNumber", value)
                              }
                              className="block w-full text-xs p-3 border border-gray-400 rounded"
                            />
                          </fieldset>
                        </div>

                        {(values.idType === 1 || values.idType === 3) && (
                          <Fragment>
                            <fieldset className="w-full mt-6 text-left max-wrap">
                              <label className="block text-xs font-medium mb-2">
                                Issuance date
                              </label>
                              <DatePicker
                                value={values.issuanceDate}
                                onChange={(value) =>
                                  setFieldValue("issuanceDate", value)
                                }
                                inputPlaceholder="Select a date"
                                shouldHighlightWeekends
                                maximumDate={utils("en").getToday()}
                                inputClassName="w-72 text-xs p-3 border border-gray-400 rounded text-left-f"
                              />
                            </fieldset>
                            <fieldset className="w-full mt-6 text-left max-wrap ">
                              <label className="block text-xs font-medium mb-2">
                                Expiry date
                              </label>
                              <DatePicker
                                value={values.expiryDate}
                                onChange={(value) =>
                                  setFieldValue("expiryDate", value)
                                }
                                inputPlaceholder="Select a date"
                                shouldHighlightWeekends
                                minimumDate={utils("en").getToday()}
                                inputClassName="w-72 text-xs p-3 border border-gray-400 rounded text-left-f"
                              />
                            </fieldset>
                          </Fragment>
                        )}

                        {!isLoading && (
                          <div className="nav-buttons flex justify-center">
                            <div
                              onClick={() => setFormStage(FormStage.Start)}
                              className=" w-40 border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
                            >
                              Back
                            </div>
                            <button
                              type="submit"
                              className="w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm"
                              disabled={!isValid}
                            >
                              Submit
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    )
  );
};
export default IdentificationModal;
