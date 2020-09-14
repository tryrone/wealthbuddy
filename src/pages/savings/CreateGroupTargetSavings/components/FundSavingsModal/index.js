import React, { Fragment, useEffect } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { AddNewCard } from "assets/exports";
import CardIcon from "assets/img/cardIcon.png";
import PaymentCardDropdown from "./components/PaymentCardDropdown";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
import { closeModalOnOutsideClick } from "utils";

const FundSavingsModal = ({
  formValues,
  isVisible,
  onSubmit: handleOnSubmit,
  close,
}) => {
  useEffect(() => {
    isVisible && closeModalOnOutsideClick(close);
  }, [isVisible]);

  const FundingMethods = {
    Wallet: false,
    Card: true,
  };

  const fundingMethods = [
    {
      label: "Use wallet",
      value: FundingMethods.Wallet,
    },
    {
      label: "Use debit card",
      value: FundingMethods.Card,
    },
  ];

  const initialValues = {
    cardId: formValues.cardId,
    allowCardDebit: formValues.allowCardDebit,
  };

  const validationSchema = yup.object().shape({
    cardId: yup.string().label("Card").when("allowCardDebit", {
      is: true,
      then: yup.string().required(),
    }),
    allowCardDebit: yup.boolean().label("Funding method").required(),
  });

  const selectFundingOption = (setFieldValue, fundingOption) => {
    if (fundingOption === FundingMethods.Wallet) {
      setFieldValue("cardId", "");
    }

    setFieldValue("allowCardDebit", fundingOption);
  };

  return (
    isVisible && (
      <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
        <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
          <span className="closeModal" onClick={close}>
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
                    className="flex flex-col items-center"
                    onSubmit={handleSubmit}
                  >
                    <div className="mt-6 w-full">
                      {fundingMethods.map((method, index) => (
                        <div
                          key={index}
                          onClick={() =>
                            selectFundingOption(setFieldValue, method.value)
                          }
                          className={`rounded-md w-full border mt-5 flex flex-row items-center content-center py-4 px-4 cursor-pointer ${
                            values.allowCardDebit === method.value
                              ? "selected--item"
                              : "default-state--item"
                          }`}
                        >
                          {values.allowCardDebit === method.value ? (
                            <div className="selected-indicator--dot-container">
                              <div className="selected-indicator--dot-inner" />
                            </div>
                          ) : (
                            <div className="default-state-indicator--circle" />
                          )}

                          <label
                            className="ml-4 font-medium text-base cursor-pointer"
                            htmlFor="payment_method"
                          >
                            {method.label}
                          </label>
                        </div>
                      ))}

                      {values.allowCardDebit === FundingMethods.Card && (
                        <Fragment>
                          <fieldset className="mt-5">
                            <label className="block text-xs mb-2">
                              Select Card
                            </label>
                            <div className="fieldset">
                              <PaymentCardDropdown
                                selectedItemId={values.cardId}
                                onSelectItem={(item) =>
                                  setFieldValue("cardId", item.value)
                                }
                              />
                            </div>
                          </fieldset>

                          <div
                            className="add-new--card flex items-center justify-center"
                            onClick={() => null}
                          >
                            <span
                              className="add-new--icon"
                              dangerouslySetInnerHTML={{ __html: AddNewCard }}
                            />
                            Add a New Card
                          </div>
                        </Fragment>
                      )}
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

export default FundSavingsModal;
