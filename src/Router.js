import React from "react";
import { Route, BrowserRouter, NavLink } from "react-router-dom";
import PrivateRoute from "./ProtctedRoute";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function Router() {
  return (
    <BrowserRouter>
      <NavLink to="/">Home</NavLink>

      <PrivateRoute exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default Router;
