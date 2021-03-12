import React, {useEffect, Fragment} from "react";
import {connect} from "react-redux";
import {Card} from "./../../components/Card";
import {
  fetched_data_user,
  fetched_error_user,
  fetch_data,
} from "./../../Redux/actions/actions";
import img1 from "./../../assets/gallery/171088547-480x480.jpg";
import "./team.scss";
const Team = ({
  user,
  status,
  fetched_data_user,
  fetched_error_user,
  fetch_data,
}) => {
  useEffect(() => {
    if (user.length === 0) {
      fetch_data(
        fetched_data_user,
        fetched_error_user,
        "https://randomuser.me/api/?results=3",
        "results"
      );
    }
  }, []);
  return (
    <section className="team">
      <p className="team_title">Meet our Team</p>
      {user.map((el, i) => (
        <Card
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
