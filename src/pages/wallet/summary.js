// import React, { useContext } from 'react';
import React from 'react';
// import { addFundIcon, walletIcon, investmentIcon, savingsIcon, gainIcon, outflowIcon, inflowIcon } from '../../../../assets/exports'
import {  walletIcon, outflowIcon, inflowIcon } from '../../assets/exports';
// import { StateContext } from '../../../../contextApi'
// import { formatMoney } from '../../../../modules/utilities';

 
const WalletSummary = () => {
    // const [{ data }] = useContext(StateContext);

    return (
        <div className="flex flex-col card card-black flex-summary margin-x--zero">
            <div className="flex justify-between items-center card-margin--x">
                <div className="text-white">
                    <h5 className="text-xs mb-2 font-medium text-faded">Wallet Balance</h5>
                    <h2 className="summary-balance font-medium">{`₦100`}</h2>
                </div>
                <div className="flex flex-col items-center text-white">
                    <span className="wallet-main--icon" dangerouslySetInnerHTML={{ __html: walletIcon }}></span>

                </div>
            </div>

            <div className="flex justify-between items-center card-margin--x mini-summary">
                <div className="text-white flex">
                    <div className="mr-2" dangerouslySetInnerHTML={{ __html: inflowIcon }}>
                    </div>
                    <div>
                        <h5 className="text-xs mb-2 font-medium text-faded">Monthly Inflow</h5>
                        <h2 className="summary-balance font-medium">{`₦1000`}</h2>
                    </div>
                </div>
                <div className="text-white flex">
                    <div className="mr-2" dangerouslySetInnerHTML={{ __html: outflowIcon }}>
                    </div>
                    <div>
                        <h5 className="text-xs mb-2 font-medium text-faded">Monthly Outflow</h5>
                        <h2 className="summary-balance font-medium">{`₦12000`}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletSummary;
