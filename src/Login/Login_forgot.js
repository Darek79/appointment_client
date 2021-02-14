/* eslint-disable */
import React, {useEffect, useRef, useState} from "react";
import isMobile from "./../helpers/helpers";
// import useWindowsWidth from "./../helpers/helpers";
import {Image} from "./../components/Image";
import {Input} from "../components/Input";
import {Button} from "./../components/Button";
import {NavLink} from "react-router-dom";
import "./login.scss";
import logo from "./../assets/amara.png";

export const ForgotPasswordMain = () => {
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  let mobile = isMobile();

  const [submit, setSubmit] = useState(false);
  const Login = () => {
    setSubmit((p) => !p);
    console.log(inputEmail.current.value);
  };

  // useEffect(() => {
  //   let clear;
  //   if (submit) {
  //     //call DB
  //     clear = setTimeout(() => setSubmit(false), 500);
  //   }
  //   return () => clearTimeout(clear);
  // }, [submit]);
  return (
    <section
      className={`${
        !mobile ? "login_main" : "logo_main_m"
      }`}>
      <div className="login_logo_main">
        <Image src={logo} alt="logo" clName="logo_img" />
      </div>
      <div className="login_module">
        <div className="login_input_wrapper">
          <div className="login_msg_txt">
            IF THE PROVIDED EMAIL EXISTS IN OUR SYSTEM WE
            WILL SEND YOU AN EMAIL
          </div>
          <Input
            r={inputEmail}
            clName="input_field"
            propSet={submit}
            def="EMAIL"
          />
        </div>
        <div className="login_submit">
          <Button
            txt="SUBMIT"
            cn="login_submit_btn"
            fnClick={Login}
          />
        </div>
      </div>
    </section>
  );
};
