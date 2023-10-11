import {
  MileageInputLabel,
  MileageInputWrapper,
} from 'components/Filter/Filter.styled';
import { Input } from './ToInput.styled';
import { useRef } from 'react';
import { numbersCharCodes } from 'utils/constants';

export const ToInput = ({ mileageTo, setMileageTo }) => {
  const inputRef = useRef();

  const handleLabelClick = () => {
    inputRef.current.focus();
  };

  const handleChange = e => {
    const target = e.target;
    if (!target.value) {
      setMileageTo(target.value);
      return;
    }

    const valueLastIndex = target.value.length - 1;
    const lastCharacter = target.value[valueLastIndex];
    const isNumber = numbersCharCodes.includes(lastCharacter.charCodeAt());

    if (isNumber) {
      const numberValue = Number(target.value.replaceAll(',', ''));
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
      />
    </MileageInputWrapper>
  );
};
