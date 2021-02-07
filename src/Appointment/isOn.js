import React, {useState, useEffect} from "react";
import {
  removeDay,
  activateDay,
} from "./../utils/customHooks";
import './../styles/styles.scss'
import DayFinal from "./AppointmentOverview";

export default () => {
  const [saved, toSave] = useState(false);

  const saveMyDates = () => {
    toSave((p) => !p);
  };
  return (
    <section className="day_main_save">
      <div className="day_wrapper_save">
        <DayFinal dayToCheck={"Monday"} toSave={saved} />
        <DayFinal dayToCheck={"Tuesday"} toSave={saved} />
        <DayFinal dayToCheck={"Wednesday"} toSave={saved} />
        <DayFinal dayToCheck={"Thursday"} toSave={saved} />
        <DayFinal dayToCheck={"Friday"} toSave={saved} />
        <DayFinal dayToCheck={"Saturday"} toSave={saved} />
      </div>
      <div className="day_submit_save">
        <p onClick={saveMyDates}>save all days</p>
      </div>
    </section>
  );
};
