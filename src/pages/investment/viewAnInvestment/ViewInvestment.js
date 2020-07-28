import React from 'react'
import ViewCard from './component/viewCard/ViewCard';
import TransactionHistory from './component/transactionHistory/TransactionHistory';
import ViewDetails from './component/viewInvestDetails/ViewDetails';

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
