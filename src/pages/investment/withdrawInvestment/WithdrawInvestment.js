import React,{useState,useEffect, Fragment} from 'react';
import DatePicker from 'react-modern-calendar-datepicker';
import {addPhoto,dogs,dogsBg,catfish,corn,wallet,creditcard} from '../imageLinks';
import {Link} from 'react-router-dom';
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
// import InvestModal from '../components/investModal/InvestModal';
import SuccessModal from '../components/successModal/SuccessModal';


const items =[
    {text:"GTB - 0179"}
];



export default function WithdrawInvestment() {

    const[modal,changeModal]=useState(false);
    const[selectOne,changeSelectOne]=useState(false);
    const[selectTwo,changeSelectTwo]=useState(false);
    const[displayOne,changeDisplayOne]=useState(true);
    const[picture,setPicture]=useState([]);
    const[displayTwo,changeDisplayTwo]=useState(false);

    const onclose=(val)=>{
         changeModal(val)
     }
     
     const [view ,setView] = useState(false);
     const [itemView, setItem] = useState("Choose bank account")
    
        // onclick of dropdown
        const clickView = (value)=>{
            setView(!value)
        }

        const onDrop =(picture)=> {
            setPicture(picture)
            console.log(picture,"this is the uploaded picture")
        }
        


    return (
        <div className="px-4 sm:px-12  flex flex-col fadeIn">
        <div className="flex flex-row justify-between content-center sm:w-2/6 items-center  mb-10 ">
            <p style={{color:"#999999"}} className="text-xs ">Investment</p>
            <p style={{color:"#999999"}} className="text-xs "> {'>>'} </p>
            <p style={{color:"#999999"}} className="text-xs ml-4 sm:ml-1">Corn Feed Investment</p>
            <p style={{color:"#999999"}} className="text-xs"> {'>>'} </p>
            <p className="text-sm text-black">Withdraw</p>
        </div>
        
        {/* heading */}
        <p className="text-black font-bold text-2xl text-left">Withdraw</p>
        {/* heading end */}

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
                       <img src={wallet} alt="" className=""/> 
                        </div>
                       <p>Withdraw to wallet</p>
                    </div>

                    <div style={{borderColor: selectTwo ? "#8CB13D": "#E6E6E6", backgroundColor: selectTwo ? "#F9FFEB" : ''}} 
                    onClick={()=> {changeSelectTwo(true); changeSelectOne(false); changeDisplayOne(false)}}
                    className="flex flex-row border mt-4 w-8/12 cursor-pointer border-solid items-center self-center">
                        <div style={{height:"65px",width:"65px",backgroundColor:"#B8DDE9"}} className="flex mr-6 justify-center items-center">
                       <img src={creditcard} alt="" className=""/> 
                        </div>
                       <p className="pr-4">Withdraw to bank account</p>
                    </div>
                    </Fragment>
                     : null
                    }
                    {/* optinal buttons to withdraw from end */}
                    {/* optinal buttons to withdraw from end */}
                       
                       {/* if withdraw to bank is clicked display this */}
                       {/* if withdraw to bank is clicked display this */}
                       {
                           !displayOne && selectTwo ?
                           <Fragment>
                        <fieldset className="mb-4 w-full px-6 mx-auto">
                            <label className="block text-xs font-medium">How much do you want to withdraw</label>
                            <input
                                className="block w-full mt-2 text-xs p-3 border border-gray-400 rounded"
                                placeholder="How much do you want to withdraw"
                                // value={goalName}
                                // onChange={onGoalNameChange}
                                type="text"
                            />
                        </fieldset>

                        {/* dropdown for bank */}
                        {/* dropdown for bank */}
                        <fieldset className="mb-4 w-full px-6 mx-auto">
                            <label className="block text-xs font-medium">
                            Choose bank account
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
                                                    <div className="ml-4 self-center">
                                                        <p className="text-sm font-medium text-black">{item.text}</p>
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
                        {/* dropdown for bank */}
                        {/* dropdown for bank */}
                           </Fragment>
                           : null
                       }
                       {/* if withdraw to bank is clicked display this */}
                       {/* if withdraw to bank is clicked display this */}


                       {/* if withdraw to wallet is clicked display this */}
                       {/* if withdraw to wallet is clicked display this */}
                        {
                            !displayOne && selectOne ?
                            <fieldset className="mb-4 w-full px-6 mx-auto">
                            <label className="block text-xs font-medium">How much do you want to withdraw</label>
                            <input
                                className="block w-full mt-2 text-xs p-3 border border-gray-400 rounded"
                                placeholder="How much do you want to withdraw"
                                    // value={goalName}
                                    // onChange={onGoalNameChange}
                                    type="text"
                                />
                            </fieldset>
                            : null
                        }
                       {/* if withdraw to wallet is clicked display this */}
                       {/* if withdraw to wallet is clicked display this */}
                
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
                
                </div>
                    {/* column one end */}
                    {/* column one end */}
 


                    {/* column two */}
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
                    {/* image setting end */}

                    {/* image text content */}
                    {/* image text content */}
                    <p className="text-xl font-bold mb-10 mt-10 text-black text-center">Foreign dog breed investment</p>

                    {/* <p className="text-black text-lg text-center mt-2 font-bold">₦50,000</p> */}

                    <div className="flex flex-row justify-between w-full mt-4 px-16 items-center">
                        <p className="text-left text-black text-opacity-25 text-base">Capital</p>
                        <p className="text-right text-black text-base">₦ 10,000</p>
                    </div>
                    <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
                        <p className="text-left text-black text-opacity-25 text-base">Current value</p>
                        <p className="text-right text-black text-base">₦ 73,240</p>
                    </div>
                    <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
                        <p className="text-left text-black text-opacity-25 text-base">Interests</p>
                        <p className="text-right text-black text-base">N 120,000</p>
                    </div>
                    <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
                        <p className="text-left text-black text-opacity-25 text-base">Maturity Date</p>
                        <p className="text-right text-black text-base">07 Jul 2021</p>
                    </div>
                    {/* image text content end */} 
                    {/* image text content end */} 


                    {/* nav buttons */}
                    
                    {/* nav buttons end */}



                </div>
                    {/* column two end */}
            </div>
        
        
            {
                modal ?
                <SuccessModal myclose={onclose} text="Your withdrawal is being processed and should get to you soon." />
                :
                null
            }
           
        </div>
    )
}
