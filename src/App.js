import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "state/store";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./styles/index.css";
import AuthRoutes from "routes/AuthRoutes";
import DashboardRoutes from "routes/DashboardRoutes";
import PrivateRoute from "shared-components/PrivateRoute";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.compat.css";
import ReactNotification from "react-notifications-component";

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <main>
            <ReactNotification />
            <Switch>
              <Route path="/auth" component={AuthRoutes} />
              <PrivateRoute path="/dashboard" component={DashboardRoutes} />
              <Redirect exact from="/" to="/dashboard" />
            </Switch>
          </main>
        </BrowserRouter>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
