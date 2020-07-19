import React,{useState} from 'react';
import { Route, Switch} from "react-router-dom";
import MobileNav from './components/MobileNav';
import NavBar from './components/NavBar';
import Header from './components/Header';
import DasboardHome from './components/DasboardHome';
import Savings from 'pages/savings';
import Wallet from 'pages/wallet';
import FundWallet from 'pages/wallet/components/fundWallet/FundWallet';
import WithdrawFunds from 'pages/wallet/components/withdrawFunds/WithdrawFunds';


const mobileMenu = false;
const newUser = false;



 function Dashboard() {
    const [mode, setMode] = useState(false);
    const [modeTwo, setTwo] = useState(false);

    
        const showModal =(value)=>{
            setMode(value);
        }
        const showModal2 =(value)=>{
            setTwo(value);
        }

    
    
    return (
        <div className="flex">
            {/* mobile menu start */}
            {mobileMenu ? (<div className="wealth-mobile--nav">
                <MobileNav /> 
            </div>
            ) : null}
        {/* DeskTop Menu */}
            <NavBar />

            <section className={`flex-grow ${newUser === false ? "existing-entry" : "new-user"}`}>
                    <Header />
                    <React.Fragment>
                    <Switch>
                                <Route exact path="/dashboard">
                                    <DasboardHome />
                                </Route>

                                <Route path="/dashboard/savings">
                                    <Savings/>
                                </Route>

                                <Route path={`/dashboard/wallet`}>
                                    <Wallet  show={showModal} show2={showModal2} />
                                </Route>

                                </Switch>
                        
                      
                        {mode ? <FundWallet  show={showModal}/> : null }
                        {modeTwo ? <WithdrawFunds  show2={showModal2} /> : null }
                    </React.Fragment>
                </section>
            
        </div>
    )
}

export default Dashboard;
