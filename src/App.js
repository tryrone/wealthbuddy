import React from "react";
import { BrowserRouter ,Route, Switch} from "react-router-dom";
import "./styles/index.css";
import Login from 'pages/auth/Login'
import SignUp from "pages/auth/signUp";
import ForgotPassword from "pages/auth/ForgotPassword/ForgotPassword";
import ForgotPassTwo from "pages/auth/ForgotPassword/ForgotPassTwo";
import Dashboard from "pages/dashboard/Dashboard";


function App() {
  // const mobileMenu= false;
  // const mobileMenu = React.createContext(false);
  return (
    <BrowserRouter>
      <main>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp}/>
        <Route path="/forgot-pass" component={ForgotPassword}/>
        <Route path="/forgot-two" component={ForgotPassTwo}/>
        <Route path="/dashboard">
            <Dashboard  />
        </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
