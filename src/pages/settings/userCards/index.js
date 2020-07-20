import React, {Fragment } from 'react';
// import { Link, useHistory } from "react-router-dom"
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker, { utils } from 'react-modern-calendar-datepicker';
// import { StateContext } from '../../../../../contextApi/index';
// import NumberFormat from 'react-number-format';
import Trash from "../../../assets/img/trash.svg"
import Mastercard from "../../../assets/img/mastercard.svg"
// import Visa from "../../../../../assets/img/visa.svg"
// import Verve from "../../../../../assets/img/verve.svg"
import Plus from "../../../assets/img/plus.svg"
import { cardDot } from '../../../assets/exports';

const UserCards = (props) => {
    // const [{ profile, fundSavings, cardModal }, dispatch] = useContext(StateContext);
    // console.log(fundSavings.cards)

    const n = 4; // Or something else


    // const showCard = () => {
    //     console.log("Hello")
    //     dispatch({
    //         type: "CHANGE_ADDCARD",
    //         newPayload: {
    //             ...cardModal,
    //             status: true
    //         }

    //     })
    // }

    const fundSavings={
        cards:[1,1]
    }
    return (

        <Fragment>

            <div className="user-card--wrap flex-col fadeIn">
                <div className="user-card--heading flex justify-between items-center">
                    <h3 className="card-main--heading font-medium">Your Debit Cards</h3>
                    <div className="plus-wrap"><img className="plus" src={Plus} alt={`Meristem`} /></div>
                </div>
                <div className="flex justify-between flex-wrap">
                    {
                        fundSavings.cards.map((item, i) =>
                            <div className="single-user--card" key={i}>
                                <div className="single-card--action flex justify-end">
                                    <img src={Trash} alt="Wealth Buddy by Meristem" />
                                </div>
                                <div className="single-card--body flex justify-between text-white">
                                    <div className="single-card--details flex">
                                        {[...Array(n)].map((e, i) => <span className="single-dot" key={i} dangerouslySetInnerHTML={{ __html: cardDot }}></span>)}
                                    </div>
                                    <div className="single-card--details flex">
                                        {[...Array(n)].map((e, i) => <span className="single-dot" key={i} dangerouslySetInnerHTML={{ __html: cardDot }}></span>)}
                                    </div>
                                    <div className="single-card--details flex">
                                        {[...Array(n)].map((e, i) => <span className="single-dot" key={i} dangerouslySetInnerHTML={{ __html: cardDot }}></span>)}
                                    </div>
                                    <div className="single-card--details">
                                        {3234}
                                    </div>
                                </div>
                                <div className="single-card--excerpt flex justify-between items-center">
                                    <div className="flex items-center font-medium text-white">
                                        <span className="mr-2">EXPIRES</span>
                                        <span>04/2021</span>
                                    </div>
                                    <div className="text-white">
                                        <img src={ Mastercard} alt={`Meristem Wealth Buddy Cards`} />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </Fragment>
    )
}

export default UserCards;
