import React from 'react';
import { Switch, Route} from "react-router-dom"
import CreateSavings from './CreateSavings';
import PersonalSavings from '../PersonalSavings/PersonalSavings';

export default function CreateHome() {
    return (
        <Switch >
            <Route exact path="/dashboard/savings/create">
                <CreateSavings />
            </Route> 
            <Route path="/dashboard/savings/personal"> 
                <PersonalSavings  />
            </Route>
            {/* <Route path={`/dashboard/savings/fixed`}>
                <FixedSavings  />
            </Route>
            <Route path={`/dashboard/savings/fixed-flexible`}>
                <FixedFlexibleSavings   />
            </Route>
            <Route path={`/dashboard/savings/group-simple`}>
                <GroupSimple  />
            </Route>
            <Route path={`/dashboard/savings/group-contributory`}>
                <GroupSimple  title='Group Contributory' />
            </Route>
            <Route path={`/dashboard/savings/group-contributory`}>
                <GroupSimple  title='Group Contributory' apiUrl={urls.createGroupChallengeSavings}  />
            </Route> */}
        </Switch>
    )
}
