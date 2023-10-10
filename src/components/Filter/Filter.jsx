import { useEffect, useState } from 'react';

import { MainButton } from 'components/MainButton/MainButton';
import { CustomSelect } from 'components/CustomSelect/CustomSelect';

import { FilterContainer } from './Filter.styled';

import { getAllCars } from 'services/sellCarsApi';
import { carBrands } from 'utils/carBrands';
import { getPricesByStep } from 'utils/getPricesByStep';
import { DEFAULT_CAR_BRANDS_OPTION } from 'utils/constants';

export const Filter = () => {
  const [allPrices, setAllPrices] = useState([]);

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

  return (
    <FilterContainer>
      {/* <span>Car brand</span> */}
      <CustomSelect
        options={carBrands}
        name="car-brands"
        defaultText={DEFAULT_CAR_BRANDS_OPTION}
      />
      <CustomSelect options={allPrices} name="price" defaultText={''} />

      <MainButton
        text="Search"
        type="submit"
        disabled
        btnStyles={{ height: '48px', width: '136px' }}
      />
    </FilterContainer>
  );
};
