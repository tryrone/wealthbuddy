import React,{Fragment} from 'react';
// import AutomateIcon from "../../../../../../assets/img/automate.svg";
// import UploadIcon from "../../../assets/img/uploadIcon.svg";
import { Link } from "react-router-dom";
// import { formatMoney, checkEmpty, daysBetweenDates } from '../../../utilities';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker, { utils } from 'react-modern-calendar-datepicker';
// import formatISO from 'date-fns/formatISO';
import NumberFormat from 'react-number-format';



// const selectOption = [
//     {
//         title: "Daily",
//         value: "1"
//     },
//     {
//         title: "Weekly",
//         value: "2"
//     },
//     {
//         title: "Monthly",
//         value: "3"
//     }
// ]

 const CreateFixedFlexibleSavings =()=> {
    return (
        <Fragment>
        <div className="page-heading mb-8 flex flex-col fadeIn">
            <h1 className="text-4xl font-medium">
                Fixed Flexible Savings</h1>
        </div>

        <div className="flex-grow flex justify-center items-start fadeIn">
            <div className="create-saving--overview overview-full w-full">
                <div className="create-personal--savings w-full flex justify-between">
                    <div className="card create-card">
                        <form className="pb-24">

                            <fieldset className="mb-5">
                                <label className="block text-xs mb-2">What do you want to save for?</label>
                                {/* <input placeholder="eg: House Rent" type="text" name="name" value={state.name} onChange={handleChange} className="block w-full text-xs p-3 border border-gray-400 rounded" /> */}
                                <input placeholder="eg: House Rent" type="text" name="name" className="block w-full text-xs p-3 border border-gray-400 rounded" />
                            </fieldset>
                            <fieldset className="mb-5">
                                <label className="block text-xs mb-2">How much do you want to save?</label>
                                {/* <NumberFormat className="block w-full text-xs p-3 border border-gray-400 rounded" thousandSeparator={true} placeholder="Enter Amount" type='tel' name="amount" value={state.amount} onChange={handleChange} /> */}
                                <NumberFormat className="block w-full text-xs p-3 border border-gray-400 rounded" thousandSeparator={true} placeholder="Enter Amount" type='tel' name="amount"  />
                                {/* {amountError !== null &&
                                    <p className="label-error--text mt-3 text-xs color-red font-medium text-center bg-red-200">{amountError}</p>
                                } */}
                             
                                    <p className="label-error--text mt-3 text-xs color-red font-medium text-center bg-red-200">amountError</p>
                                
                            </fieldset >
                            <fieldset className="mb-5">
                                <label className="block text-xs mb-2">When will you like this it mature?</label>
                                <DatePicker
                                    // value={selectedDay}
                                    // onChange={setSelectedDay}
                                    inputPlaceholder="Select Maturity Date"
                                    shouldHighlightWeekends minimumDate={utils().getToday()}
                                    inputClassName="w-full text-xs p-3 border border-gray-400 rounded text-left"
                                />
                                {/* {parseInt(maturity) < 30 &&
                                    <p className="label-error--text mt-3 text-xs color-red font-medium text-center bg-red-200 mb-5">You can only save for a minimum of 30 Days</p>
                                } */}
                                {/* {parseInt(maturity) < 30 && */}
                                    <p className="label-error--text mt-3 text-xs color-red font-medium text-center bg-red-200 mb-5">You can only save for a minimum of 30 Days</p>
                                {/* } */}
                            </fieldset>


                            <div className="personalize--card">
                                <div className="previewComponent">
                                    <input className="fileInput"
                                        type="file"
                                        // onChange={(e) => handleImageChange(e)} accept="image/*" 
                                        />
                                    {/* <div className={`${files.imagePreviewUrl === "" && "drop"} imgPreview`} > */}
                                    <div className={` imgPreview`} >
                                        imagePreview
                                    </div>
                                </div>
                                {/* {$imageText} */}
                                imageText
                            </div>
                        </form>

                    </div>
                    <div className="card create-card flex flex-col justify-between">
                        <div className="contribution-wrap flex flex-col">
                            <div className="contribution--summary">
                                <div className="border-b flex justify-between items-center">
                                    <p className="contri-title w-1/2">Interest Rate Per Year</p>
                                    {/* <p className="contri-result font-medium w-1/2 text-right">{`${!interest.applyInterest ? 0 : interestRate}%`}</p> */}
                                    <p className="contri-result font-medium w-1/2 text-right">{`20%`}</p>
                                </div>
                                {/* <div className="border-b flex justify-between">
                                    <p className="contri-title w-1/2">Upfront Interest</p>
                                    <p className="contri-result font-medium w-1/2 text-right">20%</p>
                                </div> */}
                                <div className="receive-update flex items-center justify-between">
                                    <p className="text-xs">Will you like to get interests?</p>
                                    <div className="pretty p-switch p-fill ">
                                            <input type="checkbox" name="applyInterest" defaultChecked={true}/> 
                                            {/* <input type="checkbox" name="applyInterest" defaultChecked={true} onChange={handleCheckBox} /> : */}
                                        {/* {typeof savingsData.applyInterest === "undefined" ?
                                            <input type="checkbox" name="applyInterest" defaultChecked={true} onChange={handleCheckBox} /> :
                                            <input type="checkbox" name="applyInterest" 
                                            defaultChecked={savingsData.applyInterest} onChange={handleCheckBox} />} */}
                                        <div className="state">
                                            <label></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nav-buttons flex justify-center">
                            <Link to="/dashboard/savings/create" className="mt-12 w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm">
                                Back
                            </Link>
                            {/* <button className={`mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm ${(checkEmpty(state) === true || status) && "opaque"}`} onClick={(checkEmpty(state) === false && !status) && confirm}> */}
                            <button className={`mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm  opaque`}>
                                Next
                             </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
    )
}
export default CreateFixedFlexibleSavings;
