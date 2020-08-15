import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import { addPhoto, dogs, dogsBg, catfish, corn } from "../../../imageLinks";
import { Link, Redirect } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import InvestModal from "../../../components/investModal/InvestModal";
import { formatCurrency } from "utils";
import FundExistingModal from "./FundExistingModal";

const FundExistingInvestment = (props) => {
  const [amount, setAmount] = useState(null);

  const [modal, changeModal] = useState(false);

  const onclose = (val) => {
    changeModal(val);
  };

  // onclick of dropdown
  const clickView = (value) => {
    setView(!value);
  };
  // onclick of dropdown
  const onSubmitFund = () => {
    changeModal(true);
  };

  const [view, setView] = useState(false);
  const [itemView, setItem] = useState("Investment name");

  const specificData = props.allPersonalInvestmentsData.filter(
    (item) => props.location.investmentId == item.securityId
  );

  const fundData = {
    transAmount: parseInt(amount),
    securityId: specificData.length == 0 ? null : specificData[0].securityId,
    description: specificData.length == 0 ? null : specificData[0].symbol,
    // currency: specificData.length == 0 ? null : specificData[0].currency,
    currency: "NGN",
    fundName: specificData.length == 0 ? null : specificData[0].companyName,
  };

  return !props.location.investmentId ? (
    <Redirect to="/dashboard/investment" />
  ) : (
    <div className="px-4 sm:px-12  flex flex-col fadeIn">
      {/* navigation */}
      <div className="flex flex-row justify-between content-center sm:w-3/6 items-center  mb-10 ">
        <p style={{ color: "#999999" }} className="text-xs ">
          Investment
        </p>
        <p style={{ color: "#999999" }} className="text-xs ">
          {" "}
          {">>"}{" "}
        </p>
        <p style={{ color: "#999999" }} className="text-xs ml-4 sm:ml-1">
          {specificData[0].companyName}
        </p>
        <p style={{ color: "#999999" }} className="text-xs">
          {" "}
          {">>"}{" "}
        </p>
        <p className="text-sm text-black">Fund Investment</p>
      </div>
      {/* navigation */}

      {/* heading */}
      <p className="text-black font-bold text-2xl text-left">Fund Investment</p>
      {/* heading end */}

      {/* main content of specific funding */}
      {/* main content of specific funding */}
      <div className="flex flex-col sm:flex-row">
        {/* column one */}
        <div
          style={{ border: "1px solid #F1F1F1" }}
          className="card sm:w-1/2 pt-24 pb-56 w-auto mb-20 flex flex-col justify-center content-center mt-6 sm:mr-4"
        >
          {/* input content */}
          {/* input content */}
          <fieldset className="mb-4 w-full px-6 mx-auto">
            <label className="block text-xs font-medium">
              How much do you want to add to your investment?
            </label>
            <NumberFormat
              thousandSeparator={true}
              placeholder="Min 20,000"
              autoComplete="off"
              type="text"
              id="amount"
              name="amount"
              className="block w-full text-xs mt-2 p-3 border border-gray-400 rounded"
              value={amount}
              onValueChange={({ value }) => {
                setAmount(value);
              }}
            />
          </fieldset>
          {/* input content end */}
          {/* input content end */}

          {/* nav buttons */}
          <div className="nav-buttons flex justify-center ">
            <Link className="mt-12 w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm">
              Back
            </Link>
            {/* <button className={`mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm ${(checkEmpty(state) === true || status) && "opaque"}`} onClick={(checkEmpty(state) === false && !status) && confirm}> */}
            <button
              onClick={() => {
                onSubmitFund();
              }}
              className={`mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white cursor-not-allowed`}
            >
              Next
            </button>
          </div>
          {/* nav buttons end */}
        </div>
        {/* column one end */}

        {/* column two */}
        <div
          style={{ border: "1px solid #F1F1F1" }}
          className="sm:w-1/2 w-auto card sm:w-1/2 pt-24  pb-20  flex flex-col justify-center mt-6 items-center"
        >
          {/* image setting */}
          <div className="w-72 shadow-lg p-2">
            <div className="h-32 w-full border-dashed border border-gray-400 rounded flex flex-col justify-center items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8CyHlXfQ0X5KJ_kj1pRohugCUtBom9Qk1wg&usqp=CAU"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
          {/* image setting end */}

          {/* image text content */}
          {/* image text content */}
          <p className="text-xl font-bold mb-10 mt-10 text-black text-center">
            {specificData[0].companyName}
          </p>

          {/* <p className="text-black text-lg text-center mt-2 font-bold">₦50,000</p> */}

          <div className="flex flex-row justify-between w-full mt-4 px-16 items-center">
            <p className="text-left text-black text-opacity-25 text-base">
              Capital
            </p>
            <p className="text-right text-black text-base">
              ₦ {formatCurrency(specificData[0].totalPurchaseCost.toFixed(2))}
            </p>
          </div>
          <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
            <p className="text-left text-black text-opacity-25 text-base">
              Current value
            </p>
            <p className="text-right text-black text-base">
              ₦ {formatCurrency(specificData[0].currentValue.toFixed(2))}
            </p>
          </div>
          <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
            <p className="text-left text-black text-opacity-25 text-base">
              Interest
            </p>
            <p className="text-right text-black text-base">N120,000</p>
          </div>
          <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
            <p className="text-left text-black text-opacity-25 text-base">
              Maturity Date
            </p>
            <p className="text-right text-black text-base">07 Jul 2021</p>
          </div>
          {/* image text content end */}
          {/* image text content end */}
        </div>
        {/* column two end */}
      </div>

      {/* main content of specific funding */}
      {/* main content of specific funding */}

      {modal ? (
        <FundExistingModal
          myclose={onclose}
          MycreateInvestmentData={fundData}
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  // ALL PERSONAL INVESTMENT DATA
  allPersonalInvestmentsData: state.investments.allPersonalInvestmentsData,
  allPersonalInvestmentsLoading:
    state.investments.allPersonalInvestmentsLoading,
  allPersonalInvestmentsError: state.investments.allPersonalInvestmentsError,
});

export default connect(mapStateToProps)(FundExistingInvestment);
