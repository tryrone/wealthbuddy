import React from 'react'
import ViewCard from './component/viewCard/ViewCard';
import {bulb} from '../imageLinks'
import TransactionHistory from './component/transactionHistory/TransactionHistory';
import ViewDetails from './component/viewInvestDetails/ViewDetails';
import {Link} from 'react-router-dom';

const ViewInvestment=()=> {
    return (
        <div className="px-4 sm:px-12  flex flex-col fadeIn">
        <div className="flex flex-row justify-between content-center sm:w-2/6 items-center  mb-10 ">
            <p style={{color:"#999999"}} className="text-xs ">Investment</p>
            <p style={{color:"#999999"}} className="text-xs "> {'>>'} </p>
            {/* <p style={{color:"#999999"}} className="text-xs ml-4 sm:ml-1">Add new Investment</p>
            <p style={{color:"#999999"}} className="text-xs"> {'>>'} </p> */}
            <p className="text-sm text-black">Meristem Equity Market Fund</p>
        </div>
       
        {/* heading */}
        <p className="text-black font-bold text-2xl text-left">Meristem Equity Market Fund</p>
        {/* heading end */}
       
        <div className="md:flex md:flex-shrink-0 savings-home--wrap  justify-between fadeIn">
        {/* left part */}
        <div className="flex flex-col w-full mr-5">
            <ViewCard/>

                {/* roll over card */}
            <div style={{borderColor:"#8CB13D",backgroundColor:"#F9FFEB"}} className="flex flex-col sm:flex-row border border-solid px-6 py-4">
            <img src={bulb} alt="" className="mr-4" />
            <div className="">
                <p className="text-xs">
                Your investments is now mature and you can 
                now withdraw or rollover  this investment plan
                </p>

                <Link to="/dashboard/investment/view-investment/roll-over" style={{color:"#8CB13D"}} className="text-xs mt-4 font-bold">Roll over this plan</Link>
            </div>
            </div>
                {/* roll over card */}
            <div>
                <ViewDetails/>
            </div>
        </div>
        {/* left part */}

            {/* right part */}
            <TransactionHistory/>
            {/* right part */}
        </div>
        
        </div>
    )
}
export default  ViewInvestment;
