import React, { useState, Fragment, useEffect } from "react";
import CardIcon from "../../../assets/img/cardIcon.png";
import { connect } from "react-redux";
import Loading from "shared-components/Loading";
import { formatCurrency } from "utils";
import { Redirect } from "react-router-dom";
import "./input.css";
// import InvestModalSuccess from "./InvestModalSuccess";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
import DollarSuccess from "./DollarSuccess";

const DollarModal = (props) => {
  const onclose = () => {
    props.myclose(false);
    // console.log(props);
  };

  return (
    <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
      <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
        <span
          className="closeModal cursor-pointer"
          onClick={() => {
            onclose();
            // refresh();
          }}
        >
          <span className="closeModal">
            <CloseModalIcon />
          </span>
        </span>

        <Fragment>
          <div className="flex flex-col items-center mb-0">
            <i className="w-20 mb-4">
              <img src={CardIcon} alt="" />
            </i>
            <h1 className="text-2xl font-medium mb-2">
              Submit proof of payment{" "}
            </h1>

            {/* input content one */}
            <fieldset className="mb-4 w-full px-6 mx-auto mt-4">
              <label className="block text-xs font-medium">
                Upload proof of payment
              </label>
              <div
                style={{ border: "1px solid #a0aec0" }}
                className="fire block w-full text-xs mt-2 p-3 border border-gray-400 rounded"
              >
                <p>Choose File</p>
                <input type="file" name="myfile" />
              </div>
            </fieldset>
            {/* input content one */}

            {/* input content two */}
            <fieldset className="mb-4 w-full px-6 mx-auto">
              <label className="block text-xs font-medium">
                Enter ref code
              </label>
              <input
                placeholder=" Payment should contain your name, bank and ref number"
                className="block w-full text-xs mt-2 p-3 border border-gray-400 rounded"
                //   onChange={(e) => {
                //       callSetDetail(e.target.value);
                //   }}
              />
            </fieldset>
            {/* input content two */}

            <button
              onClick={() => {
                // showMyDetails();
                // setPayment(true);
              }}
              className={`mt-6 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}
            >
              Submit
            </button>
          </div>
        </Fragment>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  createInvestmentMe: state.investments.createInvestmentMe,
  createInvestmentLoading: state.investments.createInvestmentLoading,
  createInvestmentError: state.investments.createInvestmentError,
  createInvestmentData: state.investments.createInvestmentData,
  cards: state.cards.data,
  dashboard: state.dashboard.data,
});

export default connect(mapStateToProps)(DollarModal);
