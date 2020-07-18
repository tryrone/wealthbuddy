import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "state/store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/index.css";
import Login from "pages/auth/Login";
import SignUp from "pages/auth/signUp";
import ForgotPassword from "pages/auth/ForgotPassword/ForgotPassword";
import ForgotPasswordSuccess from "pages/auth/ForgotPassword/ForgotPassTwo";
import Dashboard from "pages/dashboard/Dashboard";
import VerifyEmail from "pages/auth/VerifyEmail/VerifyEmail";

function App() {
  // const mobileMenu= false;
  // const mobileMenu = React.createContext(false);
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <main>
            <Switch>
              <Route exact path="/auth/login" component={Login} />
              <Route exact path="/auth/sign-up" component={SignUp} />
              <Route exact path="/auth/forgot-password" component={ForgotPassword} />
              <Route exact path="/auth/forgot-password/success" component={ForgotPasswordSuccess} />
              <Route exact path="/auth/email/verify" component={VerifyEmail}/>
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </main>
        </BrowserRouter>
      </PersistGate>
    </StoreProvider>
  );
}

export default App;
