import React from 'react';
import {smallDollar,withblack,withdram,terminate,fundInvestment} from '../../../imageLinks';
import {Link} from 'react-router-dom';

export default function ViewCard() {
    return (
        <div style={{borderRadius:"2px"}} className="card-padding card h-auto mt-6  card-black  flex-column  text-white">
          <div className="flex flex-row items-center content-center">
              <img src={smallDollar} alt="wealth-buddy"/>
              <p className="text-white text-opacity-25 self-center pt-1 pl-3">Total Investments</p>
          </div>
              <p className="text-gray-100 text-4xl font-bold pl-6">N320,000,000</p>

              <div className="flex flex-summary card-margin--x flex-wrap justify-between items-center content-center pt-6">
                    <div className="text-left pl-6">
                        <p className="text-base text-white text-opacity-25 ">Total Interest</p>
                        <p className="ext-gray-100 text-2xl font-bold">N103,434.43</p>
                    </div>
                    <div style={{width:"2px",height:"50px",backgroundColor:"#222222"}}/>
                    <div className="text-left card-margin--y ml-6 sm:ml-0 pr-6">
                        <p className="text-base text-white text-opacity-25">Today's returns</p>
                        <p className="text-gray-100 text-2xl font-bold text-right">+303,434.43</p>
                    </div>
              </div>

                <div className="flex flex-summary flex-col sm:flex-row justify-between items-center content-center pt-6">
                    <Link to="/dashboard/investment/fund-investment/existing" className="pl-6 flex items-center content-center">
                        <img src={fundInvestment} alt="wealth-buddy" className="pr-3"/>
                        <p className="text-white text-base self-center">Fund Investment</p>
                    </Link>
                    <Link to="#" className="pl-6 flex mt-6 sm:mt-0 relative ml-2 sm:ml-0 items-center content-center pr-5">
                        <img src={withblack} alt="wealth-buddy" className="pr-3"/>
                        <p className="text-white text-base self-center">Withdraw</p>
                    </Link>
                    <Link to="#" className="pl-6 flex mt-6 sm:mt-0 relative ml-2 sm:ml-0 items-center content-center pr-5">
                        <img src={terminate} alt="wealth-buddy" className="pr-3"/>
                        <p className="text-white text-base self-center">Terminate</p>
                    </Link>
                </div>
        </div>
    )
}
