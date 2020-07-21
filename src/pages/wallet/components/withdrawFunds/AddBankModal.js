import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import BankIcon from "assets/img/bankIcon.png";
import WalletDropdown from "pages/wallet/components/fundWallet/PaymentCardDropdown";
import Loading from "shared-components/Loading";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
import { fundWalletWithExistingCard } from "state/ducks/fundWalletWithExistingCard/actions";
import { startFundWalletWithNewCard } from "state/ducks/startFundWalletWithNewCard/actions";
import { closeModalOnOutsideClick } from "utils";
import { ADD_NEW_CARD } from "constants/strings";
import BankDropdown from "./BankDropdown";

const initialValues = {
  accountNumber: "",
  bankCode: "",
  bankName: "",
};

const validationSchema = yup.object().shape({
  accountNumber: yup.string().label("Account number").required(),
  bankCode: yup.string().label("Bank code").required(),
  bankName: yup.string().label("Bank name").required(),
});

const AddBankModal = ({
  fundWithExistingCardLoading,
  fundWithExistingCardError,
  startFundWithNewCardLoading,
  startFundWithNewCardError,
  setAmount,
  closeModal,
  continueToPaystack,
  showSuccessModal,
  dispatchFundWalletWithExistingCard,
  dispatchStartFundWalletWithNewCard,
}) => {
  const history = useHistory();

  useEffect(() => {
    document.querySelector(".modal").classList.add("modal-active");
    closeModalOnOutsideClick(closeModal);
    return () => {
      document.querySelector(".modal").classList.remove("modal-active");
    };
  }, [0]);

  const handleOnSubmit = (formValues, formikProps) => {
    const meta = {
      formikProps,
      history,
      closeFundWalletModal: closeModal,
    };

    let params = {
      amount: parseFloat(formValues.amount.replace(/(?!\.)\D/g, "")),
      customerCardDataID: formValues.customerCardDataID,
    };

    setAmount(params.amount);

    if (formValues.customerCardDataID === ADD_NEW_CARD) {
      params = { amount: params.amount, saveCard: true };
      dispatchStartFundWalletWithNewCard(params, {
        ...meta,
        continueToPaystack,
      });
    } else {
      dispatchFundWalletWithExistingCard(params, { ...meta, showSuccessModal });
    }
  };

  return (
    <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
      <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
        <span className="closeModal" onClick={closeModal}>
          <CloseModalIcon />
        </span>
        <div className="flex flex-col items-center mb-0">
          <i className="w-20 mb-4">
            <img src={BankIcon} alt="" />
          </i>
          <h1 className="text-2xl font-medium mb-2">Add Bank</h1>
          <p className="text-center text-gray-500 leading-normal">
            Add a bank account to withdraw your savings and investments after maturity.
          </p>
        </div>

        {fundWithExistingCardLoading || startFundWithNewCardLoading ? (
          <div className="flex flex-col items-center mt-8">
            <Loading text="Funding Wallet" />
          </div>
        ) : (
          <Fragment>
            {(fundWithExistingCardError || startFundWithNewCardError) && (
              <div className="w-72 text-xs text-left mt-8 ">
                <p className="w-full p-3 bg-red-200 text-red-700 rounded text-center font-medium">
                  {fundWithExistingCardError || startFundWithNewCardError}
                </p>
              </div>
            )}
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
                      <label className="block text-xs mb-2">Select Bank</label>
                      <div className="fieldset">
                        <BankDropdown
                            selectedItemId={values.customerCardDataID}
                            optionIdKey="id"
                            onSelectItem={(item) => {
                              setFieldValue("bankName", item.value);
                              setFieldValue("bankCode", item.value);
                            }}
                        />
                      </div>
                    </div>
                    <fieldset className="mt-6 w-full">
                      <label className="block text-xs mb-2">Account Number</label>
                      <Field
                        placeholder="Enter Account Number"
                        type="text"
                        id="accountNumber"
                        name="accountNumber"
                        className="block w-72 text-xs p-3 border border-gray-400 rounded"
                      />
                    </fieldset>
                    <div className="nav-buttons flex justify-center">
                      <div
                        onClick={closeModal}
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
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  fundWithExistingCardLoading: state.fundWalletWithExistingCard.loading,
  fundWithExistingCardError: state.fundWalletWithExistingCard.error,
  startFundWithNewCardLoading: state.startFundWalletWithNewCard.loading,
  startFundWithNewCardError: state.startFundWalletWithNewCard.error,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFundWalletWithExistingCard: (payload, meta) =>
    dispatch(fundWalletWithExistingCard(payload, meta)),
  dispatchStartFundWalletWithNewCard: (payload, meta) =>
    dispatch(startFundWalletWithNewCard(payload, meta)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBankModal);
