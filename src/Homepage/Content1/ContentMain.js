import React, {Fragment} from "react";
import "./content1.scss";
import {AvatarCard} from "./AvatarCard";
import {TextCont} from "./TextCont";
import img1 from "./../../assets/content1/90513877.jpg";
import img2 from "./../../assets/content1/118307518.jpg";
import img3 from "./../../assets/content1/123382033.jpg";
const img_arr = [img1, img2, img3];
const txt = [
  "BEATIFUL STARTS HERE",
  "CHOOSE YOUR FAVORITE COLOR",
  "OUR COLORIST JACK",
];
const Content1 = () => {
  return (
    <section className="content1">
      <div className="content1_wall"></div>
      {img_arr.map((el, i) => (
        <AvatarCard
          key={el}
          cl_img="content_avt_img"
          cl_link="content_avt_link"
          cl_desc="content_desc"
          cl_desc_txt="content_desc_txt"
          desc_txt={txt[i]}
          path="/test"
          ind={i}
          img={el}
        />
      ))}
      <section className="content_btm_text">
        <h3 className="content_h">Welcome</h3>
        <TextCont
          clTextCon="clTextCon1 clText"
          clTextCon_header="clTextCon_header"
          clTextCon_content="clTextCon_content"
          title={`Voted New York's Best Hairdresser`}
          content={`Gentrify salvia Portland Neutra. Hashtag cred gluten-free farm-to-table Helvetica sartorial, Echo Park fingerstache cardigan 3 wolf moon blog tousled. Meh +1 90’s 3 wolf moon actually, sustainable kale chips asymmetrical dreamcatcher synth gentrify slow-carb scenester.`}
        />
        <TextCont
          clTextCon="clTextCon2 clText"
          clTextCon_header="clTextCon_header"
          clTextCon_content="clTextCon_content"
          title={`Check Out The Hottest Catwalk Trends`}
          content={`
Selfies cornhole pop-up, flexitarian hella vinyl cardigan keytar synth Pitchfork Shoreditch authentic Wes Anderson Truffaut keffiyeh. Before they sold out bitters forage Vice readymade twee. Helvetica meh chillwave, brunch jean shorts normcore tote bag retro chambray meggings photo booth.`}
        />
      </section>
    </section>
  );
};
export default Content1;
