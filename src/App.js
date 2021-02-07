import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {LoginMain} from "./Login/Login_main";
import Overview from "./Appointment/isOn";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(p) => <LoginMain />}
        />
        <Route
          exact
          path="/calender"
          render={(p) => <Overview {...p} />}
        />
        <Route path="*" render={() => <div>ERROR</div>} />
      </Switch>
    </Router>
  );
}

export default App;
