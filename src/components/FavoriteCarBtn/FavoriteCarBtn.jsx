import { handlePhotoLoadError } from 'utils/handlePhotoLoadError';
import {
  ButtonWrapper,
  CarRadioLabel,
  OriginalHiddenRadio,
  Photo,
  PhotoWrapper,
} from './FavoriteCarBtn.styled';

import default_img from 'assets/img/no_image_available.jpeg';

export const FavoriteCarBtn = ({
  carInfo,
  toggleFavorite,
  activeCar,
  setActiveCar,
}) => {
  const { year, make, model, type, img = default_img, id } = carInfo;

  const handleChange = e => {
    setActiveCar(Number(e.target.value));
  };

  return (
    <ButtonWrapper>
      <CarRadioLabel>
        <OriginalHiddenRadio
          type="radio"
          name="car-item"
          value={id}
          checked={activeCar === id}
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
