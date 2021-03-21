import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import {
  fetchData,
  fetchError,
  appointmentweeks,
  fetchreset,
} from "./../../Redux/actions/appointmentDates";
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
    if (weeks.length === 0 || n > weeks.length) {
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
  // }, [n]);
  function clickUP() {
    setN((p) => p + 1);
  }
  return (
    <section className="user_main">
      {console.log(weeks)}
      <button onClick={clickUP}>NEXT</button>
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
