import { MainButton } from 'components/MainButton/MainButton';
import { FilterContainer } from './Filter.styled';
import { CustomSelect } from 'components/CustomSelect/CustomSelect';
import { carBrands } from 'utils/carBrands';

export const Filter = () => {
  return (
    <FilterContainer>
      {/* <span>Car brand</span> */}
      <CustomSelect options={carBrands} name="car-brands" />

      <MainButton
        text="Search"
        type="submit"
        disabled
        btnStyles={{ height: '48px', width: '136px' }}
      />
    </FilterContainer>
  );
};
