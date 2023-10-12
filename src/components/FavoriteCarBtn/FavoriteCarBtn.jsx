import {
  ButtonWrapper,
  CarRadioLabel,
  ContentWrapper,
  OriginalHiddenRadio,
} from './FavoriteCarBtn.styled';

import { handlePhotoLoadError } from 'utils/handlePhotoLoadError';

import default_img from 'assets/img/no_image_available.jpeg';

export const FavoriteCarBtn = ({ carInfo, activeCar, setActiveCar }) => {
  const { year, make, model, img = default_img, id } = carInfo;

  const handleChange = () => {
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
        <ContentWrapper bgImg={img} onError={handlePhotoLoadError}>
          <span>{make}</span>
          <span>{model}</span>
          <span>{year}</span>
        </ContentWrapper>
      </CarRadioLabel>
    </ButtonWrapper>
  );
};
