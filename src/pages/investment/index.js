import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom"
import InvestHome from "./InvestHome";
import AddInvestment from './components/addInvestments/AddInvestment';
import InvestmentInfo from "./components/investmentInfo/InvestmentInfo";
import AddInvestmentForm from "./components/addInvestmentForm/AddInvestmentForm";
import FundInvestment from "./fundInvestment/FundInvestment";
import ViewInvestment from "./viewAnInvestment/ViewInvestment";
import FundExistingInvestment from "./viewAnInvestment/component/fundExistingInvestment/FundExistingInvestment";
import WithdrawInvestment from "./withdrawInvestment/WithdrawInvestment";
import RollOver from "./rollOverInvestment/RollOver";
import TerminateInvestment from "./terminateInvestment/TerminateInvestment";




const Investment = (props) => {
    const { path } = useRouteMatch();

    return (
        <Switch >
            <Route exact path={`${path}`}>
                <InvestHome  /> 
            </Route> 
            <Route exact path={`/dashboard/investment/add-invstment`}>
                <AddInvestment  /> 
            </Route> 
            <Route exact path={`/dashboard/investment/invest-info`}>
                <InvestmentInfo  /> 
            </Route> 
            <Route exact path={`/dashboard/investment/invest-info/form`}>
                <AddInvestmentForm  /> 
            </Route> 
            <Route exact path={`/dashboard/investment/fund-investment`}>
                <FundInvestment  /> 
            </Route> 
            <Route exact path={`/dashboard/investment/fund-investment/existing`}>
                <FundExistingInvestment  /> 
            </Route> 
            <Route exact path={`/dashboard/investment/view-investment`}>
                <ViewInvestment  /> 
            </Route> 
            <Route exact path={`/dashboard/investment/view-investment/withdraw`}>
                <WithdrawInvestment  /> 
            </Route> 
            <Route exact path={`/dashboard/investment/view-investment/roll-over`}>
                <RollOver /> 
            </Route> 
            <Route exact path={`/dashboard/investment/view-investment/terminate`}>
                <TerminateInvestment /> 
            </Route> 
            {/* <Route path={`${path}/create`}>
                <CreateHome refreshSavings={props.getSavings} />
            </Route> */}
            {/* <Redirect to={`${path}`} /> */}
        </Switch>
    )
}

export default Investment;