import React, {useState, useEffect} from "react";
import "./input.scss";
export const Input = ({
  clTextLabel = "textlabel",
  clText = "textinput",
  clTextSpan = "spantext",
  r,
}) => {
  const [input, setInput] = useState("");

  function writetxt(e) {
    setInput(() => e.target.value);
  }
  useEffect(() => {
    //ref from top = input
  }, [input]);
  return (
    <div className="t">
      <label className={clTextLabel} for="input">
        <input
          type="text"
          className={clText}
          placeholder="username"
          value={input}
          onChange={writetxt}></input>
        {/* <span className={clTextSpan}>
          username
        </span> */}
      </label>
    </div>
  );
};
