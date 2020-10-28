import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import * as ROUTES from "./constants/routes";

export default function App() {
  return (
    <Router>
      <Route exact path="user/browse">
        <Browse />
      </Route>

      <Route exact path="user/signin">
        <Signin />
      </Route>

      <Route exact path="user/signup">
        <Signup />
      </Route>

      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
