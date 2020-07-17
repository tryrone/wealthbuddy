import React from 'react';
import { notificationIcon, searchIcon } from '../../../assets/exports';
import WealthLogo from "../../../assets/img/wealthBuddy-logo.svg"

const Header =()=> {

    // const handleToggle = () => {        
    //     document.querySelector(".wealth-mobile--nav") = true
    // } 

    return (
        <React.Fragment>
        {/* Desktop Header */}
        <div className="flex justify-between px-12 pb-12 header-wrap items-center">
            <div className="search-field">
                <input className="header-search" type="search" placeholder="Search" />
                <span className="search-header" dangerouslySetInnerHTML={{ __html: searchIcon }}></span>
            </div>
            <div className="notification-icon">
            
                <span className={`notification-icon--inline`} dangerouslySetInnerHTML={{ __html: notificationIcon }}></span>
            </div>
        </div>
        {/* Mobile Header */}
        <div className="flex justify-between px-12 pb-12 header-wrap mobile-header--wrap items-center">
            {/* <div className="wealthbuddy-mobile--logo" onClick={handleToggle}> */}
            <div className="wealthbuddy-mobile--logo" >
                <div className="mobile-hamburger">
                    <div className={`menu hamburger`}>
                        <div className="icon"></div>
                    </div>
                </div>
                <img className="wealth-mobile--icon" src={WealthLogo} alt=""></img>
            </div>
            <div className="notification-icon">
                <span className={`notification-icon--inline`} dangerouslySetInnerHTML={{ __html: notificationIcon }}></span>
            </div>

        </div>
    </React.Fragment>
    )
}

export default Header;