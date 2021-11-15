import React from "react";
import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem.jsx";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup, index) => (
        <MeetupItem key={index} meetup={meetup} />
      ))}
    </ul>
  );
}

export default MeetupList;
