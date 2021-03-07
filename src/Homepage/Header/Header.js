import React from "react";
import isMobile from "./../helpers/helpers";
import {makeStyles} from "@material-ui/core/styles";
import {useSpring, animated} from "react-spring";

import {Card} from "./../Card";
export const Header = () => {
  return (
    <section className="header_main">
      <Card />
    </section>
  );
};
