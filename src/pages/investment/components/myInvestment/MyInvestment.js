import React from 'react';
import {corn,catfish,dogs,addBtn} from '../../imageLinks';
import {Link} from 'react-router-dom';


const data=[1,1,1];
export default function MyInvestment() {
    return (
       <div className="flex flex-row flex-wrap  scroll-container ps">
           {
               data.map((item)=>{
                   return(
                    <Link to='/dashboard/investment/view-investment' style={{border:" 1px solid #F1F1F1",borderRadius:"2px"}} className="card px-4 py-4  flex mr-4 flex-col">
                    <div className="flex flex-row content-center items-center">
                        <img src={catfish} className="rounded-sm" style={{height:"78.41px",width:"90.71px"}}/>
                        <p style={{width:"100px"}} className="text-black font-bold text-base ml-2 ">My Catfish Investment</p>
                    </div>
                    
                    <div style={{borderTop:"1px solid #F1F1F1"}} className="flex flex-row mt-2 pt-2 justify-between">

                        <div>
                            <p className="text-black text-sm">Current Value</p>
                            <p className="text-black mt-1 font-bold text-base">N32,000,000</p>
                        </div>

                        <div>
                        <p className="text-black text-sm">Returns</p>
                        <p style={{color:"#8CB13D"}} className="font-bold mt-1 text-right text-base">19%</p>
                        </div>
                    </div>
                </Link>
                   );
               })
           }
           <Link to={`/dashboard/investment/add-invstment`}>
           <div style={{border:"1px solid #F1F1F1",borderRadius:"2px"}} className="card px-12 py-12 flex mr-3 justify-center content-center items-center flex-col">
                <img src={addBtn}/>
                <p className="text-sm text-black mt-3 text-center">Add Investment</p>
           </div>
           </Link>
       </div> 
    )
}
