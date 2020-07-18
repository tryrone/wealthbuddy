import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Create from '../simple/create';
// import ViewExisting from './view-existing';

const Contributory = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}/create`}>
        <Create />
      </Route>
      {/* <Route path={`${path}/view-existing`}>
        <ViewExisting />
      </Route> */}
    </Switch>
  )
}

export default Contributory
