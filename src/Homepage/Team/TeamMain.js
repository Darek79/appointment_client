import React, {useEffect, useRef} from "react";
import {connect} from "react-redux";
import {Card} from "./../../components/Card";
import {
  fetched_data_user,
  fetched_error_user,
  fetch_data,
} from "./../../Redux/actions/actions";
import img1 from "./../../assets/gallery/171088547-480x480.jpg";
import {IsInViewportHook} from "./../../hooks/hooks";
import "./team.scss";
import {v4} from "uuid";
const Team = ({
  user,
  status,
  fetched_data_user,
  fetched_error_user,
  fetch_data,
}) => {
  const compRef = useRef(null);
  const visible = IsInViewportHook(1000, compRef);
  useEffect(() => {
    if (user.length === 0) {
      fetch_data(
        fetched_data_user,
        fetched_error_user,
        "https://randomuser.me/api/?results=3",
        "results"
      );
    }
  }, [
    fetched_data_user,
    fetched_error_user,
    fetch_data,
    user.length,
  ]);
  return (
    <section className="team" ref={compRef}>
      <p className="team_title">Meet our Team</p>
      {visible &&
        user.map((el, i) => (
          <Card
            key={v4()}
            wrapper={`card_wrapper align${i}`}
            cl_img="card_img"
            img={`${img1}`}
            cl_desc="card_desc"
            desc_txt={"lorem ipsum"}
            cl_desc_txt="card_txt"
          />
        ))}
      {console.log(user[0].picture.medium)}
    </section>
  );
};

const storage = ({user}) => ({
  user: user.data,
  status: user.status,
});

export default connect(storage, {
  fetched_data_user,
  fetched_error_user,
  fetch_data,
})(Team);
