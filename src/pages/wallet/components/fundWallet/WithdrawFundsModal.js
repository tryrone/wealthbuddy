import React, { useState, useEffect, Fragment } from "react";
import AuthModal from "../../../../shared-components/authModal/AuthModal";
// import { StateContext } from '../../contextApi';
// import { checkEmpty } from '../../../../utilities';
// import { emptyObject, closeModalOnClick, formatMoney, checkEmpty } from '../../modules/utilities';
import CardIcon from "../../../../assets/img/cardIcon.png";
// import { urls } from '../../modules/network/url';
// import { postCall } from '../../modules/network';
import Loading from "../../../../shared-components/Loading";
// import WalletDropdown from '../dropdowns/walletDropdown';
// import { Link } from "react-router-dom"
// import BankListDropdown from "../withdrawFunds/BankListDropDown";

const Heading = () => {
  // const [{ successModal }] = useContext(StateContext)
  return (
    <div className="flex flex-col items-center mb-0">
      <i className="w-20 mb-4">
        <img src={CardIcon} alt="" />
      </i>
      <h1 className="text-2xl font-medium mb-2">Withdraw from wallet</h1>
      <p className="text-center text-gray-500 leading-normal">
        As simple as investing your savings and we will help you grow from
        there.
      </p>
    </div>
  );
};

const userBanks = [1];
const loading = false;
const loginError = false;

const WithdrawFundsModal = (props) => {
  useEffect(() => {
    document.querySelector(".modal").classList.add("modal-active");
    // closeModalOnClick(closeModal)
    // return () => {
    //     document.querySelector(".modal").classList.remove("modal-active")
    // }
  }, []);

  const closeModal = () => {
    props.show2(false);
    // return document.querySelector(".modal").classList.remove("modal-active");
  };

  // const [{ fundWallet, cardModal, walletCard, fundSavings, userBanks, banks, withdrawFunds }, dispatch] = useContext(StateContext);
  // const [loading, setLoading] = useState(false)
  // const [loginError, setLoginError] = useState(null);
  // const [state, setState] = useState({
  //     amount: '',
  // })

  // const handleChange = e => {
  //     const { name, value } = e.target
  //     setState(prevState => ({
  //         ...prevState,
  //         [name]: value
  //     }))
  // }

  // const proceed = async () => {
  //     setLoading(true);

  //     if (walletCard === "") {
  //         const data = {
  //             amount: parseFloat(state.amount.replace(/(?!\.)\D/g, "")),
  //             saveCard: true
  //         }

  //         const response = await postCall(urls.startFundNewCard, data);

  //         if (typeof response !== "undefined" && response.data.status === true) {

  //             dispatch({
  //                 type: "CHANGE_ADDCARD", newPayload: {
  //                     ...cardModal,
  //                     reference: response.data.data.data.reference
  //                 }
  //             });

  //             dispatch({
  //                 type: "CHANGE_FUND_WALLET", newPayload: {
  //                     ...fundWallet,
  //                     modal: false
  //                 }
  //             });

  //             dispatch({
  //                 type: "CHANGE_PAYSTACK",
  //                 newPayload: {
  //                     modal: true,
  //                     amount: parseFloat(state.amount.replace(/(?!\.)\D/g, ""))
  //                 }
  //             });

  //         } else {
  //             setLoading(false)
  //             setLoginError(response.data.message)
  //         }
  //     } else {
  //         const data = {
  //             amount: parseFloat(state.amount.replace(/(?!\.)\D/g, "")),
  //             customerCardDataID: walletCard,
  //         }

  //         const response = await postCall(urls.fundWalletWithExistingCard, data);

  //         if (typeof response !== "undefined" && response.data.status === true) {

  //             dispatch({
  //                 type: "CHANGE_FUND_WALLET", newPayload: {
  //                     ...fundWallet,
  //                     modal: false
  //                 }
  //             });

  //             dispatch({
  //                 newPayload: {
  //                     status: true,
  //                     subtitle: (<span><span className="font-bold">₦{formatMoney(state.amount.replace(/(?!\.)\D/g, ""))}</span> successfully added to your Wallet.</span>),
  //                     title: "Success",
  //                     button: "Done",
  //                     icon: CardIcon
  //                 },
  //                 type: 'CHANGE_SUCCESS'
  //             });

  //             props.refreshDashboard()

  //         } else {
  //             setLoading(false)
  //             setLoginError(response.data.message)
  //         }
  //     }

  // }

  // const closeModal = () => {
  //     dispatch({
  //         type: "CHANGE_WITHDRAW_FUNDS",
  //         newPayload: {
  //             ...withdrawFunds,
  //             modal: false
  //         }
  //     });
  // }

  // useEffect(() => {
  //     document.querySelector(".modal").classList.add("modal-active");
  //     closeModalOnClick(closeModal)
  //     return () => {
  //         document.querySelector(".modal").classList.remove("modal-active")
  //     }
  // }, [0]);

  // console.log(userBanks, banks)

  return (
    <div class="modal fixed inset-0 bg-wb-overlay flex justify-center items-center">
      <Fragment>
        <AuthModal className="login-fieldset">
          <Heading />

          <React.Fragment>
            {loading ? (
              <div className="mt-8 flex flex-col items-center">
                <Loading text="Funding Wallet" />
              </div>
            ) : (
              <React.Fragment>
                {loginError ? (
                  <div className="w-72 mb-8 text-xs text-left">
                    <p className="w-full p-3 bg-red-200 text-red-700 rounded text-center font-medium">
                      loginError
                    </p>
                  </div>
                ) : (
                  ""
                )}
                <form>
                  <fieldset className="selectFund w-full">
                    <label className="block text-xs mb-2">Amount</label>
                    {/* <input placeholder="eg: 20,000" type="text" name="amount" value={state.amount} onChange={handleChange} className="block w-full text-xs p-3 border border-gray-400 rounded" /> */}
                    <input
                      placeholder="eg: 20,000"
                      type="text"
                      name="amount"
                      className="block w-full text-xs p-3 border border-gray-400 rounded"
                    />
                  </fieldset>
                  <div className="mt-6 w-full">
                    <label className="block text-xs mb-2">Bank</label>

                    <div className="fieldset">
                      {/*<BankListDropdown title="Select Bank" />*/}
                    </div>
                  </div>
                  <div className="nav-buttons flex justify-center">
                    <div
                      onClick={closeModal}
                      className=" w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
                    >
                      Back
                    </div>
                    <button
                      className={` w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm `}
                    >
                      {/* <button className={` w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm ${checkEmpty(state) === true && "opaque"}`} onClick={checkEmpty(state) === false && proceed}> */}
                      Proceed
                    </button>
                  </div>
                </form>
              </React.Fragment>
            )}
          </React.Fragment>
        </AuthModal>
      </Fragment>
    </div>
  );
};

export default WithdrawFundsModal;
