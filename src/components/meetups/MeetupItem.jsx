import React from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card.jsx";
function MeetupItem(props) {
  return (
    <Card>
      <li className={classes.item}>
        <div>
          <img
            className={classes.image}
            src={props.meetup.image}
            alt={props.meetup.title}
          />
        </div>
        <div className={classes.content}>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
          <p>{props.meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button className={classes.button}> To favourite</button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
