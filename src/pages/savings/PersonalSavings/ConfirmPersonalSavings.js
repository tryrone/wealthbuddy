import React,{Fragment} from 'react';
import { logo } from '../../../assets/exports';
import Loading from 'shared-components/Loading';
import { formatMoney, getHumanDate } from '../../../utilities';


const loading = false;
const loginError = false;
const savingsData = true
 const ConfirmPersonalSavings=()=> {
    return (
        <Fragment>
        <div className="page-heading mb-8 flex flex-col fadeIn">
            <h1 className="text-4xl font-medium">Summary</h1>
        </div>
        <div className="flex-grow flex justify-center items-start fadeIn">
            <div className="create-saving--overview overview-full w-full">
                <div className="create-personal--savings w-full flex justify-between">
                    <div className="card overview-card w-full">
                        {loading ? (
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex flex-col justify-center items-center">
                                    <i className="w-10 mb-8" dangerouslySetInnerHTML={{ __html: logo }}>
                                    </i>
                                    <Loading text="Creating your Goal" />
                                </div>

                            </div>
                        ) : (<React.Fragment>

                            {loginError ? (
                                <div className="w-72 mb-8 text-xs text-left">
                                    <p className="w-full p-3 bg-red-200 text-red-700 rounded text-center font-medium">
                                        {loginError}
                                    </p>
                                </div>
                            ) : (
                                    ''
                                )}
                            <div className="summary-heading--wrap flex flex-col items-center ">

                                {/* {savingsData.imagePreviewUrl !== "" ?
                                    <div className="image-wrap">
                                        <img src={savingsData.imagePreviewUrl} alt="image" />
                                    </div> : <div className="image-wrap image-empty flex items-center justify-center">
                                        <img src={UploadIcon} alt="Wealth Buddy" />
                                    </div>
                                } */}

                                <div className="savings-heading text-center">
                                    <h5 className="savings-subtitle">
                                        savingsData.name
                                    </h5>
                                    <h1 className="savings-title mt-2">
                                        {`₦1000`}
                                        {/* {`₦${formatMoney(savingsData.amount.replace(/(?!\.)\D/g, ""))}`} */}
                                    </h1>
                                </div>
                            </div>

                            <div className="savings-summary--items">
                                <div className="savings-inner--item">
                                    <h5 className="savings-inner--subtitle text-gray-300 text-xs">Contribution</h5>
                                    {savingsData === false ?
                                        <h1 className="savings-inner--title mt-3 font-medium">{`₦${formatMoney((savingsData.amount.replace(/(?!\.)\D/g, "") / savingsData.duration))}/${savingsData.frequency === "1" ? "Day" : savingsData.frequency === "2" ? "Week" : savingsData.frequency === "3" ? "Month" : "Day"}`}</h1>
                                        :
                                        <h1 className="savings-inner--title mt-3 font-medium">{`₦68789`}</h1>
                                    }
                                    {/* {savingsData.isFixed === false ?
                                        <h1 className="savings-inner--title mt-3 font-medium">{`₦${formatMoney((savingsData.amount.replace(/(?!\.)\D/g, "") / savingsData.duration))}/${savingsData.frequency === "1" ? "Day" : savingsData.frequency === "2" ? "Week" : savingsData.frequency === "3" ? "Month" : "Day"}`}</h1>
                                        :
                                        <h1 className="savings-inner--title mt-3 font-medium">{`₦${formatMoney(savingsData.amount.replace(/(?!\.)\D/g, ""))}`}</h1>
                                    } */}

                                </div>
                                <div className="savings-inner--item">
                                    <h5 className="savings-inner--subtitle text-gray-300 text-xs">Interest Rate</h5>
                                    <h1 className="savings-inner--title mt-3 font-medium">{`${savingsData ? 0 : 90}%`}</h1>
                                </div>
                                <div className="savings-inner--item">
                                    <h5 className="savings-inner--subtitle text-gray-300 text-xs">Start Date</h5>
                                    {savingsData === false ?
                                        <h1 className="savings-inner--title mt-3 font-medium">7989</h1> :
                                        <h1 className="savings-inner--title mt-3 font-medium">{getHumanDate(new Date())}</h1>
                                    }
                                </div>
                                <div className="savings-inner--item">
                                    <h5 className="savings-inner--subtitle text-gray-300 text-xs">Maturity Date</h5>
                                    {savingsData === false ?
                                        <h1 className="savings-inner--title mt-3 font-medium">903</h1>
                                        :
                                        <h1 className="savings-inner--title mt-3 font-medium">809-</h1>}
                                </div>
                            </div>

                            <div className="nav-buttons flex justify-center">
                                <div className="mt-12 w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm" >
                                    Back
                            </div>

                                <button className="mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm" >
                                    Launch
                            </button>

                            </div>
                        </React.Fragment>)}
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
    )
}
export default ConfirmPersonalSavings;
