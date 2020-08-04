import React from 'react'

export default function ViewDetails() {
    return (
    
        <div>
        <div
        style={{
            border:"1px solid #F1F1F1"
            }}
            className="card p-2 sm:p-4 flex flex-col w-auto rounded mt-4"
        >   
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

        </div>
       
       
       {/* second part */}
       {/* second part */}
       <div
        style={{
            border:"1px solid #F1F1F1"
            }}
            className="card p-2 sm:p-4 flex flex-col w-auto rounded mt-4"
        >   
             {/* item */}
             <div className="flex flex-row mt-8 content-center justify-between items-center">
            <p className="font-bold text-black text-base sm:text-sm">Capital</p>
            <p className="font-hairline text-right text-black text-base sm:text-sm">N 20,000</p>
            </div>
             
             {/* item */}
             <div className="flex flex-row mt-8 content-center justify-between items-center">
            <p className="font-bold text-black text-base sm:text-sm">Current Value</p>
            <p className="font-hairline text-right text-black text-base sm:text-sm">N 320,000</p>
            </div>
            {/* item */}

             {/* item */}
             <div className="flex flex-row mt-8 content-center justify-between items-center">
            <p className="font-bold text-black text-base sm:text-sm">Interests</p>
            <p className="font-hairline text-right text-black text-base sm:text-sm">N 120,000</p>
            </div>
            {/* item */}

             {/* item */}
             <div className="flex flex-row mt-8 content-center justify-between items-center">
            <p className="font-bold text-black text-base sm:text-sm">Maturity Date</p>
            <p className="font-hairline text-right text-black text-base sm:text-sm">07 Jul 2021</p>
            </div>
            {/* item */}

        </div>
       
       {/* second part */}
       {/* second part */}
       
        </div>
    )
}
