import { useEffect, useState } from 'react';

import {
  ButtonsWrapper,
  FilterContainer,
  FilterItemWrapper,
  FilterLabel,
  MileageWrapper,
} from './Filter.styled';

import { MainButton } from 'components/MainButton/MainButton';
import { CustomSelect } from 'components/CustomSelect/CustomSelect';
import { SecondaryButton } from 'components/SecondaryButton/SecondaryButton';
import { FromInput } from 'components/FromInput/FromInput';
import { ToInput } from 'components/ToInput/ToInput';

import { getAllCars } from 'services/sellCarsApi';

import { getPricesByStep } from 'utils/getPricesByStep';
import { normalizeRentalPrice } from 'utils/normalizeRentalPrice';
import { normalizeMilage } from 'utils/normalizeMilage';
import { carBrands } from 'utils/carBrands';
import { DEFAULT_CAR_BRANDS_OPTION } from 'utils/constants';

export const Filter = ({ setFilteredCars }) => {
  const [allPrices, setAllPrices] = useState([]);
  const [activeBrandFilter, setActiveBrandFilter] = useState('');
  const [activePriceFilter, setActivePriceFilter] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const cars = await getAllCars();

        const prices = getPricesByStep(cars, 10);

        setAllPrices(prices);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleSearchFilter = async () => {
    const filterValues = {
      brandFilter: !!activeBrandFilter,
      priceFilter: !!activePriceFilter,
      mileageFromFilter: !!mileageFrom,
      mileageToFilter: !!mileageTo,
    };

    const filterKeys = Object.keys(filterValues);

    const selectedFilters = filterKeys.filter(key => filterValues[key]);

    const filtersConditions = {
      brandFilter: car =>
        car.make.toLowerCase() === activeBrandFilter.toLowerCase(),
      priceFilter: car =>
        normalizeRentalPrice(car.rentalPrice) <= activePriceFilter,
      mileageFromFilter: car => car.mileage >= normalizeMilage(mileageFrom),
      mileageToFilter: car => car.mileage <= normalizeMilage(mileageTo),
    };

    const cars = await getAllCars();

    const carsToShow = cars.filter(car => {
      return selectedFilters.every(filter => filtersConditions[filter](car));
    });

    setFilteredCars(carsToShow);
  };

  const resetFiltersSearch = () => {
    setActiveBrandFilter('');
    setActivePriceFilter('');
    setMileageFrom('');
    setMileageTo('');
    setFilteredCars(null);
  };

  const hasSearchFilters =
    activeBrandFilter || activePriceFilter || mileageFrom || mileageTo;

  return (
    <FilterContainer>
      <FilterItemWrapper>
        <FilterLabel>Car brand</FilterLabel>
        <CustomSelect
          options={carBrands}
          name="car-brands"
          defaultText={DEFAULT_CAR_BRANDS_OPTION}
          activeOption={activeBrandFilter}
          setActiveOption={setActiveBrandFilter}
        />
      </FilterItemWrapper>
      <FilterItemWrapper>
        <FilterLabel>Price/ 1 hour</FilterLabel>
        <CustomSelect
          options={allPrices}
          name="price"
          defaultText={''}
          activeOption={activePriceFilter}
          setActiveOption={setActivePriceFilter}
          width={125}
          contentStyles={{ paddingLeft: '43px' }}
          label="To"
          currency="$"
        />
      </FilterItemWrapper>
      <FilterItemWrapper>
        <FilterLabel>Сar mileage / km</FilterLabel>
        <MileageWrapper>
          <FromInput
            mileageFrom={mileageFrom}
            setMileageFrom={setMileageFrom}
          />
          <ToInput mileageTo={mileageTo} setMileageTo={setMileageTo} />
        </MileageWrapper>
      </FilterItemWrapper>
      <ButtonsWrapper>
        <MainButton
          text="Search"
          type="submit"
          disabled={!hasSearchFilters}
          btnStyles={{ height: '48px', width: '136px' }}
          onClick={handleSearchFilter}
        />
        <SecondaryButton text="Reset filters" onClick={resetFiltersSearch} />
      </ButtonsWrapper>
    </FilterContainer>
  );
};
