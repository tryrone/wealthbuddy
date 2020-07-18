import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "state/store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/index.css";
import Login from "pages/auth/Login";
import SignUpPersonalDetails from "pages/auth/SignUp/PersonalDetails";
import ForgotPassword from "pages/auth/ForgotPassword/ForgotPassword";
import ForgotPasswordSuccess from "pages/auth/ForgotPassword/ForgotPassTwo";
import Dashboard from "pages/dashboard/Dashboard";
import SignUpConfirmEmail from "./pages/auth/SignUp/ConfirmEmail";
import SignUpSetPassword from "./pages/auth/SignUp/SetPassword";
import SignUpSuccess from "./pages/auth/SignUp/Success";

function App() {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <main>
            <Switch>
              <Route exact path="/auth/login" component={Login} />
              <Route exact path="/auth/sign-up" component={SignUpPersonalDetails} />
              <Route exact path="/auth/sign-up/verify-email" component={SignUpConfirmEmail} />
              <Route exact path="/auth/sign-up/set-password" component={SignUpSetPassword} />
              <Route exact path="/auth/sign-up/success" component={SignUpSuccess} />
              <Route exact path="/auth/forgot-password" component={ForgotPassword} />
              <Route exact path="/auth/forgot-password/success" component={ForgotPasswordSuccess} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </main>
        </BrowserRouter>
      </PersistGate>
    </StoreProvider>
  );
}

export default App;
