import React,{useState,Fragment} from 'react';
import {partTerm,fullterm,information} from '../imageLinks';
import TerminateModal from '../components/terminateModal/TerminateModal';

 const TerminateInvestment =()=> {


    const[modal,changeModal]=useState(false);
    const[selectOne,changeSelectOne]=useState(false);
    const[selectTwo,changeSelectTwo]=useState(false);
    const[displayOne,changeDisplayOne]=useState(true);

    const onclose=(val)=>{
         changeModal(val)
     }

       

    return (
        <div className="px-12">
             <div className="flex flex-row justify-between content-center sm:w-2/6 items-center  mb-10 ">
            <p style={{color:"#999999"}} className="text-xs ">Investment</p>
            <p style={{color:"#999999"}} className="text-xs "> {'>>'} </p>
            <p style={{color:"#999999"}} className="text-xs ml-4 sm:ml-1">Corn Feed Investment</p>
            <p style={{color:"#999999"}} className="text-xs"> {'>>'} </p>
            <p className="text-sm text-black">Terminate</p>
        </div>
        
        {/* heading */}
        <p className="text-black font-bold text-2xl text-left">Terminate</p>
        {/* heading end */}


        {/* main body of termination */}
        <div className="flex flex-col sm:flex-row">


                        {/* column one */}
                        {/* column one */}
                        <div style={{border:"1px solid #F1F1F1"}} className="card sm:w-1/2  w-auto pt-20 pb-20 mb-24 flex flex-col justify-center content-center mt-6 sm:mr-4">

                                        
                    {/* optinal buttons to withdraw from */}
                    {/* optinal buttons to withdraw from */}
                    {
                    displayOne ? 
                    <Fragment>
                    <div style={{borderColor: selectOne ? "#8CB13D": "#E6E6E6" ,backgroundColor: selectOne ? "#F9FFEB" : ''}} 
                    onClick={()=> {changeSelectOne(true); changeSelectTwo(false); changeDisplayOne(false)}}
                    className="flex flex-row border cursor-pointer w-8/12 border-solid items-center self-center">
                        <div style={{height:"65px",width:"65px",backgroundColor:"#B8DDE9"}} className="flex mr-6 justify-center items-center">
                    <img src={partTerm} alt="" className=""/> 
                        </div>
                    <p>Part Terminate</p>
                    </div>

                    <div style={{borderColor: selectTwo ? "#8CB13D": "#E6E6E6", backgroundColor: selectTwo ? "#F9FFEB" : ''}} 
                    onClick={()=> { changeSelectOne(false); changeModal(true)}}
                    className="flex flex-row border mt-4 w-8/12 cursor-pointer border-solid items-center self-center">
                        <div style={{height:"65px",width:"65px",backgroundColor:"#B8DDE9"}} className="flex mr-6 justify-center items-center">
                    <img src={fullterm} alt="" className=""/> 
                        </div>
                    <p className="pr-4">Full Terminate</p>
                    </div>
                    </Fragment>
                    : null
                    }
                    {/* optinal buttons to withdraw from end */}
                    {/* optinal buttons to withdraw from end */}
                    

                    {/* if part terminate is clicked display this */}
                    {/* if part terminate is clicked display this */}
                        {
                            !displayOne && selectOne ?
                            <fieldset className="mb-4 w-full px-6 mx-auto">
                            <label className="block text-xs font-medium">How much do you want to withdraw</label>
                            <input
                                className="block w-full mt-2 text-xs p-3 border border-gray-400 rounded"
                                    placeholder="Amount"
                                    // value={goalName}
                                    // onChange={onGoalNameChange}
                                    type="text"
                                />
                            </fieldset>
                            : null
                        }
                    {/* if part terminate  is clicked display this */}
                    {/* if part terminate  is clicked display this */}

                            {/* BUTTONS FOR CONFIRMATION */}
                            {/* BUTTONS FOR CONFIRMATION */}
                    <div className="nav-buttons flex justify-center pl-4 pr-4 ">
                        <button 
                        onClick={()=>{changeDisplayOne(true)}}
                        className="mt-12 w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm">
                            Back
                        </button>
                        {/* <button className={`mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm ${(checkEmpty(state) === true || status) && "opaque"}`} onClick={(checkEmpty(state) === false && !status) && confirm}> */}
                        <button 
                        // onClick={()=>{changeDisplayOne(false)}}
                        onClick={()=>{changeModal(true)}}
                        className={`mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}>
                        Next
                        </button>

                    </div>
                             {/* BUTTONS FOR CONFIRMATION */}
                            {/* BUTTONS FOR CONFIRMATION */}
                    </div>
                        {/* column one end */}
                        {/* column one end */}



                    {/* column two */}
                    {/* column two */}
                    <div className="sm:w-1/2">
                    <div style={{border:"1px solid #F1F1F1"}} className="card  pt-24 sm:pt-8  pb-20  flex flex-col justify-center mt-6 items-center">

                    {/* image setting */}
                        <div className="w-full pb-6 mb-6" style={{borderBottom:"1px solid #F1F1F1"}}>
                            <p className="font-bold text-2xl text-center">
                            Real Estate Advantage Portfolio
                            </p>
                        </div> 
                    {/* image setting end */}
                    

                    {/* terminate right text content */}
                    {/* terminate right text content */}
                    <div className="flex flex-row justify-between w-full mt-4 px-16 items-center">
                        <p className="text-left text-black font-bold text-base">Asset Class</p>
                        <p className="text-right text-black text-base">Fixed Income</p>
                    </div>
                    <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
                        <p className="text-left text-black font-bold  text-base">Type</p>
                        <p className="text-right text-black text-base">Treasury Bill</p>
                    </div>
                    <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
                        <p className="text-left text-black font-bold  text-base">Date issued</p>
                        <p className="text-right text-black text-base">17 Jun 2019</p>
                    </div>
                    <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
                        <p className="text-left text-black font-bold text-base">Maturity Date</p>
                        <p className="text-right text-black text-base">07 Jul 2021</p>
                    </div>
                    <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
                        <p className="text-left text-black font-bold text-base">Tenure</p>
                        <p className="text-right text-black text-base">365 dyas</p>
                    </div>
                    <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
                        <p className="text-left text-black font-bold text-base">Returns</p>
                        <p className="text-right text-black text-base">10.2%</p>
                    </div>
                    <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
                        <p className="text-left text-black font-bold text-base">Minimun Deposit</p>
                        <p className="text-right text-black text-base">N20,000</p>
                    </div>
                    {/* image text content end */} 
                    {/* image text content end */} 
                    </div>

                    {/* notification for termination text */}
                    <div style={{background:"#F9FFEB",border:"1px solid #8CB13D"}} className="flex flex-row rounded content-center py-6 mb-20 px-4 items-center">
                            <img src={information} alt="" className="mr-2" />
                            <p className="text-sm">
                                {
                                    selectOne ?
                                    `Part of your investment would be 
                                    terminated and would be sent 
                                    to you wallet along with your interest,
                                     with 2% penalty fee.`
                                     :
                                    `This investment would be fuly 
                                    terminated and your 
                                    funds would be transfered 
                                    to your wallet along with your 
                                    interest with 20% penalty fee`
                                }
                            
                            </p>
                        </div>
                    {/* notification for termination text  end*/}

                    </div>
                    {/* column two end */}


        </div>
        {/* main body of termination end */}

        {
                modal ?
                <TerminateModal myclose={onclose}  />
                :
                null
            }
        </div>
    )
}

export default TerminateInvestment;
 