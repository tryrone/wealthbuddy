import React, { useState, useEffect } from "react";
import produce from "immer";
import NumberFormat from "react-number-format";
import { formatCurrency } from "utils";
import { info } from "../imageLinks";
import moment from "moment";
import { Redirect } from "react-router-dom";
import UploadIcon from "../../../assets/img/uploadIcon.svg";
import { Link, useHistory } from "react-router-dom";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { connect, useDispatch } from "react-redux";
import DollarModal from "./DollarModal";

const DollarInvestment = (props) => {
  const [modal, changeModal] = useState(false);
  const history = useHistory();
  const [files, setFiles] = useState({
    file: "",
    imagePreviewUrl: "",
    isFixed: false,
  });
  const InvestmentName = props.getAllInvestmentsData.filter(
    (item) => item.investmentID == props.location.investmentId
  );
  // const [duration, setDuration] = useState("");
  const [state, setState] = useState({
    amount: null,
    date: null,
    detail: "",
    value: "45f8cdjn",
    showValue: false,
  });

  const callSetAmount = (val) => {
    setState({
      ...state,
      amount: val,
    });
  };
  const callSetDetail = (val) => {
    setState({
      ...state,
      detail: val,
    });
  };

  const onclose = () => {
    changeModal(false);
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
    return <Redirect to="/dashboard/investment/add-investment" />;
  }
  // CREATE INVESTMENT FORM DATE
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
      // props.myFundData(myFormData);
      // props.myModal(true);
      // props.myInvestType(InvestmentName[0].investmentType);
    }
  };

  const formCurrency = InvestmentName[0].currency == "USD" ? "$" : "₦";
  return (
    <div className="px-4 sm:px-12  flex flex-col fadeIn">
      <div className="flex flex-row sm:w-8/12 items-center  mb-10 ">
        <p
          onClick={() => {
            return history.push("/dashboard/investment");
          }}
          style={{ color: "#999999" }}
          className="text-xs cursor-pointer"
        >
          Investment
        </p>
        <p style={{ color: "#999999" }} className="text-xs mx-4">
          {" "}
          {">>"}{" "}
        </p>
        <p
          onClick={() => {
            return history.push("/dashboard/investment/add-investment");
          }}
          style={{ color: "#999999" }}
          className="text-xs ml-4 sm:ml-1 cursor-pointer"
        >
          Add new Investment
        </p>
        <p style={{ color: "#999999" }} className="text-xs mx-4">
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
              placeholder="ex. 1000"
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

          {/* input content two */}
          <fieldset className="mb-4 w-full px-6 mx-auto">
            <label className="block text-xs font-medium">
              add a description
            </label>
            <textarea
              className="block w-full text-xs mt-2 p-3 border border-gray-400 rounded"
              onChange={(e) => {
                callSetDetail(e.target.value);
              }}
            />
          </fieldset>
          {/* input content two */}

          {/* input content three */}
          <fieldset className="mb-4 w-full px-6 mx-auto">
            <label className="block text-xs font-medium">
              Generate reference code
            </label>
            <div className="flex justify-between items-center">
              <input
                className="block w-full text-xs mt-2 p-3 mr-2 border border-gray-400 rounded"
                value={state.showValue ? state.value : ""}
              />
              <button
                onClick={() => {
                  setState({
                    ...state,
                    showValue: true,
                  });
                }}
                style={{
                  position: "relative",
                  top: "4px",
                }}
                className="w-full text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm "
              >
                generate
              </button>
            </div>
          </fieldset>
          {/* input content three */}

          {/* INPUT CONTENT FOUR */}
          <div
            style={{ border: "1px solid #8CB13D", background: "#F9FFEB" }}
            className="flex flex-col self-center sm:w-8/12 mt-4 p-2 pb-4"
          >
            <div className="flex flex-row items-center">
              <p style={{ color: "#8CB13D" }} className="text-sm font-bold">
                Payment information
              </p>
            </div>

            <div className="mt-4">
              <p className="text-sm font-thin">
                Make payment to account number
              </p>
              <p className="text-sm font-bold mt-2">01234567890</p>
              <p
                style={{ color: "#8CB13D" }}
                className="text-sm mt-4 font-bold"
              >
                Providus Bank
              </p>
              <p className="text-sm mt-4 font-bold text-red-500">
                PS. make use of generated refernce code during proof of payment.
              </p>
            </div>
          </div>

          {/* INPUT CONTENT FOUR */}
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
              {moment(state.date === null ? Date.now() : state.date).format(
                "L"
              )}
            </p>
          </div>

          {/* nav buttons */}
          <div className="nav-buttons flex justify-center">
            <Link
              to="/dashboard/investment/add-investment"
              className="mt-12 w-20 sm:w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
            >
              Back
            </Link>
            {/* <button className={`mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm ${(checkEmpty(state) === true || status) && "opaque"}`} onClick={(checkEmpty(state) === false && !status) && confirm}> */}

            <button
              onClick={(e) => {
                handleOnSubmit(e);
              }}
              disabled={state.amount === null ? true : false}
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
        <DollarModal
          myclose={onclose}
          //   MycreateInvestmentData={myFormData}
          //   // MycreateInvestmentData={investmentTbills}
          //   investType={InvestmentName[0].investmentType}
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  createInvestmentLoading: state.investments.createInvestmentLoading,
  createInvestmentError: state.investments.createInvestmentError,
  createInvestmentData: state.investments.createInvestmentData,
  getAllInvestmentsData: state.investments.getAllInvestmentsData,
});

export default connect(mapStateToProps)(DollarInvestment);
