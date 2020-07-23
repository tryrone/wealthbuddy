// import React, { useContext, useEffect, useState } from 'react'
import React, { useContext, useEffect, useState } from 'react'
// import { addFundIcon, walletIcon, investmentIcon, savingsIcon, gainIcon, arrowIcon, logo } from '../../../../../assets/exports'
import { arrowIcon, logo } from '../../../assets/exports';
import { formatMoney, getHumanDate, getDesiredTime } from '../../../utilities';
import personalSavings from "../../../assets/img/personalIcon.png";
import fixedSavings from "../../../assets/img/fixedIcon.png";
import groupSavings from "../../../assets/img/groupIcon.png";
// import groupConSavings from "../../../assets/img/groupConIcon.png";
import fixedFlexSavings from "../../../assets/img/fixedFlex.png";
import { Link, useRouteMatch } from "react-router-dom";
import Loading from '../../../shared-components/Loading';
// import Logo from '../../../../../static/logo.svg';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
// import { postCall } from '../../../../../modules/network';
// import { urls } from '../../../../../modules/network/url';
import EmptyCard from "../../../shared-components/empty/empty-card";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";


const ViewSavings = (props) => {
    // const [{ withdrawSavings }, dispatch] = useContext(StateContext);
    // const [state, setState] = useState({
    //     savingsArray: [],
    //     finalArray: [],
    //     status: false
    // })

    // let getSingleItemArray = props.savings;
    // const match = useRouteMatch();
    // const viewSingleItem = match.params.id;
    // let arr = props.savings;
    // getSingleItemArray = arr.find(o => o.savingsID === viewSingleItem);


    // const getSavings = async () => {

    //     let params = { savingsId: viewSingleItem }
    //     const response = await postCall(urls.getAllSavings, null, params);

    //     if (response === "Token Expired") {
    //         forceLogout()
    //     }
    //     else if (response !== false && typeof response !== "undefined" && response.data.status === true) {
    //         setState(prevState => ({
    //             ...prevState,
    //             savingsArray: response.data.data === null ? [] : response.data.data,
    //             status: true
    //         }))
    //     }


    // }



    // useEffect(() => {

    //     getSavings()

    // }, [0])

    // useEffect(() => {

    //     const groups = state.savingsArray.reduce((groups, transactions) => {
    //         const date = transactions.creationDate.split("T")[0];
    //         if (!groups[date]) {
    //             groups[date] = [];
    //         }
    //         groups[date].push(transactions);
    //         return groups;
    //     }, {});

    //     // Edit: to add it in the array format instead
    //     const groupArrays = Object.keys(groups).map((date) => {
    //         return {
    //             date: date,
    //             transactions: groups[date],
    //         };
    //     });

    //     setState(prevState => ({
    //         ...prevState,
    //         finalArray: groupArrays
    //     }))

    // }, [state.savingsArray])


    // const proceed = () => {
    //     dispatch({
    //         type: "CHANGE_WITHDRAW_SAVINGS",
    //         newPayload: {
    //             ...withdrawSavings,
    //             type: getSingleItemArray.savingsType,
    //             modal: true,
    //             id: viewSingleItem,
    //             name: getSingleItemArray.name,
    //             balance: getSingleItemArray.amountSaved
    //         }
    //     });
    // }

    // const cancel = async (e) => {
    //     e.target.classList.add("loading");
    //     let url;
    //     if (getSingleItemArray.savingsType === 1) {
    //         url = urls.startCancelPersonalSavings
    //     }
    //     else if (getSingleItemArray.savingsType === 3) {
    //         url = urls.startCancelFixedFlexibleSavings
    //     }
    //     else if (getSingleItemArray.savingsType === 2) {
    //         url = urls.startCancelFixedLockSavings
    //     }
    //     else {
    //         url = urls.startCancelPersonalSavings
    //     }


    //     setTimeout(async () => {
    //         const data = {
    //             savingsID: getSingleItemArray.savingsID
    //         }
    //         const finalData = JSON.stringify(data);
    //         const response = await postCall(url, finalData);

    //         if (response === "Token Expired") {
    //             forceLogout()
    //         }
    //         else if (response !== false && typeof response !== "undefined" && response.data.status === true) {
    //             dispatch({
    //                 type: "CHANGE_CANCEL_SAVINGS",
    //                 newPayload: {
    //                     id: getSingleItemArray.savingsID,
    //                     modal: true,
    //                     amount: response.data.data.amountToDisburse,
    //                     type: getSingleItemArray.savingsType
    //                 }
    //             });
    //         }
    //         else {
    //             toaster.notify(response.data.message, {
    //                 position: "bottom",
    //                 duration: null
    //             });
    //         }
    //         Array.from(document.querySelectorAll(".loading")).forEach(
    //             element => {
    //                 element.classList.remove("loading")
    //             }
    //         );
    //     }, 1000);
    // }

    // const dateStatus = new Date(getSingleItemArray.estimatedTerminationDate) > new Date();

    const savings =[1,2,3];
    const state = {
        status:true
    }
    const finalArray =[1,1,1,1,1,1,1,1,1,1,1]
    const transactions=[1,1,1,1]
    return (

        <div className="px-12 inner-savings--wrap flex-wrap flex justify-between">

            {savings.length > 0 && state.status ?
                <React.Fragment>
                    <div className="w65">
                        <div className="view-savings--wrap">
                            <div className="card card-padding min-card w-full flex flex-col justify-between">
                                <div className="flex flex-col flex-summary white-card card-x--padding">
                                    <div className="savings-heading">
                                        <Link to="/dashboard/savings" className="back font-medium"><span className="back" dangerouslySetInnerHTML={{ __html: arrowIcon }}></span>Back</Link>
                                        <div className="trans-image">
                                            {/* <img src={getSingleItemArray.savingsType === 1 ? personalSavings : getSingleItemArray.savingsType === 2 ? fixedSavings : getSingleItemArray.savingsType === 3 ? fixedFlexSavings : groupSavings} alt={"Wealth Buddy"} /> */}
                                            <img src={personalSavings} alt={"Wealth Buddy"} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center card-margin--x pb-14">
                                        <div className=" flex flex-col justify-center items-center items-center w-full">

                                            <div className="image-saving--summary">

                                                    <img src={personalSavings} alt={"Wealth Buddy"} />

                                                {/* {getSingleItemArray.imageURL !== "" ?
                                                    <img src={getSingleItemArray.imageURL} alt={"Wealth Buddy"} /> :
                                                    <img src={getSingleItemArray.savingsType === 1 ? personalSavings : getSingleItemArray.savingsType === 2 ? fixedSavings : getSingleItemArray.savingsType === 3 ? fixedFlexSavings : groupSavings} alt={"Wealth Buddy"} />
                                                } */}
                                            </div>
                                            <div className="text-savings--summary w-full flex align-items-center">
                                                <div className="left-tran--summary w-full flex flex-col justify-center align-items-center">
                                                    <div className="flex justify-center text-center align-items-center">
                                                        <div className="flex flex-col justify-center">
                                                            <p className="savings-inner--title font-medium text-gray-300">{`1200`}</p>
                                                            <h1 className="mt-3 mb-4 text-4xl font-medium">{`₦1000`}</h1>
                                                            <p className="savings-inner--title font-medium color-black mb-4">{930}</p>
                                                        </div>
                                                    </div>
                                                    <div className="summary-progress w-full">
                                                        <div className="progress">
                                                            <div className="progress-meter" style={{ width: `${800 /200 * 100}%` }}></div>
                                                        </div>
                                                        <div className="flex justify-between mt-3">
                                                            <p className="text-gray-300">{`$200% achieved`}</p>
                                                            <p className="color-black">{`₦100`}</p>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                        <div className="nav-buttons flex justify-center">
                                            {/* {getSingleItemArray.savingsType !== 2 &&
                                                <div className={`w-40  border-b text-center bg-white cta-del leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm`} onClick={getSingleItemArray.savingsType !== 2 && cancel}>
                                                    Cancel <span className="loader"></span>
                                                </div>
                                            } */}
                                            {/* {getSingleItemArray.savingsType !== 2 ?
                                                <button className={` w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta cta-black text-white rounded-sm ${getSingleItemArray.amountSaved === 0 ? "opaque" : ""}`} onClick={getSingleItemArray.amountSaved === 0 ? null : proceed}>
                                                    Withdraw
                                                </button> :
                                                <button className={` w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta cta-black text-white rounded-sm ${getSingleItemArray.amountSaved === 0 || dateStatus ? "opaque" : ""}`} onClick={(getSingleItemArray.amountSaved === 0 || dateStatus) ? null : proceed}>
                                                    Withdraw
                                                </button>
                                            } */}

                                        </div>
                                    </div>



                                    {/* <div className="view-summary--items card-margin--x px-0 flex-wrap top-inner--summary">
                                        <div className="savings-inner--item">
                                            <h5 className="savings-inner--subtitle text-gray-300 text-xs">Contribution</h5>
                                            <h1 className="mt-3 font-medium">{`₦${formatMoney(getSingleItemArray.installmentalContribution)}/${getSingleItemArray.schedule === 2 ? "Week" : getSingleItemArray.schedule === 3 ? "Month" : "Day"}`}</h1>
                                        </div>
                                        <div className="savings-inner--item">
                                            <h5 className="savings-inner--subtitle text-gray-300 text-xs">Interest Rate</h5>
                                            <h1 className="mt-3 font-medium">{`${getSingleItemArray.interestRate === 0 ? "N/A" : getSingleItemArray.interestRate + "%"}`}</h1>
                                        </div>
                                        <div className="savings-inner--item">
                                            <h5 className="savings-inner--subtitle text-gray-300 text-xs">Start Date</h5>
                                            <h1 className=" mt-3 font-medium">{getHumanDate(getSingleItemArray.startDate)}</h1>
                                        </div>

                                    </div> */}
                                    {/* <div className="view-summary--items card-margin--x px-0 flex-wrap no-border--bottom">
                                        <div className="savings-inner--item">
                                            <h5 className="savings-inner--subtitle text-gray-300 text-xs">Maturity Date</h5>
                                            <h1 className="mt-3 font-medium">{`${getHumanDate(getSingleItemArray.estimatedTerminationDate)}`}</h1>
                                        </div>
                                        {
                                            getSingleItemArray.interestRate !== 0 && <div className="savings-inner--item">
                                                <h5 className="savings-inner--subtitle text-gray-300 text-xs">Interest Earned</h5>
                                                <h1 className="mt-3 font-medium color-primary">{`₦${formatMoney(getSingleItemArray.totalInterestEarned)}`}</h1>
                                            </div>
                                        }
                                    </div> */}

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="w35">
                        <div className="card card-padding w-full has-scrollBar single-savings--scroll">
                            <div className="card-label">
                                <h1 className="text-4xl mb-6 font-medium card-header">Transaction history</h1>
                            </div>
                            <PerfectScrollbar>
                                {finalArray.length === 0 ?
                                    <EmptyCard title="Nothing to see here yet." message="Find any of your savings plan to and see you your transactions history here." /> : <React.Fragment>
                                        {finalArray.map((item, key) =>
                                            <React.Fragment key={key}>
                                                <div className="transaction-wealth--padding">
                                                    <div className="transaction--heading card-padding transaction-padding">
                                                        <h4 className="transaction-range--header">{3005060}</h4>
                                                    </div>
                                                    {transactions.map((items, key) =>
                                                        <div key={key} className="transaction-body flex justify-between items-center card-padding transaction-padding">
                                                            <div className="left-tran--summary flex align-items-center">
                                                                <div className="trans-image">
                                                                    <img src={personalSavings} alt={"Wealth Buddy"} />
                                                                </div>
                                                                <div className="flex flex-col justify-center">
                                                                    <p className="tran-single--title font-medium">{`400`}</p>
                                                                </div>
                                                            </div>
                                                            <div className="right-tran--summary">
                                                                <h3 className={`tran-single--title card-header flex font-medium  color-red`}>{`200"+" : "-"}₦ 300`}</h3>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </React.Fragment>
                                        )}
                                    </React.Fragment>}
                            </PerfectScrollbar>

                        </div>
                    </div>

                </React.Fragment>

                :
                <div className="flex flex-col justify-center min-screen items-center">
                    <div className="flex flex-col justify-center items-center">
                        <i className="w-10 mb-4" dangerouslySetInnerHTML={{ __html: logo }}>

                        </i>
                        <Loading text="" />
                    </div>

                </div>
            }
        </div>
    )
}

export default ViewSavings;
