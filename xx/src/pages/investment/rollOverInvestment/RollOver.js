import React,{useState} from 'react';
import {addPhoto,dogsBg} from '../imageLinks'
import SuccessModal from '../components/successModal/SuccessModal';
import {Link} from 'react-router-dom';

 function RollOver() {

    const[modal,changeModal]=useState(false);

    const onclose=(val)=>{
        changeModal(val)
    }
    
    return (
        <div className="px-4 sm:px-12  flex flex-col fadeIn">

        <div className="flex flex-row justify-between content-center sm:w-3/6 items-center  mb-10 ">
            <p style={{color:"#999999"}} className="text-xs ">Investment</p>
            <p style={{color:"#999999"}} className="text-xs "> {'>>'} </p>
            <p style={{color:"#999999"}} className="text-xs ml-4 sm:ml-1">Meristem Equity Market Fund</p>
            <p style={{color:"#999999"}} className="text-xs"> {'>>'} </p>
            <p className="text-sm text-black">Roll over investment</p>
        </div>
            {/* heading */}
            <p className="text-black font-bold text-2xl text-left">Roll over investment</p>
            {/* heading end */}

            {/* main content */}
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
                </fieldset>
                {/* input content end */}

                </div>
                {/* column one end */}


                {/* column two */}
                <div style={{border:"1px solid #F1F1F1"}} className="sm:w-1/2 w-auto card sm:w-1/2 pt-24  pb-20  flex flex-col justify-center mt-6 items-center">

               {/* image setting */}
               <div className="w-72 shadow-lg p-2">
                        <div className="h-32 w-full border-dashed border border-gray-400 rounded flex flex-col justify-center items-center"> 
                        {/* image preview content start */}
                 
                                        {/* <input className="fileInput"
                                            type="file"
                                             accept="image/*" /> */}
                                           
                        {/* image preview content end */}
                        <img src={dogsBg} alt="" className="w-full h-full"/>
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
            {/* main content end */}

            {
                modal ?
                <SuccessModal myclose={onclose} text="Your investment has been successfully rolled over" />
                :
                null
            }
        </div>
    )
}

export default RollOver;