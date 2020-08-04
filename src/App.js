import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "state/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/index.css";
import AuthRoutes from "./routes/AuthRoutes";
import DashboardRoutes from "./routes/DashboardRoutes";

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <main>
            <Switch>
              <Route path="/auth" component={AuthRoutes} />
              <Route path="/dashboard" component={DashboardRoutes} />
            </Switch>
          </main>
        </Router>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
