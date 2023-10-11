import { useEffect, useRef, useState } from 'react';

import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { CarCard } from 'components/CarCard/CarCard';
import { CardsGrid } from 'components/CardsGrid/CardsGrid';
import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import { CarInfoModal } from 'components/CarInfoModal/CarInfoModal';
import { Filter } from 'components/Filter/Filter';

import { getAllCars, getAllCarsPerPage } from 'services/sellCarsApi';
import { DEFAULT_CAR_BRANDS_OPTION, PAGE, PER_PAGE } from 'utils/constants';
import { normalizeRentalPrice } from 'utils/normalizeRentalPrice';
import { smoothScrollOnLoadMore } from 'utils/scrollOnLoadMore';

const Catalog = () => {
  const [allCars, setAllCars] = useState([]);
  const [page, setPage] = useState(PAGE);
  const [isLoadMoreShown, setIsLoadMoreShown] = useState(true);
  const [isLoadingMoreCars, setIsLoadingMoreCars] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCar, setCurrentCar] = useState(null);
  const [activeBrandFilter, setActiveBrandFilter] = useState(
    DEFAULT_CAR_BRANDS_OPTION
  );
  const [activePriceFilter, setActivePriceFilter] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);

  const carsCardRef = useRef();

  useEffect(() => {
    (async () => {
      try {
        setIsLoadingMoreCars(true);
        const cars = await getAllCarsPerPage(page);
        setIsLoadingMoreCars(false);

        if (page === 1) {
          setAllCars(cars);
          return;
        }

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

  useEffect(() => {
    (async () => {
      const cars = await getAllCars();

      const carsToShow = cars.filter(
        car =>
          car.make.toLowerCase() === activeBrandFilter.toLowerCase() &&
          normalizeRentalPrice(car.rentalPrice) <= activePriceFilter
      );
      setFilteredCars(carsToShow);
    })();
  }, [activeBrandFilter, activePriceFilter, allCars]);

  useEffect(() => {
    console.log(filteredCars);
  }, [filteredCars]);

  useEffect(() => {
    if (allCars.length <= PER_PAGE) {
      return;
    }
    smoothScrollOnLoadMore(carsCardRef.current);
  }, [allCars]);

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
          <Filter
            activeBrandFilter={activeBrandFilter}
            setActiveBrandFilter={setActiveBrandFilter}
            activePriceFilter={activePriceFilter}
            setActivePriceFilter={setActivePriceFilter}
          />

          <CardsGrid>
            {allCars.map(car => (
              <li key={car.id}>
                <CarCard
                  carInfo={car}
                  toggleModal={toggleModal}
                  setCurrentCar={setCurrentCar}
                  carsCardRef={carsCardRef}
                />
              </li>
            ))}
          </CardsGrid>
          {isLoadMoreShown && (
            <LoadMoreBtn
              text="Load more"
              onClick={handlePageChange}
              isLoadingMoreCars={isLoadingMoreCars}
            />
          )}
        </Container>
      </Section>
    </>
  );
};

export default Catalog;
