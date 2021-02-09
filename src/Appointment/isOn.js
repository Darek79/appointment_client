import React, {useState, useEffect} from "react";
import {sendData} from "./../utils/axios";
import {useHistory} from "react-router-dom";
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
    const finalArr = [];
    Object.keys(localStorage).forEach((el, i) => {
      if (el.length === 1) {
        console.log("item");
        finalArr.push({
          day: el,
          arr: JSON.parse(localStorage.getItem(el)),
        });
      }
    });

    console.log(finalArr);
  }, [saved]);
  return (
    <section className="day_main_save">
      <div className="day_wrapper_save">
        {console.log(updated)}
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
