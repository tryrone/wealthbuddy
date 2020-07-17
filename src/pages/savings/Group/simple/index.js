import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Create from './create'
// import ViewExisting from './view-existing'

const Simple = ({ location, ...props }) => {
    const { path } = useRouteMatch()
    return (
        <Switch>
            <Route path={`${path}/:stage`}>
                <Create {...props} />
            </Route>
            {/* <Route path={`${path}/view-existing`}>
                <ViewExisting {...props} />
            </Route> */}
        </Switch> 
    ) 
}

export default Simple