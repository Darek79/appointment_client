import React, {useState, Fragment} from "react";
export const errorWrapper = (Wrapped) => {
  const [err, setErr] = useState(false);
  return (
    <Fragment>
      <Wrapped errFn={setErr} err={err} />
    </Fragment>
  );
};
