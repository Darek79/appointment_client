import React, {Fragment} from "react";
import {v4} from "uuid";

import "./price.scss";

import {hairPrices} from "./pricesList";
// import img1 from "./../../assets/price1.jpg";
// import img2 from "./../../assets/price2.jpg";

const PriceMain = () => (
  <section className="prices">
    <div className="prices_wall"></div>
    <div className="prices_header">
      <p>SERVICE PRICES</p>
      <p>
        Prices are subject to change depending on
        hair length and texture
      </p>
    </div>
    <div className="prices_imgs">
      <div className="prices_img_item img_item2"></div>
    </div>
    <div className="prices_cut_wrapper">
      <div className="prices_cut_item title">
        <p>CUT MENU</p>
      </div>
      {hairPrices.map((el) => (
        <div
          key={v4()}
          className="prices_cut_item item_price">
          <p>{el.title}</p>
          <p>{el.price}</p>
        </div>
      ))}
    </div>
  </section>
);

export default PriceMain;
