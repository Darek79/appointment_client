import React from "react";
import {NavLink} from "react-router-dom";
import {v4} from "uuid";
const Footer_items = ({
  clName,
  clFooterTitle,
  clFooterContent,
  clFooterLink,
  clFooterImg,
  title,
  content,
}) => (
  <section className={clName}>
    <div className={clFooterTitle}>{title}</div>
    <div className={clFooterContent}>
      {content.map((el, i) => (
        <NavLink
          className={clFooterLink}
          to={el.path ? el.path : "#"}
          key={v4()}>
          {el.link ? (
            <img
              className={clFooterImg}
              alt={`${title}${i}`}
              src={el.link}
            />
          ) : (
            el
          )}
        </NavLink>
      ))}
    </div>
  </section>
);

export default Footer_items;
