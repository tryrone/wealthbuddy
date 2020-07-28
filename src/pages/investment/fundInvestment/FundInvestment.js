import React,{useState} from 'react';
import DatePicker from 'react-modern-calendar-datepicker';

import {addPhoto,dogs,catfish,corn} from '../imageLinks';
import {Link} from 'react-router-dom';
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import InvestModal from '../components/investModal/InvestModal';


// items of dropdownlist
// items of dropdownlist
const items = [
    {
    img:dogs,
    text:"Foreign dog breed investment"
    },
    {
    img:catfish,
    text:"My catfish investment"
    },
    {
    img:corn,
    text:"Investment in corn feed"
    },
];
// items of dropdownlist
// items of dropdownlist



export default function FundInvestment() {
    const[modal,changeModal]=useState(false)

    const onclose=(val)=>{
         changeModal(val)
     }
     
     const [view ,setView] = useState(false);
     const [itemView, setItem] = useState("Investment name")
    
        // onclick of dropdown
        // onclick of dropdown
        const clickView = (value)=>{
            setView(!value)
        }
        // onclick of dropdown
        // onclick of dropdown
    
  
    return (
        <div className="px-4 sm:px-12  flex flex-col fadeIn">
        
            {/* heading */}
        <p className="text-black font-bold text-2xl text-left">Fund Investment</p>
            {/* heading end */}

            <div className="flex flex-col sm:flex-row">
                    {/* column one */}
                <div style={{border:"1px solid #F1F1F1"}} className="card sm:w-1/2 pt-24 pb-56 w-auto mb-20 flex flex-col justify-center content-center mt-6 sm:mr-4">

                    {/* input content */}
                    {/* input content */}
                <fieldset className="mb-4 w-full px-6 mx-auto">
                    <label className="block text-xs font-medium">How much do you want to add to your investment?</label>
                    <input
                        className="block w-full mt-2 text-xs p-3 border border-gray-400 rounded"
                        placeholder="How much do you want to invest?"
                        // value={goalName}
                        // onChange={onGoalNameChange}
                        type="text"
                    />
                </fieldset>
                    {/* input content end */}
                    {/* input content end */}

                    {/* input two */}
                    {/* input two */}
                    <fieldset className="mb-4 w-full px-6 mx-auto">
                            <label className="block text-xs font-medium">
                            Choose investment
                            </label>
                            
                            {/* dropsown for list of investments */}
                            {/* dropsown for list of investments */}
                            <div className="fieldset w-11/12 mt-2 w-full">
                            <React.Fragment>
                             <div className="fund-dropdown">
                        {/* <div className="select-option" onClick={() => toggleList()}> */}
                        <div className="select-option" onClick={()=> clickView(view)} >
                            <div className="buddy-dropdown-title flex flex-row"> {itemView}</div>
                            <div className="buddy-dropdown-icon" dangerouslySetInnerHTML={{
                                __html: '<svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7L13.9282 0.25H0.0717969L7 7Z" fill="black"/></svg>'
                            }
                            }></div>
                        </div>
                    </div>
                            {/* listOpen && */}
                            {
                            view ?
                            <ul className="buddy-dropdown-list basic-dropdown" >
                                {/* <ul className="buddy-dropdown-list basic-dropdown" onClick={e => e.stopPropagation()}> */}
                                {items.map((item, i) => (
                                    <React.Fragment key={i}>
                                        <li className="buddy-dropdown-item flex hover:bg-gray-100 flex-row items-center" onClick={()=>{setItem(`${item.text}`)}} key={"newCard"}>
                                                {/* <img src={item.img} alt="" /> */}
                                                <div className="flex flex-col sm:flex-row justify-center mt-4">
                                                    <img src={item.img} alt=""  className="rounded sm:h-12 sm:w-12  self-center"/>
                                                    <div className="ml-4 self-center">
                                                        <p className="text-sm font-medium text-black">{item.text}</p>
                                                        <p style={{color:"#8CB13D"}} className="text-sm font-medium">10% returns</p>
                                                    </div>
                                                </div>
                                        </li>
                                    </React.Fragment>
                                ))}
                                {items.length === 0 ? (<li className="no-result">No results found</li>) : null}
                            </ul>
                            : null
                        }
                    </React.Fragment>
                        </div>
                            {/* dropsown for list of investments */}
                            {/* dropsown for list of investments */}
                             </fieldset>
                    {/* input two */}
                    {/* input two */}


                    {/* input three */}
                    {/* input three */}
                    <div className="flex flex-col sm:flex-row justify-center mt-4">
                        <img src={dogs} alt=""  className="rounded sm:h-12 sm:w-12 self-center"/>
                        <div className="ml-4">
                            <p className="text-lg font-medium text-black">Foreign dog breed investment</p>
                            <p style={{color:"#8CB13D"}} className="text-lg font-medium">10% returns</p>
                        </div>
                    </div>
                    {/* input three */}
                    {/* input three */}

                        </div>
                    {/* column one end */}
                    {/* column one end */}

                    {/* column two */}
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
                    {/* image setting end */}

                    {/* image text content */}
                    {/* image text content */}
                    <p className="text-xl font-bold mb-10 mt-10 text-black text-center">Foreign dog breed investment</p>

                    {/* <p className="text-black text-lg text-center mt-2 font-bold">₦50,000</p> */}

                    <div className="flex flex-row justify-between w-full mt-4 px-16 items-center">
                        <p className="text-left text-black text-opacity-25 text-base">Top up value</p>
                        <p className="text-right text-black text-base">₦ 10,000</p>
                    </div>
                    <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
                        <p className="text-left text-black text-opacity-25 text-base">Current value</p>
                        <p className="text-right text-black text-base">₦ 73,240</p>
                    </div>
                    <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
                        <p className="text-left text-black text-opacity-25 text-base">Interest rate per year</p>
                        <p className="text-right text-black text-base">12%</p>
                    </div>
                    {/* image text content end */} 
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
