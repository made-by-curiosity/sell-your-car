import { createContext, useContext, useEffect, useState } from 'react';

import { LOCAL_STORAGE_KEY } from 'utils/constants';
import { load, save } from 'utils/localStorage';

export const FavoriteContext = createContext();

export const useFavorite = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favoriteCars, setFavoriteCars] = useState(
    () => load(LOCAL_STORAGE_KEY) || []
  );

  useEffect(() => {
    save(LOCAL_STORAGE_KEY, favoriteCars);
  }, [favoriteCars]);

  const toggleFavorite = id => {
    if (!id) {
      return;
    }

    let updatedFavorites = [...favoriteCars, id];

    if (favoriteCars.includes(id)) {
      updatedFavorites = favoriteCars.filter(carId => carId !== id);
    }

    setFavoriteCars(updatedFavorites);
  };

  return (
    <FavoriteContext.Provider value={{ favoriteCars, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
