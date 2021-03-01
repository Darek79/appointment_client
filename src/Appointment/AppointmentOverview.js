/* eslint-disable */
import React, {useEffect, useState, memo} from "react";
import {startEndTime} from "./../utils/helperFn";
import {v1} from "uuid";
import moment from "moment";
import ActivateDay from "./AppointmentDay";
import {CloseCircle} from "./../svg/close_circel";

export default memo(({dayToCheck, toSave}) => {
  const [dayM, setM] = useState([]);
  const [active, setActive] = useState(false);
  const [skip, setSkip] = useState(false);
  useEffect(() => {
    let offsetTime = [];
    let day = JSON.parse(localStorage.getItem(dayToCheck));
    if (day === null) {
      setM(() => [
        {
          active: false,
          reason: "skipped",
          day: moment().day(dayToCheck).day(),
        },
      ]);
      return;
    }
    let time = startEndTime(
      `${day.start.h} ${day.start.m}`,
      `${day.end.h} ${day.end.m}`,
      day.offset * 1
    );
    if (`${day.start.h} ${day.start.m}` !== "06 00") {
      offsetTime = startEndTime(
        `06 00`,
        `${day.start.h - 1} ${
          day.start.m - day.offset * 1
        }`,
        day.offset * 1,
        false
      );
    }
    console.log(moment().day(dayToCheck).day());
    console.log(offsetTime, "offset");
    console.log(time, "TIME");
    setM(() => [...offsetTime, ...time]);
  }, [active, skip]);

  useEffect(() => {
    if (toSave) {
      localStorage.setItem(
        dayToCheck + "1",
        JSON.stringify(...dayM)
      );
    }
  }, [toSave]);
  const remove_day = (e) => {
    if (e.target.getAttribute("data-day") === dayToCheck) {
      setM((p) =>
        p.map((el, i) => {
          if (
            i ===
            e.target.getAttribute("data-index") * 1
          ) {
            console.log({...el});
            return {...el, active: false};
          } else {
            return el;
          }
        })
      );
    }
  };

  const activate_day = (e) => {
    if (e.target.getAttribute("data-day") === dayToCheck) {
      setM((p) =>
        p.map((el, i) => {
          if (
            i ===
            e.target.getAttribute("data-index") * 1
          ) {
            console.log({...el});
            return {...el, active: true};
          } else {
            return el;
          }
        })
      );
    }
  };
  const clickTile = (el, e) => {
    console.log(e.target);
    if (!el.active && el.reason === "skipped") {
      console.log("skipped", dayToCheck);
      setActive(() => true);
      return undefined;
    } else {
      el.active ? remove_day(e) : activate_day(e);
    }
  };

  const skipDay = () => {
    localStorage.setItem(dayToCheck, "null");
    setSkip((p) => !p);
  };

  const activate = () => {
    setActive(() => false);
  };
  const saveDates = () => {};
  return (
    <section className="overview_cont">
      <p className="time_tile_day">{dayToCheck}</p>
      <p
        onClick={skipDay}
        className="time_tile_day time_skip">
        skip day
      </p>
      {dayM &&
        dayM.map((el, i) => {
          return (
            <div
              onClick={(e) => clickTile(el, e)}
              key={v1()}
              data-day={dayToCheck}
              data-index={i}
              className={`time_tile ${
                !el.active ? "time_off" : ""
              } ${
                el.reason === "skipped"
                  ? "time_skipped"
                  : ""
              }`}>
              {el.time
                ? el.time.join(":")
                : el.reason.toUpperCase()}
              {el.reason === "skipped" ? (
                <div className="day_change">activate</div>
              ) : undefined}
            </div>
          );
        })}
      {active ? (
        <div className="activate_day">
          <div className="closex_wrapper">
            <CloseCircle fnClick={activate} />
          </div>
          <ActivateDay day={dayToCheck} />
        </div>
      ) : undefined}
    </section>
  );
});
