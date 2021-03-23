/* eslint-disable */
import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import isMobile from "./../helpers/helpers";
import {sendData} from "./../utils/axios";
import {Image} from "./../components/Image";
import {Input} from "../components/Input";
import {Button} from "./../components/Button";
import {
  NavLink,
  useHistory,
  Redirect,
} from "react-router-dom";
import {ErrorCom} from "./../components/ErrorCom";

import "./login.scss";
import logo from "./../assets/amara.png";

export const LoginMain = () => {
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  let mobile = isMobile();
  const history = useHistory();

  const [submit, setSubmit] = useState(false);
  const [login, setLogin] = useState({
    status: false,
    msg: "",
  });
  const Login = () => {
    setSubmit((p) => !p); //<----- DEFAULT STATE
    // setLogin(() => "ok"); //<-----TEST STATE
    console.log(inputEmail.current.value);
    console.log(inputPassword.current.value);
  };
  const KeyLogin = (e) => {
    if (e.key === "Enter") {
      setSubmit((p) => !p); //<----- DEFAULT STATE
      // setLogin(() => "ok"); //<-----TEST STATE
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", KeyLogin);

    return () =>
      window.removeEventListener(
        "keydown",
        KeyLogin
      );
  }, [KeyLogin]);

  useEffect(() => {
    // let clear;
    if (submit) {
      console.log("SUBMIT");
      sendData(
        "POST",
        `api/login`,
        {
          email: inputEmail.current.value,
          password: inputPassword.current.value,
        },
        setLogin
      );
      setSubmit((p) => !p);
      //call DB
      // clear = setTimeout(() => setSubmit(false), 500);
    }
    // return () => clearTimeout(clear);
  }, [submit]);
  return (
    // <ErrorWrapper>
    // {console.log(dispatch)}
    <section
      className={`${
        !mobile ? "login_main" : "logo_main_m"
      }`}>
      <div className="login_logo_main">
        <Image
          src={logo}
          alt="logo"
          clName="logo_img"
        />
      </div>
      {console.log(login, "LOGIN")}
      <div className="login_module">
        {login.msg ? (
          <ErrorCom
            clName="error_wrapper b"
            clError="error_msg"
            txt={login.msg}
          />
        ) : (
          <div className="error_wrapper"></div>
        )}
        <div className="login_input_wrapper">
          <Input
            r={inputEmail}
            clName="input_field"
            propSet={submit}
            def="EMAIL"
            type="text"
          />
          <Input
            r={inputPassword}
            clName="input_field"
            propSet={submit}
            def="PASSWORD"
            type="password"
          />
        </div>
        <div className="login_submit">
          <Button
            txt="Login"
            cn="login_submit_btn"
            fnClick={Login}
          />
        </div>
        <NavLink
          to="/forgot-password"
          className="login_forgot">
          FORGOT MY PASSWORD
        </NavLink>
      </div>
      {login.status ? (
        <Redirect
          to={{
            pathname: "/calendar-create",
            state: {email: "buzzer79@gmail.com"},
          }}
        />
      ) : undefined}
    </section>
    // </ErrorWrapper>
  );
};
