import { Container } from 'components/Container/Container';
import { FavoriteCarBtn } from 'components/FavoriteCarBtn/FavoriteCarBtn';
import { FavoritesSidebar } from 'components/FavoritesSidebar/FavoritesSidebar';
import { Section } from 'components/Section/Section';
import { useFavorite } from 'hooks/favoriteContext';
import { useEffect, useState } from 'react';
import { getAllCars } from 'services/sellCarsApi';

const Favorites = () => {
  const [filteredCars, setFilteredCars] = useState([]);
  const { favoriteCars, toggleFavorite } = useFavorite();
  const [activeCar, setActiveCar] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const cars = await getAllCars();

        const filteredFavorites = cars.filter(car =>
          favoriteCars.includes(car.id)
        );

        setFilteredCars(filteredFavorites);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [favoriteCars]);

  useEffect(() => {
    if (!filteredCars.length) {
      return;
    }

    setActiveCar(filteredCars[0].id);
  }, [filteredCars]);

  useEffect(() => {
    console.log(activeCar);
  }, [activeCar]);

  return (
    <Section>
      <Container>
        <FavoritesSidebar>
          {!!favoriteCars.length && (
            <ul>
              {filteredCars.map(car => (
                <li key={car.id}>
                  <FavoriteCarBtn
                    carInfo={car}
                    toggleFavorite={toggleFavorite}
                    activeCar={activeCar}
                    setActiveCar={setActiveCar}
                  />
                </li>
              ))}
            </ul>
          )}
        </FavoritesSidebar>
      </Container>
    </Section>
  );
};

export default Favorites;
