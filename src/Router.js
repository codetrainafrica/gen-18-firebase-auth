import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./ProtctedRoute";
import Home from "./pages/Home";
import Register from "./pages/Register";

function Router() {
  return (
    <BrowserRouter>
      <PrivateRoute exact path="/" component={Home} />
      <Route path="/register" component={Register} />
    </BrowserRouter>
  );
}

export default Router;
