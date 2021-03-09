import React, {useEffect, Fragment} from "react";
import isMobile from "../helpers/helpers";
import {ButtonsNAV} from "./HeaderSub/ButtonGroupNav";
import {ButtonContact} from "./HeaderSub/ButtonsGroupContact";

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

export const Header = () => {
  return (
    <section className={`card_grid`}>
      <div className="title_btn_contact">
        <ButtonContact />
      </div>
      <div className="title_btn_group">
        <ButtonsNAV link_class="title_links" />
      </div>
      <div className="title_text">COIFFEUR</div>
      <div className="title_img"></div>
      <div className="title_text_l">hello</div>
      <div className="title_text_r">hello</div>
    </section>
  );
};
