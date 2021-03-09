import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {LoginMain} from "./Login/Login_main";
import {ForgotPasswordMain} from "./Login/Login_forgot";
import {Calendar} from "./Calendar/Calendar";
import {Content1} from "./Homepage/Content1/ContentMain";
import {HomepageMain} from "./Homepage/HomepageMain";
import Overview from "./Appointment/isOn";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(p) => <HomepageMain />}
        />
        <Route
          exact
          path="/company-login"
          render={(p) => <LoginMain />}
        />
        <Route
          exact
          path="/forgot-password"
          render={(p) => <ForgotPasswordMain />}
        />
        <Route
          exact
          path="/calendar-create"
          render={(p) => <Overview {...p} />}
        />
        <Route
          exact
          path="/calendar-company"
          render={(p) => <Calendar {...p} />}
        />
        <Route
          path="*"
          render={() => <div>ERROR</div>}
        />
      </Switch>
    </Router>
  );
}

export default App;
