import { useRef } from 'react';

import {
  MileageInputLabel,
  MileageInputWrapper,
} from 'components/Filter/Filter.styled';
import { Input } from './ToInput.styled';

import { numbersCharCodes } from 'utils/constants';
import { normalizeMilage } from 'utils/normalizeMilage';

export const ToInput = ({ mileageTo, setMileageTo }) => {
  const inputRef = useRef();

  const handleLabelClick = () => {
    inputRef.current.focus();
  };

  const handleChange = e => {
    const value = e.target.value;
    if (!value) {
      setMileageTo(value);
      return;
    }

    const valueLastIndex = value.length - 1;
    const lastCharacter = value[valueLastIndex];
    const isNumber = numbersCharCodes.includes(lastCharacter.charCodeAt());

    if (isNumber) {
      const numberValue = normalizeMilage(value);
      const transformedMileage = numberValue.toLocaleString('en-US');

      setMileageTo(transformedMileage);
    }
  };

  return (
    <MileageInputWrapper>
      <MileageInputLabel onClick={handleLabelClick}>To</MileageInputLabel>
      <Input
        type="text"
        ref={inputRef}
        onChange={handleChange}
        value={mileageTo}
        name="to"
      />
    </MileageInputWrapper>
  );
};
