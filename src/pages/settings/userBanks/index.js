

import React, {Fragment } from 'react';
// import { Link, useHistory } from "react-router-dom"
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import { StateContext } from '../../../../../contextApi/index';
import EmptyBank from '../../../shared-components/empty/bankEmpty';
import Trash from "../../../assets/img/plus-red.svg"
import Plus from "../../../assets/img/plus.svg"


const UserBanks = (props) => {
    // const [{ profile, addBank, fundSavings, userBanks }, dispatch] = useContext(StateContext);
   
    // const showBank =()=> {
    //     dispatch({
    //         type: "CHANGE_ADD_BANKS",
    //         newPayload: {
    //             ...addBank,
    //             modal: true
    //         }
    //     });
    // }

    const userBanks = [1,1,1];

    return (
        <Fragment>
            {userBanks.length === 0 ?
                <EmptyBank />
                :
                <Fragment>
            
        <div className="user-card--wrap  flex-col">
        <div className="user-card--heading flex justify-between items-center">
            <h3 className="card-main--heading font-medium">Your Debit Cards</h3>
            <div className="plus-wrap" ><img className="plus" src={Plus} alt={`Meristem`}/></div>
            </div>
            <div className="flex justify-between flex-wrap">
            {
                userBanks.map((item, i) =>
                    <div className="single-user--card single-bank" key={i}>
                        <div className="single-card--action flex justify-end">
                            <img src={Trash} alt="Wealth Buddy by Meristem" />
                        </div>
                        <div className="single-card--body flex justify-between color-black">
                           <div className="user-bank--name">{"accountName"}</div>
                        </div>
                        <div className="single-card--excerpt flex justify-between items-center">
                            <div className="flex items-center color-black">
                                <span className="mr-2">{"bankName"}</span>
                               
                            </div>
                            <div className="color-black">
                            <span className="">{"bankAccountNumber"}</span> 
                            </div>
                        </div>
                    </div>
                )
            }
            </div>

        </div>
        </Fragment>
            }
        </Fragment>
    )
}

export default UserBanks;
