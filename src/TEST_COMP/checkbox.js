import React from "react";
import "./checkbox.scss";
export const Form = ({
  clLabel = "label",
  clCheckInput = "input",
  clCheckSpan = "span",
}) => {
  return (
    <label
      className={clLabel}
      for="form1"
      value="check">
      <input
        className={clCheckInput}
        name="form1"
        type="checkbox"
      />
      <span className={clCheckSpan}></span>
    </label>
  );
};
