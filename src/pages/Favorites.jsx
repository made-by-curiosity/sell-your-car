import { Container } from 'components/Container/Container';
import { FavoriteCarBtn } from 'components/FavoriteCarBtn/FavoriteCarBtn';
import { FavoriteCarView } from 'components/FavoriteCarView/FavoriteCarView';
import { FavoritesSidebar } from 'components/FavoritesSidebar/FavoritesSidebar';
import { Section } from 'components/Section/Section';
import { SectionWrapper } from 'components/SectionWrapper/SectionWrapper';
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

    setActiveCar(filteredCars[0]);
  }, [filteredCars]);

  useEffect(() => {
    console.log(activeCar);
  }, [activeCar]);

  return (
    <Section>
      <Container>
        {!!favoriteCars.length && (
          <SectionWrapper>
            <FavoritesSidebar>
              <ul>
                {filteredCars.map(car => (
                  <li key={car.id}>
                    <FavoriteCarBtn
                      carInfo={car}
                      activeCar={activeCar}
                      setActiveCar={setActiveCar}
                    />
                  </li>
                ))}
              </ul>
            </FavoritesSidebar>
            {activeCar && (
              <FavoriteCarView
                carInfo={activeCar}
                toggleFavorite={toggleFavorite}
              />
            )}
          </SectionWrapper>
        )}
      </Container>
    </Section>
  );
};

export default Favorites;
