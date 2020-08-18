import React, { useEffect } from "react";
import {
  handCoin,
  handHouse,
  handTree,
  moneyWheels,
  moneyBag,
  pigCoin,
  storeCoin,
} from "../../imageLinks";
import { getAllInvestments } from "../../../../state/slices/investments";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { forEach } from "lodash";
import Loading from "shared-components/Loading";

const AddInvestment = ({
  getAllInvestmentsData,
  getAllInvestmentsLoading,
  location,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // if (props.location.investmentId == "undefined") {
    //   return props.history.push("/dashboard/investment");
    // }
    // console.log(location, "location");
    if (getAllInvestmentsData.length == 0) {
      dispatch(getAllInvestments());
    }
  }, []);

  const data = [
    {
      img: handCoin,
      color: "#CDEBF5",
      textHead: "Meristem Equity Market Fund",
      textRound: "Mutual funds",
      type: 1,
    },

    {
      img: handCoin,
      color: "#CDEBF5",
      textHead: "Meristem Money Market Fund",
      textRound: "Mutual funds",
      type: 1,
    },

    {
      img: pigCoin,
      color: "#A2E6E0",
      textHead: "Fixed Tip",
      textRound: "Fixed Deposits",
    },
    {
      img: handTree,
      color: "#DCCDF5",
      textHead: "Meristem Equity Market Fund",
      textRound: "Dollar Investment",
    },

    {
      img: storeCoin,
      color: "#FFDEAD",
      textHead: "MT-LIP(Treasury Bills)",
      textRound: "Treasury Bills",
      type: 3,
    },

    {
      img: handTree,
      color: "#DCCDF5",
      textHead: "Meristem Money Market Fund",
      textRound: "Dollar Investment",
    },
    {
      img: handHouse,
      color: "#B8DDE9",
      textHead: "Real Estate Advantage Portfolio - Arena Court",
      textRound: "Real Estate",
    },
    {
      img: moneyWheels,
      color: "#F5CDE7",
      textHead: "Bond Investment",
      textRound: "Bonds",
    },
    {
      img: moneyBag,
      color: "#DAFF8A",
      textHead: "Meristem Ethical Earning Portfolio",
      textRound: "MEEP",
    },
  ];

  const colors = {
    51129656: "#CDEBF5",
    51129542: "#CDEBF5",
    51118581: "#FFDEAD",
    51119099: "#DCCDF5",
    45149064: "#DCCDF5",
    45149066: "#DAFF8A",
    45149062: "#A2E6E0",
    45149135: "#CDEBF5",
  };

  const icons = {
    51129656: handCoin,
    51129542: handCoin,
    51118581: storeCoin,
    51119099: handTree,
    45149064: handTree,
    45149066: moneyBag,
    45149062: pigCoin,
    45149135: handCoin,
  };
  const assetType = {
    1: "Funds",
    1: "Funds",
    3: "Treasury Bills",
    3: "Treasury Bills",
    2: "Fixed Tip",
    2: "Fixed Tip",
    2: "Fixed Tip",
  };

  const availInvest = getAllInvestmentsData.filter(
    (item) =>
      item.investmentType === 1 ||
      item.investmentType === 2 ||
      item.investmentType === 3
  );

  return (
    <div className="px-12 flex flex-col fadeIn">
      <p className="font-bold text-xl text-black">Add new Investment </p>

      <div
        style={{ border: "1px solid #F1F1F1" }}
        className="bg-white px-8 mt-8 flex-row flex flex-wrap justify-between py-10 px-2"
      >
        {getAllInvestmentsLoading ? (
          <div className="flex my-auto content-center justify-center items-center  mx-auto">
            <Loading text="Fetching available invetsments" />
          </div>
        ) : (
          availInvest.map((items) => {
            return (
              <Link
                key={items.label}
                to={{
                  pathname: "/dashboard/investment/investment-info",
                  investmentId: `${items.investmentID}`,
                  // investName: `${items.textHead}`,
                }}
              >
                <div className="flex card rounded flex-col sm:flex-row  bg-white ">
                  <div
                    style={{
                      backgroundColor: `${
                        colors[items.investmentID] || "#DCCDF5"
                      }`,
                    }}
                    className="flex justify-center content-center py-6 px-8  items-center"
                  >
                    <img
                      src={icons[items.investmentID]}
                      style={{ height: "50px", width: "50px" }}
                    />
                  </div>

                  {/* innewr text content */}
                  <div className="py-3 px-3 justify-between flex flex-col sm:flex-row">
                    {/* left content of the inside */}
                    <div>
                      <p
                        style={{ width: "200px" }}
                        className="font-bold text-black text-base"
                      >
                        {items.label}
                      </p>
                      <p className="font-bold text-black mt-5 text-base">
                        N{items.minimumAmount}
                      </p>
                      <p className="text-xs ">Minimum Capital</p>
                    </div>
                    <div className="flex justify-between flex-col">
                      <div
                        style={{
                          backgroundColor: `${
                            colors[items.investmentID] || "#DCCDF5"
                          }`,
                          padding: "6px",
                          fontSize: "10px",
                          alignSelf: "flex-end",
                          // width: "70px",
                          // position: "relative",
                          // left: "25px",
                        }}
                        className="mt-6 mb-4  text-xs sm:mb-0 sm:mt-0 rounded-full"
                      >
                        {assetType[items.investmentType] || null}
                      </div>
                      <div>
                        <p
                          style={{ color: "#6F8A15" }}
                          className="text-xs font-bold"
                        >
                          {items.interestRate.toFixed(1)}% per annum
                        </p>
                        <p className="text-base text-black text-right font-hairline">
                          Returns
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  getAllInvestmentsLoading: state.investments.getAllInvestmentsLoading,
  getAllInvestmentsError: state.investments.getAllInvestmentsError,
  getAllInvestmentsData: state.investments.getAllInvestmentsData,
});

export default connect(mapStateToProps)(AddInvestment);
