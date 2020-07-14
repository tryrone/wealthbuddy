import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "state/store";
import "./styles/index.css";
import Login from "pages/auth/Login";
import SignUp from "pages/auth/signUp";
import ForgotPassword from "pages/auth/ForgotPassword/ForgotPassword";
import ForgotPassTwo from "pages/auth/ForgotPassword/ForgotPassTwo";

function App() {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <main>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/forgot-pass" component={ForgotPassword} />
              <Route path="/forgot-two" component={ForgotPassTwo} />
            </Switch>
          </main>
        </BrowserRouter>
      </PersistGate>
    </StoreProvider>
  );
}

export default App;
