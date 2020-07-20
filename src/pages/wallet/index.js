import React, { Fragment } from "react";
import WalletSummary from "./components/WalletSummary";
import WalletActions from "./components/WalletActions";
import StickyBox from "react-sticky-box";
import { connect } from "react-redux";
import TransactionHistory from "./components/TransactionHistory";

const Wallet = ({ dashboard, ...props }) => {
  return (
    <Fragment>
      <div className="px-12 flex flex-col fadeIn">
        <h1 className="text-4xl mb-6 font-medium">Wallet</h1>

        <div className="flex">
          <div className="flex justify-between savings-home--wrap wallet-home--wrap w-full">
            <StickyBox offsetTop={115} offsetBottom={20} className="w35">
              <div className=" w-transaction--max  w-full">
                <div className="flex flex-col">
                  <WalletSummary />
                  <WalletActions show={props.show} show2={props.show2} />
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
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard.data,
});

export default connect(mapStateToProps)(Wallet);
