import React, { Fragment, useEffect } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import BvnIcon from "assets/img/bvn.png";
import Loading from "shared-components/Loading";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
import { closeModalOnOutsideClick } from "utils";
import NumberFormat from "react-number-format";
import DatePicker from "react-modern-calendar-datepicker";

const initialValues = {
  bvn: "",
  dateOfBirth: null,
};

const validationSchema = yup.object().shape({
  bvn: yup.string().length(11).label("BVN").required(),
  dateOfBirth: yup.object().label("Date of Birth").required(),
});

const AddBvnModal = ({
  isVisible,
  close,
  addBvnLoading,
  addBvnError,
  confirmBvn: handleOnSubmit,
}) => {
  useEffect(() => {
    isVisible && closeModalOnOutsideClick(close);
  }, [0]);

  return (
    isVisible && (
      <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
        <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
          <span className="closeModal" onClick={close}>
            <CloseModalIcon />
          </span>

          <Fragment>
            <div className="flex flex-col items-center mb-0">
              <i className="w-20 mb-4">
                <img src={BvnIcon} alt="" />
              </i>
              <h1 className="text-2xl font-medium mb-2">Add your BVN</h1>
            </div>

            {addBvnLoading ? (
              <div className="flex flex-col items-center mt-8">
                <Loading text="Verifying" />
              </div>
            ) : (
              <Fragment>
                {addBvnError && (
                  <div className="w-72 mb-8 text-xs text-left mt-6">
                    <p className="w-full p-3 bg-red-200 text-red-700 rounded text-center font-medium">
                      {addBvnError}
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
                        <div className="mt-6 w-full">
                          <label className="block text-xs mb-2">
                            Bank verification Number (BVN)
                          </label>
                          <div className="fieldset">
                            <NumberFormat
                              format="###########"
                              placeholder="Bank Verification Number"
                              autoComplete="off"
                              type="text"
                              id="bvn"
                              name="bvn"
                              className="block w-full text-xs p-3 border border-gray-400 rounded"
                              value={values.bvn}
                              onBlur={handleBlur}
                              onValueChange={({ value }) =>
                                setFieldValue("bvn", value)
                              }
                            />
                          </div>
                        </div>
                        <fieldset className="mt-6 w-full">
                          <label className="block text-xs mb-2">
                            Date of Birth
                          </label>
                          <DatePicker
                            inputPlaceholder="Date of Birth"
                            value={values.dateOfBirth}
                            onChange={(value) =>
                              setFieldValue("dateOfBirth", value)
                            }
                            shouldHighlightWeekends
                            inputClassName="w-72 text-xs p-3 border border-gray-400 rounded text-left-f"
                          />
                        </fieldset>
                        <div className="nav-buttons flex justify-center">
                          <div
                            onClick={close}
                            className=" w-40 border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
                          >
                            Back
                          </div>
                          <button
                            type="submit"
                            className="w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm"
                            onSubmit={handleSubmit}
                            disabled={!isValid}
                          >
                            Confirm
                          </button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </Fragment>
            )}
          </Fragment>
        </div>
      </div>
    )
  );
};

export default AddBvnModal;
