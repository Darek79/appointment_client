import React, {
  useState,
  useEffect,
  Fragment,
} from "react";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import {v4} from "uuid";
import {useWindowsWidth} from "./../../helpers/helpers";
import moment from "moment";
import {
  fetchData,
  fetchError,
  appointmentweeks,
  fetchreset,
} from "./../../Redux/actions/appointmentDates";

import "./usermain.scss";

const UserMain = ({
  weeks,
  status,
  fetchData,
  fetchError,
  fetchreset,
  appointmentweeks,
}) => {
  const [n, setN] = useState(0);
  const {
    location: {state},
  } = useHistory();

  useEffect(() => {
    fetchreset();
  }, []);
  useEffect(() => {
    console.log("useEffect");
    if (n <= 3) {
      appointmentweeks(
        fetchData,
        fetchError,
        state.storeID,
        n
      );
    }
  }, [n]);
  // useEffect(() => {
  //   fetchreset();
  // }, []);
  function clickUP() {
    console.log("UP");
    setN((p) => p + 1);
  }
  return (
    <section className="user_main">
      {console.log(state, "weeks")}
      <button onClick={clickUP}>NEXT</button>
      <div className="week_list">
        {status &&
          weeks[n].map((el, i) => {
            return el.length === 0 ? (
              <div>
                {moment()
                  .day(i)
                  .utc(+1)
                  .format("DD MMM YYYY")}
                <div key={v4()}>empty</div>
              </div>
            ) : (
              <div>
                {moment()
                  .day(i)
                  .utc(+1)
                  .format("DD MMM YYYY")}
                <ul>
                  {el.map((item, ind) => {
                    return (
                      <li>
                        {moment(item.utc)
                          .utc()
                          .format("HH:mm")}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </div>
    </section>
  );
};

const storage = ({appointmentreducer}) => {
  console.log(appointmentreducer, "reducer");
  return {
    weeks: appointmentreducer.data,
    status: appointmentreducer.status,
  };
};

export default connect(storage, {
  fetchData,
  fetchError,
  fetchreset,
  appointmentweeks,
})(UserMain);
