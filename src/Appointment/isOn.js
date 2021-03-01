/* eslint-disable */
import React, {useState, useEffect} from "react";
import {sendData} from "./../utils/axios";
import {useHistory, NavLink} from "react-router-dom";
import DayFinal from "./AppointmentOverview";
import moment from "moment";
import "./isOn.scss";
export default () => {
  const [saved, toSave] = useState(false);
  const [updated, setUpdate] = useState([]);
  const history = useHistory();

  const saveMyDates = () => {
    toSave((p) => !p);
  };
  useEffect(() => {
    if (saved) {
      const finalArr = [];
      Object.keys(localStorage).forEach((el, i) => {
        const d = localStorage.getItem(el);
        console.log(el);
        if (d.includes("skipped") || d.includes("offset")) {
          const obj = JSON.parse(d);
          if (Array.isArray(obj)) {
            //
          }
          const day = moment().day(el).day();

          if (!obj.day) {
            obj.day = day;
          }
          if (obj.start) {
            obj.active = true;
          }

          finalArr.push(obj);
          finalArr.sort((a, b) => a.day - b.day);
        }
        // console.log(el[el.length - 1]);
        // if (el[el.length - 1] === "1") {
        //   // console.log("item");
        //   finalArr.push({
        //     day: moment()
        //       .day(el.substr(0, el.length - 1))
        //       .format("d"),
        //     arr:
        //       JSON.parse(localStorage.getItem(el))
        //         .length === 1
        //         ? []
        //         : JSON.parse(localStorage.getItem(el)),
        //   });
        // }
      });

      // sendData(
      //   "POST",
      //   "schedule/create",
      //   {
      //     email: history.location.state.email,
      //     schedule: finalArr,
      //   },
      //   setUpdate
      // );
      console.log(finalArr, "final");
    }
  }, [saved]);
  return (
    <section className="day_main_save">
      <div className="day_wrapper_save">
        {console.log(
          updated.length > 0 && updated,
          "updated"
        )}
        {console.log(
          history.location.state.email,
          "history"
        )}
        <DayFinal dayToCheck={"Monday"} toSave={saved} />
        <DayFinal dayToCheck={"Tuesday"} toSave={saved} />
        <DayFinal dayToCheck={"Wednesday"} toSave={saved} />
        <DayFinal dayToCheck={"Thursday"} toSave={saved} />
        <DayFinal dayToCheck={"Friday"} toSave={saved} />
        <DayFinal dayToCheck={"Saturday"} toSave={saved} />
      </div>
      <div className="day_submit_save">
        <p className="day_submit_btn" onClick={saveMyDates}>
          save all days
        </p>
        <NavLink
          to={{
            pathname: "/calendar-company",
            state: {email: history.location.state.email},
          }}>
          <p className="day_submit_btn">Calendar</p>
        </NavLink>
      </div>
    </section>
  );
};
