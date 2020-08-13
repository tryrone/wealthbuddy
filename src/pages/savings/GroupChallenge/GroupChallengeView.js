import React, { Fragment } from "react";
import { FaUsers } from "react-icons/fa";
import Arrow from "../../../assets/img/Arrow.svg";
import beach from "../../../assets/img/beach.svg";
import GroupFeedItem from "./GroupFeedItem";

const formValues = false;

const updateFeeds = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const GroupChallengeView = () => {
  return (
    <Fragment>
      {/* MAIN BODY  */}
      <div className="flex flex-col sm:flex-row justify-between">
        <div className=" flex justify-center items-start fadeIn">
          <div className="create-saving--overview overview-full w-full">
            <div className="create-personal--savings w-full flex justify-between">
              <div className="card overview-card w-full">
                {/* HEADER BACK ARROW AND GROUP ICON */}
                <div className="summary-heading--wrap flex w-full flex-row justify-between">
                  <div className="flex flex-row items-center content-center">
                    <img src={Arrow} alt="" />
                    <p className="font-bold ml-3 text-base flex-end text-black">
                      Back
                    </p>
                  </div>

                  <div className="p-1 bg-purple-200 ">
                    <div className="text-purple-600 p-1">
                      <FaUsers />
                    </div>
                  </div>
                </div>
                {/* HEADER BACK ARROW AND GROUP ICON */}

                {/* VACATION TEXT SECTION */}
                <div className="flex flex-col sm:flex-row summary-heading--wrap mt-4 sm:w-full justify-between">
                  <div className="flex flex-col sm:w-full">
                    <p className="font-medium text-xl opacity-50 text-black left-align">
                      Vacation
                    </p>
                    <p className="font-medium text-3xl mt-2 text-black left-align">
                      N 100,000
                    </p>

                    {/* CONTENT FOR PROGRESS BAR */}
                    <div className="flex flex-col">
                      <p className="font-medium text-base mt-3 text-black left-align">
                        Group challenge savings
                      </p>
                    </div>
                    {/* PROFGRESS BAR */}
                    <div
                      className="user-progress--bar"
                      style={{
                        width: "100%",
                        height: "5px",
                        borderRadius: "0px",
                        background: "rgba(0,0,0,.1)",
                      }}
                    >
                      <div
                        className="user-single--progress"
                        style={{
                          width: "30%",
                          height: "5px",
                          background: "#B893FF",
                        }}
                      />
                    </div>
                    {/* PROFGRESS BAR */}
                    <div className="flex flex-row justify-between mt-2">
                      <p className="text-black opacity-50 text-xs">
                        30% achieved
                      </p>
                      <p className="text-black  text-xs">N70,943.00</p>
                    </div>
                    {/* CONTENT FOR PROGRESS BAR */}
                  </div>
                  <div className="sm:w-7/12 border-2 mt-4 sm:mt-0 border-black border-solid ml-4">
                    <img src={beach} alt="" className="w-full h-full" />
                  </div>
                </div>
                {/* VACATION TEXT SECTION */}

                {/* TABLE CONTENT */}
                <div
                  className="savings-summary--items flex-col sm:flex-row"
                  style={{ paddingRight: "0px" }}
                >
                  <div className="savings-inner--item flex-1 w-full">
                    <h5 className="savings-inner--subtitle text-gray-300 text-xs">
                      Description
                    </h5>
                    <h1 className="mt-3 font-normal text-sm">
                      As simple as investing your savings and we will help you
                      grow from there.
                    </h1>
                  </div>
                  {/* <div className="savings-inner--item">
                    <h5 className="savings-inner--subtitle text-gray-300 text-xs">
                      Interest Rate
                    </h5>
                    <h1 className="savings-inner--title mt-3 font-medium">
                      {`12%`}
                    </h1>
                  </div> */}
                  <div className="savings-inner--item flex p-0 sm:w-6/12 flex-col">
                    <div className="flex flex-row pr-0 mr-0">
                      <div className="savings-inner--item w-full">
                        <h5 className="savings-inner--subtitle text-gray-300 text-xs">
                          Contribution
                        </h5>
                        <h1 className="savings-inner--title text-base mt-3 font-medium">
                          ₦ 50,000/Month
                        </h1>
                      </div>
                      <div className="savings-inner--item w-full">
                        <h5 className="savings-inner--subtitle w text-gray-300 text-xs">
                          Interest Rate
                        </h5>
                        <h1 className="savings-inner--title mt-3 font-medium">
                          Up to 10%
                        </h1>
                      </div>
                    </div>
                    <div
                      style={{
                        borderTop: "1px solid black",
                        borderTopColor: "rgba(0,0,0,.1)",
                      }}
                      className="flex flex-row"
                    >
                      <div className="savings-inner--item sm:w-full">
                        <h5 className="savings-inner--subtitle text-gray-300 text-xs">
                          Start Date
                        </h5>
                        <h1 className="savings-inner--title mt-3 font-medium">
                          Jan 1, 2020
                        </h1>
                      </div>
                      <div className="savings-inner--item w-full ">
                        <h5 className="savings-inner--subtitle text-gray-300 text-xs">
                          Maturity Date
                        </h5>
                        <h1 className="savings-inner--title mt-3 font-medium">
                          Aug 1, 2020
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                {/* TABLE CONTENT */}

                {/* DIV FOR THE SCROLL INVITE LIST */}
                <div
                  className="summary-heading--wrap overflow-scroll"
                  style={{
                    height: "100px",
                    borderBottom: "1px solid rgba(0,0,0,0.1)",
                    paddingBottom: "20px",
                  }}
                >
                  <h5 className="savings-inner--subtitle text-gray-300 text-xs">
                    Group Members
                  </h5>

                  {/* ROW FOR MEMBERS */}
                  <div className="flex sm:flex-row justify-between flex-wrap">
                    {updateFeeds.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className="flex flex-row justify-between content-center items-center pr-10 sm:w-6/12 mt-4"
                        >
                          <div
                            style={{
                              height: "34px",
                              width: "34px",
                              borderRadius: "50%",
                              background: "#A2E6E0",
                            }}
                            className="flex justify-center items-center font-light text-black text-base"
                          >
                            JW
                          </div>
                          <p className="font-medium text-black text-opacity-25">
                            johnword@gmail.com
                          </p>
                          <p
                            style={{
                              background: "#D8E6F9",
                              borderRadius: "10px",
                              height: "18px",
                              // padding: "0px 8px",
                            }}
                            className="flex justify-center items-center px-2 font-normal text-sm"
                          >
                            Accept
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* ROW FOR MEMBERS */}
                </div>
                {/* DIV FOR THE SCROLL INVITE LIST */}
                <div className="flex justify-center mt-12">
                  <button
                    style={{
                      border: "2px solid black",
                      color: "black",
                    }}
                    // onClick={onBack}
                    className="sm:w-40 w-32  border-b text-center bg-white leading-loose mr-3 border wealth-buddy--cta text-white rounded-sm"
                  >
                    Delete
                  </button>

                  <button
                    // onClick={onLaunch}
                    className="w-40 w-32 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm"
                  >
                    Start
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FEED */}
        <div className="flex  card sm:w-6/12 sm:ml-4">
          <div className="flex flex-col feed-wrap fadeIn">
            <h1 className="text-base mb-5 font-medium card-header">
              Transaction History
            </h1>
            <div className="overflow-y-scroll overflow-x-hidden">
              {updateFeeds.map((feed, index) => (
                <GroupFeedItem key={index} feed={feed} />
              ))}
            </div>
          </div>
        </div>
        {/* FEED */}
      </div>
      {/* MAIN BODY */}
    </Fragment>
  );
};
export default GroupChallengeView;
