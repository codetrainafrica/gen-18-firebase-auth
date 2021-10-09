import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router";
import React, { Component } from "react";
import RegisterForm from "./pages/Register";
import LoginForm from "./pages/Login";

class App extends Component {
  render() {
    return (
      <>
        <Router />
      </>
    );
  }
}

export default App;
