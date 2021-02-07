import React, {useState, Fragment, useEffect} from "react";

export const Input = ({clName, type, r, propSet, def}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (propSet) {
      setValue("");
    }
  }, [propSet]);

  return (
    <Fragment>
      <input
        type={type}
        className={clName}
        ref={r}
        placeholder={def}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Fragment>
  );
};
