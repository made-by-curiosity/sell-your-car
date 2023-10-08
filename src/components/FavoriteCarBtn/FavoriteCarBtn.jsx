import { handlePhotoLoadError } from 'utils/handlePhotoLoadError';
import {
  ButtonWrapper,
  CarRadioLabel,
  OriginalHiddenRadio,
  Photo,
  PhotoWrapper,
} from './FavoriteCarBtn.styled';

export const FavoriteCarBtn = ({ carInfo, activeCar, setActiveCar }) => {
  const { year, make, model, type, img, id } = carInfo;

  const handleChange = e => {
    setActiveCar(carInfo);
  };

  return (
    <ButtonWrapper>
      <CarRadioLabel>
        <OriginalHiddenRadio
          type="radio"
          name="car-item"
          value={id}
          checked={activeCar?.id === id}
          onChange={handleChange}
        />
        <div>
          <PhotoWrapper>
            <Photo
              src={img}
              alt={make + '' + type}
              onError={handlePhotoLoadError}
            />
          </PhotoWrapper>
          <span>{year}</span>
          <span>{make}</span>
          <span>{model}</span>
          <span>{type}</span>
          <span>{id}</span>
        </div>
      </CarRadioLabel>
    </ButtonWrapper>
  );
};
