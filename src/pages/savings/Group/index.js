import React from 'react';
import { Switch, Route } from "react-router-dom"
import GroupContributory from './contributory'
import GroupSimple from './simple'
// import RoundRobin from './round-robin'

const index =()=> {
    return (
        <Switch>
            <Route path={`/dashboard/savings/create/group-simple/simple`}>
                <GroupSimple />
            </Route>
           <Route path={`/dashboard/savings/create/group-contributory/contributory`}>
                <GroupContributory />
            </Route>
            {/*  <Route path={`${path}/round-robin`}>
                <RoundRobin />
            </Route> */}
        </Switch>
    )
}
export default  index;