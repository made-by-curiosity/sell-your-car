import { useEffect, useRef, useState } from 'react';

import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { CarCard } from 'components/CarCard/CarCard';
import { CardsGrid } from 'components/CardsGrid/CardsGrid';
import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import { CarInfoModal } from 'components/CarInfoModal/CarInfoModal';
import { Filter } from 'components/Filter/Filter';

import { getAllCarsPerPage } from 'services/sellCarsApi';
import { PAGE, PER_PAGE } from 'utils/constants';
import { smoothScrollOnLoadMore } from 'utils/scrollOnLoadMore';

const Catalog = () => {
  const [allCars, setAllCars] = useState([]);
  const [page, setPage] = useState(PAGE);
  const [isLoadMoreShown, setIsLoadMoreShown] = useState(true);
  const [isLoadingMoreCars, setIsLoadingMoreCars] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCar, setCurrentCar] = useState(null);
  const [activeBrandFilter, setActiveBrandFilter] = useState('');
  const [activePriceFilter, setActivePriceFilter] = useState('');
  const [filteredCars, setFilteredCars] = useState(null);

  const carsCardRef = useRef();

  useEffect(() => {
    if (filteredCars) {
      setIsLoadMoreShown(false);
      return;
    }

    (async () => {
      try {
        setIsLoadMoreShown(true);
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
  }, [filteredCars, page]);

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

  const resetFiltersSearch = () => {
    setPage(PAGE);
    setActiveBrandFilter('');
    setActivePriceFilter('');
    setFilteredCars(null);
  };

  const carsToShow = !!filteredCars ? filteredCars : allCars;

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
            setFilteredCars={setFilteredCars}
            setAllCars={setAllCars}
            resetFiltersSearch={resetFiltersSearch}
          />

          <CardsGrid>
            {carsToShow.map(car => (
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
