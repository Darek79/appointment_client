import React, {useState, useEffect} from "react";
import {sendData} from "./../utils/axios";
import {useHistory, NavLink} from "react-router-dom";
import DayFinal from "./AppointmentOverview";
import "./isOn.scss";
export default () => {
  const [saved, toSave] = useState(false);
  const [updated, setUpdate] = useState(false);
  const history = useHistory();

  const saveMyDates = () => {
    toSave((p) => !p);
  };
  useEffect(() => {
    if (saved) {
      const finalArr = [];
      Object.keys(localStorage).forEach((el, i) => {
        // console.log(el[el.length - 1]);
        if (el[el.length - 1] === "1") {
          // console.log("item");
          finalArr.push({
            day: el.substr(0, el.length - 1),
            arr: JSON.parse(localStorage.getItem(el)),
          });
        }
      });

      sendData(
        "PATCH",
        "schedule/create",
        {
          email: history.location.state.email,
          schedule: finalArr,
        },
        setUpdate
      );
      // console.log(finalArr, "final");
    }
  }, [saved]);
  return (
    <section className="day_main_save">
      <div className="day_wrapper_save">
        {console.log(updated, "updated")}
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
