import React, { useContext } from "react";
import FavouriteContext from "../store/favourite-context.jsx";
import MeetupList from "../components/meetups/MeetupList.jsx";

function FavouristMeetUp(props) {
  const FavouriteCtx = useContext(FavouriteContext);
  const content =
    FavouriteCtx.totalFavourites > 0 ? (
      <MeetupList meetups={FavouriteCtx.favorites} />
    ) : (
      <section>
        <p>You don't have any favorites meetups yet. Let add your favorites</p>
      </section>
    );

  return <div>{content}</div>;
}

export default FavouristMeetUp;
