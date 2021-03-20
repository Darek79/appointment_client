import React from "react";
//import isMobile from "../../helpers/helpers";
import {ButtonsNAV} from "./ButtonGroupNav";
import {ButtonContact} from "./ButtonsGroupContact";
import {NavLink} from "react-router-dom";

import "./header.scss";
//#ffbc42
//#000C14
// const links = [
//   "HOME",
//   "GALLERY",
//   "PRICES",
//   "TEAM",
//   "CONTACT",
//   "ABOUT",
// ];

const Header = () => {
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
      <div className="title_text_r">
        <NavLink
          to={{
            pathname: "/book-appointment",
            state: {storeID: "1evgtmodn"},
          }}>
          Book Your Appointment
        </NavLink>
      </div>
    </section>
  );
};

export default Header;
