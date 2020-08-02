import React, { useState} from "react";



const items = [
    {
    // img:add,
    text:"Add a Card"
    },
    {
    // img:master,
    text:"Mastercard - 0233"
    },
];

 function StartDropdown() {
    const [view ,setView] = useState(false);
    const [itemView, setItem] = useState("Choose date")
   
  const clickView = (value)=>{
        setView(!value)
    }
  
    return (
        <React.Fragment>
        <div className="fund-dropdown">
            {/* <div className="select-option" onClick={() => toggleList()}> */}
            <div className="select-option" onClick={()=> clickView(view)} >
                <div className="buddy-dropdown-title flex text-xs flex-row"> {itemView}</div>
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
                            <div className="flex flex-row w-full justify-between">
                                <div>
                                    <p className="text-base">30 days</p>
                                    <p style={{color:"#999999"}} className="text-xs">10th Aug. 2020</p>
                                </div>
                                <p className="text-base">4%</p>
                            </div>
                        </li>
                    </React.Fragment>
                ))}
                {items.length === 0 ? (<li className="no-result">No results found</li>) : null}
            </ul>
            : null
        }
    </React.Fragment> 
    )
}

export default StartDropdown;
