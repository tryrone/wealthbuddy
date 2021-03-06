import React, { useState, useEffect } from 'react';
import DatePicker, { utils } from 'react-modern-calendar-datepicker';
import produce from 'immer';
import NumberFormat from 'react-number-format';
import { formatCurrency } from 'utils';
// import * as Yup from "yup";
// import { ErrorMessage, Field, Form, Formik } from "formik";
import { info } from '../../imageLinks';
import moment, { duration } from 'moment';
import { Redirect } from 'react-router-dom';
import UploadIcon from 'assets/img/uploadIcon.svg';
import fundImg from 'assets/img/funds_img.jpg';
import { Link, useHistory } from 'react-router-dom';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import InvestModal from '../investModal/InvestModal';
import StartDropdown from './StartDropdown';
import { connect, useDispatch } from 'react-redux';
import './check.scss';
import DropdownFixed from './DropdownFixed';
import RollOver from './RollOver';

function AddInvestmentForm(props) {
  const [modal, changeModal] = useState(false);
  const history = useHistory();
  const [files, setFiles] = useState({
    file: '',
    imagePreviewUrl: '',
    isFixed: false,
  });
  // const [duration, setDuration] = useState("");
  const [state, setState] = useState({
    duration: '',
    rollOver: 'PRINCIPAL_INTEREST',
    amount: null,
    date: null,
    amountError: '',
    frequency: false,
  });

  const setDurationDays = (val) => {
    setState({
      ...state,
      duration: val,
    });
  };
  const setRollOverRule = (val) => {
    setState({
      ...state,
      rollOver: val,
    });
  };

  const InvestmentName = props.getAllInvestmentsData.filter(
    (item) => item.investmentID == props.location.investmentId
  );

  const callSetAmount = (val) => {
    setState({
      ...state,
      amount: val,
    });
  };

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
        amountError: 'field is required',
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

  const myDate = Date.now();
  const todaysDate = moment(myDate).toISOString();

  const investmentFundsData = {
    investmentId: `${InvestmentName[0].investmentID}`,
    transAmount: parseInt(state.amount),
    currency: `${InvestmentName[0].currency}`,
    duration:
      InvestmentName[0].minimumDurationInDays === 0
        ? 30
        : InvestmentName[0].minimumDurationInDays,
    fundName: `${InvestmentName[0].name}`,
    frequency: `${state.frequency}`,
    investmentImage: `investment.jpg`,
    description: `creating investment with ${state.amount}`,
    investmentType: InvestmentName[0].investmentType,
  };

  const investmentTbills = {
    investmentID: `${InvestmentName[0].investmentID}`,
    investmentType: parseInt(InvestmentName[0].investmentType),
    treasuryBillTypeName: `${InvestmentName[0].name}`,
    faceValue: parseInt(state.amount),
    discountRate: 9,
    startDate: `${todaysDate}`, //date . now todaysDate no more date display only for mutual funds
    status: 'PENDING',
    tenor: `${state.duration}`, //drop down duration 31 days ,72 days,180 days,270days
    investmentImage: `investment.jpg`,
  };
  const investFixedData = {
    investmentId: `${InvestmentName[0].investmentID}`,
    currency: `${InvestmentName[0].currency}`,
    investmentImage: `investment.jpg`,
    autoRollover: state.frequency,
    currentRate: InvestmentName[0].interestRate,
    instrumentTypeName: `${InvestmentName[0].name}`,
    rollOverrule: `${state.rollOver}`, //dropdown rule for roll over rule should apply
    startDate: `${todaysDate}`, //no more date only dropdown
    faceValue: parseInt(state.amount),
    // tenure: `${InvestmentName[0].minimumDurationInDays}`, // 1 year ,1,2,3,6 month
    tenure: `${state.duration}`, // 1 year ,1,2,3,6 month
    investmentType: InvestmentName[0].investmentType,
  };

  const myFormData =
    InvestmentName[0].investmentType == 1
      ? investmentFundsData
      : InvestmentName[0].investmentType == 2
      ? investFixedData
      : InvestmentName[0].investmentType == 3
      ? investmentTbills
      : {};

  const formCurrency = InvestmentName[0].currency == 'USD' ? '$' : '???';

  return (
    <div className="px-4 sm:px-12  flex flex-col fadeIn">
      <div className="flex flex-row flex-wrap w-full sm:w-8/12 items-center  mb-10 ">
        <p
          onClick={() => {
            return history.push('/dashboard/investment');
          }}
          style={{ color: '#999999' }}
          className="text-xs cursor-pointer"
        >
          Investment
        </p>
        <p style={{ color: '#999999' }} className="text-xs sm:mx-4">
          {' '}
          {'>>'}{' '}
        </p>
        <p
          onClick={() => {
            return history.push('/dashboard/investment/add-investment');
          }}
          style={{ color: '#999999' }}
          className="text-xs sm:ml-4 ml-2 mr-2 sm:ml-1 cursor-pointer"
        >
          Add new Investment
        </p>
        <p style={{ color: '#999999' }} className="text-xs sm:mx-4 ">
          {' '}
          {'>>'}{' '}
        </p>
        <p className="text-sm text-black ml-2"> {InvestmentName[0].label} </p>
      </div>
      {/* heading */}
      <p className="text-black font-bold text-2xl text-left">
        Add new investment
      </p>
      {/* heading end */}

      <div className="flex flex-col sm:flex-row">
        {/* column one */}
        <div
          style={{ border: '1px solid #F1F1F1' }}
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

          {/* input two */}
          {/* {InvestmentName[0].investmentType == 1 ? (
            <fieldset className="mb-4 w-full px-6 mx-auto">
              <label className="block text-xs font-medium">
                How long would you want to invest
              </label>
              <div className="fieldset mt-2 w-full">
                <StartDropdown myDuration={setDurationDays} />
              </div>
            </fieldset>
          ) : null} */}
          {/* input two */}
          {/* input for fixed and tbills dropdown */}
          {InvestmentName[0].investmentType == 2 ||
          InvestmentName[0].investmentType == 3 ? (
            <fieldset className="mb-4 w-full px-6 mx-auto">
              <label className="block text-xs font-medium">
                How long would you want to invest
              </label>
              <div className="fieldset mt-2 w-full">
                <DropdownFixed
                  myDuration={setDurationDays}
                  type={InvestmentName[0].investmentType}
                />
              </div>
            </fieldset>
          ) : null}
          {/* input for fixed and tbills dropdown */}

          {/* input for fixed roll over rule */}
          {InvestmentName[0].investmentType == 2 ? (
            <fieldset className="mb-4 w-full px-6 mx-auto">
              <label className="block text-xs font-medium">
                Roll over rule
              </label>
              <div className="fieldset mt-2 w-full">
                <RollOver myRollover={setRollOverRule} />
              </div>
            </fieldset>
          ) : null}
          {/* input for fixed roll over rule */}

          {/* input three */}
          {/* {InvestmentName[0].investmentType == 2 ||
          InvestmentName[0].investmentType == 3 ? null : (
            <fieldset className="mb-4 w-full px-6 mx-auto">
              <label className="block text-xs mb-2 font-medium">
                When will you like to start Investing?
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
          )} */}
          {/* input three end */}

          {/* checkbox input four */}
          {InvestmentName[0].investmentType == 2 ||
          InvestmentName[0].investmentType == 3 ? (
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
                style={{ position: 'relative', top: '-7px' }}
                htmlFor="todo"
                className="text-xs font-bold sm:pl-2 pr-4 text-center"
              >
                Would like this to be a recuring investment
              </label>
            </div>
          ) : null}
          {/* checkbox input four */}

          {/* showing the tenors available for MT_LIP */}
          {InvestmentName[0].investmentType == 3 ? (
            <div
              style={{ border: '1px solid #8CB13D', background: '#F9FFEB' }}
              className="rounded flex flex-col self-center sm:w-8/12 w-9/12 mt-4 p-2 pb-4"
            >
              <div className="flex flex-row items-center">
                <img src={info} className="h-5 mr-2 w-5" />
                <p style={{ color: '#8CB13D' }} className="text-sm font-bold">
                  Available Tenors
                </p>
              </div>

              <div
                style={{ borderLeft: '0.5px dashed #C3D894' }}
                className="ml-2 pl-2"
              >
                <div className="flex flex-row items-center mt-4">
                  <div
                    style={{
                      backgroundColor: '#8CB13D',
                      borderRadius: '50%',
                    }}
                    className="h-2 w-2"
                  />
                  <p className="ml-4 text-xs">31 days tenor plan</p>
                </div>
                <div className="flex flex-row items-center mt-4">
                  <div
                    style={{
                      backgroundColor: '#8CB13D',
                      borderRadius: '50%',
                    }}
                    className="h-2 w-2"
                  />
                  <p className="ml-4 text-xs">72 days tenor plan</p>
                </div>
                <div className="flex flex-row items-center mt-4">
                  <div
                    style={{
                      backgroundColor: '#8CB13D',
                      borderRadius: '50%',
                    }}
                    className="h-2 w-2"
                  />
                  <p className="ml-4 text-xs">180 days tenor plan</p>
                </div>
                <div className="flex flex-row items-center mt-4">
                  <div
                    style={{
                      backgroundColor: '#8CB13D',
                      borderRadius: '50%',
                    }}
                    className="h-2 w-2"
                  />
                  <p className="ml-4 text-xs">270 days tenor plan</p>
                </div>
                <div className="flex flex-row items-center mt-4">
                  <div
                    style={{
                      backgroundColor: '#8CB13D',
                      borderRadius: '50%',
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
          style={{ border: '1px solid #F1F1F1' }}
          className="sm:w-1/2 w-auto card sm:w-1/2 pt-24  pb-20  flex flex-col justify-center mt-6 items-center"
        >
          {/* image setting */}
          <div className="w-72 shadow-lg p-2">
            {/* image preview content start */}

            {/* <div className="personalize--card"> */}
            <img src={fundImg} className="h-full w-full" />
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
              {' '}
              {InvestmentName[0].interestRate.toFixed(2)}%
            </p>
          </div>
          {InvestmentName[0].investmentType == 1 ? (
            <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
              <p className="text-left text-black text-opacity-25 text-base">
                Start date
              </p>

              <p className="text-right text-black text-base">
                {moment(state.date === null ? Date.now() : state.date)
                  // .subtract(1, "months")
                  .format('L')}
              </p>
            </div>
          ) : null}

          {/* image text content end */}

          {/* nav buttons */}
          <div className="nav-buttons flex justify-center">
            <Link
              to="/dashboard/investment/add-investment"
              className="mt-12 sm:w-40 w-40 border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
            >
              Back
            </Link>
            {/* <button className={`mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm ${(checkEmpty(state) === true || status) && "opaque"}`} onClick={(checkEmpty(state) === false && !status) && confirm}> */}
            {InvestmentName[0].investmentType == 2 ||
            InvestmentName[0].investmentType == 3 ? (
              <button
                onClick={(e) => {
                  handleOnSubmit(e);
                }}
                disabled={state.duration.length === 0 ? true : false}
                className={`mt-12  sm:w-40 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm `}
              >
                Next
              </button>
            ) : null}

            {InvestmentName[0].investmentType == 1 ? (
              <button
                onClick={(e) => {
                  handleOnSubmit(e);
                }}
                disabled={state.amount === null ? true : false}
                className={`mt-12 sm:w-40 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm `}
              >
                Next
              </button>
            ) : null}
          </div>
          {/* nav buttons end */}
        </div>
        {/* column two end */}
      </div>

      {modal ? (
        <InvestModal
          myclose={onclose}
          MycreateInvestmentData={myFormData}
          // MycreateInvestmentData={investmentTbills}
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
