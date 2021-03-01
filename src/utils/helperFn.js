import moment from "moment";
export const startEndTime = (
  start,
  end,
  offset,
  status = true,
  r = ""
) => {
  let timesArr = [];
  const s = moment(start, "HH mm");
  const e = moment(end, "HH mm");
  let interval = e.diff(s, "minutes");
  timesArr.push({
    time: s.format("HH:mm").split(":"),
    active: status,
    reason: "",
  });
  for (let i = 0; i <= interval - offset; i += offset) {
    timesArr.push({
      time: s
        .add(offset, "minutes")
        .format("HH:mm")
        .split(":"),
      active: status,
      reason: r,
    });
  }
  return timesArr;
};
