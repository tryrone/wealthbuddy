import React from "react";
import { BrowserRouter ,Route} from "react-router-dom";
import "./styles/index.css";
import Login from 'pages/auth/Login'
import SignUp from "pages/auth/signUp";

function App() {
  return (
    <BrowserRouter>
      <main>
      <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp}/>
      </main>
    </BrowserRouter>
  );
}

export default App;
