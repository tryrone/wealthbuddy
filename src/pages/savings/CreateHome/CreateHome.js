import React from 'react';
import { Switch, Route} from "react-router-dom"
import CreateSavings from './CreateSavings';
import PersonalSavings from '../PersonalSavings/PersonalSavings';
import FixedSavings from '../FixedSavings/FixedSavings';
import FixedFlexibleSavings from '../FixedFlexibleSavings/FixedFlexibleSavings';
import GroupSimple from '../Group/simple';

export default function CreateHome() {
    return (
        <Switch >
            <Route exact path="/dashboard/savings/create">
                <CreateSavings />
            </Route> 
            <Route path="/dashboard/savings/create/personal"> 
                <PersonalSavings  />
            </Route>
             <Route path="/dashboard/savings/create/fixed">
                <FixedSavings  /> 
            </Route>
            <Route path={`/dashboard/savings/create/fixed-flexible`}>
                <FixedFlexibleSavings   />
            </Route>
             <Route path={`/dashboard/savings/create/group-simple`}>
                <GroupSimple  /> 
            </Route>
            <Route path={`/dashboard/savings/create/group-contributory`}>
                <GroupSimple  title='Group Contributory' />
            </Route>
            {/*  <Route path={`/dashboard/savings/group-contributory`}>
                <GroupSimple  title='Group Contributory' apiUrl={urls.createGroupChallengeSavings}  />
            </Route> */}
        </Switch>
    )
}
