import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import Login from 'pages/auth/Login'

function App() {
  return (
    <BrowserRouter>
      <main>
        <Login />
      </main>
    </BrowserRouter>
  );
}

export default App;
