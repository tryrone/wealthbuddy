import React,{Fragment} from 'react';
import personalSavings from "../../../assets/img/personalIcon.png";
import { Link } from "react-router-dom"
// import fixedSavings from "../../../assets/img/fixedIcon.png";
// import groupSavings from "../../../assets/img/groupIcon.png";
// import groupConSavings from "../../../assets/img/groupConIcon.png";
// import fixedFlexSavings from "../../../assets/img/fixedFlex.png";

 function SavingsSummary() {
    return (
        // <Link to={`/dashboard/savings/view/${savingsData.savingsID}`} className="flex flex-col card flex-summary white-card card-x--padding">
        <Link to="" className="flex flex-col card flex-summary white-card card-x--padding">
        <div className="flex justify-between items-center card-margin--x">
            <div className=" flex justify-between items-center w-full">
                <div className="text-savings--summary w-full flex align-items-center">
                    <div className="left-tran--summary w-full flex flex-col align-items-center">
                        <div className="flex align-items-center">
                            <div className="trans-image">
                                {/* <img src={savingsData.savingsType === 1 ? personalSavings : savingsData.savingsType === 2 ? fixedSavings : savingsData.savingsType === 3 ? fixedFlexSavings : groupSavings} alt={"Wealth Buddy"} /> */}
                                <img src={personalSavings} alt={"Wealth Buddy"} />
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="tran-single--title font-medium">savingsData.name</p>
                            </div>
                        </div>
                        <div className="summary-progress w-full">
                            <div className="progress">
                                <div className="progress-meter" style={{ width: 100 }}></div>
                            </div>
                            <div className="flex justify-between">
                                <h6 className="font-medium color-active text-sm">100</h6>
                                {/* <h6 className="font-medium text-sm">{`₦savingsData.amountToSave)}`}</h6> */}
                                <h6 className="font-medium text-sm">{`₦100`}</h6>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="image-saving--summary">
                    {/* {savingsData.imageURL !== "" ?
                        <img src={savingsData.imageURL} alt={"Wealth Buddy"} /> :
                        <img src={savingsData.savingsType === 1 ? personalSavings : savingsData.savingsType === 2 ? fixedSavings : savingsData.savingsType === 3 ? fixedFlexSavings : groupSavings} alt={"Wealth Buddy"} />
                    } */}
                </div>
            </div>
        </div>

        <div className="flex justify-between items-center card-margin--x mini-summary">
            <div className="text-black flex">
                <div>
                    
                        <Fragment>
                            <h5 className="text-xs mb-2">Total Saved</h5>
                            <h2 className="summary-balance font-medium">{`₦1000}`}</h2>
                        </Fragment>
                        {/* <Fragment>
                            <h5 className="text-xs mb-2">Contribution</h5>
                            <h2 className="summary-balance font-medium">{`₦${formatMoney(savingsData.installmentalContribution)}/${savingsData.schedule === 2 ? "Week" : savingsData.schedule === 3 ? "Month" : "Day"}`}</h2>
                        </Fragment> */}
                    
                    {/* {savingsData.savingsType !== 1 ?
                        <Fragment>
                            <h5 className="text-xs mb-2">Total Saved</h5>
                            <h2 className="summary-balance font-medium">{`₦${formatMoney(savingsData.amountToSave)}`}</h2>
                        </Fragment>
                        :
                        <Fragment>
                            <h5 className="text-xs mb-2">Contribution</h5>
                            <h2 className="summary-balance font-medium">{`₦${formatMoney(savingsData.installmentalContribution)}/${savingsData.schedule === 2 ? "Week" : savingsData.schedule === 3 ? "Month" : "Day"}`}</h2>
                        </Fragment>
                    } */}

                </div>
            </div>
            <div className="text-black flex">
                <div>
                    <h5 className="text-xs mb-2">Interest Rate</h5>
                    <h2 className="summary-balance font-medium">20%</h2>
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center card-margin--x mini-summary">
            <div className="text-black flex">
                <div>
                    <h5 className="text-xs mb-2">Start Date</h5>
                    {/* <h2 className="summary-balance font-medium">{`${getHumanDate(savingsData.startDate)}`}</h2> */}
                    <h2 className="summary-balance font-medium">20th may 2020</h2>
                </div>
            </div>
            <div className="text-black flex">
                <div>
                    <h5 className="text-xs mb-2">Maturity Date</h5>
                    {/* <h2 className="summary-balance font-medium">{`${getHumanDate(savingsData.estimatedTerminationDate)}`}</h2> */}
                    <h2 className="summary-balance font-medium">20th may 2020</h2>
                </div>
            </div>
        </div>
    </Link>
    )
}
export default SavingsSummary;