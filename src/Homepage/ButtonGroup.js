import React, {useState, useEffect} from "react";
import isMobile from "../helpers/helpers";
import {useSpring, animated} from "react-spring";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {Link} from "react-router-dom";
const useStyle = makeStyles({
  main: {
    background: "#f94144",
    border: 0,
    boxShadow:
      "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 30,
    width: 100,
    padding: "0 30px",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#f3722c",
    },
  },
  color: {
    color: "#fff",
  },
});

export const Buttons = ({
  linknames = [
    "HOME",
    "GALLERY",
    "PRICES",
    "TEAM",
    "CONTACT",
    "ABOUT",
  ],
}) => {
  const classes = useStyle();
  const [toggle, setToggle] = useState(false);
  const [prop, set] = useSpring(() => ({
    opacity: 1,
    width: "400px",
    height: "400px",
    position: "relative",
  }));
  useEffect(() => {
    set({opacity: toggle ? 1 : 0});
  }, [toggle]);

  const click = () => {
    setToggle((p) => !p);
  };
  return (
    <animated.section
      className="homepage"
      style={prop}>
      <ButtonGroup aria-label="outlined secondary button group">
        {linknames.map((btn) => (
          <Button className={classes.main}>
            <Link
              className={classes.color}
              to={`/${btn.toLowerCase()}`}>
              {btn}
            </Link>
          </Button>
        ))}
      </ButtonGroup>
    </animated.section>
  );
};
