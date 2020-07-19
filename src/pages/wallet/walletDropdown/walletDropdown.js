import React, { useState} from "react";



const items = [];
const WalletDropdown = (props) => {

    const [view ,setView] = useState(false);
   
  const clickView = (value)=>{
        setView(!value)
    }
  
    return (
        <React.Fragment>
            <div className="fund-dropdown">
                {/* <div className="select-option" onClick={() => toggleList()}> */}
                <div className="select-option" onClick={()=> clickView(view)} >
                    <div className="buddy-dropdown-title">headerTitle</div>
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
                    {/* {state.items.map((item, i) => (
                        <React.Fragment key={i}>
                            <li className="buddy-dropdown-item" key={"newCard"} onClick={() => selectItem("Add New Card", "", "")}>
                                <p className="dropdown-details">
                                    <span className='dropdown-item--title text-semi-bold'>Add New Card</span>
                                </p>
                            </li>
                            <li className="buddy-dropdown-item" onClick={() => selectItem(item.bank, item.id, state.initialItems)}>
                                <p className="dropdown-details">
                                    <span className='dropdown-item--title text-semi-bold'>{`${item.bank}`}</span>
                                </p>
                            </li>
                        </React.Fragment>
                    ))} */}
                    {items.length === 0 ? (<li className="no-result">No results found</li>) : null}
                </ul>
                : null
            }
        </React.Fragment>
    )

}
export default WalletDropdown;