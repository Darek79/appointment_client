import React, {useEffect} from "react";
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
const d = [200, 500];
const card = makeStyles({
  divimg_left: {
    top: window.innerHeight / 3,
  },
  divimg_right: {
    top: window.innerHeight / 5,
  },
});

export const Card = () => {
  const {
    main,
    divimg_left,
    divimg_right,
    coif,
    img,
  } = card();
  console.log(img);
  const imgspr = useSpring({
    opacity: 1,
    transform: `translateX(${
      window.innerWidth / 3 + 150
    }px)`,
    from: {
      opacity: 0,
      transform: `translateX(${
        window.innerWidth / 1.5
      }px)`,
    },
    config: {
      mass: 10,
      tension: 350,
      friction: 140,
    },
  });
  const coifspr = useSpring({
    opacity: 1,
    transform: `translateX(${
      window.innerWidth / 4
    }px)`,
    from: {
      opacity: 0,
      transform: `translateX(${
        window.innerWidth / 1.6
      }px)`,
    },
    delay: 300,
    config: {
      mass: 20,
      tension: 220,
      friction: 140,
    },
  });
  const divimgspr_left = useSpring({
    opacity: 1,
    transform: `translateX(${
      window.innerWidth / 3
    }px)`,
    from: {
      opacity: 0,
      transform: `translateX(${
        window.innerWidth / 2
      }px)`,
    },
    delay: 300,
    config: {
      mass: 20,
      tension: 260,
      friction: 140,
    },
  });
  const divimgspr_right = useSpring({
    opacity: 1,
    transform: `translateX(${
      window.innerWidth / 1.5
    }px)`,
    from: {
      opacity: 0,
      transform: `translateX(${
        window.innerWidth / 1.1
      }px)`,
    },
    delay: 300,
    config: {
      mass: 20,
      tension: 260,
      friction: 140,
    },
  });
  useEffect(() => {}, []);
  return (
    <section className={`card_grid`}>
      <animated.div
        className={"coif"}
        style={coifspr}>
        COIFFUER
      </animated.div>

      <animated.img
        style={imgspr}
        className={'img'}
        src={bckgrndimg}
      />
      <animated.div
        className={`${divimg_left} divimg_main`}
        style={divimgspr_left}>
        test
      </animated.div>
      <animated.div
        className={`${divimg_right} divimg_main`}
        style={divimgspr_right}>
        test
      </animated.div>
    </section>
  );
};
