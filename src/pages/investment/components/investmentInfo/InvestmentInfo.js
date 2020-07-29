import React,{useEffect} from 'react';
import {financeMan} from '../../imageLinks';
import NavShape from "../../../../shared-components/svgs/NavShape";
import Chart from '../Chart';
import { Link } from 'react-router-dom';

const InvestmentInfo =(props)=> {

    console.log(props,"just props");
    useEffect(()=>{ 
        console.log(props,"my props")
    }) 

    return (
        <div className="px-4 sm:px-12  flex flex-col fadeIn">
            <div className="flex flex-row justify-between content-center sm:w-3/6 items-center  mb-20 ">
                <p style={{color:"#999999"}} className="text-xs ">Investment</p>
                <p style={{color:"#999999"}} className="text-xs "> {'>>'} </p>
                <p style={{color:"#999999"}} className="text-xs ml-4 sm:ml-1">Add new Investment</p>
                <p style={{color:"#999999"}} className="text-xs"> {'>>'} </p>
                <p className="text-sm text-black"> Meristem Equity Market Fund</p>
            </div>
           
           <div 
           style={{backgroundColor:"#A8C93A"}} 
           className="card .relative rounded-lg py-4 sm:py-16 px-4  flex flex-col justify-between sm:flex-row">
               <div className="flex flex-col">
               <p className="text-white font-bold text-xl sm:text-2xl">
                Get Value for your money
                </p>
                
                <p className="text-white mt-4  sm:text-lg sm:w-3/4 text-left">
                With our wide range of investment packages, 
                you can relax and watch your money grow.
                </p>

                {/* <span className="navShape">
                    <NavShape />
                </span> */}
                </div> 
                <img src={financeMan} className="sm:absolute right-0 top-0 pb-20 pr-10"/>
           </div>

            <p className="font-bold text-black text-xl sm:text-2xl ml-2 text-left mt-10"> 
                Meristem Equity Market Fund
            </p>
        
        {/* div for the two main coloumns */}

        <div className="flex flex-col sm:flex-row">
            {/* first coloumn */}
            <div className="sm:w-1/2 w-auto sm:mr-4">
            {/* box one start */}
            <div style={{
            border:"1px solid #F1F1F1"
            }}
            className="card p-4 rounded mt-10 "
            >
            <p
            style={{color:"#999999"}} 
            className="text-lg font-bold sm:text-base">About this investment
            </p>

            <p className="text-lg text-black sm:text-base text-hairline mt-3">
            This offers a low-cost method of investing in bonds, stocks, 
            treasury bills and other fixed income instruments while 
            offering you a professional, full-time fund manager. 
            Our mutual funds allow you begin your investment journey 
            with as low as NGN10,000 for the first month and fund your 
            account with any amount subsequently. Our mutual fund account 
            never expires and allows you gain interests as early as after
            30days.
            </p>

            </div>
            {/* box one end */}

            {/* box two start */}
            <div style={{
            border:"1px solid #F1F1F1"
            }}
            className="card p-4 rounded mt-10"
            >
            <p
            style={{color:"#999999"}} 
            className="text-lg font-bold sm:text-base">Earning on this investment
            </p>

            <p className="text-lg text-black sm:text-base text-hairline mt-3">
            The money market fund is a low risk fund, 
            that invests in a combination of fixed 
            income instruments like treasury bills, 
            commercial papers, fixed deposit and call placement.
            </p>

            </div>
             {/* box two end */}

             {/* box three start */}
            <div style={{
            border:"1px solid #F1F1F1"
            }}
            className="card py-4  rounded mt-10"
            >
            <p
            style={{color:"#999999"}} 
            className="text-lg font-bold pl-4 sm:text-base">Price history
            </p>
            
            <div>
            <Chart/>
            </div>

            </div>
             {/* box three end */}
            </div> 
            {/* edn of column one */}

            {/* second coulumn */}
            <div
            style={{
                border:"1px solid #F1F1F1"
                }}
                className="card p-2 sm:p-4 flex flex-col w-auto sm:w-1/2 rounded mt-10"
            >
                <p
            style={{color:"#999999"}} 
            className="text-lg font-bold sm:text-base">Investment Details
            </p>
                
                {/* item */}
                <div className="flex flex-row mt-8 content-center justify-between items-center">
                <p className="font-bold text-black text-base sm:text-sm">Asset Class</p>
                <p className="font-hairline text-right text-black text-base sm:text-sm">Fixed Income</p>
                </div>

                 {/* item */}
                 <div className="flex flex-row mt-8 content-center justify-between items-center">
                <p className="font-bold text-black text-base sm:text-sm">Type</p>
                <p className="font-hairline text-right text-black text-base sm:text-sm">Mutual Funds</p>
                </div>
                
                 {/* item */}
                 <div className="flex flex-row mt-8 content-center justify-between items-center">
                <p className="font-bold text-black text-base sm:text-sm">Date issued</p>
                <p className="font-hairline text-right text-black text-base sm:text-sm">17 Jun 2019</p>
                </div>
                
                 {/* item */}
                 <div className="flex flex-row mt-8 content-center justify-between items-center">
                <p className="font-bold text-black text-base sm:text-sm">Maturity Date</p>
                <p className="font-hairline text-right text-black text-base sm:text-sm">07 Jul 2021</p>
                </div>
                
                 {/* item */}
                 <div className="flex flex-row mt-8 content-center justify-between items-center">
                <p className="font-bold text-black text-base sm:text-sm">Tenure</p>
                <p className="font-hairline text-right text-black text-base sm:text-sm">365 dyas</p>
                </div>
                 
                 {/* item */}
                 <div className="flex flex-row mt-8 content-center justify-between items-center">
                <p className="font-bold text-black text-base sm:text-sm">Returns</p>
                <p className="font-hairline text-right text-black text-base sm:text-sm">10.2%</p>
                </div>
                 
                 {/* item */}
                 <div className="flex flex-row mt-8 content-center justify-between items-center">
                <p className="font-bold text-black text-base sm:text-sm">Minimun Deposit</p>
                <p className="font-hairline text-right text-black text-base sm:text-sm">N10,000</p>
                </div>

                    {/* buttons */}
                    <div className="justify-center flex-row flex content-center items-center">
                    <button
                        className="mt-12 w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
                        >
                        Back
                    </button>

                    <Link to="/dashboard/investment/invest-info/form">
                    <button className="mt-12 w-40  border-b text-center bg-wb-primary leading-loose border-wb-primary text-white mr-3 border wealth-buddy--cta text-white rounded-sm">
                        Invest
                    </button>
                    </Link>
                    </div>
                    
            </div>
            {/* second coulumn end */}
        </div>
        
        </div>
    )
}
export default  InvestmentInfo;