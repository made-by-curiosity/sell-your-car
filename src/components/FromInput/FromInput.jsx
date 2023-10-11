import {
  MileageInputLabel,
  MileageInputWrapper,
} from 'components/Filter/Filter.styled';
import { Input } from './FromInput.styled';
import { useRef } from 'react';

export const FromInput = ({ mileageFrom, setMileageFrom }) => {
  const inputRef = useRef();

  const handleLabelClick = () => {
    inputRef.current.focus();
  };

  const handleChange = e => {
    setMileageFrom(e.target.value);
  };

  return (
    <MileageInputWrapper>
      <MileageInputLabel onClick={handleLabelClick}>From</MileageInputLabel>
      <Input
        type="number"
        ref={inputRef}
        onChange={handleChange}
        value={mileageFrom}
      />
    </MileageInputWrapper>
  );
};
