import React from 'react';
import StickyBox from "react-sticky-box";
import { addFundIcon, savingsIcon } from '../../assets/exports';
import PerfectScrollbar from 'react-perfect-scrollbar';
import EmptyCard from 'pages/dashboard/components/DashboardInner/EmptyCard';
import SavingsSummary from './SavingsSummary/SavingsSummary';
import { Link } from "react-router-dom";

 const SavingsHome =()=> {
    return (
        <div className="px-12 flex flex-col fadeIn">
            <h1 className="text-4xl mb-6 font-medium">
                Savings
            </h1>

            <div className="flex">
                <div className="flex justify-between savings-home--wrap w-full" style={{ display: "flex", alignItems: "flex-start" }}>
                    <StickyBox offsetTop={115} offsetBottom={20} className="w35">
                        <div className="w-full w-transaction--max">

                            <div className="savings-transactions flex flex-col">
                                <div className="card card-padding card-black w-full flex justify-between items-center">
                                    <div className="text-white">
                                        <h5 className="text-xs mb-3 text-faded font-medium">Total saved</h5>
                                        {/* <h2 className="summary-balance font-medium">{`₦${formatMoney(savingsTotal)}`}</h2> */}
                                        <h2 className="summary-balance font-medium">{`₦1000`}</h2>
                                    </div>
                                    <div className="flex flex-col items-center text-white">
                                        <span className="wallet-main--icon" dangerouslySetInnerHTML={{ __html: savingsIcon }}></span>
                                    </div>
                                </div>

                                <div className="card card-padding w-full has-scrollBar">
                                    <div className="card-label">
                                        <h1 className="text-4xl mb-6 font-medium card-header">Transaction history</h1>
                                    </div>
                                    <PerfectScrollbar>
                                        {/* {groupArrays.length === 0 ? <EmptyCard title="Nothing to see here yet." message="Find any of your savings plan to and see you your transactions history here."/> */}
                                        <EmptyCard title="Nothing to see here yet." message="Find any of your savings plan to and see you your transactions history here."/>
                                        
                                         {/* <React.Fragment>
                                         {groupArrays.map((item, key) => */}
                                        {/* //     <React.Fragment key={key}>
                                        //         <div className="transaction-wealth--padding">
                                        //             <div className="transaction--heading card-padding transaction-padding">
                                        //                 <h4 className="transaction-range--header">{item.date}</h4>
                                        //             </div>
                                        //             {item.transactions.map((items, key) => */}
                                        {/* //                 <div key={key} className="transaction-body flex justify-between items-center card-padding transaction-padding">
                                        //                     <div className="left-tran--summary flex align-items-center">
                                        //                         <div className="trans-image">
                                        //                             <img src={personalSavings} alt={"Wealth Buddy"} />
                                        //                         </div>
                                        //                         <div className="flex flex-col justify-center">
                                        //                             <p className="tran-single--title mb-1 font-medium">{items.name === null ? "Personal Savings" : items.name}</p>
                                        //                             <p className="text-sm">{`${getDesiredTime(items.creationDate)} - ${items.action === 2 ? "Fund" : "Withdrawal"}`}</p>
                                        //                         </div>
                                        //                     </div>
                                        //                     <div className="right-tran--summary">
                                        //                         <h3 className="tran-single--title card-header font-medium">{`₦${formatMoney(items.amount)}`}</h3>
                                        //                     </div>
                                        //                 </div>
                                        //             )}
                                        //         </div>
                                        //     </React.Fragment>
                                        // )}
                                        // </React.Fragment> */}
                                        
                                    </PerfectScrollbar>

                                </div>

                            </div>


                        </div>
                    </StickyBox>

                    <div className="w65">
                        <div className="single-savings--wrap summary-items--savings flex justify-between card-is--two flex-wrap w-full">
                            <Link to="/dashboard/savings/create" className="card card-label addNewSavings card-padding flex justify-center items-center">
                                <div className="flex flex-col items-center text-black">
                                    <span className="" dangerouslySetInnerHTML={{ __html: addFundIcon }}></span>
                                    <h5 className="card-header color-primary mt-3 font-medium ">Create new savings</h5>
                                </div>
                            </Link>
                            {/* {savings.map((item, i) => ( */}
                                <React.Fragment>
                                    <SavingsSummary />
                                </React.Fragment>
                            {/* ))} */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default SavingsHome;