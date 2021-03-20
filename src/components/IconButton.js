import React from "react";

export const IconButton = ({
  txt,
  txtIn,
  exBtn,
  cn,
  fnClick,
  icon,
}) => (
  <figure className={exBtn}>
    {icon}
    <a className={cn} href={txt}>
      {txtIn}
    </a>
  </figure>
);
