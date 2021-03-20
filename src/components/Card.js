import React from "react";
export const Card = ({
  wrapper,
  cl_img,
  cl_desc,
  cl_desc_txt,
  desc_txt,
  img,
  ind,
}) => (
  <section className={wrapper}>
    <div
      className={cl_img}
      style={{
        backgroundImage: `url(${img})`,
      }}></div>
    <div className={cl_desc}>
      <p className={cl_desc_txt}>{desc_txt}</p>
    </div>
  </section>
);
