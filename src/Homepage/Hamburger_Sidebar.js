import React from "react";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const sidebar = makeStyles({
  section: {
    width: 200,
    background: "f8961e",
  },
  list: {
    background: "#5e6472",
  },
});
export const Sidebar = ({
  items = [
    "HOME",
    "GALLERY",
    "PRICES",
    "TEAM",
    "CONTACT",
    "ABOUT",
  ],
}) => {
  const classes = sidebar();
  return (
    <section className={classes.section}>
      {/* <MenuOutlinedIcon style={{fontSize: 50}} /> */}
      <List className={classes.list}>
        {items.map((item) => (
          <ListItem button>
            <Link to={`/${item.toLowerCase()}`}>
              {item}
            </Link>
          </ListItem>
        ))}
      </List>
    </section>
  );
};
