import React, { Fragment, useEffect } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { AddNewCard } from "assets/exports";
import CardIcon from "assets/img/cardIcon.png";
import PaymentCardDropdown from "./components/PaymentCardDropdown";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
import { closeModalOnOutsideClick } from "utils";

const initialValues = {
  cardId: "",
};

const validationSchema = yup.object().shape({
  cardId: yup.string().label("Card").required(),
});

const FundSavingsModal = ({
  isVisible,
  onSubmit: handleOnSubmit,
  closeModal,
}) => {
  useEffect(() => {
    if (isVisible) {
      closeModalOnOutsideClick(closeModal);
    }
  }, [0]);

  return (
    isVisible && (
      <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
        <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
          <span className="closeModal" onClick={closeModal}>
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
                      <label className="block text-xs mb-2">Select Card</label>
                      <div className="fieldset">
                        <PaymentCardDropdown
                          selectedItemId={values.cardId}
                          onSelectItem={(item) =>
                            setFieldValue("cardId", item.value)
                          }
                        />
                      </div>
                    </div>

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
        </div>
      </div>
    )
  );
};

export default FundSavingsModal;
