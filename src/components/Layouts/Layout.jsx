import React from "react";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <>
      <MainNavigation />
      <div className={classes.main}>{props.children}</div>
    </>
  );
}

export default Layout;
