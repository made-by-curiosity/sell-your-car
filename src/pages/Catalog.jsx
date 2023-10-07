import { CarCard } from 'components/CarCard/CarCard';
import { CardsGrid } from 'components/CardsGrid/CardsGrid';
import { Container } from 'components/Container/Container';
import { MainButton } from 'components/MainButton/MainButton';
import { MainLinkButton } from 'components/MainLinkButton/MainLinkButton';
import { useEffect, useState } from 'react';
import { getAllCars } from 'services/sellCarsApi';

const Catalog = () => {
  const [allCars, setAllCars] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const cars = await getAllCars();

        setAllCars(cars);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Container>
      <p>Catalog page</p>
      <MainButton
        text="Search"
        type="submit"
        disabled
        btnStyles={{ height: '48px', width: '200px' }}
      />
      {/* <div style={{ height: '100px' }}> */}
      <MainLinkButton
        text="Rental car"
        href="tel:+380730000000"
        linkStyles={{ width: '168px' }}
      />
      {/* </div> */}
      <CardsGrid>
        {allCars.map(car => (
          <li key={car.id}>
            <CarCard carInfo={car} />
          </li>
        ))}
      </CardsGrid>
    </Container>
  );
};

export default Catalog;
