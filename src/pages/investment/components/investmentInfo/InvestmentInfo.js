import React, { useEffect, useState } from "react";
import { financeMan } from "../../imageLinks";
import NavShape from "../../../../shared-components/svgs/NavShape";
import moment from "moment";
import { connect, useDispatch } from "react-redux";
import { getAllInvestments } from "../../../../state/slices/investments";
// import { Redirect } from "react-router-dom";
import Chart from "../Chart";
import { Link, Redirect } from "react-router-dom";

const InvestmentInfo = (props) => {
  const dispatch = useDispatch();

  const InvestmentName = props.getAllInvestmentsData.filter(
    (item) => item.investmentID == props.location.investmentId
  );

  useEffect(() => {
    if (props.getAllInvestmentsData.length == 0) {
      dispatch(getAllInvestments());
    }
  }, []);

  const investmentDetail = {
    1: {
      name: "MERISTEM EQUITY MARKET FUND",
      summary:
        "This offers a low-cost method of investing in bonds, stocks, treasury bills and other fixed income instruments while offering you a professional, full-time fund manager. Our mutual funds allow you begin your investment journey with as low as NGN10,000 for the first month and fund your account with any amount subsequently. Our mutual fund account never expires and allows you gain interests as early as after 30days.",
      earnings:
        "The money market fund is a low risk fund, that invests in a combination of fixed income instruments like treasury bills, commercial papers, fixed deposit and call placement.",
      auction: false,
    },
    1: {
      name: "MERISTEM MONEY MARKET FUND",
      summary:
        "This offers a low-cost method of investing in bonds, stocks, treasury bills and other fixed income instruments while offering you a professional, full-time fund manager. Our mutual funds allow you begin your investment journey with as low as NGN10,000 for the first month and fund your account with any amount subsequently. Our mutual fund account never expires and allows you gain interests as early as after 30days.",
      earnings:
        "The money market fund is a low risk fund, that invests in a combination of fixed income instruments like treasury bills, commercial papers, fixed deposit and call placement.",
      auction: false,
    },
    2: {
      name: "MERISTEM FIXTIP",
      summary:
        "The fixed term investment account serves as a better alternative to a savings account, especially for people looking to achieve set short-term projects. It affords individuals the opportunity to set aside money and get higher interest than a typical savings account in 30days. Are you looking to get a new phone? House? Or just a better way to save? FIXTIP makes all that easy.",
      earnings:
        "Fixed income broadly refers to those types of investment security that pay investors fixed interest or dividend payments until its maturity date.",
      auction: false,
    },
    3: {
      name: "MERISTEM MTLIP",
      summary:
        'Treasury bills, also known as "T-bills," are investment options issued by the Nigerian government. Treasury Bills afford you the opportunity to lend money to the government and get paid back with interest after a period time usually 91days, 182 days or 364days subject to your choice. This investment also offers you the opportunity to get your interest upfront or re-invest your capital plus interest after your investment tenure is over. T-bills is a great way to save for rent, school fees and other capital-intensive cost you may have.',
      earnings:
        "Treasury Bills afford you the opportunity to lend money to the government and get paid back with interest after a period time usually 91days, 182 days or 364days subject to your choice.",
      auction: true,
    },
    3: {
      name: "TREASURY BILLS(ASSET)",
      summary:
        'Treasury bills, also known as "T-bills," are investment options issued by the Nigerian government. Treasury Bills afford you the opportunity to lend money to the government and get paid back with interest after a period time usually 91days, 182 days or 364days subject to your choice. This investment also offers you the opportunity to get your interest upfront or re-invest your capital plus interest after your investment tenure is over. T-bills is a great way to save for rent, school fees and other capital-intensive cost you may have.',
      earnings:
        "Treasury Bills afford you the opportunity to lend money to the government and get paid back with interest after a period time usually 91days, 182 days or 364days subject to your choice.",
      auction: true,
    },
    2: {
      name: "MERISTEM DOLLAR INVESTMENT PORTFOLIO (MDIP)",
      summary:
        " This investment offers you a shield from currency risk. It is a great way to spread your investment and reduce your risk exposure. The Meristem Dollar investment creates a platform for you to earn interest in foreign currency and invest in dollar denominated instruments.",
      earnings:
        "Treasury Bills afford you the opportunity to lend money to the government and get paid back with interest after a period time usually 91days, 182 days or 364days subject to your choice.",
      auction: true,
    },
    2: {
      name: "MERISTEM ETHICAL EQUITY PORTFOLIO (MEEP)",
      summary:
        "The fixed term investment account serves as a better alternative to a savings account, especially for people looking to achieve set short-term projects. It affords individuals the opportunity to set aside money and get higher interest than a typical savings account in 30days. Are you looking to get a new phone? House? Or just a better way to save? FIXTIP makes all that easy.",
      earnings:
        "Fixed income broadly refers to those types of investment security that pay investors fixed interest or dividend payments until its maturity date.",
      auction: false,
    },
  };

  if (InvestmentName.length < 1) {
    return <Redirect to="/dashboard/investment" />;
  }
  return (
    <div className="px-4 sm:px-12  flex flex-col fadeIn">
      <div className="flex flex-row content-center sm:w-8/12 items-center  mb-20 ">
        <p style={{ color: "#999999" }} className="text-xs ">
          Investment
        </p>
        <p style={{ color: "#999999" }} className="text-xs mx-4">
          {" "}
          {">>"}{" "}
        </p>
        <p style={{ color: "#999999" }} className="text-xs ml-4 sm:ml-1">
          Add new Investment
        </p>
        <p style={{ color: "#999999" }} className="text-xs mx-4">
          {">>"}{" "}
        </p>
        <p className="text-sm text-black"> {InvestmentName[0].label} </p>
      </div>

      <div
        style={{ backgroundColor: "#A8C93A" }}
        className="card .relative rounded-lg py-4 sm:py-16 px-4  flex flex-col justify-between sm:flex-row"
      >
        <div className="flex flex-col">
          <p className="text-white font-bold text-xl sm:text-2xl">
            Get Value for your money
          </p>

          <p className="text-white mt-4  sm:text-lg sm:w-3/4 text-left">
            With our wide range of investment packages, you can relax and watch
            your money grow.
          </p>

          {/* <span className="navShape">
                    <NavShape />
                </span> */}
        </div>
        <img
          src={financeMan}
          className="sm:absolute right-0 top-0 pb-20 pr-10"
        />
      </div>

      <p className="font-bold text-black text-xl sm:text-2xl ml-2 text-left mt-10">
        {InvestmentName[0].label}
      </p>

      {/* div for the two main coloumns */}

      <div className="flex flex-col sm:flex-row">
        {/* first coloumn */}
        <div className="sm:w-1/2 w-auto sm:mr-4">
          {/* box one start */}
          <div
            style={{
              border: "1px solid #F1F1F1",
            }}
            className="card p-4 rounded mt-10 "
          >
            <p
              style={{ color: "#999999" }}
              className="text-lg font-bold sm:text-base"
            >
              About this investment
            </p>

            <p className="text-lg text-black sm:text-base text-hairline mt-3">
              {investmentDetail[InvestmentName[0].investmentType].summary}
            </p>
          </div>
          {/* box one end */}

          {/* box two start */}
          <div
            style={{
              border: "1px solid #F1F1F1",
            }}
            className="card p-4 rounded mt-10"
          >
            <p
              style={{ color: "#999999" }}
              className="text-lg font-bold sm:text-base"
            >
              Earning on this investment
            </p>

            <p className="text-lg text-black sm:text-base text-hairline mt-3">
              {investmentDetail[InvestmentName[0].investmentType].earnings}
            </p>
          </div>
          {/* box two end */}

          {/* box three start */}
          <div
            style={{
              border: "1px solid #F1F1F1",
            }}
            className="card py-4  rounded mt-10"
          >
            <p
              style={{ color: "#999999" }}
              className="text-lg font-bold pl-4 sm:text-base"
            >
              Price history
            </p>

            <div>
              <Chart />
            </div>
          </div>
          {/* box three end */}
        </div>
        {/* edn of column one */}

        {/* second coulumn */}
        <div
          style={{
            border: "1px solid #F1F1F1",
          }}
          className="card p-10 sm:p-4 flex flex-col w-auto sm:w-1/2 rounded mt-10"
        >
          <p
            style={{ color: "#999999" }}
            className="text-lg font-bold sm:text-base"
          >
            Investment Details
          </p>

          {/* item */}
          {!InvestmentName[0].assetClass ? null : (
            <div className="flex flex-row mt-8 content-center justify-between items-center">
              <p className="font-bold text-black text-base sm:text-sm">
                Asset Class
              </p>
              <p className="font-hairline text-right text-black text-base sm:text-sm">
                {InvestmentName[0].assetClass}
              </p>
            </div>
          )}

          {/* item */}
          {!InvestmentName[0].assetType ? null : (
            <div className="flex flex-row mt-8 content-center justify-between items-center">
              <p className="font-bold text-black text-base sm:text-sm">Type</p>
              <p className="font-hairline text-right text-black text-base sm:text-sm">
                {InvestmentName[0].assetType}
              </p>
            </div>
          )}

          {/* item */}
          <div className="flex flex-row mt-8 content-center justify-between items-center">
            <p className="font-bold text-black text-base sm:text-sm">
              Date issued
            </p>
            <p className="font-hairline text-right text-black text-base sm:text-sm">
              {moment(InvestmentName[0].dateIssued).format("MMM DD YYYY")}
            </p>
          </div>

          {/* item */}
          {!InvestmentName[0].maturityDate ? null : (
            <div className="flex flex-row mt-8 content-center justify-between items-center">
              <p className="font-bold text-black text-base sm:text-sm">
                Maturity Date
              </p>
              <p className="font-hairline text-right text-black text-base sm:text-sm">
                {InvestmentName[0].maturityDate}
              </p>
            </div>
          )}

          {/* item */}
          <div className="flex flex-row mt-8 content-center justify-between items-center">
            <p className="font-bold text-black text-base sm:text-sm">Tenure</p>
            <p className="font-hairline text-right text-black text-base sm:text-sm">
              {InvestmentName[0].minimumDurationInDays} days
            </p>
          </div>

          {/* item */}
          <div className="flex flex-row mt-8 content-center justify-between items-center">
            <p className="font-bold text-black text-base sm:text-sm">Returns</p>
            <p className="font-hairline text-right text-black text-base sm:text-sm">
              {InvestmentName[0].interestRate.toFixed(2)}%
            </p>
          </div>

          {/* item */}
          <div className="flex flex-row mt-8 content-center justify-between items-center">
            <p className="font-bold text-black text-base sm:text-sm">
              Minimun Deposit
            </p>
            <p className="font-hairline text-right text-black text-base sm:text-sm">
              N{InvestmentName[0].minimumAmount}
            </p>
          </div>

          {/* buttons */}
          <div className="justify-center flex-row flex content-center items-center">
            <button className="mt-12 w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm">
              Back
            </button>

            <Link
              to={{
                pathname: "/dashboard/investment/add-investment-form",
                investmentId: `${InvestmentName[0].investmentID}`,
              }}
            >
              <button className="mt-12 w-40  border-b text-center bg-wb-primary leading-loose border-wb-primary text-white mr-3 border wealth-buddy--cta text-white rounded-sm">
                Invest
              </button>
            </Link>
          </div>
        </div>
        {/* second coulumn end */}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  getAllInvestmentsLoading: state.investments.getAllInvestmentsLoading,
  getAllInvestmentsError: state.investments.getAllInvestmentsError,
  getAllInvestmentsData: state.investments.getAllInvestmentsData,
});

export default connect(mapStateToProps)(InvestmentInfo);
