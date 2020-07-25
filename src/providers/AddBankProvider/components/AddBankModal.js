import React, { Fragment, useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import BankIcon from "assets/img/bankIcon.png";
import Loading from "shared-components/Loading";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
import { closeModalOnOutsideClick } from "utils";
import BankListDropdown from "./BankListDropdown";
import { addBankAccount } from "state/ducks/addBankAccount/actions";
import AddBankModalVerification from "./AddBankModalVerification";
import { sendToken } from "state/ducks/sendToken/actions";
import ConfirmOTP from "./ConfirmOTP";
import AddBankContext from "contexts/AddBankContext";

const initialValues = {
  accountNumber: "",
  bankCode: "",
  bankName: "",
  isValid: false,
};

const validationSchema = yup.object().shape({
  bankCode: yup.string().label("Bank code").required(),
  bankName: yup.string().label("Bank name").required(),
  accountNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Must be exactly 10 digits")
    .label("Account number")
    .required(),
  isValid: yup.bool().oneOf([true], "Account details must be valid"),
});

const AddBankModal = ({ sendTokenLoading, dispatchSendToken }) => {
  const {
    isAddBankModalOpen,
    closeAddBankModal,
    showAddBankSuccess,
  } = useContext(AddBankContext);

  useEffect(() => {
    if (isAddBankModalOpen) {
      closeModalOnOutsideClick(closeAddBankModal);
    }
  }, [0]);

  const [bankId, setBankId] = useState(null);
  const [tokenReference, setTokenReference] = useState(null);

  const handleOnSubmitAddBank = (formValues, formikProps) => {
    const meta = { formikProps, setTokenReference };
    dispatchSendToken(formValues, meta);
  };

  if (!isAddBankModalOpen) {
    return null;
  }

  return (
    <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
      <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
        <span className="closeModal" onClick={closeAddBankModal}>
          <CloseModalIcon />
        </span>

        {!tokenReference ? (
          <Fragment>
            <div className="flex flex-col items-center mb-0">
              <i className="w-20 mb-4">
                <img src={BankIcon} alt="" />
              </i>
              <h1 className="text-2xl font-medium mb-2">Add Bank</h1>
              <p className="text-center text-gray-500 leading-normal">
                Add a bank account to withdraw your savings and investments
                after maturity.
              </p>
            </div>

            {sendTokenLoading ? (
              <div className="flex flex-col items-center mt-8">
                <Loading text="Verifying Bank Account" />
              </div>
            ) : (
              <Fragment>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  validateOnMount={true}
                  onSubmit={handleOnSubmitAddBank}
                >
                  {({ handleSubmit, isValid, setFieldValue, values }) => {
                    return (
                      <Form
                        className="flex flex-col items-center"
                        onSubmit={handleSubmit}
                      >
                        <div className="mt-6 w-full">
                          <label className="block text-xs mb-2">
                            Select Bank
                          </label>
                          <div className="fieldset">
                            <BankListDropdown
                              selectedItemId={values.bankCode}
                              onSelectItem={(item) => {
                                setFieldValue("bankName", item.label);
                                setFieldValue("bankCode", item.value);
                              }}
                            />
                          </div>
                        </div>
                        <fieldset className="mt-6 w-full">
                          <label className="block text-xs mb-2">
                            Account Number
                          </label>
                          <Field
                            placeholder="Enter Account Number"
                            type="text"
                            id="accountNumber"
                            name="accountNumber"
                            className="block w-72 text-xs p-3 border border-gray-400 rounded"
                          />
                        </fieldset>
                        <AddBankModalVerification
                          name="isValid"
                          setBankId={setBankId}
                        />
                        <div className="nav-buttons flex justify-center">
                          <div
                            onClick={closeAddBankModal}
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
            )}
          </Fragment>
        ) : (
          <ConfirmOTP
            tokenReference={tokenReference}
            bankId={bankId}
            showAddBankSuccess={showAddBankSuccess}
          />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sendTokenLoading: state.sendToken.loading,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAddBankAccount: (payload, meta) =>
    dispatch(addBankAccount(payload, meta)),
  dispatchSendToken: (payload, meta) => dispatch(sendToken(payload, meta)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBankModal);
