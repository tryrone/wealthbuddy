import React, { Fragment, useContext } from "react";
import WalletSummary from "./components/WalletSummary";
import WalletActions from "./components/WalletActions";
import StickyBox from "react-sticky-box";
import TransactionHistory from "./components/TransactionHistory";

const WalletHome = () => (
  <Fragment>
    <div className="px-12 flex flex-col fadeIn">
      <h1 className="text-4xl mb-6 font-medium">Wallet</h1>
      <div className="flex">
        <div className="flex justify-between savings-home--wrap wallet-home--wrap w-full">
          <StickyBox offsetTop={115} offsetBottom={20} className="w35">
            <div className=" w-transaction--max  w-full">
              <div className="flex flex-col">
                <WalletSummary />
                <WalletActions />
              </div>
            </div>
          </StickyBox>

          <div className="w65">
            <TransactionHistory />
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default WalletHome;
