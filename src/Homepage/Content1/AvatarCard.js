import React, {Fragment} from "react";
import {Link} from "react-router-dom";
export const AvatarCard = ({
  cl_img,
  cl_desc,
  cl_link,
  cl_desc_txt,
  desc_txt,
  path,
  img,
  ind,
}) => (
  <Fragment>
    <Link
      to={path}
      className={cl_link}
      style={{gridColumn: ind + 2}}>
      <div
        className={cl_img}
        style={{
          backgroundImage: `url(${img})`,
        }}></div>
      <div className={cl_desc}>
        <p className={cl_desc_txt}>{desc_txt}</p>
      </div>
    </Link>
  </Fragment>
);
