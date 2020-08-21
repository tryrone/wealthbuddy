import React, { Fragment, useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import TrashIcon from "assets/img/plus-red.svg";
import PlusIcon from "assets/img/plus.svg";
import { emptyBank } from "assets/exports";
import { connect } from "react-redux";
import AddBankModal from "./components/AddBankModal";
import produce from "immer";
import AddBankSuccess from "./components/AddBankSuccess";

const EmptyBank = ({ showAddBankModal }) => {
  return (
    <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset empty-modal">
      <div className="flex flex-col items-center mb-5">
        <i className="mb-4" dangerouslySetInnerHTML={{ __html: emptyBank }} />
      </div>
      <p className="text-center card-header text-gray-500 font-normal leading-normal">
        Saving and investing money is important, and so is cashing out. Enter
        your bank details for withdrawals.
      </p>

      <div className="nav-buttons flex justify-center">
        <button
          className="px-6 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm"
          onClick={showAddBankModal}
        >
          Add Bank Details
        </button>
      </div>
    </div>
  );
};

const Banks = ({ banksAccounts }) => {
  const [state, setState] = useState({
    isAddBankModalOpen: false,
    closeAddBankModal: false,
    showAddBankSuccess: false,
    isAddBankSuccessModalOpen: false,
  });

  const showAddBankModal = () => {
    setState(
      produce((draftState) => {
        draftState.isAddBankModalOpen = true;
      })
    );
  };

  const closeAddBankModal = () => {
    setState(
      produce((draftState) => {
        draftState.isAddBankModalOpen = false;
      })
    );
  };

  const showAddBankSuccess = () => {
    setState(
      produce((draftState) => {
        draftState.isAddBankModalOpen = false;
        draftState.isAddBankSuccessModalOpen = true;
      })
    );
  };

  const closeAddBankSuccessModal = () => {
    setState(
      produce((draftState) => {
        draftState.isAddBankSuccessModalOpen = false;
      })
    );
  };

  return (
    <Fragment>
      {banksAccounts && banksAccounts.length > 0 ? (
        <Fragment>
          <div className="user-card--wrap  flex-col">
            <div className="user-card--heading flex justify-between items-center">
              <h3 className="card-main--heading font-medium">Your Banks</h3>
              <div className="plus-wrap">
                <img
                  onClick={showAddBankModal}
                  className="plus"
                  src={PlusIcon}
                  alt=""
                />
              </div>
            </div>
            <div className="flex justify-between flex-wrap">
              {banksAccounts.map((item, i) => (
                <div className="single-user--card single-bank" key={i}>
                  <div className="single-card--action flex justify-end">
                    <img src={TrashIcon} alt="" />
                  </div>
                  <div className="single-card--body flex justify-between color-black">
                    <div className="user-bank--name">{"accountName"}</div>
                  </div>
                  <div className="single-card--excerpt flex justify-between items-center">
                    <div className="flex items-center color-black">
                      <span className="mr-2">{"bankName"}</span>
                    </div>
                    <div className="color-black">
                      <span className="">{"bankAccountNumber"}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Fragment>
      ) : (
        <EmptyBank showAddBankModal={showAddBankModal} />
      )}

      <AddBankModal
        isAddBankModalOpen={state.isAddBankModalOpen}
        closeAddBankModal={closeAddBankModal}
        showAddBankSuccess={showAddBankSuccess}
      />

      <AddBankSuccess
        isAddBankSuccessModalOpen={state.isAddBankSuccessModalOpen}
        closeAddBankSuccessModal={closeAddBankSuccessModal}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  banksAccounts: state.bankAccounts.data,
});

export default connect(mapStateToProps)(Banks);
