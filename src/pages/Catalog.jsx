import { useEffect, useState } from 'react';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { CarCard } from 'components/CarCard/CarCard';
import { CardsGrid } from 'components/CardsGrid/CardsGrid';
import { Container } from 'components/Container/Container';
import { MainButton } from 'components/MainButton/MainButton';
import { Section } from 'components/Section/Section';
import { CarInfoModal } from 'components/CarInfoModal/CarInfoModal';
import { getAllCars } from 'services/sellCarsApi';
import { PAGE, PER_PAGE } from 'utils/constants';

const Catalog = () => {
  const [allCars, setAllCars] = useState([]);
  const [page, setPage] = useState(PAGE);
  const [isLoadMoreShown, setIsLoadMoreShown] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCar, setCurrentCar] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        if (page === 1) {
          setIsLoadMoreShown(false);
          const cars = await getAllCars(page);
          setIsLoadMoreShown(true);

          setAllCars(cars);
          return;
        }

        const cars = await getAllCars(page);

        setAllCars(allCars => [...allCars, ...cars]);

        if (cars.length < PER_PAGE) {
          setIsLoadMoreShown(false);
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

  const toggleModal = () => {
    setIsModalOpen(isOpen => !isOpen);
  };

  return (
    <>
      {isModalOpen && (
        <CarInfoModal toggleModal={toggleModal} carInfo={currentCar} />
      )}
      <Section>
        <Container>
          <MainButton
            text="Search"
            type="submit"
            disabled
            btnStyles={{ height: '48px', width: '200px' }}
          />

          <CardsGrid>
            {allCars.map(car => (
              <li key={car.id}>
                <CarCard
                  carInfo={car}
                  toggleModal={toggleModal}
                  setCurrentCar={setCurrentCar}
                />
              </li>
            ))}
          </CardsGrid>
          {isLoadMoreShown && (
            <LoadMoreBtn text="Load more" onClick={handlePageChange} />
          )}
        </Container>
      </Section>
    </>
  );
};

export default Catalog;
