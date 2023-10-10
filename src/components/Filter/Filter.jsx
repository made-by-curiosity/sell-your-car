import { MainButton } from 'components/MainButton/MainButton';
import { FilterContainer } from './Filter.styled';
import { CustomSelect } from 'components/CustomSelect/CustomSelect';

export const Filter = () => {
  return (
    <FilterContainer>
      {/* <span>Car brand</span> */}
      <CustomSelect />
      {/* <span>Price/ 1 hour</span>
      <select name="" id="">
        <option value="">Default</option>
      </select>
      <span>Сar mileage / km</span>
      <label>
        <span>From</span>
        <input type="text" />
      </label>
      <label>
        <span>To</span>
        <input type="text" />
      </label> */}
      <MainButton
        text="Search"
        type="submit"
        disabled
        btnStyles={{ height: '48px', width: '136px' }}
      />
    </FilterContainer>
  );
};
