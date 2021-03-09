import React, {Fragment} from "react";
import {IconButton} from "../../components/IconButton";
import {Email} from "../../assets/Email";
import {Phone} from "../../assets/Phone";
export const ButtonContact = () => {
  return (
    <Fragment>
      <IconButton
        txt="mailto:test@gmail.com"
        txtIn="test@gmail.com"
        exBtn="title_icons"
        cn="title_icons"
        icon={
          <Email
            clName="title_email"
            fillMain="#f8f9fa"
          />
        }
      />
      <IconButton
        exBtn="title_icons"
        txt="tel:733398872"
        txtIn="733398872"
        cn="title_icons"
        icon={
          <Phone
            clName="title_phone"
            fillMain="#f8f9fa"
            stroke="#f8f9fa"
            tel="tel:733398872"
          />
        }
      />
    </Fragment>
  );
};
