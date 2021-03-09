import React, {useEffect, Fragment} from "react";
import isMobile from "./../helpers/helpers";
import {makeStyles} from "@material-ui/core/styles";
import {useSpring, animated} from "react-spring";
import bckgrndimg from "./../assets/woman_red_hair.png";
import "./homepage.scss";
//#ffbc42
//#000C14
const links = [
  "HOME",
  "GALLERY",
  "PRICES",
  "TEAM",
  "CONTACT",
  "ABOUT",
];

export const Card2 = () => {
  return (
    <>
      <div class="parallax">
        <div class="parallax__layer parallax__layer--back">
          <img
            alt="img"
            src="./../assets//woman_red_hair.png"
          />
        </div>
        <div class="parallax__layer parallax__layer--base">
          ...
        </div>
      </div>
    </>
  );
};
