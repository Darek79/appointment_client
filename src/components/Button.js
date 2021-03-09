import React from "react";

export const Button = ({txt, cn, fnClick}) => (
  <button className={cn} onClick={fnClick}>
    {txt}
  </button>
);
