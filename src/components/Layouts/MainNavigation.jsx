import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <h1>React MeetUp</h1>
      <ul>
        <li>
          <Link to="/">AllMeetUp</Link>
        </li>
        <li>
          <Link to="/FavouristMeetUp">FavouristMeetUp</Link>
        </li>
        <li>
          <Link to="/NewMeetUp">NewMeetUp</Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
