import React, { useContext } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card.jsx";
import FavouritesContext from "../../store//favourite-context";
function MeetupItem(props) {
  const favoritesCtx = useContext(FavouritesContext);
  const itemIsFavourite = favoritesCtx.itemIsFavourite(props.meetup.id);
  function toggleFavoriteStatusHandler() {
    console.log(itemIsFavourite);
    if (itemIsFavourite) {
      favoritesCtx.removeFavourite(props.meetup.id);
    } else {
      favoritesCtx.addFavourite(props.meetup);
    }
  }
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
          <button
            className={classes.button}
            onClick={toggleFavoriteStatusHandler}
          >
            {itemIsFavourite ? "removeFavourite" : "addFavourite"}
          </button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
