import { useEffect, useState } from 'react';

import { MainButton } from 'components/MainButton/MainButton';
import { CustomSelect } from 'components/CustomSelect/CustomSelect';

import { FilterContainer, MileageWrapper } from './Filter.styled';

import { getAllCars } from 'services/sellCarsApi';
import { carBrands } from 'utils/carBrands';
import { getPricesByStep } from 'utils/getPricesByStep';
import { DEFAULT_CAR_BRANDS_OPTION } from 'utils/constants';
import { normalizeRentalPrice } from 'utils/normalizeRentalPrice';
import { SecondaryButton } from 'components/SecondaryButton/SecondaryButton';
import { FromInput } from 'components/FromInput/FromInput';
import { ToInput } from 'components/ToInput/ToInput';
import { normalizeMilage } from 'utils/normalizeMilage';

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
      <CustomSelect
        options={carBrands}
        name="car-brands"
        defaultText={DEFAULT_CAR_BRANDS_OPTION}
        activeOption={activeBrandFilter}
        setActiveOption={setActiveBrandFilter}
      />
      <CustomSelect
        options={allPrices}
        name="price"
        defaultText={''}
        activeOption={activePriceFilter}
        setActiveOption={setActivePriceFilter}
        width={125}
      />
      <MileageWrapper>
        <FromInput mileageFrom={mileageFrom} setMileageFrom={setMileageFrom} />
        <ToInput mileageTo={mileageTo} setMileageTo={setMileageTo} />
      </MileageWrapper>
      <MainButton
        text="Search"
        type="submit"
        disabled={!hasSearchFilters}
        btnStyles={{ height: '48px', width: '136px' }}
        onClick={handleSearchFilter}
      />
      <SecondaryButton text="Reset filters" onClick={resetFiltersSearch} />
    </FilterContainer>
  );
};
