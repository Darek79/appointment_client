import React from "react";
import FooterItems from "./../../components/FooterItems";
import {Instagram} from "./../../assets/Instagram";
import {Facebook} from "./../../assets/Facebook";
import paypal from "./../../assets/paypal.png";
import visa from "./../../assets/visa.png";
import mastercard from "./../../assets/mastercard.png";
import "./footer.scss";
const social = [
  <Instagram
    clName="logo_social"
    fillpath2="#f8f9fa"
  />,
  <Facebook
    clName="logo_social"
    fillpath2="#f8f9fa"
    fillpath1="transparent"
  />,
];
const payment = [
  {link: paypal},
  {link: visa},
  {link: mastercard},
];

const Footer = () => (
  <section className="footer">
    <div className="footer_main_logo">
      COIFFEUR
    </div>
    <FooterItems
      clName="footer_items footer_logos"
      clFooterTitle="footer_logo_title"
      clFooterContent="footer_logo_content"
      clFooterLink="footer_link"
      clFooterImg="footer_img"
      title="Find us here"
      content={social}
    />
    <FooterItems
      content={payment}
      clName="footer_items footer_payment"
      clFooterTitle="footer_payment_title"
      clFooterContent="footer_payment_content"
      clFooterLink="footer_link"
      clFooterImg="footer_img"
      title="We accept"
    />
  </section>
);

export default Footer;
