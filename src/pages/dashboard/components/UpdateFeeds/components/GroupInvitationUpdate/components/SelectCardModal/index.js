import React, { Fragment, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import CardIcon from "assets/img/cardIcon.png";
import PaymentCardDropdown from "./PaymentCardDropdown";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
import Loading from "shared-components/Loading";

const initialValues = {
  cardId: "",
};

const validationSchema = yup.object().shape({
  cardId: yup.string().label("Card").required(),
});

const SelectCardModal = ({
  isVisible,
  isAcceptLoading,
  acceptError,
  onSubmit: handleSubmit,
  onBack: handleBack,
  onClose: handleClose,
}) =>
  isVisible && (
    <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
      <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
        <span className="closeModal" onClick={handleClose}>
          <CloseModalIcon />
        </span>
        <div className="flex flex-col items-center mb-0">
          <i className="w-20 mb-4">
            <img src={CardIcon} alt="" />
          </i>
          <h1 className="text-2xl font-medium mb-2">Fund savings</h1>
          <p className="text-center text-gray-500 leading-normal">
            As simple as investing your savings and we will help you grow from
            there.
          </p>
        </div>

        {acceptError && (
          <div className="w-72 text-xs text-left my-5 my-3">
            <p className="w-full p-3 bg-red-200 text-red-700 rounded text-center font-medium">
              {acceptError}
            </p>
          </div>
        )}

        {!isAcceptLoading ? (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnMount={true}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, isValid, setFieldValue, values }) => {
              return (
                <Form
                  className="flex flex-col items-center"
                  onSubmit={handleSubmit}
                >
                  <div className="mt-6 w-full">
                    <label className="block text-xs mb-2">Select Card</label>
                    <div className="fieldset">
                      <PaymentCardDropdown
                        selectedItemId={values.cardId}
                        optionIdKey="id"
                        onSelectItem={(item) =>
                          setFieldValue("cardId", item.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="nav-buttons flex justify-center">
                    <div
                      onClick={handleBack}
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
        ) : (
          <div className="flex flex-col items-center mt-8">
            <Loading text="Creating goal" />
          </div>
        )}
      </div>
    </div>
  );

export default SelectCardModal;
