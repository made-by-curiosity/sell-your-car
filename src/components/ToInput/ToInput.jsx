import {
  MileageInputLabel,
  MileageInputWrapper,
} from 'components/Filter/Filter.styled';
import { Input } from './ToInput.styled';
import { useRef } from 'react';

export const ToInput = ({ mileageTo, setMileageTo }) => {
  const inputRef = useRef();

  const handleLabelClick = () => {
    inputRef.current.focus();
  };

  const handleChange = e => {
    setMileageTo(e.target.value);
  };

  return (
    <MileageInputWrapper>
      <MileageInputLabel onClick={handleLabelClick}>To</MileageInputLabel>
      <Input
        type="number"
        ref={inputRef}
        onChange={handleChange}
        value={mileageTo}
      />
    </MileageInputWrapper>
  );
};
