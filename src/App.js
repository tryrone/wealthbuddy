import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "state/store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/index.css";
import AuthRoutes from "./routes/AuthRoutes";
import DashboardRoutes from "./routes/DashboardRoutes";

function App() {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <main>
            <Switch>
              <Route path="/auth" component={AuthRoutes} />
              <Route path="/dashboard" component={DashboardRoutes} />
            </Switch>
          </main>
        </BrowserRouter>
      </PersistGate>
    </StoreProvider>
  );
}

export default App;
