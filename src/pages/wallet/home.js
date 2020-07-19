import React from 'react'
// import { StateContext } from '../../../../contextApi'
// import { formatMoney, getDesiredTime } from '../../../../modules/utilities';
import personalSavings from "../../assets/img/personalIcon.png";
// import { addFundIcon } from '../../../../assets/exports';
// import { Link } from "react-router-dom";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import WalletSummary from './summary';
import WalletActions from './walletActions';
import StickyBox from "react-sticky-box";
import EmptyCard from '../../shared-components/empty/empty-card';
// import FundWallet from './components/fundWallet/FundWallet';


const groupArrays = [];
const WalletHome = (props) => {
    
    // const [{ walletTransactions, savings, savingsTransacions }] = useContext(StateContext)
    // const savingsTotal = savings.reduce((total, obj) => obj.amountSaved + total, 0);

    // const groups = walletTransactions.reduce((groups, transactions) => {
    //     const date = transactions.creationDate.split("T")[0];
    //     if (!groups[date]) {
    //         groups[date] = [];
    //     }
    //     groups[date].push(transactions);
    //     return groups;
    // }, {});

    // // Edit: to add it in the array format instead
    // const groupArrays = Object.keys(groups).map((date) => {
    //     return {
    //         date: date,
    //         transactions: groups[date],
    //     };
    // });

    return (
        <div className="px-12 flex flex-col fadeIn">
            <h1 className="text-4xl mb-6 font-medium"> 
                Wallet
            </h1>

            <div className="flex">
                <div className="flex justify-between savings-home--wrap wallet-home--wrap w-full " style={{ display: "flex", alignItems: "flex-start" }}>
                    <StickyBox offsetTop={115} offsetBottom={20} className="w35">
                        <div className=" w-transaction--max  w-full">
                            <div className="flex flex-col">
                                <WalletSummary />
                                <WalletActions show={props.show} show2={props.show2} />
                            </div>
                        </div>
                    </StickyBox> 

                    <div className="w65" style={{zIndex:-1}}>
                        <div className="wallet-wrap">
                            <PerfectScrollbar className="card card-padding w-full">
                                <div className="card-label">
                                    <h1 className="text-4xl mb-6 font-medium card-header">Transaction history</h1>
                                </div>
                                <div className="min-wallet">
                                    {groupArrays.length=== 0 ? 
                                    <EmptyCard title="Nothing to see here yet." message="Find any of your savings plan to and see you your transactions history here."/> : <React.Fragment>
                                    {groupArrays.map((item, key) =>
                                        <React.Fragment key={key}>
                                            <div className="remove-card--padding">
                                                <div className="transaction--heading card-padding transaction-padding">
                                                    <h4 className="transaction-range--header">{item.date}</h4>
                                                </div>
                                                {item.transactions.map((items, key) =>
                                                    <div key={key} className="transaction-body flex justify-between items-center card-padding transaction-padding">
                                                        <div className="left-tran--summary flex align-items-center">
                                                            <div className="trans-image">
                                                                <img src={personalSavings} alt={"Wealth Buddy"} />
                                                            </div>
                                                            <div className="flex flex-col justify-center">
                                                                <p className="tran-single--title mb-1 font-medium">{items.name === null ? "Personal Savings" : items.description}</p>
                                                                {/* <p className="text-sm">{`${getDesiredTime(items.creationDate)} - ${items.action === 2 ? "Fund" : "Withdrawal"}`}</p> */}
                                                                <p className="text-sm">985j</p>
                                                            </div>
                                                        </div>
                                                        <div className="right-tran--summary">
                                                            {/* <h3 className="tran-single--title card-header font-medium">{`₦${formatMoney(items.amount)}`}</h3> */}
                                                            <h3 className="tran-single--title card-header font-medium">{`₦100`}</h3>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </React.Fragment>
                                    )}
                                    </React.Fragment>
                                    }
                                </div>
                            </PerfectScrollbar>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletHome;