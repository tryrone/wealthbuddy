import React, { Fragment, useEffect } from "react";
import AuthModal from "shared-components/authModal/AuthModal";
import CardIcon from "assets/img/cardIcon.png";
import WalletDropdown from "pages/wallet/walletDropdown/WalletDropdown";

const Heading = () => {
  return (
    <div className="flex flex-col items-center mb-0">
      <i className="w-20 mb-4">
        <img src={CardIcon} alt="" />
      </i>
      <h1 className="text-2xl font-medium mb-2">Fund wallet</h1>
      <p className="text-center text-gray-500 leading-normal">
        As simple as investing your savings and we will help you grow from
        there.
      </p>
    </div>
  );
};

const loading = false;
const loginError = false;

const FundWalletModal = (props) => {
  useEffect(() => {
    document.querySelector(".modal").classList.add("modal-active");
    // closeModalOnClick(closeModal)
    // return () => {
    //     document.querySelector(".modal").classList.remove("modal-active")
    // }
  }, []);

  const closeModal = () => {
    props.show(false);
    // return document.querySelector(".modal").classList.remove("modal-active");
  };

  return (
    <div class="modal fixed inset-0 bg-wb-overlay flex justify-center items-center">
      <AuthModal className="login-fieldset">
        <Heading />

        {loading ? (
          <div className="mt-8 flex flex-col items-center">
            {/* <Loading text="Funding Wallet" />  */}
          </div>
        ) : (
          <Fragment>
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
                <label className="block text-xs mb-2">Select Card</label>
                <div className="fieldset">
                  <WalletDropdown title="Select Option" />
                </div>
              </div>
              <div className="nav-buttons flex justify-center">
                <div
                  onClick={closeModal}
                  className=" w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
                >
                  Back
                </div>
                {/* <button className={` w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm ${checkEmpty(state) === true && "opaque"}`} onClick={checkEmpty(state) === false && proceed}> */}
                <button
                  className={` w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm opaque`}
                >
                  Proceed
                </button>
              </div>
            </form>
          </Fragment>
        )}
      </AuthModal>
    </div>
  );
};

export default FundWalletModal;
