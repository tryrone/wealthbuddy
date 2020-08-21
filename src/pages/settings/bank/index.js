import React, { Fragment } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import TrashIcon from "assets/img/plus-red.svg";
import PlusIcon from "assets/img/plus.svg";
import { emptyBank } from "assets/exports";
import { connect } from "react-redux";

const EmptyBank = () => (
  <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset empty-modal">
    <div className="flex flex-col items-center mb-5">
      <i className="mb-4" dangerouslySetInnerHTML={{ __html: emptyBank }} />
    </div>
    <p className="text-center card-header text-gray-500 font-normal leading-normal">
      Saving and investing money is important, and so is cashing out. Enter your
      bank details for withdrawals.
    </p>

    <div className="nav-buttons flex justify-center">
      <button
        className={`px-6 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}
      >
        Add Bank Details
      </button>
    </div>
  </div>
);

const Banks = ({ banksAccounts }) => {
  return (
    <Fragment>
      {banksAccounts && banksAccounts.length > 0 ? (
        <Fragment>
          <div className="user-card--wrap  flex-col">
            <div className="user-card--heading flex justify-between items-center">
              <h3 className="card-main--heading font-medium">
                Your Debit Cards
              </h3>
              <div className="plus-wrap">
                <img className="plus" src={PlusIcon} alt="" />
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
        <EmptyBank />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  banksAccounts: state.bankAccounts.data,
});

export default connect(mapStateToProps)(Banks);
