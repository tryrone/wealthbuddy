import React from 'react';
import {handCoin,handHouse,handTree,moneyWheels,moneyBag,pigCoin,storeCoin} from '../../imageLinks';
import {Link} from 'react-router-dom';


 const AddInvestment =()=> {
    const data = [
        {
            img:handCoin,
            color:"#CDEBF5",
            textHead:"Meristem Equity Market Fund",
            textRound:"Mutual funds"
        },

        {
            img:handCoin,
            color:"#CDEBF5",
            textHead:"Meristem Money Market Fund",
            textRound:"Mutual funds"
        },

        {
            img:pigCoin,
            color:"#A2E6E0",
            textHead:"Fixed Tip",
            textRound:"Fixed Deposits"
        },
        {
            img:handTree,
            color:"#DCCDF5",
            textHead:"Treasury Bills",
            textRound:"Treasury Bills"
        },

        {
            img:storeCoin,
            color:"#FFDEAD",
            textHead:"MT-LIP(Treasury Bills)",
            textRound:"Treasury Bills"
        },

        {
            img:handTree,
            color:"#DCCDF5",
            textHead:"Dollar Investment Portfolio",
            textRound:"Foreign Currency"
        },
        {
            img:handHouse,
            color:"#B8DDE9",
            textHead:"Real Estate Advantage Portfolio",
            textRound:"REAP"
        },
        {
            img:moneyWheels,
            color:"#F5CDE7",
            textHead:"Bond Investment",
            textRound:"Bonds"
        },
        {
            img:moneyBag,
            color:"#DAFF8A",
            textHead:"Meristem Ethical Earning Portfolio",
            textRound:"Ethical"
        },
    ];
    return (
        <div className="px-12 flex flex-col fadeIn">
            <p className="font-bold text-xl text-black">Add new Investment </p>
            <div style={{border:"1px solid #F1F1F1"}} className="bg-white px-8 mt-8 flex-row flex flex-wrap justify-between py-10 px-2">

                {
                    data.map((items)=>{
                        return(
                            <Link 
                            to={{
                                pathname:"/dashboard/investment/invest-info",
                                testProps:{
                                    name:"hello"
                                }
                            }}
                            // to="/dashboard/investment/invest-info" 
                            > 
                            <div  className="flex card rounded flex-col sm:flex-row  bg-white ">
                        <div style={{background:`${items.color}`}} className="flex justify-center content-center py-6 px-8  items-center">
                            <img src={items.img} style={{height:"50px", width:"50px"}}/>
                        </div>
                        
                        {/* innewr text content */}
                        <div className="py-3 px-3 justify-between flex flex-col sm:flex-row">
                            {/* left content of the inside */}
                            <div>
                            <p style={{width:"200px"}} className="font-bold text-black text-base">{items.textHead}</p>
                            <p className="font-bold text-black mt-5 text-base">N10,000</p>
                            <p className="text-xs ">Minimum Capital</p>
                            </div>
                           <div className="flex justify-between flex-col">
                        <p style={{backgroundColor:`${items.color}`,fontSize:"10px"}} className="py-2 mt-6 mb-4 sm:mb-0 sm:mt-0  text-center rounded-full">{items.textRound}</p>
                                <div>
                                <p style={{color:"#6F8A15"}} className="text-xs font-bold">12.5% per annum</p>
                                <p className="text-base text-black text-right font-hairline">Returns</p>
                                </div>
                           </div>
                        </div>
                    </div>
                    </Link>
                        );
                        
                    
                    })
                }

           
            
            </div>
            
        </div>
    )
}
export default AddInvestment;