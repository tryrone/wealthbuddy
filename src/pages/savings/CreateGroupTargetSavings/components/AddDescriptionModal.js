import React, { Fragment, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
import { closeModalOnOutsideClick } from "utils";
import { FaUsers } from "react-icons/fa/index";

const AddDescriptionModal = ({
  formValues,
  isVisible,
  onSubmit: handleOnSubmit,
  close,
}) => {
  useEffect(() => {
    isVisible && closeModalOnOutsideClick(close);
  }, [isVisible]);

  const initialValues = {
    description: formValues.description,
  };

  const validationSchema = yup.object().shape({
    description: yup.string().label("Card").required(),
  });

  return (
    isVisible && (
      <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
        <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
          <span className="closeModal" onClick={close}>
            <CloseModalIcon />
          </span>

          <div className="flex flex-col items-center mb-0">
            <div className="p-3 bg-purple-200 text-purple-600 rounded-md">
              <FaUsers />
            </div>
            <h1 className="text-xl font-medium mt-2">Invite members</h1>
            <p className="text-center text-gray-500 leading-normal mt-2">
              Add a description to help members understand what this goal is
              for.
            </p>
          </div>

          <Fragment>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              validateOnMount={true}
              onSubmit={handleOnSubmit}
            >
              {({ handleSubmit, isValid, setFieldValue, values }) => {
                return (
                  <Form
                    className="flex flex-col items-center mt-12"
                    onSubmit={handleSubmit}
                  >
                    <div className="w-full">
                      <label className="block text-xs mb-2">
                        Goal Description
                      </label>
                      <div className="fieldset">
                        <Field
                          component="textarea"
                          placeholder="Enter Goal Description"
                          type="text"
                          name="description"
                          className="block w-full text-xs p-3 readOnly border border-gray-400 rounded"
                          rows="5"
                        />
                      </div>
                    </div>

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
                        Proceed
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </Fragment>
        </div>
      </div>
    )
  );
};

export default AddDescriptionModal;
