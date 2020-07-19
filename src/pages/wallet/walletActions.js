// import React, { useContext } from 'react'
import React,{ Fragment} from 'react'
import { addFundIcon, arrowRight } from '../../assets/exports';

const WalletActions = (props) => {

    const modesAl =()=>{
        props.show(true)
    }
    const modesTwo =()=>{
        props.show2(true)
        // console.log(props.show2)
    }

    return (
        <Fragment>
        <div className="wallet-action--wrap">
            <div onClick={()=>{modesAl()}} className="wallet-action flex items-center card justify-between">
            {/* <div className="wallet-action flex items-center card justify-between" onClick={showFundWallet}> */}
                <div className="flex items-center ">
                    <span className="wallet-action--icon icon-positive" dangerouslySetInnerHTML={{ __html: addFundIcon }}></span>
                    <span className="wallet-action--text">Fund Wallet</span>
                </div>
                <div className="arrow-right" dangerouslySetInnerHTML={{ __html: arrowRight }}></div>
            </div>
            {/* <div className="wallet-action flex items-center card justify-between" onClick={showWithdrawFunds}> */}
            <div onClick={()=>{modesTwo()}} className="wallet-action flex items-center card justify-between" >
                <div  className="flex items-center">
                    <span className="wallet-action--icon icon-dark" dangerouslySetInnerHTML={{ __html: addFundIcon }}></span>
                    <span className="wallet-action--text">Withdraw Funds</span>
                </div>
                <div className="arrow-right" dangerouslySetInnerHTML={{ __html: arrowRight }}></div>
            </div>
        </div>
        </Fragment>
    )
} 

export default WalletActions;
