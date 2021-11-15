import { createContext, useState } from "react";

const FavouriteContext = createContext({
  favorites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) => {},
});

export function FavouriteContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);
  function addFavouriteHandler(favouriteMeetup) {
    setUserFavourites((prevFavouriteMeetup) => {
      return prevFavouriteMeetup.concat(favouriteMeetup);
    });
  }

  function removeFavouriteHandler(meetupId) {
    setUserFavourites((prevFavouriteMeetup) => {
      return prevFavouriteMeetup.filter((meetup) => {
        return meetup.id !== meetupId;
      });
    });
  }

  function itemIsFavouriteHandler(meetupId) {
    return userFavourites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };

  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContext;
