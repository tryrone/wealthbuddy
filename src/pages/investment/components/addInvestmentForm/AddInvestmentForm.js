import React,{useState} from 'react';
import DatePicker from 'react-modern-calendar-datepicker';

import {addPhoto,info} from '../../imageLinks';
import {Link} from 'react-router-dom';
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import InvestModal from '../investModal/InvestModal';
import StartDropdown from './StartDropdown';

function AddInvestmentForm() {
        const[modal,changeModal]=useState(false)

       const onclose=(val)=>{
            changeModal(val)
        }

    return (
        <div className="px-4 sm:px-12  flex flex-col fadeIn">
        <div className="flex flex-row justify-between content-center sm:w-3/6 items-center  mb-10 ">
            <p style={{color:"#999999"}} className="text-xs ">Investment</p>
            <p style={{color:"#999999"}} className="text-xs "> {'>>'} </p>
            <p style={{color:"#999999"}} className="text-xs ml-4 sm:ml-1">Add new Investment</p>
            <p style={{color:"#999999"}} className="text-xs"> {'>>'} </p>
            <p className="text-sm text-black">Meristem Equity Market Fund</p>
        </div>
            {/* heading */}
        <p className="text-black font-bold text-2xl text-left">Add new investment</p>
            {/* heading end */}

            <div className="flex flex-col sm:flex-row">
                    {/* column one */}
                <div style={{border:"1px solid #F1F1F1"}} className="card sm:w-1/2 pt-24 pb-56 w-auto mb-20 flex flex-col justify-center content-center mt-6 sm:mr-4">

                    {/* input content */}
                <fieldset className="mb-4 w-full px-6 mx-auto">
                    <label className="block text-xs font-medium">How much do you want to invest?</label>
                    <input
                        className="block w-full mt-2 text-xs p-3 border border-gray-400 rounded"
                        placeholder="Min 20,000"
                        // value={goalName}
                        // onChange={onGoalNameChange}
                        type="text"
                    />
                    {/* showing the amount of interest one would have */}
                    <div className="flex flex-row items-center mt-2 mb-2">
                    <p className="text-xs ">N0.00 </p>
                    <p style={{color:"#999999"}} className="text-xs mx-1"> will give you</p> 
                    <p className="text-xs ">0 units</p>
                    </div>
                    {/* showing the amount of interest one would have */}
                </fieldset>
                    {/* input content end */}

                    {/* input two */}
                    <fieldset className="mb-4 w-full px-6 mx-auto">
                            <label className="block text-xs font-medium">
                            How long would you want to invest
                            </label>
                            <div className="fieldset mt-2 w-full">
                            <StartDropdown/>
                            </div>

                        </fieldset>
                    {/* input two */}

                    {/* input three */}
                    <fieldset className="mb-4 w-full px-6 mx-auto">
                        <label className="block text-xs mb-2 font-medium">
                            When will you like to start saving?
                        </label>
                        <DatePicker
                            // value={selectedDay}
                            // onChange={setSelectedDay}
                            inputPlaceholder="When would you like to start investing?"
                            shouldHighlightWeekends
                            // minimumDate={utils().getToday()}
                            inputClassName="w-full text-xs p-3 border border-gray-400 rounded text-left"
                        />
                        {/* <input className="block w-full text-xs p-3 border border-gray-400 rounded" /> */}
                    </fieldset>
                    {/* input three end */}

                    {/* showing the tenors available for MT_LIP */}
                    <div style={{border:"1px solid #8CB13D", background:"#F9FFEB"}} className="rounded flex flex-col self-center sm:w-8/12 mt-4 p-2 pb-4">
                        <div className="flex flex-row items-center">
                            <img src={info} className="h-5 mr-2 w-5"/>
                            <p style={{color:"#8CB13D"}} className="text-sm font-bold">Available Tenors</p>
                        </div>

                        <div style={{borderLeft:"0.5px dashed #C3D894"}} className="ml-2 pl-2">
                            <div className="flex flex-row items-center mt-4">
                                <div style={{backgroundColor:"#8CB13D",borderRadius:"50%"}} className="h-2 w-2"/>
                                <p className="ml-4 text-xs">31 days tenor plan</p>
                            </div>
                            <div className="flex flex-row items-center mt-4">
                                <div style={{backgroundColor:"#8CB13D",borderRadius:"50%"}} className="h-2 w-2"/>
                                <p className="ml-4 text-xs">72 days tenor plan</p>
                            </div>
                            <div className="flex flex-row items-center mt-4">
                                <div style={{backgroundColor:"#8CB13D",borderRadius:"50%"}} className="h-2 w-2"/>
                                <p className="ml-4 text-xs">180 days tenor plan</p>
                            </div>
                            <div className="flex flex-row items-center mt-4">
                                <div style={{backgroundColor:"#8CB13D",borderRadius:"50%"}} className="h-2 w-2"/>
                                <p className="ml-4 text-xs">270 days tenor plan</p>
                            </div>
                            <div className="flex flex-row items-center mt-4">
                                <div style={{backgroundColor:"#8CB13D",borderRadius:"50%"}} className="h-2 w-2"/>
                                <p className="ml-4 text-xs">320 days tenor plan</p>
                            </div>
                        </div>
                    </div>
                    {/* showing the tenors available for MT_LIP */}


                </div>
                    {/* column one end */}



                    {/* column two */}
                <div style={{border:"1px solid #F1F1F1"}} className="sm:w-1/2 w-auto card sm:w-1/2 pt-24  pb-20  flex flex-col justify-center mt-6 items-center">
                    
                    {/* image setting */}
                        <div className="w-72 shadow-lg p-2">
                        <div className="h-32 w-full p-8 border-dashed border border-gray-400 rounded flex flex-col justify-center items-center"> 
                        {/* image preview content start */}
                 
                                        {/* <input className="fileInput"
                                            type="file"
                                             accept="image/*" /> */}
                                           
                        {/* image preview content end */}
                        <img src={addPhoto} alt=""/>
                        </div>
                        </div> 
                    {/* image setting end */}

                    {/* image text content */}
                      
                    <p className="text-xs mt-10 text-black text-center text-opacity-25">Investment capital</p>

                    <p className="text-black text-lg text-center mt-2 font-bold">₦50,000</p>

                    <div className="flex flex-row justify-between w-full mt-4 px-16 items-center">
                        <p className="text-left text-black text-opacity-25 text-base">Interest rate per year</p>
                        <p className="text-right text-black text-base">12%</p>
                    </div>
                    <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
                        <p className="text-left text-black text-opacity-25 text-base">Start date</p>
                        <p className="text-right text-black text-base">10th Aug, 2020</p>
                    </div>
                    
                    {/* image text content end */} 

                    {/* nav buttons */}
                    <div className="nav-buttons flex justify-center">
                        <Link className="mt-12 w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm">
                            Back
                        </Link>
                        {/* <button className={`mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm ${(checkEmpty(state) === true || status) && "opaque"}`} onClick={(checkEmpty(state) === false && !status) && confirm}> */}
                        <button 
                        onClick={()=>{changeModal(true)}}
                        className={`mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}>
                        Next
                        </button>

                    </div>
                    {/* nav buttons end */}



                </div>
                    {/* column two end */}
            </div>

            {
                modal ?
                <InvestModal myclose={onclose} />
                :
                null
            }
           
        </div>
    )
}

export default  AddInvestmentForm;


