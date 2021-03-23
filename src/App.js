import React, {Suspense, lazy} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {LoginMain} from "./Login/Login_main";
import {ForgotPasswordMain} from "./Login/Login_forgot";
import {Calendar} from "./Calendar/Calendar";
// import Gallery from "./Homepage/Gallery/GalleryMain";
// import Team from "./Homepage/Team/TeamMain";
// import Price from "./Homepage/Price/Price";
import HomepageMain from "./Homepage/HomepageMain";
import Overview from "./Appointment/isOn";
import UserMain from "./Appointment/UserWindow/UserMain";
// import Footer from "./Homepage/Footer/Footer";
// import {Form} from "./TEST_COMP/checkbox";
// import {Input} from "./TEST_COMP/input";
// const HomepageMain = lazy(() =>
//   import("./Homepage/HomepageMain")
// );

function App() {
  return (
    <Router>
      <Switch>
        {/* <Suspense
          fallback={<div>loading...</div>}>
          <Route
            exact
            path="/"
            render={(p) => <HomepageMain />}
          />
        </Suspense> */}
        <Route
          exact
          path="/"
          render={(p) => <HomepageMain />}
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
          exact
          path="/company-login"
          render={(p) => <LoginMain />}
        />
        <Route
          exact
          path="/book-appointment"
          render={(p) => <UserMain {...p} />}
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
