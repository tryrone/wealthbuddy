import React,{Fragment} from 'react';
import NumberFormat from 'react-number-format';
import {Link} from 'react-router-dom';
import DatePicker, { utils } from 'react-modern-calendar-datepicker';


const amountError = null;

const selectOption = [
    {
        title: "Daily",
        value: "1"
    },
    {
        title: "Weekly",
        value: "2"
    },
    {
        title: "Monthly",
        value: "3"
    }
]

const CreatePersonalSavings =()=> {
    return (
        <Fragment>
        <div className="page-heading mb-8 flex flex-col fadeIn">
            <h1 className="text-4xl font-medium">
                Personal savings
         </h1>
        </div>
        <div className="flex-grow flex justify-center items-start fadeIn">
            <div className="create-saving--overview overview-full w-full">
                <div className="create-personal--savings w-full flex justify-between">
                    <div className="card create-card p-0">
                        <form className="create-card w-full">
                            <fieldset className="mb-6">
                                <label className="block text-xs mb-3">Goal name</label>
                               
                                    <input placeholder="Enter Goal Name" type="text" name="name"  className="block w-full text-xs p-3 readOnly border border-gray-400 rounded" readOnly />
                                    
                                {/* {history.location.state.params.name !== "" ?
                                    <input placeholder="Enter Goal Name" type="text" name="name" value={state.name} onChange={handleChange} className="block w-full text-xs p-3 readOnly border border-gray-400 rounded" readOnly />
                                    :
                                    <input placeholder="Enter Goal Name" type="text" name="name" value={state.name} onChange={handleChange} className="block w-full text-xs p-3 border border-gray-400 rounded" />
                                } */}


                            </fieldset>

                            <fieldset className="mb-6">
                                <label className="block text-xs mb-3">How much do you want to save?</label>
                                <NumberFormat className="block w-full text-xs p-3 border border-gray-400 rounded" thousandSeparator={true} placeholder="Enter Amount" type='tel' name="amount" value="100000000"  />
                                {/* {amountError !== null &&
                                    <p className="label-error--text mt-3 text-xs color-red font-medium text-center bg-red-200">{amountError}</p>
                                } */}
                                {amountError !== null &&
                                    <p className="label-error--text mt-3 text-xs color-red font-medium text-center bg-red-200">{amountError}</p>
                                }
                            </fieldset >
                            <fieldset className="mb-6">
                                <label className="block text-xs mb-3">How often do you want to save?</label>
                                <select name="frequency"  className="block w-full text-xs p-3 border border-gray-400 rounded">
                                    <option value="" disabled>eg. Monthly</option>
                                    {selectOption.map((select, key) => (
                                        <option key={key} value={select.value} >
                                            {select.title}
                                        </option>
                                    ))
                                    }
                                </select>
                            </fieldset>

                            <fieldset className="mb-6">
                                <label className="block text-xs mb-3">When do you want to start?</label>
                                <DatePicker
                                    
                                   
                                    inputPlaceholder="Select Start Date"
                                    shouldHighlightWeekends minimumDate={utils().getToday()}
                                    inputClassName="w-full text-xs p-3 border border-gray-400 rounded text-left"
                                />
                            </fieldset>

                            <fieldset className="mb-6">
                                <label className="block text-xs mb-3">How long do you want to save for?</label>
                                <div className="amount-wrap">
                                    <NumberFormat placeholder={`E.g 30 `} type="tel" autoComplete="off" name="duration"  className="block w-full text-xs p-3 border border-gray-400 rounded" />
                                    {/* <NumberFormat placeholder={`E.g 30 ${state.frequency === "1" ? "Days" : state.frequency === "2" ? "Weeks" : state.frequency === "3" ? "Months" : "Days"}`} type="tel" autoComplete="off" name="duration" value={state.duration} onChange={handleChange} className="block w-full text-xs p-3 border border-gray-400 rounded" /> */}
                                    <span className="frequency-title">nkdjnd</span>
                                    {/* <span className="frequency-title">{state.frequency === "1" ? `Day${parseInt(state.duration) > 1 ? "s" : ""}` : state.frequency === "2" ? `Week${parseInt(state.duration) > 1 ? "s" : ""}` : state.frequency === "3" ? `Month${parseInt(state.duration) > 1 ? "s" : ""}` : `Day${parseInt(state.duration) > 1 ? "s" : ""}`}</span> */}
                                </div>
                                {/* {((state.frequency === "" || state.frequency === "1") && parseInt(state.duration) < 30) ?
                                    <p className="label-error--text mt-3 text-xs color-red font-medium text-center bg-red-200">You can only save for a minimum of 30 Days</p> :
                                    (state.frequency === "2" && parseInt(state.duration) < 4) ? <p className="label-error--text mt-3 text-xs color-red font-medium text-center bg-red-200">You can only save for a minimum of 4 Weeks</p>
                                        :
                                        (state.frequency === "3" && parseInt(state.duration) < 1) && <p className="label-error--text mt-3 text-xs color-red font-medium text-center bg-red-200">You can only save for a minimum of 1 Month</p>
                                } */}
                               
                                    <p className="label-error--text mt-3 text-xs color-red font-medium text-center bg-red-200">You can only save for a minimum of 30 Days</p> 
                            </fieldset>



                        </form>

                        <div className="saving-summary  flex justify-center flex-col items-center pt-10 pb-10 has-summary--bg">

                            <p className="text-xs mb-2 text-center text-faded">Contribution</p>
                            {/* <h1 className="font-medium text-2xl"><span>{`₦146568`}</span> /<span>{`${state.duration} ${state.frequency === "1" ? `Day${parseInt(state.duration) > 1 ? "s" : ""}` : state.frequency === "2" ? `Week${parseInt(state.duration) > 1 ? "s" : ""}` : state.frequency === "3" ? `Month${parseInt(state.duration) > 1 ? "s" : ""}` : `Day${parseInt(state.duration) > 1 ? "s" : ""}`}`}</span></h1> */}
                            <h1 className="font-medium text-2xl"><span>{`₦146568`}</span> /<span>jdnckljnv</span></h1>

                        </div>

                    </div>
                    <div className="card create-card flex flex-col justify-between">
                        <div>
                            {/* <div className="personalize--card mb-5">
                                <div className="previewComponent">
                                    <input className="fileInput"
                                        type="file"
                                        accept="image/*" />
                                    <div className={`${files.imagePreviewUrl === "" && "drop"} imgPreview`} >
                                        {$imagePreview}
                                    </div>
                                </div>
                                {$imageText}
                            </div> */}
                            <div className="image-footer mt-12 ">
                                <div className="flex items-center justify-between pb-6">
                                    <div className="confirm-automation flex items-center">
                                        <p className="text-black">Interest Rate Per Year</p>
                                    </div>
                                    <p className="text-black font-medium">{`$20%`}</p>
                                </div>
                                <div className="flex items-center justify-between pt-6">
                                    <div className="confirm-automation flex items-center">
                                        <p className="text-black">Will you like to receive interests?</p>
                                    </div>
                                    {/* <div className="pretty p-switch p-fill ">
                                        {typeof savingsData.applyInterest === "undefined" ?
                                            <input type="checkbox" name="applyInterest" defaultChecked={true} onChange={handleCheckBox} /> :
                                            <input type="checkbox" name="applyInterest" defaultChecked={savingsData.applyInterest} onChange={handleCheckBox} />}
                                        <div className="state">
                                            <label></label>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <div className="nav-buttons flex justify-center">
                            <Link to="/dashboard/savings/create" className="mt-12 w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm">
                                Back
                            </Link>
                            <button className={`mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm `}>
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

export default CreatePersonalSavings;
