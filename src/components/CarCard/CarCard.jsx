import { filterFeatures } from 'utils/carFeaturesSorting';
import {
  AdditionalInfoContainer,
  AdditionalInfoWrapper,
  CarMainInfo,
  CarModel,
  CardContainer,
  MainInfoContainer,
  Photo,
  PhotoWrapper,
  RentalPrice,
} from './CarCard.styled';
import { MainButton } from 'components/MainButton/MainButton';
import { IconBtn } from 'components/IconBtn/IconBtn';

import icon from 'assets/icons/normal.svg';
import car from 'assets/img/car_image.jpg';
import { useFavorite } from 'hooks/favoriteContext';
import { useMemo } from 'react';

export const CarCard = ({ carInfo }) => {
  const {
    id = 9582,
    year = 2008,
    img = car,
    make = 'Buick',
    model = 'Enclave',
    rentalPrice = '$40',
    rentalCompany = 'Luxury Car Rentals',
    address = '123 Example Street, Kiev, Ukraine',
    type = 'SUV',
    accessories = [
      'Leather seats',
      'Panoramic sunroof',
      'Premium audio system',
    ],
    functionalities = [
      'Power liftgate',
      'Remote start',
      'Blind-spot monitoring',
    ],
    description = 'The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.',
  } = carInfo;

  const { favoriteCars, toggleFavorite } = useFavorite();

  // eslint-disable-next-line no-unused-vars
  const [street, city, country] = address.split(', ');

  const carFeature = useMemo(
    () => filterFeatures(...accessories, ...functionalities),
    [accessories, functionalities]
  );

  const handleClick = e => {
    toggleFavorite(id);
  };

  const handlePhotoLoadError = e => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = car;
  };

  return (
    <CardContainer>
      <PhotoWrapper>
        <Photo src={img} alt={description} onError={handlePhotoLoadError} />
      </PhotoWrapper>

      <IconBtn
        icon={`${icon}#heart`}
        onClick={handleClick}
        favorite={favoriteCars.includes(id)}
      />

      <MainInfoContainer>
        <CarMainInfo>
          {make + ' '}
          <CarModel>{model + ', '}</CarModel>
          {year}
        </CarMainInfo>
        <RentalPrice>{rentalPrice}</RentalPrice>
      </MainInfoContainer>
      <AdditionalInfoContainer>
        <AdditionalInfoWrapper>
          <span>{city}</span>
          <span>{country}</span>
          <span>{rentalCompany}</span>
        </AdditionalInfoWrapper>
        <AdditionalInfoWrapper>
          <span>{type}</span>
          <span>{model}</span>
          <span>{id}</span>
          <span>{carFeature}</span>
        </AdditionalInfoWrapper>
      </AdditionalInfoContainer>
      <MainButton text="Learn more" fullWidth />
    </CardContainer>
  );
};
