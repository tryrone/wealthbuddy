import React from 'react';
import { addFundIcon, walletIcon, investmentIcon, savingsIcon, gainIcon, dashboardIcon } from '../../../../assets/exports'
// import { formatMoney } from '../../../../utilities';
import {Link } from "react-router-dom"

const DashboardSummary =()=> {
    return (
        <div className="flex flex-col card card-black flex-summary">
        <div className="flex justify-between items-center card-margin--x">
            <div className="text-white flex">
                <div className="mr-2 text-faded" dangerouslySetInnerHTML={{ __html: dashboardIcon }}>
                </div>
                <div>
                    <h5 className="text-xs mb-2 font-medium text-faded ">Net asset value</h5>
                    {/* <h2 className="summary-balance font-medium text-primary" >{`₦${formatMoney(data.netAssetValue)}`}</h2> */}
                    <h2 className="summary-balance font-medium text-primary" >{`₦100`}</h2>
                </div>
            </div>
            <Link to="/dashboard/wallet" className="flex flex-col items-center text-white">
                <span className="" dangerouslySetInnerHTML={{ __html: addFundIcon }}></span>
                <h5 className="text-xs mt-3 font-medium ">Add Fund</h5>
            </Link>
        </div>

        <div className="flex justify-between items-center card-margin--x mini-summary">
            <div className="text-white flex">
                <div className="mr-2 text-faded" dangerouslySetInnerHTML={{ __html: walletIcon }}>
                </div>
                <div>
                    <h5 className="text-xs mb-2 font-medium text-faded">Wallet</h5>
                    <h2 className="summary-balance font-medium">{`₦100`}</h2>
                </div>
            </div>
            <div className="text-white flex">
                <div className="mr-2 text-faded" dangerouslySetInnerHTML={{ __html: investmentIcon }}>
                </div>
                <div>
                    <h5 className="text-xs mb-2 font-medium text-faded">Investment</h5>
                    <h2 className="summary-balance font-medium">{`₦100`}</h2>
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center card-margin--x mini-summary">
            <div className="text-white flex">
                <div className="mr-2 text-faded" dangerouslySetInnerHTML={{ __html: savingsIcon }}>
                </div>
                <div>
                    <h5 className="text-xs mb-2 font-medium text-faded">Savings</h5>
                    <h2 className="summary-balance font-medium">{`₦100`}</h2>
                </div>
            </div>
            <div className="text-white flex">
                <div className="mr-2 text-faded" dangerouslySetInnerHTML={{ __html: gainIcon }}>
                </div>
                <div>

                    <h5 className="text-xs font-medium mb-2 text-faded">Daily gain</h5>
                    <h2 className="summary-balance font-medium">{`₦1000`}</h2>
                </div>
            </div>
        </div>
    </div>
    )
}

export default DashboardSummary;
