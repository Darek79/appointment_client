/* eslint-disable */
import React, {useState, useRef, useEffect} from "react";
import moment from "moment";
import {isMobile} from "./../utils/helperFn";
import {v4} from "uuid";
import {LeftA} from "../svg/leftA";
import {RightA} from "../svg/rightA";
import {sendData} from "./../utils/axios";
import "./c.scss";

const week = [0, 0, 0, 0];
export const C = () => {
  const [days, setDays] = useState([]);
  const [template, setTemplate] = useState([]);
  useEffect(() => {
    setDays(() =>
      week.map((el, i) => {
        return moment().add(i, "d");
      })
    );
  }, []);
  const f = () => {
    setDays((days) => days.map((el, i) => el.add(2, "d")));
  };
  const b = () => {
    setDays((days) =>
      days.map((el, i) => el.subtract(2, "d"))
    );
  };

  return (
    <section className="calendar">
      <p className="week">
        week:{days.length > 0 && days[0].week()}
      </p>
      <p className="week">
        year:{days.length > 0 && days[0].year()}
      </p>
      <div className="calendar_wrapper">
        <LeftA clSvg="calendar_arr" fn={b} state={days} />

        <div className="content">
          {days.map((el) => (
            <div
              key={v4()}
              className={`calendar_item ${
                el.date() === moment().date()
                  ? "calendar_back"
                  : ""
              }`}>
              <p>{el.format("ddd")}</p>
              <p>{el.format("DD MMM")}</p>
            </div>
          ))}
        </div>
        <RightA clSvg="calendar_arr" fn={f} />
      </div>
    </section>
  );
};
