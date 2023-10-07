import { CarCard } from 'components/CarCard/CarCard';
import { CardsGrid } from 'components/CardsGrid/CardsGrid';
import { Container } from 'components/Container/Container';
import { MainButton } from 'components/MainButton/MainButton';
import { MainLinkButton } from 'components/MainLinkButton/MainLinkButton';
import { useEffect, useState } from 'react';
import { getAllCars } from 'services/sellCarsApi';

const Catalog = () => {
  const [allCars, setAllCars] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoadMoreDisabled, setIsLoadMoreDisabled] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const cars = await getAllCars(page);

        if (page === 1) {
          setAllCars(cars);
          return;
        }

        setAllCars(allCars => [...allCars, ...cars]);

        if (cars.length <= 7) {
          setIsLoadMoreDisabled(true);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page]);

  const handlePageChange = () => {
    setPage(page => page + 1);
  };

  return (
    <Container>
      <p>Catalog page</p>
      <MainButton
        text="Search"
        type="submit"
        disabled
        btnStyles={{ height: '48px', width: '200px' }}
      />
      <MainLinkButton
        text="Rental car"
        href="tel:+380730000000"
        linkStyles={{ width: '168px' }}
      />
      <CardsGrid>
        {allCars.map(car => (
          <li key={car.id}>
            <CarCard carInfo={car} />
          </li>
        ))}
      </CardsGrid>

      <button
        disabled={isLoadMoreDisabled}
        onClick={handlePageChange}
        style={{ margin: '20px', padding: '10px', border: '1px solid black' }}
      >
        Load more
      </button>
    </Container>
  );
};

export default Catalog;
