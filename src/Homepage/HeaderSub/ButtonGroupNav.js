import React, {
  useState,
  useEffect,
  Fragment,
} from "react";
import isMobile from "../../helpers/helpers";
import {Link} from "react-router-dom";

export const ButtonsNAV = ({
  linknames = [
    "HOME",
    "GALLERY",
    "PRICES",
    "TEAM",
    "CONTACT",
    "ABOUT",
  ],
  link_wrapper,
  link_btn_class,
  link_class,
}) => {
  return (
    <Fragment>
      {linknames.map((btn) => (
        <Link
          className={link_class}
          to={`/${btn.toLowerCase()}`}>
          {btn}
        </Link>
      ))}
    </Fragment>
  );
};
