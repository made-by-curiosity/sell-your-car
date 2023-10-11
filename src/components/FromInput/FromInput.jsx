import {
  MileageInputLabel,
  MileageInputWrapper,
} from 'components/Filter/Filter.styled';
import { Input } from './FromInput.styled';
import { useRef } from 'react';
import { numbersCharCodes } from 'utils/constants';
import { normalizeMilage } from 'utils/normalizeMilage';

export const FromInput = ({ mileageFrom, setMileageFrom }) => {
  const inputRef = useRef();

  const handleLabelClick = () => {
    inputRef.current.focus();
  };

  const handleChange = e => {
    const value = e.target.value;
    if (!value) {
      setMileageFrom(value);
      return;
    }

    const valueLastIndex = value.length - 1;
    const lastCharacter = value[valueLastIndex];
    const isNumber = numbersCharCodes.includes(lastCharacter.charCodeAt());

    if (isNumber) {
      const numberValue = normalizeMilage(value);
      const transformedMileage = numberValue.toLocaleString('en-US');

      setMileageFrom(transformedMileage);
    }
  };
  return (
    <MileageInputWrapper>
      <MileageInputLabel onClick={handleLabelClick}>From</MileageInputLabel>
      <Input
        type="text"
        ref={inputRef}
        onChange={handleChange}
        value={mileageFrom}
        name="from"
      />
    </MileageInputWrapper>
  );
};
