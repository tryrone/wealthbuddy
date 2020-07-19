import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom"
import WalletHome from "./home";




const Wallet = (props) => {
    const { path } = useRouteMatch();

    return (
        <Switch >
            <Route exact path={`${path}`}>
                <WalletHome  show={props.show} show2={props.show2} /> 
            </Route> 
            {/* <Route path={`${path}/create`}>
                <CreateHome refreshSavings={props.getSavings} />
            </Route> */}
            <Redirect to={`${path}`} />
        </Switch>
    )
}

export default Wallet
