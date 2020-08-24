import React, { Fragment, useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import DatePicker from "react-modern-calendar-datepicker";
import { dogs, dogsBg, catfish, corn } from "../imageLinks";
import { Link, Redirect } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import {
  allPersonalInvestments,
  getAllInvestments,
  getInvestmentValuation,
} from "../../../state/slices/investments";
import { formatCurrency } from "utils";
import FundExistingModal from "../viewAnInvestment/component/fundExistingInvestment/FundExistingModal";
import Loading from "shared-components/Loading";

const FundInvestment = (props) => {
  const [amount, setAmount] = useState(null);
  const [modal, changeModal] = useState(false);
  const [view, setView] = useState(false);
  const [view2, setView2] = useState(false);
  const [view3, setView3] = useState(false);
  const [itemView, setItem] = useState("choose from running investments");
  const [itemView2, setItem2] = useState("choose from running investments");
  const [itemView3, setItem3] = useState("choose from running investments");
  const [itemPerc, setPerc] = useState("");
  const [Id, setId] = useState("");
  const [investName, setInvestName] = useState("");
  const [investType, setInvestType] = useState(null);
  const [investCurrency, setInvestCurrency] = useState("");
  const [investSymbol, setInvestSymbol] = useState("");
  const [investCurrent, setInvestCurrent] = useState("");
  const [showList, setShowList] = useState(false);
  const [showList2, setShowList2] = useState(false);
  const [showList3, setShowList3] = useState(false);

  const dispatch = useDispatch();

  const tegaSum = Object.keys(props.investmentValuationData).length;
  useEffect(() => {
    if (tegaSum === 0) {
      dispatch(getInvestmentValuation());
    }
    if (!props.getAllInvestmentsData) {
      dispatch(getAllInvestments());
    }
  }, []);

  const onclose = (val) => {
    changeModal(val);
  };

  const specificData = props.investmentValuationData.portfolioHoldings;

  const fundData = {
    transAmount: parseInt(amount),
    securityID: Id,
    description: `${investSymbol}`,
    currency: `${investCurrency == "undefined" ? "NGN" : investCurrency}`,
    fundName: `${investName}`,
    itemId: investType,
  };

  const onSubmitFund = () => {
    // console.log(fundData, "lieu keng");
    changeModal(true);
  };

  // onclick of dropdown
  const clickView = (value) => {
    setView(!value);
  };
  const clickView2 = (value) => {
    setView2(!value);
  };
  const clickView3 = (value) => {
    setView3(!value);
  };
  // onclick of dropdown

  // return !props.location.investmentId ? (
  //   <Redirect to="/dashboard/investment" />
  // ) : (
  return (
    <div className="px-4 sm:px-12  flex flex-col fadeIn">
      {/* heading */}
      <p className="text-black font-bold text-2xl text-left">Fund Investment</p>
      {/* heading end */}

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

          {/* input two */}
          {/* input two */}
          <fieldset className="mb-4 w-full px-6 mx-auto">
            <label className="block text-xs font-medium">
              Choose investment from mutual Funds
            </label>

            {/* dropsown for list of investments */}
            {/* dropsown for list of investments */}
            <div className="fieldset w-11/12 mt-2 w-full">
              {props.investmentValuationLoading ? (
                <Loading text="" />
              ) : (
                <React.Fragment>
                  <div className="fund-dropdown">
                    {/* <div className="select-option" onClick={() => toggleList()}> */}
                    <div
                      className="select-option"
                      onClick={() => clickView(view)}
                    >
                      <div className="buddy-dropdown-title flex flex-row">
                        {" "}
                        {itemView}
                      </div>
                      <div
                        className="buddy-dropdown-icon"
                        dangerouslySetInnerHTML={{
                          __html:
                            '<svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7L13.9282 0.25H0.0717969L7 7Z" fill="black"/></svg>',
                        }}
                      />
                    </div>
                  </div>
                  {/* listOpen && */}
                  {view ? (
                    <ul className="buddy-dropdown-list basic-dropdown">
                      {/* <ul className="buddy-dropdown-list basic-dropdown" onClick={e => e.stopPropagation()}> */}
                      {specificData.length < 1
                        ? null
                        : specificData.map((item, i) => (
                            <Fragment key={i}>
                              <li
                                className="buddy-dropdown-item flex hover:bg-gray-100 flex-row items-center"
                                onClick={() => {
                                  setItem(`${item.companyName}`);
                                  setId(`${item.securityId}`);
                                  setPerc(`${item.portPercentage.toFixed(1)}`);
                                  setView(false);
                                  setInvestName(`${item.symbol}`);
                                  setInvestSymbol(`${item.companyName}`);
                                  setInvestCurrent(`${item.currentValue}`);
                                  setShowList2(false);
                                  setShowList(true);
                                  setShowList3(false);
                                  setInvestCurrency(`${item.currency}`);
                                  setInvestType(item.securityId);
                                }}
                                key={i}
                              >
                                {/* <img src={item.img} alt="" /> */}
                                <div className="flex flex-col sm:flex-row justify-center mt-4">
                                  <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8CyHlXfQ0X5KJ_kj1pRohugCUtBom9Qk1wg&usqp=CAU"
                                    alt=""
                                    className="rounded sm:h-12 sm:w-12  self-center"
                                  />
                                  <div className="ml-4 self-center">
                                    <p className="text-sm font-medium text-black">
                                      {item.companyName}
                                    </p>
                                    <p
                                      style={{ color: "#8CB13D" }}
                                      className="text-sm font-medium"
                                    >
                                      {item.portPercentage.toFixed(1)}% returns
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </Fragment>
                          ))}
                    </ul>
                  ) : null}
                </React.Fragment>
              )}
            </div>
            {/* dropsown for list of investments */}
            {/* dropsown for list of investments */}
          </fieldset>
          {/* input two */}
          {/* input two */}

          {/* input three */}
          {/* input three */}
          {showList ? (
            <div className="flex flex-col sm:flex-row justify-center mt-4 px-10">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8CyHlXfQ0X5KJ_kj1pRohugCUtBom9Qk1wg&usqp=CAU"
                alt=""
                className="rounded sm:h-12 sm:w-12 self-center"
              />
              <div className="ml-4">
                <p className="text-lg font-medium text-black">{itemView}</p>
                <p style={{ color: "#8CB13D" }} className="text-lg font-medium">
                  {itemPerc}% returns
                </p>
              </div>
            </div>
          ) : null}
          {/* input three */}
          {/* input three */}

          {/* input four */}
          {/* input four */}
          {showList2 ? (
            <div className="flex flex-col sm:flex-row justify-center mt-4 px-10">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8CyHlXfQ0X5KJ_kj1pRohugCUtBom9Qk1wg&usqp=CAU"
                alt=""
                className="rounded sm:h-12 sm:w-12 self-center"
              />
              <div className="ml-4">
                <p className="text-lg font-medium text-black">{itemView2}</p>
                <p style={{ color: "#8CB13D" }} className="text-lg font-medium">
                  {itemPerc}% returns
                </p>
              </div>
            </div>
          ) : null}
          {/* input four */}
          {/* input four */}

          {/* input five */}
          {/* input five */}
          {showList3 ? (
            <div className="flex flex-col sm:flex-row justify-center mt-4 px-10">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8CyHlXfQ0X5KJ_kj1pRohugCUtBom9Qk1wg&usqp=CAU"
                alt=""
                className="rounded sm:h-12 sm:w-12 self-center"
              />
              <div className="ml-4">
                <p className="text-lg font-medium text-black">{itemView3}</p>
                <p style={{ color: "#8CB13D" }} className="text-lg font-medium">
                  {itemPerc}% returns
                </p>
              </div>
            </div>
          ) : null}
          {/* input five */}
          {/* input five */}
        </div>
        {/* column one end */}

        {/* column two */}
        <div
          style={{ border: "1px solid #F1F1F1" }}
          className="sm:w-1/2 w-auto card sm:w-1/2 pt-24  pb-20  flex flex-col justify-center mt-6 items-center"
        >
          {/* image setting */}
          <div className="w-72 shadow-lg p-2">
            <div className="h-32 w-full  border-dashed border border-gray-400 rounded flex flex-col justify-center items-center">
              {/* image preview content start */}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8CyHlXfQ0X5KJ_kj1pRohugCUtBom9Qk1wg&usqp=CAU"
                alt=""
                className="w-full h-full"
              />
              {/* image preview content end */}
            </div>
          </div>
          {/* image setting end */}
          {/* image setting end */}

          {/* image text content */}
          {/* image text content */}
          <p className="text-xl font-bold mb-10 mt-10 text-black text-center">
            {investName}
          </p>

          {/* <p className="text-black text-lg text-center mt-2 font-bold">₦50,000</p> */}

          <div className="flex flex-row justify-between w-full mt-4 px-16 items-center">
            <p className="text-left text-black text-opacity-25 text-base">
              Top up value
            </p>
            <p className="text-right text-black text-base">
              ₦ {formatCurrency(amount)}
            </p>
          </div>
          <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
            <p className="text-left text-black text-opacity-25 text-base">
              Current value
            </p>
            <p className="text-right text-black text-base">
              ₦ {formatCurrency(investCurrent)}
            </p>
          </div>
          <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
            <p className="text-left text-black text-opacity-25 text-base">
              Interest rate per year
            </p>
            <p className="text-right text-black text-base">{itemPerc}%</p>
          </div>
          {/* image text content end */}
          {/* image text content end */}

          {/* nav buttons */}
          <div className="nav-buttons flex justify-center">
            <Link
              className="mt-12 w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
              to="/dashboard/investment"
            >
              Back
            </Link>
            {/* <button className={`mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm ${(checkEmpty(state) === true || status) && "opaque"}`} onClick={(checkEmpty(state) === false && !status) && confirm}> */}
            <button
              onClick={() => {
                onSubmitFund();
              }}
              disabled={amount == null || Id.length == 0 ? true : false}
              className={`mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}
            >
              Next
            </button>
          </div>
          {/* nav buttons end */}
        </div>
        {/* column two end */}
      </div>

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
  getAllInvestmentsLoading: state.investments.getAllInvestmentsLoading,
  getAllInvestmentsData: state.investments.getAllInvestmentsData,
  allPersonalInvestmentsData: state.investments.allPersonalInvestmentsData,
  allPersonalInvestmentsLoading:
    state.investments.allPersonalInvestmentsLoading,
  allPersonalInvestmentsError: state.investments.allPersonalInvestmentsError,
  investmentValuationData: state.investments.investmentValuationData,
  investmentValuationLoading: state.investments.investmentValuationLoading,
});

export default connect(mapStateToProps)(FundInvestment);
