import React, { useState, useEffect } from "react";
import DatePicker, { utils } from "react-modern-calendar-datepicker";
import produce from "immer";
import NumberFormat from "react-number-format";
import { formatCurrency } from "utils";
// import * as Yup from "yup";
// import { ErrorMessage, Field, Form, Formik } from "formik";
import { info } from "../../imageLinks";
import moment from "moment";
import { Redirect } from "react-router-dom";
import UploadIcon from "assets/img/uploadIcon.svg";
import { Link } from "react-router-dom";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import InvestModal from "../investModal/InvestModal";
import StartDropdown from "./StartDropdown";
// import { createInvestment } from "../../../../state/slices/investments";
import { connect, useDispatch } from "react-redux";
import "./check.scss";

function AddInvestmentForm(props) {
  const [modal, changeModal] = useState(false);
  const [files, setFiles] = useState({
    file: "",
    imagePreviewUrl: "",
    isFixed: false,
  });
  // const [duration, setDuration] = useState("");
  const [state, setState] = useState({
    duration: "",
    amount: null,
    date: null,
    amountError: "",
    frequency: false,
  });

  const setDurationDays = (val) => {
    setState({
      ...state,
      duration: val,
    });
  };

  const dispatch = useDispatch();

  // // ON COMPONENT MOUNT
  // useEffect(() => {}, []);

  const InvestmentName = props.getAllInvestmentsData.filter(
    (item) => item.investmentID == props.location.investmentId
  );

  const callSetAmount = (val) => {
    setState({
      ...state,
      amount: val,
    });
  };

  // VALIDATION SCHEMA
  // const validationSchema = Yup.object().shape({
  //   amount: Yup.number()
  //     .min(
  //       InvestmentName[0].minimumAmount,
  //       `You can only save a minimum of ₦${formatCurrency(
  //         InvestmentName[0].minimumAmount
  //       )}`
  //     )
  //     .label("Amount")
  //     .required(),
  //   frequency: Yup.boolean().label("recurring").required(),
  //   startDate: Yup.string().label("Start Date").required(),
  //   duration: Yup.number().required(),
  // });

  // HANDLING CLOSE OF MODAL

  const onclose = (val) => {
    changeModal(val);
  };

  // HANDLING IMAGE CHANGE
  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setFiles(
        produce((draft) => {
          draft.file = file;
          draft.imagePreviewUrl = reader.result;
        })
      );
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // SET DROPDOWN VALUE
  if (InvestmentName.length < 1) {
    return <Redirect to="/dashboard/investment" />;
  }
  // CREATE INVESTMENT FORM DATA
  const date = moment(state.date).toISOString();
  // HANDLE ON FORM SUBMIT
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (state.amount === null) {
      setState({
        ...state,
        amountError: "field is required",
      });
    } else if (state.amount < InvestmentName[0].minimumAmount) {
      setState({
        ...state,
        amountError: `amount must be more than ${InvestmentName[0].minimumAmount}`,
      });
    } else {
      changeModal(true);
    }
  };

  //INVETSMENT DATA
  // const inData =
  //   InvestmentName[0].investmentID == 51129656 || 51129542
  //     ? investmentFundsData
  //     : InvestmentName[0].investmentID == 51118581 || 51119099
  //     ? investmentTbills
  //     : InvestmentName[0].investmentID == 45149064 || 45149066 || 45149062
  //     ? investFixedData
  //     : "";
  const investmentFundsData = {
    investmentId: `${InvestmentName[0].investmentID}`,
    transAmount: parseInt(state.amount),
    currency: `${InvestmentName[0].currency}`,
    // duration: state.duration,
    fundName: `${InvestmentName[0].label}`,
    frequency: `${state.frequency}`,
    investmentImage: `${files.file.name}`,
    description: `${InvestmentName[0].name}`,
    investmentStartDate: `${date}`,
    investmentType: InvestmentName[0].investmentType,
  };

  const investmentTbills = {
    investmentID: InvestmentName[0].investmentID,
    investmentType: InvestmentName[0].investmentType,
    batchId: 0,
    cashAccountName: "string",
    currency: "string",
    customerName: "string",
    faceValue: 0,
    discountRate: 0,
    portfolioName: "string",
    startDate: "string",
    status: "string",
    tenor: "string",
    treasuryBillTypeName: "string",
  };
  const investFixedData = {
    investmentId: `${InvestmentName[0].investmentID}`,
    currency: `${InvestmentName[0].currency}`,
    autoRollover: true,
    currentRate: 0,
    instrumentTypeName: "string",
    rollOverrule: "string",
    startDate: "string",
    faceValue: 0,
    cardID: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    tenure: "string",
    investmentType: 1,
  };

  const formCurrency = InvestmentName[0].currency == "USD" ? "$" : "₦";

  return (
    <div className="px-4 sm:px-12  flex flex-col fadeIn">
      <div className="flex flex-row justify-between content-center sm:w-3/6 items-center  mb-10 ">
        <p style={{ color: "#999999" }} className="text-xs ">
          Investment
        </p>
        <p style={{ color: "#999999" }} className="text-xs ">
          {" "}
          {">>"}{" "}
        </p>
        <p style={{ color: "#999999" }} className="text-xs ml-4 sm:ml-1">
          Add new Investment
        </p>
        <p style={{ color: "#999999" }} className="text-xs">
          {" "}
          {">>"}{" "}
        </p>
        <p className="text-sm text-black"> {InvestmentName[0].label} </p>
      </div>
      {/* heading */}
      <p className="text-black font-bold text-2xl text-left">
        Add new investment
      </p>
      {/* heading end */}

      <div className="flex flex-col sm:flex-row">
        {/* column one */}

        <div
          style={{ border: "1px solid #F1F1F1" }}
          className="card sm:w-1/2 pt-24 pb-56 w-auto mb-20 flex flex-col justify-center content-center mt-6 sm:mr-4"
        >
          {/* input content one */}
          <fieldset className="mb-4 w-full px-6 mx-auto">
            <label className="block text-xs font-medium">
              How much do you want to invest?
            </label>
            <NumberFormat
              thousandSeparator={true}
              placeholder="Min 20,000"
              autoComplete="off"
              type="text"
              id="amount"
              name="amount"
              className="block w-full text-xs mt-2 p-3 border border-gray-400 rounded"
              value={state.amount}
              onValueChange={({ value }) => {
                callSetAmount(value);
              }}
            />
            {state.amountError ? (
              <p className="label-error--text mt-3 text-xs color-red font-medium text-center bg-red-200">
                {state.amountError}
              </p>
            ) : null}
            {/* showing the amount of interest one would have */}
            {/* <div className="flex flex-row items-center mt-2 mb-2">
                    <p className="text-xs ">N0.00 </p>
                    <p style={{color:"#999999"}} className="text-xs mx-1"> will give you</p> 
                    <p className="text-xs ">0 units</p>
                    </div> */}
            {/* showing the amount of interest one would have */}
          </fieldset>
          {/* input content one end */}

          {/* input two */}
          {InvestmentName[0].investmentType == 1 ? null : (
            <fieldset className="mb-4 w-full px-6 mx-auto">
              <label className="block text-xs font-medium">
                How long would you want to invest
              </label>
              <div className="fieldset mt-2 w-full">
                <StartDropdown myDuration={setDurationDays} />
              </div>
            </fieldset>
          )}
          {/* input two */}

          {/* input three */}
          <fieldset className="mb-4 w-full px-6 mx-auto">
            <label className="block text-xs mb-2 font-medium">
              When will you like to start saving?
            </label>
            <DatePicker
              inputPlaceholder="Select Start Date"
              value={state.date}
              onChange={(value) => {
                setState({
                  ...state,
                  date: value,
                });
              }}
              shouldHighlightWeekends
              minimumDate={utils("en").getToday()}
              inputClassName="w-full text-xs p-3 border border-gray-400 rounded text-left-f"
            />
          </fieldset>
          {/* input three end */}

          {/* checkbox input four */}
          <div className="pl-6 sm:pl-24 my-2">
            <input
              onClick={() => {
                setState({
                  ...state,
                  frequency: !state.frequency,
                });
              }}
              type="checkbox"
              id="todo"
              name="todo"
              className=""
              value="todo"
            />
            <label
              style={{ position: "relative", top: "-7px" }}
              htmlFor="todo"
              className="text-xs font-bold sm:pl-2 pr-4 text-center"
            >
              Would like this to be a recuring investment
            </label>
          </div>
          {/* checkbox input four */}

          {/* showing the tenors available for MT_LIP */}
          {InvestmentName[0].investmentType == 3 ? (
            <div
              style={{ border: "1px solid #8CB13D", background: "#F9FFEB" }}
              className="rounded flex flex-col self-center sm:w-8/12 mt-4 p-2 pb-4"
            >
              <div className="flex flex-row items-center">
                <img src={info} className="h-5 mr-2 w-5" />
                <p style={{ color: "#8CB13D" }} className="text-sm font-bold">
                  Available Tenors
                </p>
              </div>

              <div
                style={{ borderLeft: "0.5px dashed #C3D894" }}
                className="ml-2 pl-2"
              >
                <div className="flex flex-row items-center mt-4">
                  <div
                    style={{
                      backgroundColor: "#8CB13D",
                      borderRadius: "50%",
                    }}
                    className="h-2 w-2"
                  />
                  <p className="ml-4 text-xs">31 days tenor plan</p>
                </div>
                <div className="flex flex-row items-center mt-4">
                  <div
                    style={{
                      backgroundColor: "#8CB13D",
                      borderRadius: "50%",
                    }}
                    className="h-2 w-2"
                  />
                  <p className="ml-4 text-xs">72 days tenor plan</p>
                </div>
                <div className="flex flex-row items-center mt-4">
                  <div
                    style={{
                      backgroundColor: "#8CB13D",
                      borderRadius: "50%",
                    }}
                    className="h-2 w-2"
                  />
                  <p className="ml-4 text-xs">180 days tenor plan</p>
                </div>
                <div className="flex flex-row items-center mt-4">
                  <div
                    style={{
                      backgroundColor: "#8CB13D",
                      borderRadius: "50%",
                    }}
                    className="h-2 w-2"
                  />
                  <p className="ml-4 text-xs">270 days tenor plan</p>
                </div>
                <div className="flex flex-row items-center mt-4">
                  <div
                    style={{
                      backgroundColor: "#8CB13D",
                      borderRadius: "50%",
                    }}
                    className="h-2 w-2"
                  />
                  <p className="ml-4 text-xs">320 days tenor plan</p>
                </div>
              </div>
            </div>
          ) : null}
          {/* showing the tenors available for MT_LIP */}
        </div>
        {/* column one end */}

        {/* column two */}
        <div
          style={{ border: "1px solid #F1F1F1" }}
          className="sm:w-1/2 w-auto card sm:w-1/2 pt-24  pb-20  flex flex-col justify-center mt-6 items-center"
        >
          {/* image setting */}
          <div className="w-72 shadow-lg p-2">
            {/* image preview content start */}

            <div className="personalize--card">
              <div className="previewComponent">
                <input
                  className="fileInput"
                  type="file"
                  onChange={(e) => handleImageChange(e)}
                  accept="image/*"
                />
                <div
                  className={`${
                    files.imagePreviewUrl === "" && "drop"
                  } imgPreview`}
                >
                  {files.imagePreviewUrl ? (
                    <img src={files.imagePreviewUrl} alt="" />
                  ) : (
                    <div className="buddy-image--drop">
                      <img src={UploadIcon} alt="" />
                    </div>
                  )}
                </div>
              </div>
              {files.imagePreviewUrl ? (
                <h3 className="color-secondary personalize-text text-center">
                  + Change Photo
                </h3>
              ) : (
                <h3 className="color-secondary change-text personalize-text text-center">
                  Personalise your goal by <br /> <span>+ Adding a photo.</span>
                </h3>
              )}
            </div>

            {/* image preview content end */}
          </div>
          {/* image setting end */}

          {/* image text content */}

          <p className="text-xs mt-10 text-black text-center text-opacity-25">
            Investment capital
          </p>

          <p className="text-black text-lg text-center mt-2 font-bold">
            {formCurrency + formatCurrency(state.amount)}
          </p>

          <div className="flex flex-row justify-between w-full mt-4 px-16 items-center">
            <p className="text-left text-black text-opacity-25 text-base">
              Interest rate per year
            </p>
            <p className="text-right text-black text-base">
              {" "}
              {InvestmentName[0].interestRate.toFixed(2)}%
            </p>
          </div>
          <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
            <p className="text-left text-black text-opacity-25 text-base">
              Start date
            </p>

            <p className="text-right text-black text-base">
              {moment(state.date).format("MMM DD YYYY")}
            </p>
          </div>

          {/* image text content end */}

          {/* nav buttons */}
          <div className="nav-buttons flex justify-center">
            <Link
              to=""
              className="mt-12 w-20 sm:w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
            >
              Back
            </Link>
            {/* <button className={`mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm ${(checkEmpty(state) === true || status) && "opaque"}`} onClick={(checkEmpty(state) === false && !status) && confirm}> */}
            <button
              onClick={(e) => {
                handleOnSubmit(e);
              }}
              className={`mt-12 w-20 sm:w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm `}
            >
              Next
            </button>
          </div>
          {/* nav buttons end */}
        </div>
        {/* column two end */}
      </div>

      {modal ? (
        <InvestModal
          myclose={onclose}
          MycreateInvestmentData={investmentFundsData}
          investType={InvestmentName[0].investmentType}
        />
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => ({
  createInvestmentLoading: state.investments.createInvestmentLoading,
  createInvestmentError: state.investments.createInvestmentError,
  createInvestmentData: state.investments.createInvestmentData,
  getAllInvestmentsData: state.investments.getAllInvestmentsData,
});

export default connect(mapStateToProps)(AddInvestmentForm);
