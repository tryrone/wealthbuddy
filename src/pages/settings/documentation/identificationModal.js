import React, { useState, Fragment } from "react";
import DatePicker, { utils } from "react-modern-calendar-datepicker";
import SettingsIdentificationIcon from "assets/img/settings-identification.png";
import Loading from "shared-components/Loading";
import NumberFormat from "react-number-format";
import UploadIcon from "assets/img/uploadIcon.svg";
import { Form, Formik } from "formik";
import * as yup from "yup";

const IdentificationModal = () => {
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
    bvn: "",
    dateOfBirth: null,
  };

  const validationSchema = yup.object().shape({
    bvn: yup.string().length(11).label("BVN").required(),
    dateOfBirth: yup.object().label("Date of Birth").required(),
  });

  const [formStage, setFormStage] = useState(FormStage.FillForm);
  const [loading] = useState(false);
  const [error] = useState(null);
  const [issuanceDate] = useState(utils("en").getToday());
  const [expiryDay] = useState(utils("en").getToday());
  const [idType, setIdType] = useState(1);

  const getType = (event) => {
    setIdType(parseInt(event.target.value));
  };

  const handleOnSubmit = (formValues) => {
    alert(JSON.stringify(formValues));
  };

  const imagePreviewUrl = null;

  return (
    <div className="modal fixed inset-0 z-50 bg-wb-overlay flex justify-center items-center modal-active">
      <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset id-modal">
        <form>
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

            {formStage === FormStage.Start ? (
              <div
                className="w-full flex selectFund flex-wrap  justify-between text-left"
                onChange={getType}
              >
                {identificationOptions.map(({ label, key }) => {
                  return (
                    <div className="select-radio--option">
                      <input
                        type="radio"
                        name="id_type"
                        value={key}
                        className="mr-2"
                        id={key}
                        defaultChecked={key === 1}
                      />
                      <label htmlFor={key} className="font-medium text-base">
                        {label}
                      </label>
                    </div>
                  );
                })}
              </div>
            ) : loading ? (
              <div className="w-full mt-8 text-center flex flex-col items-center justify-center">
                <Loading text="Adding your ID, please wait" />
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
                        className="flex flex-col items-center"
                        onSubmit={handleSubmit}
                      >
                        <div className="personalize--card">
                          <div className="previewComponent">
                            <input
                              className="fileInput"
                              type="file"
                              onChange={() => null}
                              accept="image/*"
                            />
                            <div
                              className={`${
                                !imagePreviewUrl && "drop"
                              } imgPreview`}
                            >
                              {imagePreviewUrl ? (
                                <img src={imagePreviewUrl} alt="" />
                              ) : (
                                <div className="buddy-image--drop">
                                  <img src={UploadIcon} alt="" />
                                </div>
                              )}
                            </div>
                          </div>
                          {imagePreviewUrl ? (
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
                              type="tel"
                              id="id_number"
                              name="id_number"
                              className="block w-full text-xs p-3 border border-gray-400 rounded"
                            />
                          </fieldset>
                        </div>
                        {(idType === 1 || idType === 3) && (
                          <Fragment>
                            <fieldset className="w-full mt-6 text-left max-wrap">
                              <label className="block text-xs font-medium mb-2">
                                Issuance date
                              </label>
                              <DatePicker
                                value={issuanceDate}
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
                                value={expiryDay}
                                inputPlaceholder="Select a date"
                                shouldHighlightWeekends
                                minimumDate={utils("en").getToday()}
                                inputClassName="w-72 text-xs p-3 border border-gray-400 rounded text-left-f"
                              />
                            </fieldset>
                          </Fragment>
                        )}
                        {!loading && (
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
                              // onSubmit={
                              //   formStage === FormStage.Start
                              //     ? handleNextToForm
                              //     : handleSubmit
                              // }
                              disabled={!isValid}
                            >
                              {formStage === FormStage.Start
                                ? "Next"
                                : "Submit"}
                            </button>
                          </div>
                        )}
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            )}
            {!loading && (
              <div className="flex mt-12">
                <button
                  type="button"
                  className={`w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm`}
                >
                  Back
                </button>
                <button
                  type="button"
                  className={`block py-3 w-40 font-medium bg-wb-primary rounded-lg text-white `}
                >
                  {formStage === FormStage.Start ? "Next" : "Submit"}
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default IdentificationModal;
