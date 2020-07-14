import React from "react";
import { BrowserRouter ,Route} from "react-router-dom";
import "./styles/index.css";
import Login from 'pages/auth/Login'
import SignUp from "pages/auth/signUp";
import ForgotPassword from "pages/auth/ForgotPassword/ForgotPassword";
import ForgotPassTwo from "pages/auth/ForgotPassword/ForgotPassTwo";
import Dashboard from "pages/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <main>
      <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp}/>
        <Route path="/forgot-pass" component={ForgotPassword}/>
        <Route path="/forgot-two" component={ForgotPassTwo}/>
        <Route path="/main-dash" component={Dashboard} />
      </main>
    </BrowserRouter>
  );
}

export default App;
