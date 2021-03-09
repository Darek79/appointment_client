/* eslint-disable */
import React, {useState, useEffect, useRef} from "react";
import Moment from "moment";
import {v4} from "uuid";
import "moment/locale/en-gb";
import {extendMoment} from "moment-range";
import "./calendar.scss";
import {LeftA} from "../svg/leftA";
import {RightA} from "../svg/rightA";
let moment = extendMoment(Moment);
const weekdays = [
  "pon",
  "wt",
  "śr",
  "czw",
  "pt",
  "sob",
  "ndz",
];
const d = [0, 0, 0, 0];

export const Calendar = ({year}) => {
  const [week, setWeek] = useState([]);
  const [off, setOff] = useState(4);
  const [weekOfYear, setWeekOfYear] = useState(
    moment.duration(0, "d")
  );
  const [now, setNow] = useState(0);
  useEffect(() => {
    setWeek(() =>
      d.map((el, i) => {
        return {
          day: moment().add(i, "d").format("dddd"),
          nr: moment().add(i, "d").format("D"),
        };
      })
    );
    console.log(moment.now());
  }, []);
  useEffect(() => {
    if (off < 0) {
      console.log("offset useEffect");
      setOff(() => 4);
    }
  }, [off]);
  const offsetPlus = () => {
    setWeek(() =>
      d.map((el, i) => {
        return {
          day: moment()
            .add(i + off, "d")
            .format("dddd"),
          nr: moment()
            .add(i + off, "d")
            .format("D"),
        };
      })
    );
    setOff((p) => p + 4);
    // setWeekOfYear(() => moment.duration(off, "d"));
  };
  const offsetMinus = () => {
    setWeek(() =>
      d
        .map((el, i) => {
          console.log(el, "el");
          return {
            day: moment()
              .add(3 - i, "d")
              .format("dddd"),
            nr: moment()
              .add(3 - i, "d")
              .format("D"),
          };
        })
        .reverse()
    );
    setOff((p) => p - 4);
    // setWeekOfYear((p) => p.subtract(4, "d"));
  };
  return (
    <div className="calender_wrapper">
      {console.log(off, "off")}
      {console.log(week, "week")}
      {/* <h2>{moment().year()}</h2>
      <h2>{moment().format("E")}</h2>
      <h2>{moment().format("D")}</h2>
      <h2>{moment().add(off, "d").format("MMMM")}</h2> */}
      <h2>{moment().get("date", "D")}</h2>
      <section className="calender_month">
        <h2>
          {moment()
            .add(off, "d")
            .format("MMMM")
            .toUpperCase()}
        </h2>
        <span> / </span>
        <h2>
          {moment()
            .add(weekOfYear, "w")
            .format("w")
            .toUpperCase()}
        </h2>
      </section>
      <section className="calender_week">
        <LeftA
          clSvg="calender_left"
          clSvgD="calender_left_d"
          fn={offsetMinus}
          state={off}
        />
        {week.map((el) => {
          return (
            <div className="day" key={v4()}>
              <p>{el.day}</p>
              <p>{el.nr}</p>
            </div>
          );
        })}
        <RightA clSvg="calender_right" fn={offsetPlus} />
      </section>
    </div>
  );
};
