import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom"
import InvestHome from "./InvestHome";
import AddInvestment from './components/addInvestments/AddInvestment';
import InvestmentInfo from "./components/investmentInfo/InvestmentInfo";
import AddInvestmentForm from "./components/addInvestmentForm/AddInvestmentForm";
import FundInvestment from "./fundInvestment/FundInvestment";
import ViewInvestment from "./viewAnInvestment/ViewInvestment";
import FundExistingInvestment from "./viewAnInvestment/component/fundExistingInvestment/FundExistingInvestment";




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
            {/* <Route path={`${path}/create`}>
                <CreateHome refreshSavings={props.getSavings} />
            </Route> */}
            {/* <Redirect to={`${path}`} /> */}
        </Switch>
    )
}

export default Investment;