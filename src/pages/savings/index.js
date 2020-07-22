import React from 'react';
import { Switch, Route} from "react-router-dom";
import SavingsHome from './SavingsHome';
import CreateHome from './CreateHome/CreateHome';
import ViewSaving from './ViewSavings/ViewSavings';

const Savings=()=> {
    return (
        <Switch >

        <Route exact path="/dashboard/savings">
            {/* {savings.length !== 0 ? <SavingsHome /> : <CreateHome />} */}
         <SavingsHome />
        </Route>

        <Route path="/dashboard/savings/create"> 
            <CreateHome /> 
        </Route>

        <Route path={`/dashboard/savings/view`} > 
            <ViewSaving  />
        </Route>
            
        </Switch>
    )
}
export default  Savings;