import React, { useEffect, Fragment, useContext } from "react";
import CardIcon from "assets/img/cardIcon.png";
import Loading from "shared-components/Loading";
import classNames from "classnames";
import * as yup from "yup";
import { Form, Formik } from "formik";
import UserBanksDropdown from "./components/UserBanksDropdown";
import NumberFormat from "react-number-format";
import AddBankContext from "contexts/AddBankContext";
import { closeModalOnOutsideClick } from "utils";

const loading = false;
const loginError = false;

const WithdrawFundsModal = () => {
  const { isWithdrawFundsModalOpen, closeWithdrawFundsModal } = useContext(
    AddBankContext
  );

  useEffect(() => {
    if (isWithdrawFundsModalOpen) {
      closeModalOnOutsideClick(closeWithdrawFundsModal);
    }
  }, [isWithdrawFundsModalOpen]);

  const initialValues = {
    amount: "",
    bankId: "",
  };

  const validationSchema = yup.object().shape({
    amount: yup.number().label("Amount").required(),
    bankId: yup.string().label("Bank account").required(),
  });

  return (
    isWithdrawFundsModalOpen && (
      <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
        <Fragment>
          <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
            <div className="flex flex-col items-center mb-0">
              <i className="w-20 mb-4">
                <img src={CardIcon} alt="" />
              </i>
              <h1 className="text-2xl font-medium mb-2">
                Withdraw from wallet
              </h1>
              <p className="text-center text-gray-500 leading-normal">
                As simple as investing your savings and we will help you grow
                from there.
              </p>
            </div>

            <Fragment>
              {loading ? (
                <div className="mt-8 flex flex-col items-center">
                  <Loading text="Funding Wallet" />
                </div>
              ) : (
                <Fragment>
                  {loginError && (
                    <div className="w-72 mb-8 text-xs text-left">
                      <p className="w-full p-3 bg-red-200 text-red-700 rounded text-center font-medium">
                        loginError
                      </p>
                    </div>
                  )}

                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    validateOnMount={true}
                    onSubmit={() => null}
                  >
                    {({
                      handleSubmit,
                      isValid,
                      setFieldValue,
                      values,
                      handleBlur,
                    }) => {
                      return (
                        <Form
                          className="flex flex-col items-center"
                          onSubmit={handleSubmit}
                        >
                          <fieldset className="selectFund w-full">
                            <label className="block text-xs mb-2">Amount</label>
                            <NumberFormat
                              thousandSeparator={true}
                              placeholder="eg: 20,000"
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
                          </fieldset>
                          <div className="mt-6 w-full">
                            <label className="block text-xs mb-2">Bank</label>
                            <div className="fieldset">
                              <UserBanksDropdown
                                selectedItemId={values.bankId}
                                onSelectItem={(item) =>
                                  setFieldValue("bankId", item.value)
                                }
                              />
                            </div>
                          </div>
                          <div className="nav-buttons flex justify-center">
                            <div
                              onClick={closeWithdrawFundsModal}
                              className=" w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
                            >
                              Back
                            </div>
                            <button
                              className={classNames({
                                "w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm": true,
                                opaque: !isValid,
                              })}
                              onClick={isValid ? () => null : null}
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
          </div>
        </Fragment>
      </div>
    )
  );
};

export default WithdrawFundsModal;
