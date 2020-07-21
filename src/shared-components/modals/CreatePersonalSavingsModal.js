import React,{useEffect} from 'react';
// import { emptyObject, closeModalOnClick, formatMoney, checkEmpty } from '../../utilities';
// import CardIcon from "../../assets/img/cardIcon.png"
import personalSavings from "../../assets/img/personalIcon.png";
import educationIcon from "../../assets/img/educationIcon.svg";
import expensesIcon from "../../assets/img/expensesIcon.svg";
import foodIcon from "../../assets/img/foodIcon.svg";
import homeIcon from "../../assets/img/homeIcon.svg";
import carIcon from "../../assets/img/carIcon.svg";
import emergencyIcon from "../../assets/img/emergencyIcon.svg";
import weddingIcon from "../../assets/img/weddingIcon.svg";
import vacationIcon from "../../assets/img/vacationIcon.svg";
import miscelenousIcon from "../../assets/img/miscelenousIcon.svg";
import businessIcon from "../../assets/img/businessIcon.svg";
// import { urls } from '../../modules/network/url';
// import { postCall } from '../../modules/network';
// import Loading from '../../shared-components/Loading'
// import WalletDropdown from '../dropdowns/walletDropdown';
import { Link } from "react-router-dom"
import { addFundIcon } from '../../assets/exports';
import AuthModal from 'shared-components/authModal/AuthModal';


const options = [
    { id: 1, title: "Education", icon: educationIcon },
    { id: 2, title: "Expenses", icon: expensesIcon },
    { id: 3, title: "Food", icon: foodIcon },
    { id: 4, title: "Emergency", icon: emergencyIcon },
    { id: 5, title: "Home", icon: homeIcon },
    { id: 6, title: "Car", icon: carIcon },
    { id: 7, title: "Business", icon: businessIcon },
    { id: 8, title: "Wedding", icon: weddingIcon },
    { id: 9, title: "Vacation", icon: vacationIcon },
    { id: 10, title: "Miscellaneous", icon: miscelenousIcon }
];


const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#99bf18" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`

 const CreatePersonalSavingsModal=(props)=> {
    useEffect(() => {
        // document.querySelector(".modal").classList.add("modal-active");
        // closeModalOnClick(closeModal)

    }, []);

    const closeModal=()=>{
        return document.querySelector(".modal").classList.remove("modal-active");

    }

    return (
        <div onClick={closeModal}  class="modal fixed inset-0 bg-wb-overlay flex justify-center items-center">

        <AuthModal className="login-fieldset personal-wrap">
            {/* <div className="closeModal" dangerouslySetInnerHTML={{ __html: closeIcon }} onClick={closeModal}></div> */}
            <div className="closeModal" onClick={closeModal}  dangerouslySetInnerHTML={{ __html: closeIcon }} ></div>
            <div className="proceed-personal--wrap flex justify-between">
                <div className="left-side--wrap">
                    <div className="flex justify-between">
                        <div className="personal-inner--icon">
                            <img className="inner-proceed--icon" src={personalSavings} alt={`Wealth Buddy Icon`} />
                        </div>
                        <div className="personal-inner--body">
                            <div className="proceed-heading mb-10">
                                <h1 className="text-2xl font-medium">Personal taget savings</h1>
                                <p className="mt-2 leading-normal">
                                    As simple as investing your savings and we will help you grow from there.
                            </p>
                            </div>
                            <div className="proceed-body">
                                <Link to={{
                                    pathname: '/dashboard/savings/create/personal',
                                    state: { params: { name: "" } }
                                }}
                                // onClick={closeModal} className="card card-label addNewSavings card-padding mb-0 flex justify-center items-center">
                                 className="card card-label addNewSavings card-padding mb-0 flex justify-center items-center">
                                    <div className="flex flex-col items-center text-black">
                                        <span className="" dangerouslySetInnerHTML={{ __html: addFundIcon }}></span>
                                        <h5 className="card-header color-primary mt-3 font-medium ">Customize</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side--wrap">
                    <div className="right-wrap">
                        {options.map((item, index) => (
                            <Link to={{
                                pathname: '/dashboard/savings/create/personal',
                                state: { params: { name: item.title } }
                            // }} onClick={closeModal} className="card flex items-center" key={index}>
                            }} className="card flex items-center" key={index}>
                                <div className="right-image">
                                    <img src={item.icon} alt={`Wealth Buddy ${item.title}`} />
                                </div>
                                <div className="right-items flex h-full flex flex-col items-start justify-center">
                                    <p className="mb-0">{item.title}</p>
                                </div>
                            </Link>

                        ))}
                    </div>
                </div>
            </div>
        </AuthModal>
        </div>
    )
}

export default CreatePersonalSavingsModal;
