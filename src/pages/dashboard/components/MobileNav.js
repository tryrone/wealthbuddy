import React from 'react';
import DashboardIcon from '../../../static/dashboard.svg';
import { NavLink } from "react-router-dom"
import SavingsIcon from '../../../static/savings.svg'
import InvestmentIcon from '../../../static/investment.png'
import WalletIcon from '../../../static/wallet.svg'
import SettingsIcon from '../../../static/settings.svg'
import { Logout, legalIcon } from '../../../assets/exports';


const menuItemsModel = [
    {
        name: 'Savings',
        icon: SavingsIcon,
        path: "/dashboard/savings",
        // path: ""
    },
    {
        name: 'Investment',
        icon: InvestmentIcon,
        path: "/dashboard/investment",
        // path: ""
    },
    {
        name: 'Wallet',
        icon: WalletIcon,
        path: "/dashboard/wallet",
        // path: ""
    },
    {
        name: 'Settings',
        icon: SettingsIcon,
        path: "/dashboard/settings",
        // path: ""
    },
]

const NavMenuItems = ({ name, icon, path }) => {
    return (
        <li className=" ">
            <NavLink to={path}  className="flex items-center px-6 py-4" >
                <i className="inline-block w-8 mr-2">
                    <img src={icon} alt="" />
                </i>
                <span className="pr-16">{name}</span>
            </NavLink>
        </li>
    )
}

 const MobileNav=()=> {

   

    // const closeMobileModal = () => {
    //     dispatch({
    //         newPayload: false,
    //         type: "CHANGE_MOBILE_MENU"
    //     })
    // }


    // useEffect(() => {
    //     closeMobileModalOnClick(closeMobileModal)
    // }, [])


    return (
        <nav className="w-72 mobile-nav h-screen flex flex-col bg-wb-primary justify-between items-center py-20">
        <div className="flex flex-col w-full justify-center items-center mb-12 text-white">
            <figure className="flex flex-col justify-center items-center">
                {/* {profile.image !== null ?
                    <img src={profile.image} alt={`Wealth Buddy Investments`} className="mb-3" /> :
                    <div className="user-no--picture mb-4">
                        {`${profile.otherName.charAt(0)}${profile.lastName.charAt(0)}`}
                    </div>
                } */}
                {/* <figcaption className="font-medium text-center">{`${profile.otherName} ${profile.lastName}`}</figcaption> */}
                <figcaption className="font-medium text-center">EP</figcaption>
            </figure>
        </div>
        {/* <ul className={`flex-grow navIcons w-full text-white ${newUser ? "menu-inactive" : ""}`}> */}
        <ul className={`flex-grow navIcons w-full text-white `}>
            <li className="cursor-pointer">
                {/* <NavLink to={`/dashboard`} onClick={closeMobileModal} exact className="flex items-center px-6 py-4" > */}
                <NavLink to="" exact className="flex items-center px-6 py-4" >
                    <i className="inline-block w-8 mr-2">
                        <img src={DashboardIcon} alt="" />
                    </i>
                    <span className="pr-16">{`Dashboard`}</span>
                </NavLink>
            </li>
            {menuItemsModel.map(obj => <NavMenuItems key={obj.name} {...obj} />)}

        </ul>
        <ul className="extra-nav--item mb-5">
            <li className="nav-extra"><span><span dangerouslySetInnerHTML={{ __html: legalIcon }} className="extra-icon"></span>Legal</span></li>
            <li className="nav-extra" ><span><span dangerouslySetInnerHTML={{ __html: Logout }} className="extra-icon"></span>Sign Out</span></li>
        </ul>

    </nav>
    )
}

export default MobileNav;
