import { useEffect, useRef, useState } from 'react';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { CarCard } from 'components/CarCard/CarCard';
import { CardsGrid } from 'components/CardsGrid/CardsGrid';
import { Container } from 'components/Container/Container';
import { MainButton } from 'components/MainButton/MainButton';
import { Section } from 'components/Section/Section';
import { CarInfoModal } from 'components/CarInfoModal/CarInfoModal';
import { getAllCarsPerPage } from 'services/sellCarsApi';
import { PAGE, PER_PAGE } from 'utils/constants';

const Catalog = () => {
  const [allCars, setAllCars] = useState([]);
  const [page, setPage] = useState(PAGE);
  const [isLoadMoreShown, setIsLoadMoreShown] = useState(true);
  const [isLoadingMoreCars, setIsLoadingMoreCars] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCar, setCurrentCar] = useState(null);
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
    if (allCars.length <= PER_PAGE) {
      return;
    }
    smoothScrollOnLoadMore();
  }, [allCars]);

  const handlePageChange = () => {
    setPage(page => page + 1);
  };

  const toggleModal = () => {
    setIsModalOpen(isOpen => !isOpen);
  };

  function smoothScrollOnLoadMore() {
    const { height: cardHeight } =
      carsCardRef.current.firstElementChild.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight,
      behavior: 'smooth',
    });
  }

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
