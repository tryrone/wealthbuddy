import React from 'react'
import Chart from '../Chart';
import {investBars} from '../../imageLinks';
import { number } from 'yup';

const TransactHistory =()=> {
    const numbers = [1,1,1,1];
    return (
        <div style={{border:"1px solid #F1F1F1",borderRadius:"2px"}} className="card w-full bg-white border px-8 py-5 scrollbar-container ps">
            <div className="flex justify-center content-center items-center">
                <p className="text-xs font-bold text-teal-700">+324,442.88</p>
                <p style={{color:"#999999"}} className="text-xs">today</p>
            </div>
          <Chart/>
          <div className="flex flex-row mt-8 justify-between content-center items-center">
                <p className="text-black text-base font-light">Transaction History</p>
                <p style={{color:'#8CB13D'}} className="text-black text-base font-light">view all</p>
          </div>
        
        {/* invest content */}

        {
            numbers.map((num)=>{
                return(
                    <div key={num} className="flex flex-row justify-between content-center items-center mt-8">
                    <div className="flex flex-col sm:flex-row content-center items-center">
                    <img src={investBars} />

                    <div className="ml-5 mt-4 sm:mt-0">
                        <p className="text-black text-xl font-light">John Word</p>
                        <p style={{color:"#999999"}} className="text-sm mt-2">My Catfish Investment</p>
                    </div>
                    </div>

                    <div className="mt-10 sm:mt-0">
                        <p className="text-black font-bold font-light">N320,000</p>
                        <p style={{color:"#999999"}} className="text-sm mt-2">Jun 6, 2020</p>
                    </div>
                </div>
                );
            })
        }
        
        </div>
    )
}
export default  TransactHistory;