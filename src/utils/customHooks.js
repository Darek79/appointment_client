export const removeDay = (fnState, e) => {
  return fnState((p) =>
    p.map((el, i) => {
      if (i === e.target.getAttribute('data-index') * 1) {
        console.log({ ...el });
        return { ...el, active: false };
      } else {
        return el;
      }
    })
  );
};

export const activateDay = (fnState, e) => {
  return fnState((p) =>
    p.map((el, i) => {
      if (i === e.target.getAttribute('data-index') * 1) {
        console.log({ ...el });
        return { ...el, active: true };
      } else {
        return el;
      }
    })
  );
};
